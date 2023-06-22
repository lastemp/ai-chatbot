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

