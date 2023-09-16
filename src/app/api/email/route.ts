import Email from '../../../emails/index';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY_02);

export async function POST(request: Request) {
  const { email, name, message } = await request.json();
  
  try {
    const data = await resend.emails.send({
      from: '北山 文哉 <info@fumiya-portfolio.net>',
      to: email,
      bcc: process.env.EMAIL_02,
      subject: 'お問い合わせ内容の確認',
      react: Email({ email, name, message }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
