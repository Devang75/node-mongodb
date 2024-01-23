import bcrypt from "bcrypt";

export const HashPassword = async (password) => {
  const hashpasswordgenerated = await bcrypt.hash(password, 10);
  if (hashpasswordgenerated) {
    return hashpasswordgenerated;
  }
};
