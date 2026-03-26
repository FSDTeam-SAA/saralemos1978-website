# Sara Lemos Website

A modern, high-performance website built for **Sara Lemos**, featuring a clean architecture, robust authentication, and a premium user interface. This project leverages **Next.js 15**, **TypeScript**, **Tailwind CSS 4**, and **TanStack Query** to deliver a seamless experience.

---

## 🚀 Tech Stack

- **Framework:** [Next.js 15+](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) + [Shadcn/UI](https://ui.shadcn.com/)
- **State Management:** [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction) + [TanStack Query v5](https://tanstack.com/query/latest)
- **Authentication:** [NextAuth.js](https://next-auth.js.org/)
- **Forms & Validation:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/) + [React Icons](https://react-icons.github.io/react-icons/)
- **API Client:** [Axios](https://axios-http.com/)
- **Notifications:** [Sonner](https://sonner.stevenar.dev/)

---

## ✨ Features

- 🔐 **Secure Authentication:** Complete auth flow including Login, Registration (multi-step), Password Reset, and OTP Verification using NextAuth.
- 📱 **Fully Responsive:** Optimized for all devices from mobile to desktop using modern CSS layout techniques.
- ⚡ **Dynamic Data Fetching:** Efficient API communication and caching with TanStack Query.
- 🎨 **Premium UI/UX:** Polished components built with Shadcn/UI and smooth animations via Framer Motion.
- 🏗️ **Modular Architecture:** Well-organized folder structure for scalability and maintainability.
- 🧪 **Developer Experience:** Pre-configured ESLint, Prettier, Husky, and Commitlint for code quality and consistent commits.

---

## 📂 Project Structure

```text
src/
├── app/               # Next.js App Router (pages and layouts)
│   ├── (auth)/        # Authentication-related routes
│   ├── (website)/     # Public website routes (Home, About, etc.)
│   └── api/           # Backend API routes (Auth integration)
├── components/        # UI Components
│   ├── ui/            # Reusable Shadcn base components
│   ├── website/       # Domain-specific components (Auth, Home, About)
│   └── ReusableSection/ # Shared complex section components
├── lib/               # Utility functions, API clients, and schemas
├── store/             # Global state management (Zustand)
├── utils/             # Helper utilities
└── Providers/         # Context providers (QueryClient, Auth, etc.)
```

---

## ⚙️ Setup & Installation

### 1. Clone the repository

```bash
git clone https://github.com/RashedulHaqueRasel1/saralemos1978-website.git
cd saralemos1978-website
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory and add the following (refer to `example.env.local`):

```env
NEXT_PUBLIC_API_URL=your_api_url
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
NEXT_PUBLIC_SOCKET_URL=your_socket_url
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Available Scripts

- `npm run dev` - Starts the development server with Webpack.
- `npm run build` - Creates an optimized production build.
- `npm run start` - Starts the production server.
- `npm run lint` - Runs ESLint to check for code quality issues.

---

## 🧑‍💻 Author

**Rashedul Haque Rasel**  
Built with ❤️ using Next.js, TypeScript, and Tailwind CSS.

- 📧 [rashedulhaquerasel1@gmail.com](mailto:rashedulhaquerasel1@gmail.com)
- 🌐 [Portfolio](https://rashedul-haque-rasel.vercel.app)
