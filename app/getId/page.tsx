"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { fetchYouTubeChannelId } from "../lib/fetchYouTubeChannelId";

export default function YouTubeChannel() {
    const { data: session } = useSession();
    const [channelId, setChannelId] = useState<string | null>(null);

    useEffect(() => {
        const fetchChannelId = async () => {
            if (session?.accessToken) {
                const id = await fetchYouTubeChannelId(session.accessToken as string);
                setChannelId(id);
            }
        };

        fetchChannelId();
    }, [session]);

    if (!session) {
        return <p>You need to be logged in to see your YouTube Channel ID.</p>;
    }

    return (
        <div>
            <h1>Your YouTube Channel ID</h1>
            {channelId ? <p>{channelId}</p> : <p>Loading...</p>}
        </div>
    );
}
