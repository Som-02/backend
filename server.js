// server.js
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public")); // serve your HTML/CSS files

console.log("Connecting to:", process.env.MONGO_URI);
// 🔹 MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
})
.then(() => console.log("✅ Connected to MongoDB Atlas"))
.catch(err => console.error("❌ MongoDB Error:", err));


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files (CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, "")));

// Serve your main homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "wave.html")); // adjust file if it's elsewhere
});

// 🔹 User schema
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String,
});

const User = mongoose.model("User", userSchema);

// 🟢 SIGNUP (Register)
app.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const newUser = new User({ username, password });
    await newUser.save();
    res.json({ message: "Signup successful!" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// 🔵 LOGIN
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    res.json({ message: "Login successful!" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port http://localhost:${PORT}`));
