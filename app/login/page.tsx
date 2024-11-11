import { DollarSignIcon, LogInIcon } from "lucide-react";
// import Image from "next/image";
import { Button } from "../_components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Image from "next/image";

const Page = async () => {
  const { userId } = await auth();

  if (userId) {
    redirect("/");
  }
  return (
    <div className="grid h-full grid-cols-1 md:grid-cols-2">
      <div className="mx-auto flex h-full max-w-[650px] flex-col justify-center p-8">
        <DollarSignIcon className="mb-8" />
        <h1 className="mb-3 text-4xl font-bold">Bem vindo</h1>
        <p className="mb-4 text-muted-foreground">
          Essa é a plataforma para você organizar todos os seus gastos e tomar
          decisões díficeis. Será que vale a pena gastar meu suado dinheirinho
          com isso? Será que vou ter algum retorno?
        </p>
        <SignInButton>
          <Button variant="outline">
            <LogInIcon className="mr-2" />
            Fazer login
          </Button>
        </SignInButton>
      </div>
      <div className="relative h-full w-full">
        <Image
          src="/dash.webp"
          alt="Faça o login"
          fill
          className="object-cover"
        />
        <DollarSignIcon />
      </div>
    </div>
  );
};

export default Page;
