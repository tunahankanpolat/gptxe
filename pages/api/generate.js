import { Configuration, OpenAIApi } from "openai";
import promt from "./promt";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
