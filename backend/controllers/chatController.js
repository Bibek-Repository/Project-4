const { GoogleGenAI } = require("@google/genai");

const Service = require("../models/Service");
const Blog = require("../models/Blog");
const Event = require("../models/Event");
const SiteSettings = require("../models/SiteSettings");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const chatWithAI = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        success: false,
        message: "Message is required",
      });
    }

    const services = await Service.find().lean();

    const blogs = await Blog.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .lean();

    const events = await Event.find({
      status: { $ne: "Completed" },
    })
      .sort({ eventDate: 1 })
      .limit(5)
      .lean();

    const settings = await SiteSettings.findOne().lean();

    const companyContext = `
Company Name:
${settings?.companyName || "AI Solutions"}

Tagline:
${settings?.tagline || ""}

About:
${settings?.about || ""}

Email:
${settings?.email || ""}

Phone:
${settings?.phone || ""}

WhatsApp:
${settings?.whatsapp || ""}

Address:
${settings?.address || ""}

Office Hours:
${settings?.officeHours || ""}

Services:

${services
  .map(
    (service) => `
Title: ${service.title}
Category: ${service.category}
Description: ${service.description}
Features: ${service.features.join(", ")}
`
  )
  .join("\n")}

Latest Blogs:

${blogs
  .map(
    (blog) => `
Title: ${blog.title}
Category: ${blog.category}
Summary: ${blog.excerpt}
`
  )
  .join("\n")}

Upcoming Events:

${events
  .map(
    (event) => `
Title: ${event.title}
Date: ${new Date(event.eventDate).toDateString()}
Location: ${event.location}
Description: ${event.description}
`
  )
  .join("\n")}
`;

    const prompt = `
You are the official AI assistant for AI Solutions.

Rules:

1. ONLY answer questions related to AI Solutions.

2. Use ONLY the information provided below.

3. If the information is unavailable, politely say that it isn't available.

4. If someone asks a general question unrelated to AI Solutions (for example football, politics, math, history, celebrities, coding tutorials, etc.), politely explain that you are the AI Solutions assistant and can only answer questions about the company, its services, blogs, events, and contact information.

5. Be friendly, concise, and professional.

Company Information:

${companyContext}

User Question:

${message}
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    res.json({
      success: true,
      reply: response.text,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to generate response",
    });
  }
};

module.exports = {
  chatWithAI,
};