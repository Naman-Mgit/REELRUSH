# ReelRush 🎬

**ReelRush** is a full-stack web application that allows users to upload and view short video reels, similar to platforms like Instagram Reels or TikTok. The platform features authentication, video uploading, viewing, and responsive UI for smooth user interaction.

---

## 🚀 Tech Stack

### 🔧 Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework for Node.js
- **MongoDB** - Mongodb database for storing user and reel data
- **Mongoose** - ODM for MongoDB
- **JWT** - JSON Web Tokens for secure authentication
- **ImageKit.Io / Multer** - For handling video uploads and storage

### 🌐 Frontend
- **Next.js** (App Router)
- **React.js**
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Tailwind CSS components library
- **Framer Motion** - Smooth page transitions and animations
- **React Hot Toast** - For toast notifications

### 🔐 Authentication
- **NextAuth.js** with JWT strategy
- OAuth or Credential based login support

---

## 📁 Folder Structure (Important Ones)
```
├── app
│   ├── login
│   ├── dashboard
│   └── trending
├── components
│   └── VideoCard.tsx
├── lib
│   └── auth.ts
├── models
│   └── User.js
│   └── Reel.js
├── pages
│   └── api
│       └── auth
│       └── reels
├── public
├── styles
```

---

## 📌 Key Features
- User authentication using JWT with session management
- Upload short video reels (mp4)
- View and explore reels from different users
- Responsive UI with loading screens and animations
- Protected routes and session-based redirects

---

## 🔗 API Endpoints

### Authentication
- `POST /api/auth/signin` — Login user
- `POST /api/auth/signup` — Register new user
- `GET /api/auth/session` — Get current session info
- `POST /api/auth/logout` — Logout user

### Reels
- `POST /api/reels/upload` — Upload a new reel
- `GET /api/reels` — Get all reels
- `GET /api/reels/:id` — Get reel by ID

### User
- `GET /api/user/profile` — Get user profile
- `GET /api/user/reels` — Get all reels uploaded by a user

---

## ⚙️ Installation and Setup
1. Clone the repo:
```bash
git clone https://github.com/Naman-Mgit/REELRUSH/tree/main/reelrush
```
2. Install dependencies:
```bash
npm install
```
3. Create a `.env.local` file and add environment variables:
```env
MONGODB_URI=your_mongodb_connection
NEXTAUTH_SECRET=your_jwt_secret
NEXTAUTH_URL=http://localhost:3000
CLOUDINARY_URL=your_cloudinary_upload_preset
```
4. Run the development server:
```bash
npm run dev
```

---



---

## 👨‍💻 Developer
- Built by a Computer Science student at **NIT Patna**
- Tech Stack Expertise: **Next.js**, **MongoDB**, **Node.js**, **Express**, **Tailwind CSS**
- Strong in backend development and handling APIs
- Actively participated in hackathons and club-based tech projects

---

Feel free to contribute, fork, and improve the app!


