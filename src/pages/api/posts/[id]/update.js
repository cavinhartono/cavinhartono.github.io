import { prisma } from "../../../../lib/prisma";
export default async function handler(req, res) {
  const { id } = req.query;
  const { title, content } = req.body;
  if (req.method === "PUT") {
    try {
      const post = await prisma.post.update({
        where: { id: Number(id) },
        data: { title, content },
      });
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ error: "Failed to update post" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
