require("dotenv").config();

import { OpenAIClient, AzureKeyCredential } from "@azure/openai";

const client = new OpenAIClient(
  "https://" + process.env.RESOURCE_NAME + "openai.azure.com/", 
  new AzureKeyCredential(process.env.AZURE_API_KEY)
);

const inputQuestion = document.getElementById("inputQuestion");
const result = document.getElementById("result");

inputQuestion.addEventListener("keypress", async (e) => {
  if (inputQuestion.value && e.key === "Enter") await sendPrompt();
});

const sendPrompt = async () => {
  
  try {
    var sQuestion = inputQuestion.value;
    const response = await client.getCompletions(process.env.DEPLOYMENT_ID, [sQuestion]);
    console.log(response)
  } catch (error) {
    console.log(error)
  }
};