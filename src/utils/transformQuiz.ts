export interface Option {
  id: number;
  name: string;
  correct: boolean;
}

export interface OriginalQuestion {
  id: number;
  question: string;
  options: Option[];
}

export interface Question {
  id: number;
  content: string;
  options: string[];
  correct: number;
}

export const transformQuestion = (input: OriginalQuestion): Question => {
  // Mapping correct option index
  const correctIndex = input.options.findIndex((option) => option.correct);

  // Mapping options to an array of strings
  const options = input.options.map((option) => option.name);

  // Creating the transformed object
  const transformedObject: Question = {
    id: input.id,
    content: input.question,
    options: options,
    correct: correctIndex, // Adding 1 to convert from 0-based to 1-based index
  };

  return transformedObject;
};
