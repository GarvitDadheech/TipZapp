"use client"
import { useSession, signIn } from "next-auth/react";
import { useEffect, useState } from "react";

const ClaimPage: React.FC = () => {
  const { data: session, status } = useSession();
  const [youtubeId, setYoutubeId] = useState<string | null>(null);

  useEffect(() => {
    if (status === "authenticated" && session?.user) {
      // Simulate fetching YouTube ID (replace this with your API logic)
      if (session.user.email) {
        fetchYouTubeId(session.user.email).then((id) => setYoutubeId(id));
      }
    }
  }, [status, session]);

  const fetchYouTubeId = async (email: string) => {
    // Example: Fetch YouTube ID from your backend using the user's email
    const response = await fetch(`/api/get-youtube-id?email=${email}`);
    const data = await response.json();
    return data.youtubeId;
  };

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold mb-4">Please Log In</h1>
        <button
          onClick={() => signIn()}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Login with NextAuth
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Claim Your Funds</h1>
      {youtubeId ? (
        <div>
          <p className="mb-4">YouTube ID: {youtubeId}</p>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
            Claim My Funds
          </button>
        </div>
      ) : (
        <p>Loading YouTube ID...</p>
      )}
    </div>
  );
};

export default ClaimPage;
