'use server';

import nodemailer from 'nodemailer';
import { IContactForm, ISendEmailResult } from '@/types/types';

export async function sendContactForm(data: IContactForm): Promise<ISendEmailResult> {
  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailAppPassword) {
    return {
      success: false,
      error: 'Server configuration error',
      details: 'GMAIL_USER or GMAIL_APP_PASSWORD not set'
    };
  }

  if (!data.name || !data.email || !data.message) {
    return { success: false, error: 'All fields are required' };
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: gmailUser,
      pass: gmailAppPassword,
    },
  });

  try {
    // 1. Письмо Владельцу
    const mailToOwner = transporter.sendMail({
      from: `"Portfolio" <${gmailUser}>`,
      to: 'katcion.play@gmail.com', 
      replyTo: data.email,
      subject: `Portfolio: New message from ${data.name}`,
      html: `
        <div style="font-family: monospace; max-width: 600px;">
          <h2 style="color: #a855f7;">New Contact Form Submission</h2>
          <p><strong>Имя:</strong> ${data.name}</p>
          <p><strong>Телефон:</strong> ${data.phone}</p>
          <p><strong>Почта:</strong> ${data.email}</p>
          <h3 style="color: #a855f7;">Сообщение:</h3>
          <p>${data.message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
    });

    // 2. Письмо ПОЛЬЗОВАТЕЛЮ (Копия / Автоответ)
    const mailToUser = transporter.sendMail({
      from: `"Michael Kacion" <${gmailUser}>`,
      to: data.email,
      subject: `Копия вашего сообщения / Copy of your message`,
      html: `
        <div style="font-family: monospace; max-width: 600px; background-color: #111; padding: 20px; border-radius: 10px; color: #fff;">
          <h2 style="color: #f97316;">Привет, ${data.name}! 🦊</h2>
          <p style="color: #ccc; font-size: 16px;">Спасибо за ваше сообщение! Я получил его и отвечу в течение 24 часов.</p>
          
          <div style="background-color: #222; padding: 15px; border-left: 4px solid #e11d48; border-radius: 5px; margin-top: 20px;">
            <p style="color: #999; font-size: 12px; margin-bottom: 5px;">Вы писали:</p>
            <p style="color: #eee; line-height: 1.6; margin: 0;">${data.message.replace(/\n/g, '<br>')}</p>
          </div>

          <hr style="border: none; border-top: 1px solid #333; margin-top: 30px; margin-bottom: 20px;">
          <p style="color: #666; font-size: 12px;">С уважением,<br>Михаил Кацион<br>Fullstack Разработчик</p>
        </div>
      `,
    });

    await Promise.all([mailToOwner, mailToUser]);

    return { success: true };
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return {
      success: false,
      error: 'Failed to send message',
      details: errorMessage
    };
  }
}
