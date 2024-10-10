import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { subject, page = 1 } = req.query;

  if (!subject) {
    return res.status(400).json({
      error: true,
      message: "No subject in query params",
    });
  }

  const apiKey = process.env.GOOGLE_BOOKS_API_KEY;
  const gbooksReqParams = new URLSearchParams();

  gbooksReqParams.set("q", `Subject:${subject}`);
  gbooksReqParams.set("startIndex", `${(parseInt(page as string) - 1) * 10}`);
  gbooksReqParams.set("maxResults", "6");
  gbooksReqParams.set("key", apiKey);

  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?${gbooksReqParams.toString()}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch books: ${response.statusText}`);
    }

    const booksData = await response.json();
    res.status(200).json({ data: booksData });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: error.message,
    });
  }
}
