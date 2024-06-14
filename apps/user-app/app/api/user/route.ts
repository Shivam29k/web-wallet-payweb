import client from "@repo/db/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { NEXT_AUTH_OPTIONS } from "../../lib/auth";

// export const GET = async (req: NextRequest) => {
//   const body = await req.json();

//   const user = await client.user.findFirst({
//     where: {
//       email: body.email,
//     },
//   });

//   if (user) {
//     if (user.password === body.password) {
//       return NextResponse.json({
//         user,
//         message: "User logged in successfully!",
//       });
//     } else {
//       return NextResponse.json({
//         message: "Invalid password!",
//       });
//     }
//   }
// };

// export const POST = async (req: NextRequest) => {
//   // extract the body
//   const body = await req.json();
//   try {
//     const user = await client.user.create({
//       data: {
//         email: body.email,
//         name: body.name,
//         password: body.password,
//       },
//     });

//     return NextResponse.json({
//       user,
//       message: "User created successfully!",
//     });
//   } catch (error: any) {
//     console.log(error);
//     if (error.code === "P2002" && error.meta?.target?.includes("email")) {
//         return NextResponse.json({
//         message: "Email already exists!"
//         })
//     } else {
//         return NextResponse.json({
//         message: "An error occurred while creating the user."
//         })
//     }
//   }
// };



export const GET = async (req: NextRequest) =>{
  const session = await getServerSession(NEXT_AUTH_OPTIONS);
  if(session.user){
    return NextResponse.json({
      user: session.user
    })
  }
  return NextResponse.json({
    message: "You are not logged in!"
  }, {
    status: 403
  })
}