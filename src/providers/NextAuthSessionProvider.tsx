"use client";
import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

interface NextAuthSessionProviderProps {
  children: ReactNode;
  session: any;
}

export default function NextAuthSessionProvider({
  children, session
}: NextAuthSessionProviderProps) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
