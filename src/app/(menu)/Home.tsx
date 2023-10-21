"use client";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react"

export default function Home() {

  const { data: session} = useSession()
  console.log(session);

  async function logout() {
    await signOut({
      redirect: true,
    });
  }

  return (
    <div className="flex min-h-screen flex-col items-center p-24 bg-slate-900 text-slate-500">
      <h1 className="text-3xl font-bold">Bem vindo {session?.user?.nome}!</h1>
      <div className="mt-8">{"PY: OFF"}</div>
      <div>--------------</div>
      <div>{"NEXT: OFF"}</div>
      <div className="mt-8">
      <button
      onClick={logout}
      className="p-2 w-40 border border-gray-300 rounded-md"
    >
      Sair
    </button>
      </div>
    </div>
  );
}
