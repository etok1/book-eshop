import { NextApiRequest, NextApiResponse } from "next";

function validate(email, password) {
  const isValidEmail = email.includes("@");
  const isValidPassword = password.length >= 6;
  return { isValidEmail, isValidPassword };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.status !== "POST") {
    res.status(405).send({ error: true, message: "Only POST" });
  }

  const { email, password } = req.body;

  const validatedInfo = validate(email, password);

  if (validatedInfo.error) {
    res
      .status(400)
      .send({ error: true, message: "Email or password are incorrect" });
  } else {
    res.status(200).send({ success: true, token: "testToken" });
  }
}
