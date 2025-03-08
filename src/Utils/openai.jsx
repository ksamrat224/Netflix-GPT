import OpenAI from "openai";
import { OPENAI_KEY } from "./constants";

const client = new OpenAI({
  apiKey: OPENAI_KEY, // Use the constant directly if it holds the key
  dangerouslyAllowBrowser: true,
});

export default client;
