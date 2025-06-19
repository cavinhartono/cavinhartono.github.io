import { prisma } from "../../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { title, content } = req.body;
    try {
      const post = await prisma.post.create({ data: { title, content } });
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ error: "Failed to created" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
