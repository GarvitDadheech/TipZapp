import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();

  const fetchChannelId = async () => {
    const response = await fetch(`/api/getChannelId?accessToken=${session?.accessToken}`);
    const data = await response.json();
    console.log("Channel ID:", data.channelId);
  };

  return (
    <div>
      {session ? (
        <>
          <p>Welcome, {session?.user?.name}!</p>
          <button onClick={fetchChannelId}>Get YouTube Channel ID</button>
        </>
      ) : (
        <p>Please log in to see your channel ID.</p>
      )}
    </div>
  );
}
