import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
// const { Configuration, OpenAI } = require('openai');
import {default as OpenAi } from 'openai'
import { OPEN_AI_KEY } from '../../config.js';
const {Configuration, OpenAIApi} = OpenAi

const configuration = new Configuration({ apiKey: OPEN_AI_KEY })
const openai = new OpenAIApi(configuration);

const MAX_HISTORY_LENGTH = 20

const chatHistory = []

function constructChatHistory (history = chatHistory) {
  return [
    {"role": "system", "content": "You are a psychologist. Answer in two sentences. In first sentence briefly summarize what patient said. In second sentence ask the patient a question. Keep the questions vague."},
    ...history.slice(0-MAX_HISTORY_LENGTH)
  ]
}

async function * promptGenerator () {
  while (true) {
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: constructChatHistory()
    });

    const message = response.data.choices[0].message
    chatHistory.push(message)

    yield message.content
  }
}

async function talkToShrinkBot () {
  const lineReader = readline.createInterface({ input, output });
  const prompts = promptGenerator();

  let prompt = 'Hello, I am your shrink bot. What is on your mind?';

  while (true) {
    const input = await lineReader.question(prompt + '\n> ');
    chatHistory.push({role: 'user', content: input})
    prompt = (await prompts.next()).value;
  }
}

await talkToShrinkBot()
