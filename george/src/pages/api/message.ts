// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connectDb } from "@/utils/Db";
import type { NextApiRequest, NextApiResponse } from "next";
import { transporter } from "@/utils/mailer";
import { schema } from "@/utils/validations";

type Data = {
  errMessage?: string;
  message?: string;
  error?: any;
};

const mailHandler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    await connectDb();

    const { fullName, tel, email, message } = req.body;

    // Validate input data
    const { error } = schema.validate({ fullName, tel, email, message });
    if (error) {
      return res
        .status(400)
        .json({ errMessage: "Validation error", error: error.details });
    }

    //send mail to user
    await transporter.sendMail({
      from: "inuenike@gmail.com",
      to: email,
      subject: `New message from Inu Enike`,
      text: `We have recievd your email, we'll get back to you in a short time. Tadaaa`,
    });

    //send mail to myself
    await transporter.sendMail({
      from: email,
      to: "inuenike@gmail.com",
      subject: `New message from ${fullName}`,
      text: `${message}`,
    });

    // Send success response
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export default mailHandler;
