# Simplified E-commerce Frontend

This is a simplified version of the e-commerce frontend, perfect for beginners to understand React basics.

## What's Included

### Components
- **Header.js** - Simple header with store name
- **ProductCard.js** - Basic product display card
- **ProductList.js** - Grid layout for products
- **SearchBar.js** - Simple search input

### Pages
- **Home.js** - Main page showing products and search

### Services
- **api.js** - Basic fetch API calls (no external libraries)

## Key Features Simplified

1. **No React Router** - Single page application
2. **No Complex State Management** - Basic useState and useEffect
3. **No External Libraries** - Only React, ReactDOM, and react-scripts
4. **Minimal CSS** - Basic styling for learning
5. **Simple API Calls** - Using native fetch instead of axios

## How to Run

```bash
cd frontend
npm install
npm start
```

## Learning Points for Beginners

1. **React Hooks**: useState, useEffect
2. **Component Props**: Passing data between components
3. **Event Handling**: Form submission, button clicks
4. **API Integration**: Basic fetch requests
5. **Conditional Rendering**: Loading states, empty states
6. **Array Mapping**: Displaying lists of data

## File Structure

```
src/
├── App.js              # Main app component
├── components/         # Reusable components
│   ├── Header.js
│   ├── ProductCard.js
│   ├── ProductList.js
│   └── SearchBar.js
├── pages/              # Page components
│   └── Home.js
└── services/           # API calls
    └── api.js
```

This simplified version removes complex features like routing, advanced state management, and external dependencies to focus on core React concepts.
