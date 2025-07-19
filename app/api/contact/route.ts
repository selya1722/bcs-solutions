// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { db } from '../../../lib/firebase';

import { collection, addDoc } from 'firebase/firestore';

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    const docRef = await addDoc(collection(db, 'contacts'), {
      name,
      email,
      phone,
      message,
      createdAt: new Date(),
    });

    return NextResponse.json({ id: docRef.id }, { status: 200 });
  } catch (error) {
    console.error("Error saving contact form:", error);
    return NextResponse.json({ error: 'Failed to save contact form' }, { status: 500 });
  }
}
