import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs/app-beta";
import Link from "next/link";


export default function Home() {
  return (
    <main>
      <h1>Next.js 13 with Clerk</h1>
      <UserButton/>
    </main>
  )
}
