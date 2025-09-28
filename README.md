# Think Board 📝

Think Board is a sleek, responsive, and full-stack note-taking application built with the MERN stack. It provides a frictionless user experience by offering personalized note-taking capabilities without the need for a traditional user account, leveraging `localStorage` for a unique, browser-specific identity.

[![Live Demo](https://thinkboard-dw2v.onrender.com/)](https://thinkboard-dw2v.onrender.com/)

## Features ✨

-   **Full CRUD Functionality**: Create, read, update, and delete notes with a clean and intuitive user interface.
-   **User-Specific Notes**: Each user's notes are unique to their browser, providing a seamless and private workspace.
-   **Responsive Design**: A modern and fully responsive UI built with Tailwind CSS and DaisyUI, ensuring a great experience on any device.
-   **Secure API**: The backend is protected with per-user rate limiting via Upstash Redis to prevent spam and abuse.
-   **Instant Feedback**: Utilizes `react-hot-toast` for non-blocking notifications for all user actions.

A key goal of this project was to provide personalization without the friction of a full authentication system. I achieved this with a lightweight, client-side strategy:

1.  **Unique ID Generation**: On a user's first visit, the React app generates a unique `userId` (UUID) using `crypto.randomUUID()` and saves it to the browser's `localStorage`.
2.  **API Request Tagging**: This `userId` is then attached to every API request for creating or fetching notes.
3.  **Backend Filtering**: The Node.js/Express backend uses this ID to save notes tagged to that user and, crucially, to filter database queries, ensuring only the correct notes are ever returned.

## Tech Stack 🛠️

#### Frontend
-   **React** (with Vite)
-   **React Router** for client-side routing
-   **Tailwind CSS** & **DaisyUI** for styling
-   **Axios** for API requests
-   **Lucide React** for icons

#### Backend
-   **Node.js**
-   **Express.js** for the server and REST API
-   **MongoDB** (with Mongoose) as the database
-   **Upstash Redis** for API rate limiting

#### Deployment
-   **Render** for hosting the full-stack application.


