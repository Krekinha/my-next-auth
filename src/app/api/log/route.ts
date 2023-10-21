import logger from "../../../../lib/logger";

export async function POST(req: Request, res: Request) {
  const data = await req.json();
  logger.error(data);
  return new Response("Hello Loggin", { status: 200 });
}
