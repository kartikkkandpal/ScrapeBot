import dotenv from "dotenv";
import axios from "axios";
import * as cheerio from "cheerio";
import readlineSync from "readline-sync";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Load environment variables
dotenv.config();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Function to scrape website
async function scrapeWebsite(url) {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    let content = "";

    // Extract site <title>
    const siteTitle = $("title").text().trim();
    if (siteTitle) content += `Site Title: ${siteTitle}\n`;

    // Extract meta site_name (Open Graph)
    const metaSiteName = $('meta[property="og:site_name"]').attr("content");
    if (metaSiteName) content += `Site Name: ${metaSiteName}\n`;

    // Extract meta description
    const metaDescription = $('meta[name="description"]').attr("content");
    if (metaDescription) content += `Description: ${metaDescription}\n`;

    // Extract headings and paragraphs
    $("h1, h2, h3, p, li").each((i, el) => {
      const text = $(el).text().trim();
      if (text) content += text + "\n";
    });

    // Extract links (<a>)
    $("a").each((i, el) => {
      const linkText = $(el).text().trim();
      const href = $(el).attr("href");
      if (href && href !== "#" && linkText) {
        content += `Link: ${linkText} (${href})\n`;
      }
    });

    // Extract image alt attributes
    $("img").each((i, el) => {
      const altText = $(el).attr("alt");
      if (altText) content += `Image description: ${altText}\n`;
    });

    // Extract footer text
    $("footer").each((i, el) => {
      const footerText = $(el).text().trim();
      if (footerText) content += `Footer: ${footerText}\n`;
    });

    return content.slice(0, 6000); // Limit size for Gemini
  } catch (err) {
    console.error("Error scraping website:", err.message);
    return "";
  }
}

// Function to chat with Gemini (Q&A)
async function chatWithGemini(userInput, websiteData) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `You are a helpful chatbot that answers questions about websites.

When asked about the site name, use the "Site Title", "Site Name", or the most repeated brand/keyword in the website data. 
Always infer from the provided data.

Website data:
${websiteData}

User question: ${userInput}`;

    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (err) {
    console.error("Error calling Gemini API:", err.message);
    return "⚠️ Sorry, I couldn’t process that.";
  }
}

// Function to summarize website
async function summarizeWebsite(websiteData) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Summarize the following website content in 5 clear bullet points:

${websiteData}`;

    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (err) {
    console.error("Error summarizing website:", err.message);
    return "⚠️ Sorry, I couldn’t generate a summary.";
  }
}

// Main function
async function main() {
  const url = readlineSync.question("Enter website URL: ");
  console.log(`\nScraping data from: ${url} ...\n`);

  const websiteData = await scrapeWebsite(url);

  if (!websiteData) {
    console.log("Failed to extract website content. Exiting...");
    return;
  }

  console.log("✅ Website data extracted. Start chatting!");
  console.log("💡 Type 'summarize' to get a summary, or 'exit' to quit.\n");

  while (true) {
    const userInput = readlineSync.question("You: ");
    if (userInput.toLowerCase() === "exit") break;

    if (userInput.toLowerCase() === "summarize") {
      const summary = await summarizeWebsite(websiteData);
      console.log(`\n📌 Website Summary:\n${summary}\n`);
      continue;
    }

    const botReply = await chatWithGemini(userInput, websiteData);
    console.log(`Bot: ${botReply}\n`);
  }
}

main();