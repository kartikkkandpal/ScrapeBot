# 🤖 AI-Powered Web Scraping Chatbot

This project demonstrates how to build a **console-based AI chatbot** that can interact with any website, extract key information, and answer user queries intelligently.

## 📋 Table of Contents

- [📺 Demo Video](#demo-video)
- [🌟 Features](#-features)
- [🚀 Steps Followed](#-steps-followed)
- [💻 Run Instructions](#-run-instructions)
- [📝 Important Notes](#-important-notes)
- [🛠️ Technologies Used](#-technologies-used)
- [👤 Author](#-author)

## 📺 Demo Video

**Watch Demo:** - [Demo Video](https://drive.google.com/file/d/1YKxyP4BzLFgV4MCmsDRZebVcffKyF-iy/view?usp=drive_link) 

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

1. Clone the repository and navigate into the project folder:
   ```bash
   git clone https://github.com/kartikkkandpal/ScrapeBot.git
   cd ScrapeBot
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Get your Google Gemini API key:
   - Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create a new API key
   - Copy the generated key

4. Create a `.env` file with your Gemini API key:
   ```bash
   GEMINI_API_KEY="your_google_gemini_api_key"
   ```
5. Start the chatbot:
   ```bash
   node index.js
   ```
6. Enter website URL and start chatting! (Only websites that allow scraping, otherwise we have to use Puppeteer or Crawlee.)

## 📝 Important Notes

- **Educational Purpose**: Designed for educational and demonstration purposes
- **Website Compatibility**: Works best with websites that allow scraping; some sites may have protections that require more advanced techniques like headless browsers
- **Free API**: Google Gemini API free tier is used, making this project fully accessible without paid subscriptions
- **Rate Limits**: Be mindful of API rate limits when testing extensively

## 🛠️ Technologies Used

- **Node.js** – JavaScript runtime environment for backend logic  
- **Axios** – For fetching website HTML data  
- **Cheerio** – For parsing and scraping structured HTML content  
- **Google Gemini API** – For AI-powered responses and summarization 

## 👤 Author

- [Kartik Kandpal](https://github.com/kartikkkandpal)
