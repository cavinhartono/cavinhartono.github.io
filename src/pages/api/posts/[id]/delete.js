import { prisma } from "../../../../lib/prisma";
export default async function handler(req, res) {
  const { id } = req.query;
  if (req.method === "DELETE") {
    try {
      await prisma.post.delete({ where: { id: Number(id) } });
      res.status(200).json({ message: "Post deleted" });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete post" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
