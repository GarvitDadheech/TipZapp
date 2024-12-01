import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.query;

  // Replace with your logic to fetch the YouTube ID
  const youtubeId = await fetchYouTubeIdFromDatabase(email as string);

  if (youtubeId) {
    res.status(200).json({ youtubeId });
  } else {
    res.status(404).json({ error: "YouTube ID not found" });
  }
}

async function fetchYouTubeIdFromDatabase(email: string): Promise<string | null> {
  // Simulated database fetch
  if (email === "user@example.com") {
    return "UC1234567890"; // Example YouTube ID
  }
  return null;
}
