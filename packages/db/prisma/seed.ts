import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const alice = await prisma.user.upsert({
    where: { email: "shivamkg29@gmail.com" },
    update: {},
    create: {
      email: "shivamkg29@gmail.com",
      password: "alice",
      name: "alice",
      OnRampTransaction: {
        create: {
          startTime: new Date(),
          status: "COMPLETED",
          amount: 20000,
          token: "122",
          provider: "HDFC Bank",
        },
      },
      Balance: {
        create: {
          amount: 20000,
          locked: 0,
        },
      },
    },
  });
  const bob = await prisma.user.upsert({
    where: { email: "skumarshivam50@gmail.com" },
    update: {},
    create: {
      email: "skumarshivam50@gmail.com",
      password: "bob",
      name: "Shivam ",
      OnRampTransaction: {
        create: {
          startTime: new Date(),
          status: "COMPLETED",
          amount: 2000,
          token: "123",
          provider: "HDFC Bank",
        },
      },
      Balance: {
        create: {
          amount: 2000,
          locked: 0,
        },
      },
    },
  });
  console.log({ alice, bob });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
