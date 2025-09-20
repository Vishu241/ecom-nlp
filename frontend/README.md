# SmartShop Frontend

A modern React frontend for the SmartShop ecommerce platform with AI-powered natural language search.

## Features

- 🔍 **Natural Language Search** - Search products using everyday language
- 📱 **Responsive Design** - Works perfectly on all devices
- 🎯 **Smart Product Discovery** - AI understands intent, features, and context
- 🛍️ **Product Catalog** - Browse all products with detailed views
- 📂 **Category Navigation** - Easy category-based browsing
- ⚡ **Fast & Modern** - Built with React and modern web standards

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- Backend server running on port 3001

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.js       # Navigation header
│   ├── SearchBar.js    # AI search input
│   ├── ProductCard.js  # Product display card
│   └── ProductList.js  # Grid of products
├── pages/              # Main application pages
│   ├── Home.js         # Homepage with search
│   ├── ProductDetail.js # Individual product page
│   └── CategoryPage.js # Category listing page
├── services/           # API and external services
│   └── api.js          # Backend API integration
└── App.js              # Main application component
```

## API Integration

The frontend connects to the backend API running on `http://localhost:3001/api` with the following endpoints:

- `POST /search/smart-search` - AI-powered product search
- `GET /search/all-products` - Get all products
- `GET /search/category/:category` - Get products by category

## Search Examples

Try these natural language searches:
- "comfortable running shoes under $100"
- "red dress for wedding party"
- "wireless bluetooth headphones"
- "macbook for college student"

## Technologies Used

- **React** - UI framework
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls
- **CSS3** - Modern styling with gradients and animations
- **Responsive Design** - Mobile-first approach

## Development

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

### Environment Variables

Create a `.env` file in the root directory:

```
REACT_APP_API_URL=http://localhost:3001/api
```