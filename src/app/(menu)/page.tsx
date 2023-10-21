import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { auth } from "../api/auth/[...nextauth]/auth";
import Home from "./Home";

async function getData() {
  const api = "http://127.0.0.1:3000/api-py/flask";

  const res = await fetch(api, { method: "GET", cache: "no-store" });
  if (!res.ok) {
    return "API FLASK: OFF";
  }
  const data = await res.json();
  return data;
}

export default async function Page() {
  //const dataPy = await getData();
  // const dataNext = await fetch("http://127.0.0.1:3000/api").then((res) => res.json());

  const session = await auth();

  if (session) {
    return <Home />;
  }

  if (!session) {
    redirect("/login");
  }
}
