# CMS Backend

Node.js + Express backend for a CMS-style application with authentication, artifacts, likes, comments, chat, webhooks, and Socket.IO realtime messaging.

## Tech Stack

- Node.js (ES Modules)
- Express
- MongoDB + Mongoose
- JWT auth (cookie + bearer token support)
- Socket.IO
- Cloudinary (media upload)

## Project Structure

```text
config/
controllers/
middlewares/
models/
routes/
services/
sockets/
utils/
webhook/
app.js
server.js
```

## Prerequisites

- Node.js 18+ (recommended: latest LTS)
- MongoDB instance
- Cloudinary account (if using file uploads)

## Installation

```bash
npm install
```

## Environment Variables

Create a `.env` file in the project root:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

cloudinary_CLOUD_NAME=your_cloudinary_cloud_name
cloudinary_API_KEY=your_cloudinary_api_key
cloudinary_API_SECRET=your_cloudinary_api_secret
```

## Run

```bash
npm start
```

Server starts from `server.js`.

## Important Runtime Note

In `server.js`, DB connection is currently commented out:

```js
// connectDB();
```

Uncomment it for production/local environments where MongoDB access is required.

## API Base Routes

- `GET /` health check
- `POST /webhooks/test`
- `POST /auth/signup/initiate`
- `POST /auth/signup/verify`
- `POST /auth/login`
- `POST /artifacts` (auth + optional file upload)
- `GET /artifacts` (auth + ADMIN)
- `POST /likes/:id/like` (auth)
- `GET /likes/:id/likes`
- `POST /comments/:id/comments` (auth)
- `GET /comments/:id/comments`
- `GET /chats/:threadId` (auth)
- `POST /chats` (auth)

## Authentication

After login, token is set in an HTTP-only cookie (`token`).  
`authMiddleware` also supports `Authorization: Bearer <token>`.

## Socket.IO Events

Defined in `sockets/socket.js`:

- Client emits: `user-online` with `userId`
- Client emits: `send-message` with `{ senderId, receiverId, message }`
- Server emits: `receive-message` to receiver
- Server emits: `message-sent` to sender

## Deployment Checklist

- Set all required `.env` variables
- Ensure import paths are correct and case-sensitive
- Uncomment and verify `connectDB()` in `server.js`
- Confirm MongoDB and Cloudinary credentials are valid
- Set correct CORS origin policy for production
