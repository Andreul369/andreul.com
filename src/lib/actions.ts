'use server';

import Handlebars from 'handlebars';
import nodemailer from 'nodemailer';

import { contactTemplate } from '@/templates/contact';

interface Data {
  name: string;
  email: string;
  subject: string;
  message: string;
  token: string;
}

export async function sendContactForm(data: Data) {
  const human = await validateHuman(data.token);
  if (!human) {
    return { error: "It's a bot! ❤️ ❌ 🤖" };
  }

  const transporter = nodemailer.createTransport({
    port: 465,
    secure: true,
    host: process.env.CONTACT_FORM_HOST,
    auth: {
      user: process.env.CONTACT_FORM_SEND_EMAIL,
      pass: process.env.CONTACT_FORM_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  try {
    const body = await compileWelcomeTemplate(
      data.name,
      data.subject,
      data.email,
      data.message,
    );

    await transporter.sendMail({
      from: `Website Contact Form ${process.env.CONTACT_FORM_SEND_EMAIL}`,
      replyTo: data.email,
      to: process.env.CONTACT_FORM_RECEIVE_EMAIL,
      subject: `A contact form from - ${data.name}`,
      html: body,
    });

    return { success: true };
  } catch (err: any) {
    console.error(err);
    return { error: err?.response };
  }
}

async function validateHuman(token: string) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
    {
      method: 'POST',
    },
  );
  const data = await response.json();
  return data.success;
}

export async function compileWelcomeTemplate(
  name: string,
  subject: string,
  email: string,
  message: string,
) {
  const template = Handlebars.compile(contactTemplate);
  const htmlBody = template({
    name,
    subject,
    email,
    message,
  });
  return htmlBody;
}
