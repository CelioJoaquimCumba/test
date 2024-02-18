import {
  transformQuestion,
  type OriginalQuestion,
  type Question,
} from "@/utils/transformQuiz";
import { axiosInstance } from "./axiosInstance"; // Assuming api.ts is in the same directory
import { getUser } from "@/utils/userManager";

const user = getUser();
const token = user?.token;
export const getQuestions = async (): Promise<Question[]> => {
  try {
    const { data }: { data: Array<OriginalQuestion> } = await axiosInstance.get(
      "user/questions/get-twenty-five",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data.map((question) => transformQuestion(question));
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const sendScore = async (score: number): Promise<void> => {
  if (!user) throw Error("user id not found");
  const id = user.id;
  try {
    await axiosInstance.post(
      "user/score/create",
      { score, userId: id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (e) {
    console.log(e);
    throw e;
  }
};
