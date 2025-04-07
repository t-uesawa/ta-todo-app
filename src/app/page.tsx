import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
// import { redirect } from "next/navigation";

export default async function Home() {
  const { userId } = await auth();
  if (!userId) {
    return (
      <div>
        <h1>ログインしてね</h1>
        <a href="/sign-in">サインイン</a>
      </div>
    );
  }

  return (
    <div>
      <UserButton />
    </div>
  )
  // redirect('/list');
}