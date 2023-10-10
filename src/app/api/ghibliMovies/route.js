import { connectToDB } from "@/utils/db";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  const db = await connectToDB();
  const collection = db.collection('ghibliMovies');

  const movies = await collection.find({}).toArray();

  res.status(200).json(movies);
}