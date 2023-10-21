import { prisma } from "@/utils/prisma";

export async function POST(req: Request, res: Response) {
  const data = await req.json();

  var date = new Date();
  date.setUTCHours(date.getUTCHours() - 3);
  data.date = date;

  const log = await prisma.log.create({
    data,
  });

  return new Response(JSON.stringify(log));
}
