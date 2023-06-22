# ai-chatbot

This nextjs typescript web application integrates with GPT OpenAI API.
It enables a user to enter chat messages and get prompt feedback.
The user queries would be forwarded to GPT OpenAI API for processing and the feedback would be posted back on the web interface.

## Run this program
We assume that you have installed `npm` and `yarn`.

Please find below steps;

1.
Go to folder pages, open "index.tsx" and search for this line of code "const apiAccessKey = 'Bearer OPENAI_API_KEY'". 
Replace OPENAI_API_KEY with your key to proceed with testing.

2.
Run the development server

cd ai-chatbot

npm run dev

3.
On your browser, load the url http://localhost:3000/

NB
The chat responses are visible on the frontend but to better view results, please check on your terminal for logs.
Due to time constraints, the frontend was not fully completed although the backend is fully functional.

