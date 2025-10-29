# LinkVision AI Surveillance - Marketing Website

## Overview

LinkVision is a marketing website for an Australian AI-powered solar CCTV surveillance company. The application showcases products, pricing tiers, solutions for different industries, case studies, and provides contact functionality for potential customers. Built as a full-stack application with a React frontend and Express backend, the site emphasizes the company's solar-powered, AI-ready surveillance systems with a distinctive magenta/purple brand identity.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for the client-side application
- Vite as the build tool and development server with HMR (Hot Module Replacement)
- Wouter for lightweight client-side routing instead of React Router
- Single-page application architecture with multiple routes defined in App.tsx

**UI Component System**
- shadcn/ui component library (New York style variant) built on Radix UI primitives
- Tailwind CSS for utility-first styling with custom design tokens
- Class Variance Authority (CVA) for component variant management
- Custom color palette centered around magenta (#C800FF) and deep navy (#182863)

**State Management & Data Fetching**
- TanStack Query (React Query) for server state management and API communication
- React Hook Form with Zod validation for form handling
- Custom query client with credential-based authentication handling

**Design System**
- Typography: Outfit (headings) and Inter (body text) from Google Fonts
- Custom CSS variables for theming with HSL color format
- Gradient utilities for brand-consistent visual effects
- Responsive design with mobile-first approach

### Backend Architecture

**Server Framework**
- Express.js with TypeScript running on Node.js
- ESM (ECMAScript Modules) throughout the codebase
- Custom middleware for request logging and JSON response capturing
- HTTP server created via Node's native `http` module

**Development vs Production**
- Vite middleware integration in development for HMR and asset serving
- Static file serving in production from compiled dist/public directory
- Conditional Replit-specific plugins (cartographer, dev-banner) for development environment

**API Structure**
- RESTful endpoints under `/api` prefix
- POST `/api/contact` - Accepts contact form submissions with validation
- GET `/api/contact-submissions` - Retrieves all contact submissions
- Centralized error handling with appropriate HTTP status codes

**Data Validation**
- Zod schemas for runtime type validation
- Integration with Drizzle ORM through drizzle-zod for schema generation
- Form validation aligned with database schema constraints

### Data Storage

**Database Configuration**
- PostgreSQL database configured via Drizzle ORM
- Connection using @neondatabase/serverless driver (supports both Neon and standard PostgreSQL)
- Database URL provided via environment variable `DATABASE_URL`
- Schema migrations managed in `/migrations` directory

**Schema Design**
- `users` table: Basic user authentication with username/password (currently unused in UI)
- `contact_submissions` table: Stores customer inquiries with name, email, phone, company, message, and timestamp
- UUID primary keys using PostgreSQL's `gen_random_uuid()` function
- Timestamps with automatic `defaultNow()` for record creation

**Storage Abstraction**
- IStorage interface defining data access methods
- MemStorage implementation for in-memory development/testing (currently active)
- Database-backed storage ready to replace MemStorage when database is provisioned
- Separation of concerns between storage interface and implementation

### External Dependencies

**Third-Party UI Libraries**
- Radix UI: Comprehensive set of accessible, unstyled React components (accordion, dialog, dropdown, popover, tabs, toast, etc.)
- Lucide React: Icon library for consistent iconography throughout the application
- Embla Carousel: Carousel/slider functionality (imported but implementation pending)
- CMDK: Command menu component for keyboard-driven interfaces

**Development Tools**
- tsx: TypeScript execution for development server
- esbuild: Fast JavaScript bundler for production builds
- Drizzle Kit: CLI tool for database migrations and schema management
- Replit-specific Vite plugins for enhanced development experience

**Form & Validation**
- React Hook Form: Performance-optimized form state management
- @hookform/resolvers: Integration layer for Zod validation with React Hook Form
- Zod: TypeScript-first schema validation for both frontend and backend

**Database & Session**
- Drizzle ORM: Type-safe ORM with PostgreSQL dialect
- @neondatabase/serverless: Serverless-compatible PostgreSQL driver
- connect-pg-simple: PostgreSQL session store for Express sessions (imported but not yet implemented)

**Utilities**
- date-fns: Date manipulation and formatting
- clsx & tailwind-merge: Utility class name management
- nanoid: Compact unique ID generation

**Brand Assets**
- Logo files: `/public/linkvision-logo.svg` (full wordmark) and `/public/linkvision-symbol.svg` (icon only)
- Video assets referenced in design for hero section background
- Design guidelines document specifying exact color codes, typography, and layout structure