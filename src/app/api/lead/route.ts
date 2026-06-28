import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = await request.json();
  // Replace this stub with Resend, Formspree, CRM, or an internal webhook.
  console.info("New Flam Pwodiksyon lead", payload);
  return NextResponse.json({ ok: true });
}
