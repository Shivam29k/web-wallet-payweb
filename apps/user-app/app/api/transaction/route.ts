import { NextRequest } from "next/server";

// POST /api/transaction
// {
// 	"user_identifier": "1",
// 	"amount": "59900", // Rs 599
// 	"webhookUrl": "http://localhost:3003/hdfcWebhook"
// }



// PayTM should redirect the user to 
// https://bank-api-frontend.com/pay?token={token_from_step_1}