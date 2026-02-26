## Smart Bookmark App

A premium, real-time bookmark manager built with **Next.js 14**, **Supabase**, and **Tailwind CSS**.

## Features

- **Authentication**: Secure Google OAuth sign-in via Supabase Auth.
- **Real-time Updates**: Bookmarks sync instantly across all devices and tabs using Supabase Realtime.
- **Premium UI/UX**: Glassmorphism design, smooth Framer Motion animations, and responsive layout.
- **Theme Support**: Fully persistent Light and Dark mode (defaulting to Dark Premium).
- **Security**: Row Level Security (RLS) ensures users only access their own data.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Database**: Supabase (PostgreSQL)
- **Styling**: Tailwind CSS v4, Lucide React (Icons)
- **Animation**: Framer Motion
- **Deployment**: Vercel
 
### 🔍 Cause:
Google provider was not enabled in Supabase.

### ✅ Solution:
- Enabled Google in:
- Added OAuth Client ID & Secret
- Set correct redirect URL:`

---

## 2️⃣ Next.js Hydration Mismatch Error

### ❌ Error:
