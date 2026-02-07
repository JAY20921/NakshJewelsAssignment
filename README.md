# Naksh Jewels - E-commerce Module

A full-stack e-commerce application built with React.js and Node.js for the Naksh Jewels internship assessment.

## Features

### Frontend (React.js)
- Product listing page with 8 jewelry items
- Product cards displaying image, name, price, and stock status
- Shopping cart functionality with add/remove items
- Quantity update feature in cart
- State management using Context API
- Fully responsive design (desktop, tablet, mobile)
- Clean folder structure with functional components only
- No UI libraries used (custom CSS)

### Backend (Node.js + Express)
- RESTful API architecture
- `GET /api/products` - Fetch all products
- `GET /api/products/:id` - Fetch single product
- `POST /api/cart` - Add item to cart
- `PUT /api/cart` - Update cart item quantity
- `DELETE /api/cart` - Remove item from cart
- `GET /api/cart` - Get cart items
- Validation middleware for all endpoints
- Comprehensive error handling
- In-memory data storage
- Environment variables configuration

### Docker Setup
- Dockerfile for frontend (multi-stage build)
- Dockerfile for backend
- docker-compose.yml for orchestration
- Single command deployment

## Tech Stack

**Frontend:**
- React 18
- Context API for state management
- Custom CSS (no UI libraries)
- Functional components with hooks

**Backend:**
- Node.js
- Express.js
- dotenv for environment variables
- CORS enabled

**DevOps:**
- Docker
- Docker Compose

## Project Structure

```
Naksh/
├── backend/
│   ├── controllers/
│   │   ├── productController.js
│   │   └── cartController.js
│   ├── data/
│   │   └── products.json
│   ├── middleware/
│   │   ├── validation.js
│   │   └── errorHandler.js
│   ├── routes/
│   │   ├── productRoutes.js
│   │   └── cartRoutes.js
│   ├── .env
│   ├── .gitignore
│   ├── .dockerignore
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.js
│   │   │   ├── ProductCard.js
│   │   │   └── CartItem.js
│   │   ├── context/
│   │   │   └── CartContext.js
│   │   ├── pages/
│   │   │   ├── ProductList.js
│   │   │   └── Cart.js
│   │   ├── styles/
│   │   │   ├── index.css
│   │   │   ├── App.css
│   │   │   ├── Header.css
│   │   │   ├── ProductList.css
│   │   │   ├── ProductCard.css
│   │   │   ├── Cart.css
│   │   │   └── CartItem.css
│   │   ├── App.js
│   │   ├── config.js
│   │   └── index.js
│   ├── .gitignore
│   ├── .dockerignore
│   ├── Dockerfile
│   └── package.json
└── docker-compose.yml
```

## Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Docker and Docker Compose

### Method 1: Run with Docker (Recommended)

1. Clone the repository:
```bash
git clone <repository-url>
cd Naksh
```

2. Run the application:
```bash
docker-compose up --build
```

3. Access the application:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

4. To stop the application:
```bash
docker-compose down
```

### Method 2: Run Locally (Development)

#### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file (already included):
```env
PORT=5000
NODE_ENV=development
```

4. Start the server:
```bash
npm start
```

Backend will run on http://localhost:5000

#### Frontend Setup

1. Open a new terminal and navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

Frontend will run on http://localhost:3000

## API Endpoints

### Products

**GET /api/products**
- Description: Get all products
- Response: Array of product objects

**GET /api/products/:id**
- Description: Get single product by ID
- Response: Single product object

### Cart

**GET /api/cart**
- Description: Get all cart items
- Response: Array of cart items

**POST /api/cart**
- Description: Add item to cart
- Body: `{ productId: number, quantity: number }`
- Response: Updated cart

**PUT /api/cart**
- Description: Update cart item quantity
- Body: `{ productId: number, quantity: number }`
- Response: Updated cart

**DELETE /api/cart**
- Description: Remove item from cart
- Body: `{ productId: number }`
- Response: Updated cart

**DELETE /api/cart/clear**
- Description: Clear entire cart
- Response: Empty cart

## Features Implemented

### Frontend
✅ Product listing page with API integration
✅ Product cards with image, name, price, and Add to Cart button
✅ Cart page with quantity controls
✅ Remove item functionality
✅ Context API for state management
✅ Responsive design (mobile, tablet, desktop)
✅ Functional components only
✅ Clean folder structure
✅ No UI libraries used
✅ Local storage persistence
✅ Loading states and error handling

### Backend
✅ Express server with proper structure
✅ GET /products API endpoint
✅ POST /cart API endpoint
✅ Additional cart management endpoints
✅ Validation middleware
✅ Error handling middleware
✅ In-memory data storage
✅ Environment variables (.env)
✅ CORS enabled

### Docker
✅ Backend Dockerfile
✅ Frontend Dockerfile (multi-stage build)
✅ docker-compose.yml configuration
✅ Single command deployment (`docker-compose up`)
✅ Network configuration
✅ Port mapping

## Development Notes

### Code Quality
- Followed best practices for React and Node.js
- Meaningful variable and function names
- Proper error handling throughout
- Clean and organized file structure
- Responsive design without UI frameworks
- Validation on both frontend and backend

### Git Commits
The project uses meaningful commit messages following best practices:
- Initial project setup
- Backend API implementation
- Frontend React components
- Styling and responsiveness
- Docker configuration
- Documentation

## Testing

### Manual Testing
1. Start the application using Docker
2. Test product listing page loads correctly
3. Test adding items to cart
4. Test updating quantities in cart
5. Test removing items from cart
6. Test responsive design on different screen sizes

### API Testing
Use Postman or curl to test API endpoints:

```bash
# Get all products
curl http://localhost:5000/api/products

# Add to cart
curl -X POST http://localhost:5000/api/cart \
  -H "Content-Type: application/json" \
  -d '{"productId": 1, "quantity": 2}'

# Get cart
curl http://localhost:5000/api/cart
```

## Screenshots

(Add screenshots or demo video link here)

## Future Enhancements

- User authentication
- MongoDB integration
- Payment gateway integration
- Product search and filters
- Wishlist functionality
- Order history
- Admin panel
- Email notifications
- Product reviews

## Author

Developed as part of the Naksh Jewels ReactJS & Node.js Internship Assessment

## License

This project is created for assessment purposes.

---

**Note:** This application demonstrates a working e-commerce module with clean code architecture, proper validation, error handling, and Docker deployment capabilities.
