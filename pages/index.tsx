import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import fetch, { Headers } from 'node-fetch'

// Response params
type Message = {
  role: string
  content: string
}

type Choice = {
  index: number
  message: Message
  finish_reason: string
}

type Usage = {
  prompt_tokens: number
  completion_tokens: number
  total_tokens: number
}

type CompletionResponse = {
  id: string
  object: string
  created: number
  choices: Choice[]
  usage: Usage
}

// We define the model to use
const model: string = 'gpt-3.5-turbo'
// Lets create an array to hold messages
const messages: Message[] = [];
// Lets create default system message
const systemMessage: Message =  { role: 'system', content: 'You are a helpful assistant.' }

export const getServerSideProps: GetServerSideProps<{
  repo: CompletionResponse
}> = async (context) => {

let userInput: string = ''
  
  // Lets get user input from the url
  const { query } = context
  const { message } = query
 
  // For "message" array we get first element
  userInput = Array.isArray(message) ? message[0] : message

  // If "messages" array has no element, we assume the user started a new chat
  if (messages.length == 0){
    userInput = 'Hello!'
  }
  
  // Lets create userMessage based on new input
  const userMessage: Message =  { role: 'user', content: userInput }

  // If "messages" array has no element, we assume the user started a new chat
  // In that case, we also send the system message
  if (messages.length == 0){
    messages.push(systemMessage)
    messages.push(userMessage)
  }
  else {
    messages.push(userMessage)
  }

  // Lets log the messages
  console.log(messages)

}

export default function Home() {
  return (
    <form>
      <p><label htmlFor="message">Message</label></p>
      <p><input type="text" id="message" name="message" required /></p>
      <p><label htmlFor="response">Response</label></p>
      <p><input type="text" id="response" name="response" readOnly={true} /></p>
      <p><button type="submit">click to submit chat</button></p>
  </form>
  )
}

