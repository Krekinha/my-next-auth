export const USER_TOKEN = 'user-token'

const JWT_SECRET: string | undefined = process.env.JWT_SECRET!
const NEXTAUTH_SECRET: string | undefined = process.env.NEXTAUTH_SECRET!
const BASE_URL: string | undefined = process.env.BASE_URL!

export function getJwtSecretKey(): string {
  if (!JWT_SECRET || JWT_SECRET.length === 0) {
    throw new Error('The environment variable JWT_SECRET_KEY is not set.')
  }

  return JWT_SECRET
}

export function getNextAuthSecretKey(): string {
  if (!NEXTAUTH_SECRET || NEXTAUTH_SECRET.length === 0) {
    throw new Error('The environment variable NEXTAUTH_SECRET is not set.')
  }

  return NEXTAUTH_SECRET
}

export function getBaseUrlKey(): string {
  if (!BASE_URL || BASE_URL.length === 0) {
    throw new Error('The environment variable BASE_URL is not set.')
  }

  return BASE_URL
}