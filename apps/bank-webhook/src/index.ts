import express from "express";
import db from "@repo/db/client";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors);
app.use(express.json());

const tokenQueue = [];

const generateRandomString = (length: number): string => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const randomString = Array.from({ length }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
  return randomString;
};

app.post("/bank-webhook/intiateTxn", async (req, res) => {
  const { amount, user_identifier } = req.body;
  // create a unique token, then put the token in a queue, if no request to approve that token in 5 minutes, then cancel the token
  const token = generateRandomString(20);
    tokenQueue.push(token);
    setTimeout(() => {
        axios.post("http://localhost:3000/bank-server/")
    }, 300000);

  res.status(200).json({
    message: "Transaction initiated",
    token
  })
});

app.post("/bank-webhook/approveTxn", async (req, res) => {
  // TODO: Add zod validation
  // check if this request actully came from HDFC bank, use webhook secret here
  console.log(req.body);
  const paymentInformation = {
    token: req.body.token,
    userId: req.body.user_identifier,
    amount: req.body.amount,
  };

  // transactions
  try {
    await db.$transaction([
      // increment balance
      db.balance.update({
        where: {
          userId: Number(paymentInformation.userId),
        },
        data: {
          amount: {
            increment: Number(paymentInformation.amount),
          },
        },
      }),
      // update txn status
      db.onRampTransaction.update({
        where: {
          token: paymentInformation.token,
          status: "PROCESSING",
        },
        data: {
          status: "COMPLETED",
        },
      }),
    ]);
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: "Payment failed",
    });
  }

  //   rsponse to HDFC bank server that payment is successful
  res.status(200).json({
    message: "Payment successful",
  });
});

function checkTimeout(time: Date) {
  const currentTime = new Date();
  const txnTime = new Date(time);
  const diff = currentTime.getTime() - txnTime.getTime();
  if (diff > 300000) {
    return true;
  }
  return false;
}

// function to decline the transaction if the payment is not approved in 5 minutes

async function declinePendingTxn(){
  console.log("starting to fetch");
  setInterval(async ()=>{
    const pendingTxns = await db.onRampTransaction.findMany({
      where: {
        status: "PROCESSING"
      }
    });
    pendingTxns.forEach(async (txn) => {
      checkTimeout(txn.startTime) &&
      await db.onRampTransaction.update({
        where: {
          id: txn.id,
          status: "PROCESSING" 
        },
        data :{
          status: "FAILED"
        }
      });
    })
  }, 60000);
}

declinePendingTxn();

app.listen(3003, () => {
  console.log("Server is running on http://localhost:3003");
});
