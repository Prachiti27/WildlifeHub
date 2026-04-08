
# 🐾 WildLife Hub

WildLife Hub is a **community-driven wildlife platform** built using the **MERN stack** with Redux for state management. It connects nature enthusiasts, conservationists, and wildlife lovers, providing real-time animal tracking, wildlife information, news updates, fun games, and a full-featured social community.

---

## 🚀 Features

### 🔑 Authentication

* **Signup/Login with Clerk** for secure authentication.
* Smooth user onboarding with modern login options.

### 🐘 Wildlife Tracking

* **Live tracking of animal migration** using interactive maps.
* Real-time updates on animal movement patterns.

### 📚 Animal Information

* Detailed profiles of animals including:

  * Habitat, behavior, and conservation status
  * Fun facts and trivia

### 📰 Wildlife News

* **Latest wildlife and environmental news** using the **News API**.

### 🎮 Fun & Games

* **Interactive animal-related games** like quizzes and puzzles.

### 🌍 Community Hub

* **Social community features** powered by Redux:

  * Create, edit, and delete posts
  * Like, comment, and engage with posts
  * Follow and unfollow users
  * Real-time chat system
  * Followers/following management

---

## 🛠️ Tech Stack

### Frontend

* **React.js** + **Redux** for state management
* **Tailwind CSS** for UI
* **Framer Motion** for animations
* **Vite** as build tool

### Backend

* **Node.js** & **Express.js** for APIs
* **MongoDB** with Mongoose

### Integrations

* **Clerk** → Authentication
* **News API** → Wildlife news
* **Map APIs** → Live animal tracking

---

## 📂 Project Structure

```
wildlife-hub/
│
├── client/               # React frontend
│   ├── public/
│   ├── src/
│   │   ├── api/          # API calls
│   │   ├── components/   # Reusable components
│   │   ├── context/      # App context (if any)
│   │   ├── pages/        # Pages of the app
│   │   ├── redux/        # Redux slices and store
│   │   └── App.jsx
│   ├── .env
│   ├── package.json
│   └── vite.config.js
│
├── server/               # Backend
│   ├── config/           # DB and API configs
│   ├── controllers/      # Logic for routes
│   ├── inngest/          # Inngest functions
│   ├── middlewares/      # Express middlewares
│   ├── models/           # MongoDB schemas
│   ├── routes/           # API routes
│   ├── server.js
│   ├── .env
│   └── package.json
│
└── README.md
```

---

## ⚡ Getting Started

### Prerequisites

* Node.js & npm
* MongoDB (local or Atlas)
* Clerk account
* News API key

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/wildlife-hub.git
cd wildlife-hub

# Backend setup
cd server
npm install

# Frontend setup
cd ../client
npm install
```

### Environment Variables

**Server `.env`**

```
MONGO_URI=your_mongo_db_uri
CLERK_PUBLISHABLE_KEY=your_clerk_api_key
CLERK_SECRET_KEY=your_clerk_secret_key
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
FRONTEND_URL=http://localhost:5173
INNGEST_SIGNING_KEY=your_inngest_signing_key
INNGEST_EVENT_KEY=your_inngest_event_key
PORT=5000
```

**Client `.env`**

```
NEWS_API_KEY=your_news_api_key
VITE_CLERK_FRONTEND_API=your_clerk_frontend_api
VITE_BASEURL=http://localhost:4000/api
```

### Running the Project

```bash
# Start backend
cd server
npm run dev

# Start frontend
cd ../client
npm run dev
```

---

## 🎯 Future Enhancements

* AI-based wildlife image identification
* Gamification with rewards and badges
* Integration with IoT-based trackers
* Mobile app using Flutter

---

## 📜 License

MIT License

---

