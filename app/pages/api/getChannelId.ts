import { google } from "googleapis";
import { NextApiRequest, NextApiResponse } from "next";

interface Query {
    accessToken?: string;
}

interface YouTubeResponse {
    data: {
        items: Array<{
            id?: string;
        }>;
    };
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { accessToken } = req.query as Query;

    if (!accessToken) {
        return res.status(400).json({ error: "Access token is required" });
    }

    const youtube = google.youtube({
        version: "v3",
        auth: accessToken,
    });

    try {
        const response = await youtube.channels.list({
            part: ["id"],
            mine: true,
        });

        const channelId = response.data.items && response.data.items.length > 0 ? response.data.items[0].id : null;
        res.status(200).json({ channelId });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}
