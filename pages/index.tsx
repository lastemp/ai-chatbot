import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import fetch, { Headers } from 'node-fetch'

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

