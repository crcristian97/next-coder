import { NextResponse } from 'next/server';

export async function POST(request) {
    const formData = await request.json();
    console.log(formData);
    const name = formData.name;
    const message = formData.message;
    return NextResponse.json({ message: `Hello, world! ${name} ${message}` });
}



