import { auth } from "@clerk/nextjs/server";
import AddTransactionButton from "../_components/add-transaction-button";
import { DataTable } from "../_components/ui/data-table";
import { db } from "../_lib/prisma";
import { transactionColumns } from "./_columns";
import { redirect } from "next/navigation";
import { ScrollArea } from "../_components/ui/scroll-area";

const Page = async () => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }

  const transactions = await db.transaction.findMany({
    where: {
      userId,
    },
  });

  return (
    <div className="space-y-6 overflow-hidden p-6">
      {/* TÍTULO E BOTÃO */}
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>
        <AddTransactionButton />
      </div>
      <ScrollArea>
        <DataTable columns={transactionColumns} data={transactions} />
      </ScrollArea>
    </div>
  );
};

export default Page;
