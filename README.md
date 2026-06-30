# AI Solutions Website

This repository contains a full-stack AI Solutions website with a React + Vite frontend and an Express + MongoDB backend. The project includes a public site, admin dashboard, blog, events, contact management, newsletter subscription, gallery management, and site settings.

## Project structure

- `backend/` - Node.js API server
  - `config/` - database connection configuration
  - `controllers/` - request handlers
  - `middleware/` - auth and upload middleware
  - `models/` - Mongoose schemas
  - `routes/` - API route definitions
  - `uploads/` - static upload storage for images
  - `server.js` - Express server entry point
- `my-homepage/` - React frontend application
  - `src/` - React app source code
  - `src/admin/` - admin dashboard pages
  - `src/components/` - reusable UI components
  - `src/pages/` - public website pages
  - `src/api/api.js` - API base URL helper
  - `public/` - public assets and redirects
- `postman/` - API testing collections, environments, specs, and mocks

## Features

- Public website with home, about, reviews, contact, gallery/blog, events, and service pages
- Admin authentication and protected dashboard
- Blog CRUD management with slug-based detail pages
- Event creation, update, deletion, and registration management
- Service listing and admin service CRUD
- Contact submission and admin contact management
- Newsletter subscription and subscriber management
- Image upload support for admin content
- Site and settings management endpoints
- Dashboard statistics for admin usage

## Prerequisites

- Node.js 18+ and npm
- MongoDB database (local or hosted)

## Backend setup

1. Open a terminal and navigate to the backend folder:

```bash
cd backend
```

2. Install backend dependencies:

```bash
npm install
```

3. Create a `.env` file in `backend/` with the following values:

```env
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>
PORT=5000
```

4. Start the backend server:

```bash
npm run dev
```

The backend runs on `http://localhost:5000` by default.

## Frontend setup

1. Open a new terminal and navigate to the frontend folder:

```bash
cd my-homepage
```

2. Install frontend dependencies:

```bash
npm install
```

3. Create a `.env` file in `my-homepage/` with the API URL:

```env
VITE_API_URL=http://localhost:5000
```

4. Start the frontend development server:

```bash
npm run dev
```

The React frontend runs on Vite's default port, usually `http://localhost:5173`.

## Build

To build the frontend for production:

```bash
cd my-homepage
npm run build
```

## Backend API overview

The backend exposes REST APIs under `/api`.

### Authentication

- `POST /api/auth/register` - create admin user
- `POST /api/auth/login` - admin login
- `PUT /api/auth/change-password` - change admin password (protected)

### Admin dashboard

- `GET /api/admin/dashboard` - admin dashboard stats (protected)

### Contacts

- `POST /api/contacts` - public contact submission
- `GET /api/contacts` - list contacts (protected)
- `DELETE /api/contacts/:id` - delete contact (protected)
- `PATCH /api/contacts/:id/view` - mark contact as viewed (protected)

### Services

- `GET /api/services` - list services
- `GET /api/services/:id` - get service details
- `POST /api/services` - create service (protected)
- `PUT /api/services/:id` - update service (protected)
- `DELETE /api/services/:id` - delete service (protected)

### Blogs

- `GET /api/blogs` - list blogs
- `GET /api/blogs/slug/:slug` - get blog by slug
- `GET /api/blogs/:id` - get blog by ID
- `POST /api/blogs` - create blog
- `PUT /api/blogs/:id` - update blog
- `DELETE /api/blogs/:id` - delete blog

### Events

- `GET /api/events` - list events
- `GET /api/events/:id` - get event details
- `POST /api/events` - create event (protected)
- `PUT /api/events/:id` - update event (protected)
- `DELETE /api/events/:id` - delete event (protected)

### Event registrations

- `POST /api/event-registrations` - register for event
- `GET /api/event-registrations` - list registrations (protected)
- `DELETE /api/event-registrations/:id` - delete registration (protected)

### Gallery

- `GET /api/gallery` - list gallery items
- `POST /api/gallery` - create gallery item (protected)
- `PUT /api/gallery/:id` - update gallery item (protected)
- `DELETE /api/gallery/:id` - delete gallery item (protected)

### Newsletter

- `POST /api/newsletter` - subscribe to newsletter
- `GET /api/newsletter` - list subscribers (protected)
- `DELETE /api/newsletter/:id` - delete subscriber (protected)

### Settings

- `GET /api/settings` - get core settings
- `PUT /api/settings` - update core settings (protected)

### Site settings

- `GET /api/settings` - get site settings
- `PUT /api/settings` - update site settings (protected)

> Note: the backend currently mounts both settings and site settings routes under the same `/api/settings` base path.

### File uploads

- `POST /api/upload` - upload image file (protected)

Uploaded files are served from `backend/uploads` via Express static middleware.

## Frontend routes

Public pages:

- `/` - Home
- `/About` - About
- `/Reviews` - Reviews
- `/Contact` - Contact
- `/GalleryBlog` - Gallery & Blog listing
- `/Events` - Events
- `/FinalServices` - Services overview
- `/blog/:slug` - Blog details

Admin pages:

- `/admin/login` - login page
- `/admin/dashboard` - dashboard
- `/admin/events` - manage events
- `/admin/blogs` - manage blogs
- `/admin/services` - manage services
- `/admin/contacts` - manage contacts
- `/admin/gallery` - manage gallery items
- `/admin/newsletter` - manage subscribers
- `/admin/event-registrations` - manage event registrations
- `/admin/settings` - manage site settings
- `/admin/password` - change admin password

## Notes

- The frontend uses `Vite`, `React`, `React Router`, and `Recharts`.
- The backend uses `Express`, `Mongoose`, `JWT`, `bcryptjs`, `multer`, and `cors`.
- Admin authentication uses JWT tokens stored in browser `localStorage`.
- The `postman/` folder contains Postman collections and environments for API testing.

## Troubleshooting

- If the frontend cannot reach the API, verify `VITE_API_URL` and backend server port.
- If authentication fails, verify `JWT_SECRET` and that the admin user exists.
- If uploads fail, confirm `backend/uploads` exists and backend has write access.

## License

This repository does not include a license file. Add one if you want to publish or share this project publicly.
