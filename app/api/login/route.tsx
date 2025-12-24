import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const res = await fetch(`${process.env.API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const text = await res.text(); // 👈 ป้องกัน backend ไม่คืน json

    let data;
    try {
      data = JSON.parse(text);
    } catch {
      return NextResponse.json(
        { message: "Invalid response from backend", raw: text },
        { status: 500 }
      );
    }

    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    console.error("LOGIN API ERROR:", error);

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
