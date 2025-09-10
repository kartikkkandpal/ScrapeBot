# AI-Powered WebScrapping Chatbot (Node.js Version)  

⚡ **Note:** The original design used the OpenAI ChatGPT API, which is a paid service. To make this project fully accessible and free to use, we have integrated **Google’s Gemini API** — a powerful generative AI that works similarly to ChatGPT, providing accurate and contextual responses based on website content.  

This project demonstrates how to build a **console-based AI chatbot** that can interact with any website, extract key information, and answer user queries intelligently.  

## 🌟 Features

- **Dynamic Website Support**  
  Enter any website URL at runtime, and the chatbot will fetch, parse, and understand its content.  

- **Advanced Web Scraping**  
  - Extracts `<title>`, `<meta>` tags, headings (`<h1-h3>`), paragraphs (`<p>`), list items (`<li>`).  
  - Captures `<a>` links with text and URLs, `<img alt>` descriptions, and `<footer>` content for complete context.  

- **AI-Powered Q&A**  
  Ask any question about the website, and the chatbot will answer intelligently using only the extracted data.  

- **Website Summarization**  
  Type `summarize` to get a **concise 5-bullet-point summary** of the entire site — perfect for quickly understanding large websites.  

- **Resilient and User-Friendly**  
  - Graceful handling of API errors with retries.  
  - Local fallback summaries if the AI service is temporarily unavailable.  
  - Console-based interface for quick testing — no frontend required.  

- **Customizable & Extensible**  
  Easily upgrade to include keyword extraction, multi-site comparison, or even chat history for multi-turn conversations.  

## 🚀 Steps Followed

1. **Environment Setup**  
   - Installed Node.js dependencies: `axios`, `cheerio`, `dotenv`, `readline-sync`, `@google/generative-ai`.  
   - Configured `.env` file to securely store the Gemini API key.  

2. **Website Data Extraction**  
   - Fetched HTML using `axios`.  
   - Parsed website content using `cheerio` to extract meaningful information.  

3. **Data Processing**  
   - Cleaned and structured scraped content.  
   - Limited text length to avoid API token overflow.  

4. **Chatbot Implementation**  
   - Integrated **Google Gemini API** for AI-generated responses.  
   - Combined website data with user questions for contextual answers.  
   - Implemented a console-based conversation loop using `readline-sync`.  

5. **Console Demonstration**  
   - Users can ask questions about the scraped website.  
   - Commands supported:
     - `summarize` → Generates a 5-point summary of the website.  
     - `exit` → Ends the session.  

## 💻 Run Instructions

1. Clone the repository and navigate into the project folder.  
2. Install dependencies:  
   npm install
3. Create a .env file with your Gemini API key:
   GEMINI_API_KEY=your_google_gemini_api_key
4. Start the chatbot:
   node index.js
5. Enter website URL and start chatting! (Only Websites that allow Scrapping other wise we have to use puppeteer or Crawlee Something.)

## 📝 Notes

1. Designed for educational and demonstration purposes.
2. Works best with websites that allow scraping; some sites may have protections that require more advanced techniques like headless browsers.
3. Google Gemini API free tier is used, making this project fully accessible without paid subscriptions.

## Work Flow Diagram 

User enters URL
      │
      ▼
  Axios fetches HTML
      │
      ▼
Cheerio parses content
      │
      ▼
 Google Gemini AI
      │
      ▼
Bot answers or summarizes