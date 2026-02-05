# AfterMart - Shopping Cart Project

A modern e-commerce shopping cart application built with React and Vite as part of [The Odin Project](https://www.theodinproject.com/) JavaScript curriculum.

## Features

- **Home Page** - Landing page with hero section and feature highlights (Fast Delivery, Best Prices, Quality Assured)
- **Shop Page** - Browse products fetched from the [FakeStore API](https://fakestoreapi.com/) with loading and error states
- **Cart Page** - View, update quantities, and remove items with real-time subtotal and total calculations
- **Dark/Light Mode** - Automatic theme switching based on system preferences via `prefers-color-scheme`
- **Responsive Design** - Mobile-first layout with breakpoints at 480px, 768px, and 1024px
- **Accessible UI** - ARIA labels, semantic HTML, and keyboard-navigable components

## Tech Stack

- **React 19** with functional components and hooks
- **React Router v7** for client-side routing
- **Context API** for cart state management
- **Vite** for development and builds
- **ESLint** for code quality

## Project Structure

```
src/
├── components/      # UI components (Layout, Navigation, HomePage, ShopPage, ProductCard, CartPage)
├── context/         # CartContext and CartProvider for global cart state
├── hooks/           # Custom hooks (useCart, useProducts)
├── utils/           # API integration (FakeStore API)
├── App.jsx          # Root component with route definitions
├── App.css          # Component styles
├── index.css        # Global styles and CSS custom properties for theming
└── main.jsx         # Entry point
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

```bash
git clone <repository-url>
cd project-shopping-cart
npm install
```

### Available Scripts

| Command             | Description                |
| ------------------- | -------------------------- |
| `npm run dev`       | Start development server   |
| `npm run build`     | Build for production       |
| `npm run preview`   | Preview production build   |
| `npm run lint`      | Run ESLint                 |
