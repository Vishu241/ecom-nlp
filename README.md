# E-commerce NLP Search Backend

A Node.js backend service that provides natural language product search using Google's Gemini AI and MongoDB.

## Features

- 🧠 **Natural Language Processing** with Google Gemini AI
- 🔍 **Smart Product Search** with intelligent query parsing
- 📊 **MongoDB Integration** with optimized search indexes
- 🚀 **RESTful API** with Express.js
- 📦 **20 Sample Products** across multiple categories
- 🎯 **Context-Aware Search** understanding intent, features, and use cases

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Setup
Create a `.env` file (copy from `config.env`):
```bash
cp config.env .env
```

Edit `.env` and add your Gemini API key:
```
GEMINI_API_KEY=your_actual_gemini_api_key_here
MONGODB_URI=mongodb://localhost:27017/ecommerce
PORT=5000
```

### 3. Seed Database
```bash
npm run seed
```

### 4. Start Server
```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

## API Endpoints

### Smart Search
```http
POST /api/search/smart-search
Content-Type: application/json

{
  "query": "comfortable running shoes under $100"
}
```

**Response:**
```json
{
  "success": true,
  "originalQuery": "comfortable running shoes under $100",
  "parsedQuery": {
    "category": "footwear",
    "features": ["comfortable"],
    "priceRange": {"min": 0, "max": 100},
    "useCases": ["running"]
  },
  "results": [...],
  "count": 2
}
```

### Get All Products
```http
GET /api/search/all-products
```

### Search by Category
```http
GET /api/search/category/electronics
```

## Example Queries

Try these natural language searches:

- `"comfortable running shoes under $200"`
- `"red dress for wedding party"`
- `"macbook for college student"`
- `"wireless headphones for gym"`
- `"organic skincare for sensitive skin"`
- `"office chair for back support"`
- `"yoga mat for home workout"`
- `"coffee maker for morning routine"`

## Product Categories

The database includes products across these categories:

- **Electronics** (laptops, smartphones, headphones)
- **Footwear** (running shoes, boots)
- **Clothing** (dresses, shirts, sweaters)
- **Home & Living** (furniture, appliances, security)
- **Sports & Fitness** (yoga mats, fitness trackers, tennis rackets)
- **Beauty & Personal Care** (skincare, hair care)
- **Books & Education** (programming, business)
- **Kitchen & Dining** (cookware, appliances)

## How It Works

1. **Query Input**: User sends natural language query
2. **AI Processing**: Gemini AI parses and extracts structured data
3. **Query Building**: System converts AI output to MongoDB query
4. **Search Execution**: Database search with intelligent filtering
5. **Result Ranking**: Products sorted by relevance and ratings

## Technology Stack

- **Node.js** + **Express.js** - Backend framework
- **MongoDB** + **Mongoose** - Database and ODM
- **Google Gemini AI** - Natural language processing
- **CORS** - Cross-origin resource sharing

## Project Structure

```
├── server.js              # Main application entry point
├── models/
│   └── Product.js          # MongoDB product schema
├── services/
│   └── nlp.js             # Gemini AI service
├── routes/
│   └── search.js          # API routes
├── scripts/
│   └── seedData.js        # Database seeding script
├── package.json           # Dependencies and scripts
└── config.env             # Environment variables template
```

## Development

### Adding New Products
Edit `scripts/seedData.js` and add products following the schema:

```javascript
{
  name: "Product Name",
  description: "Detailed description...",
  category: "main-category",
  subcategory: "sub-category",
  price: 99.99,
  brand: "Brand Name",
  features: ["feature1", "feature2"],
  useCases: ["use-case1", "use-case2"],
  occasions: ["occasion1", "occasion2"],
  targetAudience: ["audience1", "audience2"],
  searchKeywords: ["keyword1", "keyword2"]
}
```

### Testing the API
```bash
# Test with curl
curl -X POST http://localhost:5000/api/search/smart-search \
  -H "Content-Type: application/json" \
  -d '{"query": "your search query here"}'

# Or use any API testing tool like Postman
```

## Deployment

The backend is ready for deployment on platforms like:
- Heroku
- Railway
- DigitalOcean
- AWS
- Google Cloud Platform

Make sure to:
1. Set environment variables on your hosting platform
2. Use MongoDB Atlas for production database
3. Configure CORS for your frontend domain

## License

MIT License - feel free to use this project for learning and development!
