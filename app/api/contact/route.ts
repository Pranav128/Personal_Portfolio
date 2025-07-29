import { NextRequest, NextResponse } from 'next/server';
import { storage } from '@/lib/storage';
import { insertContactSchema } from '@/lib/schema';
import { z } from 'zod';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const contactData = insertContactSchema.parse(body);
    const contact = await storage.createContact(contactData);

    // Create transporter (Use your email provider SMTP)
    const transporter = nodemailer.createTransport({
      service: "gmail", // or use custom SMTP: host, port, auth
      auth: {
        user: "pranavpisal2528@gmail.com", // your email
        pass: "guyenbcflncqxdpf"  // app password (not your real password)
      }
    });

    // Send email notification
    const mailOptions = {
      from: "pranavpisal2528@gmail.com",
      to: "pranavpisal2528@gmail.com", // owner email
      subject: `New Contact Form Submission from ${contact.name}`,
      text: `Name: ${contact.name}\nEmail: ${contact.email}\nSubject: ${contact.subject}\nMessage: ${contact.message}`,
    };
    await transporter.sendMail(mailOptions);

    //Send the User a Thank You Email
    const userMailOptions = {
      from: "pranavpisal2528@gmail.com",
      to: contact.email, // user's email
      subject: "Thank You for Contacting Us",
      text: `Dear ${contact.name},\n\nThank you for reaching out! We have received your message and will get back to you shortly.\n\nBest regards,\nPranav Pisal`,
    };
    await transporter.sendMail(userMailOptions);
    
    return NextResponse.json({ success: true, contact });
  } catch (error) {
    console.error("Error in /api/contact:", error);
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid contact data", details: error.errors },
        { status: 400 }
      );
    } else {
      return NextResponse.json(
        { error: "Failed to submit contact form", details: (error as Error).message },
        { status: 500 }
      );
    }
  }
}

export async function GET() {
  try {
    const contacts = await storage.getContacts();
    return NextResponse.json(contacts);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch contacts" },
      { status: 500 }
    );
  }
}