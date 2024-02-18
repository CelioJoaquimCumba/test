/* eslint-disable no-useless-catch */
import { axiosInstance } from "./axiosInstance"; // Assuming api.ts is in the same directory

export const login = async (
  email: string,
  password: string
): Promise<{ token: string; refreshToken: string; id: number }> => {
  const response = await axiosInstance.post("auth/sign-in", {
    email,
    password,
  });
  // Assuming the server returns a token in the response
  console.log(response.data);
  const { token, refreshToken }: { token: string; refreshToken: string } =
    response.data.jwtAuthenticationResponse;
  const id: number = response.data.id;
  return { id, token, refreshToken };
};
export const register = async (
  emailValue: string,
  passwordValue: string,
  firstNameValue: string,
  lastNameValue: string
): Promise<{
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}> => {
  try {
    const response = await axiosInstance.post("auth/sign-up", {
      email: emailValue,
      password: passwordValue,
      firstName: firstNameValue,
      lastName: lastNameValue,
    });
    const {
      id,
      firstName,
      lastName,
      email,
    }: { id: number; firstName: string; lastName: string; email: string } =
      response.data;
    return { id, firstName, lastName, email };
  } catch (e) {
    throw e; // Re-throw the error so that the caller can handle it
  }
};

export const validateToken = async (token: string): Promise<boolean> => {
  try {
    const response = await axiosInstance.post("auth/token-state", { token });
    const isValid: boolean = response.data;
    return isValid;
  } catch (e) {
    console.log((e as Error).message);
    throw e;
  }
};
