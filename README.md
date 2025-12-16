# AfterMart - Shopping Cart Project

A modern e-commerce shopping cart application built with React and Vite.

## Features

- 🏠 **Home Page** - Welcome page with feature highlights
- 🛍️ **Shop Page** - Browse and add products to your cart
- 🛒 **Cart Page** - View and manage your shopping cart
- ✨ **Modern UI** - Clean, responsive design with smooth animations

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Building for Production

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/     # React components (HomePage, ShopPage, CartPage, etc.)
├── context/        # Cart state management (Context API)
├── hooks/          # Custom React hooks
├── utils/          # Utility functions (API calls)
└── App.css         # Global styles
```

## Technologies Used

- React 19
- React Router DOM
- Vite
- Context API (for state management)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
