import type { NextApiRequest, NextApiResponse } from "next";
import noblox from "noblox.js";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const user = await noblox.setCookie(process.env.ROBLOX_COOKIE || "");

      return res.status(200).json({
        message: "roblox-presence-api",
        user: {
          id: user.UserID,
          username: user.UserName,
        },
        code: res.statusCode,
      });
    } catch {
      return res
        .status(500)
        .json({ message: "Internal Server Error", code: res.statusCode });
    }
  }

  return res
    .status(405)
    .json({ message: "Method Not Allowed", code: res.statusCode });
}
