import LinkAccountButton from "@/components/link-account-button";
import { Button } from "@/components/ui/button";
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";


export default async function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-center">Bem-vindo ao Zemail</h1>
      <div className="flex gap-4 mt-6">
        <LinkAccountButton/>
      </div>
    </div>
  );
}