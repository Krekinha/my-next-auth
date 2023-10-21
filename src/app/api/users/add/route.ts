import { prisma } from "@/utils/prisma";
import bcrypt from "bcrypt";

export async function POST(req: Request, res: Response) {
  const data = await req.json();

  // Verifica se o email já existe
  const existUser = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (existUser) {
    return new Response("Email já cadastrado");
  } else {
    // Caso o email não exista, criptografa a senha
    data.senha = bcrypt.hashSync(data.senha, 8);

    // e cria um novo usuário
    const user = await prisma.user.create({
      data,
    });

    // Usando a desestruturação para criar um novo objeto "userSemSenha" excluindo a propriedade senha
    const { senha, ...userSemSenha } = user;

    return new Response(
      JSON.stringify(userSemSenha));
  }
}
