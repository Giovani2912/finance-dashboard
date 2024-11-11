import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Page = async () => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }
  return <h1>Subscription</h1>;
};

export default Page;
