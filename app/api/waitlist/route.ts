import { NextResponse } from "next/server";
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY as string
)

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }

    const {data , error} = await supabase.from("waitlist").insert([{email}])
    console.log(data)
    console.log(error)
    
    if(!error){
        return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: false });
    
  } catch (err: any) {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}