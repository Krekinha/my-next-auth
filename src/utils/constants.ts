export function baseUrl() {
  if (process.env.NODE_ENV === "production") return "https://aya-ia.vercel.app";
  else return "http://localhost:3000";
}
