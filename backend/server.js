const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const contactRoutes = require("./routes/contactRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const blogRoutes = require("./routes/blogRoutes");
const eventRoutes = require("./routes/eventRoutes");
const settingRoutes = require("./routes/settingRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const path = require("path");
const uploadRoutes = require("./routes/uploadRoutes");
const newsletterRoutes = require("./routes/newsletterRoutes");
const galleryRoutes =
  require("./routes/galleryRoutes");
const eventRegistrationRoutes = require(
  "./routes/eventRegistrationRoutes"
);
const siteSettingsRoutes =
require("./routes/siteSettingsRoutes");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/settings", settingRoutes);
app.use("/api/newsletter", newsletterRoutes);
app.use(
"/api/settings",
siteSettingsRoutes
);
app.use("/api/dashboard", dashboardRoutes);
app.use("/uploads",
  express.static(
    path.join(__dirname, "uploads")
  )
);

app.use("/api/upload", uploadRoutes);
app.use(
  "/api/gallery",
  galleryRoutes
);
app.use(
  "/api/event-registrations",
  eventRegistrationRoutes
);



app.get("/", (req, res) => {
  res.send("AI Solutions API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});







