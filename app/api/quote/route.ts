// app/api/quote/route.ts
import { NextResponse } from 'next/server';
import { db } from '../../../lib/firebase';
// if you're inside app/api/contact/route.ts

import { collection, addDoc } from 'firebase/firestore';

export async function POST(request: Request) {
  try {
    const { name, email, phone, message, serviceType } = await request.json();

    const docRef = await addDoc(collection(db, 'quotes'), {
      name,
      email,
      phone,
      message,
      serviceType,
      createdAt: new Date(),
    });

    return NextResponse.json({ id: docRef.id }, { status: 200 });
  } catch (error) {
    console.error("Error saving quote request:", error);
    return NextResponse.json({ error: 'Failed to save quote request' }, { status: 500 });
  }
}
