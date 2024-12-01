"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Claim() {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <div>
      {!session ? (
        <>
          <h1>Claim Your Rewards</h1>
          <button onClick={() => signIn('google')}>Sign in with Google</button>
        </>
      ) : (
        <p>Welcome back, {session?.user?.name}!</p>
      )}
    </div>
  );
}
