import { Client } from '@notionhq/client';
import { NextResponse } from 'next/server';

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const databaseId = process.env.NOTION_DATABASE_ID!;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create entry in Notion
    const response = await notion.pages.create({
      parent: {
        database_id: databaseId,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        Email: {
          email: email,
        },
        Phone: {
          phone_number: phone,
        },
        Company: {
          rich_text: [
            {
              text: {
                content: company || 'N/A',
              },
            },
          ],
        },
        Service: {
          select: {
            name: service,
          },
        },
        Message: {
          rich_text: [
            {
              text: {
                content: message,
              },
            },
          ],
        },
        'Submitted At': {
          date: {
            start: new Date().toISOString(),
          },
        },
        Status: {
          select: {
            name: 'New',
          },
        },
      },
    });

    return NextResponse.json(
      { success: true, id: response.id },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Notion API Error:', error);
    return NextResponse.json(
      { error: 'Failed to submit form', details: error.message },
      { status: 500 }
    );
  }
}