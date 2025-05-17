// import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
 

// export const GET = handleAuth();


import { getAurinkoAuthUrl } from '@/lib/aurinko';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const url = await getAurinkoAuthUrl('Google');
    return NextResponse.json({ url });
  } catch (error) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
}
