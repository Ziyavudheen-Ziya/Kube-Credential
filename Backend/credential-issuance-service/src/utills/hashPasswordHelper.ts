import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

export async function hashPassword(plain: string): Promise<string> {
  const hashed = await bcrypt.hash(plain, SALT_ROUNDS);
  return hashed;
}

export async function verifyPassword(
  plain: string,
  hased: string
): Promise<Boolean> {
  return await bcrypt.compare(plain, hased);
}
