import type { NextApiRequest, NextApiResponse } from "next";
import noblox from "noblox.js";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id?.toString();

  if (!id) {
    return res
      .status(400)
      .json({ message: "Bad Request", code: res.statusCode });
  }

  if (req.method === "GET") {
    try {
      const presences = (await noblox.getPresences([+id])).userPresences[0];

      return res.status(200).json({
        message: "Success",
        data: {
          ...presences,
          userPresenceType:
            presences.userPresenceType === 0
              ? "offline"
              : presences.userPresenceType === 1
              ? "online"
              : presences.userPresenceType === 2
              ? "inGame"
              : presences.userPresenceType === 3
              ? "studio"
              : "unknown",
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
