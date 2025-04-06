// import { UserButton } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = await auth();

  console.log(userId);

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
      <h1>ようこそ！</h1>
      <UserButton />
    </div>
  );
}