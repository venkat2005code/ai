# IntelliTools - AI SaaS Platform

A modern, feature-rich AI SaaS platform built with React, TypeScript, and Tailwind CSS. Features a beautiful UI with full RTL/LTR support for international audiences.

## ✨ Features

- 🌐 **RTL/LTR Toggle** - Switch between right-to-left and left-to-right layouts
- 🎨 **Modern UI** - Built with shadcn/ui components and Tailwind CSS
- 📱 **Responsive Design** - Works perfectly on all devices
- 🚀 **Multiple Pages** - Home, About, Pricing, Blog, Portfolio, FAQ, Contact, Dashboards
- 🔐 **Authentication** - Login and Register pages
- 👤 **User & Admin Dashboards** - Separate dashboard views
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development

## 🛠️ Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Routing:** React Router

## 🚀 Getting Started

## 🚀 Getting Started

### Prerequisites

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

Follow these steps:

```sh
# Clone the repository
git clone https://github.com/venkat2005code/ai.git

# Navigate to the project directory
cd ai

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:8080`

## 📁 Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── ui/           # shadcn/ui components
│   ├── admin/        # Admin dashboard components
│   ├── auth/         # Authentication components
│   ├── blog/         # Blog page components
│   ├── contact/      # Contact page components
│   ├── faq/          # FAQ page components
│   ├── portfolio/    # Portfolio page components
│   └── pricing/      # Pricing page components
├── pages/            # Page components
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
└── assets/           # Images and static assets
```

## 🌐 RTL/LTR Support

Click the 🌐 globe button in the navigation bar to toggle between LTR (Left-to-Right) and RTL (Right-to-Left) layouts. Perfect for supporting international audiences.

## 📄 Available Pages

- **Home** - Two different homepage layouts
- **About** - Company information and team
- **Pricing** - Pricing plans and feature comparison
- **Blog** - Articles and insights
- **Portfolio** - Project showcase and case studies
- **FAQ** - Frequently asked questions
- **Contact** - Contact form and office locations
- **Dashboard** - User dashboard
- **User Dashboard** - Enhanced user interface
- **Admin Dashboard** - Admin control panel
- **Login/Register** - Authentication pages

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will auto-detect Vite and deploy

### Netlify

1. Push your code to GitHub
2. Connect your repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📝 License

This project is open source and available under the MIT License.
