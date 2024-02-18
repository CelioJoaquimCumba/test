import type { User } from "@/models/UserModel";

const USER = "USER";

export const getUser = (): User | null => {
  const user = localStorage.getItem(USER);
  if (user) {
    const userConverted: User = JSON.parse(user);
    return userConverted;
  }
  return null;
};

export const setUser = (user: User) => {
  localStorage.setItem(USER, JSON.stringify(user));
};

export const removeUser = () => {
  localStorage.removeItem(USER);
};
