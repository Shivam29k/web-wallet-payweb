"use client";

import React, { useEffect, useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { getAllTxns } from "../lib/actions/getAllTxns";
import { ChartData } from "chart.js";
import { Card } from "@repo/ui/card";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Txn {
  balance: number;
  amount: number;
  startTime: Date;
}

export function BalanceGraph() {
  const [txns, setTxns] = useState<Txn[]>([] as Txn[]);

  useEffect(() => {
    getAllTxns().then((res) => {
      setTxns([...res].reverse());
    });
  }, []);

  const options = (title: string, xTitle: string, yTitle: string) => {
    return {
      plugins: {
        title: {
          display: true,
          text: title,
        },
      },
      responsive: true,
      interaction: {
        mode: "index" as const,
        intersect: false,
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: xTitle,
          },
        }, 
        y: {
          display: true,
          title: {
            display: true,
            text: yTitle,
          },
          suggestedMin: 0,
        },
        
      },
      maintainAspectRatio: false,
    };
  };

  const balanceData: ChartData<"line"> = {
    labels: txns.map((txn) => new Date(txn.startTime).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit' })), // Assuming startTime needs to be formatted
    datasets: [
      {
        label: "Balance in Rs.",
        data: txns.map((txn) => txn.balance / 100),
        fill: true,
        backgroundColor: "#8969CE",
        borderColor: "#896fff",
      },
    ],
  };
  const txnsData: ChartData<"bar"> = {
    labels: txns.map((txn) =>new Date(txn.startTime).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit' })), // Assuming startTime needs to be formatted
    datasets: [
      {
        label: "Transaction in Rs.",
        data: txns.map((txn) => txn.amount/100),
        backgroundColor: txns.map((txn) => txn.amount >= 0 ? "rgb(12, 186, 51)" : "rgb(255, 51, 51)"), // Green for positive, red for negative
        borderColor: "rgba(255, 99, 132, 0.2)",
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="">
        <Card title="Balance History" className="h-96 py-8">
            <Line data={balanceData} options={options("Balance history","Date", "Amount")} 
            />
        </Card>
      </div>
      <div className="">
        <Card title="Transaction History" className="h-96 py-8">
            <Bar data={txnsData} options={options("Transactions","Date", "Amount")} 
            />
        </Card>
      </div>
    </div>
  );
}
