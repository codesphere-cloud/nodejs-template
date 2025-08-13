# URL Shortener with QR Codes

A complete Codesphere app template featuring a URL shortener service with QR code generation, built with NodeJS and Express using a two-service architecture.

## Project Structure

```
/
├── backend/                 # Express API server
│   ├── package.json        # Backend dependencies
│   └── index.js           # API endpoints and QR code generation
├── frontend/               # Express frontend server
│   ├── package.json       # Frontend dependencies
│   ├── index.js          # Frontend server setup
│   └── public/
│       └── index.html    # Main UI page
├── .gitignore             # Git ignore rules
├── ci.yml                 # Default Codesphere deployment configuration
├── ci.dev.yml            # Development environment configuration
├── ci.qa.yml             # QA/Testing environment configuration
├── ci.prod.yml           # Production environment configuration
└── README.md             # This file
```

## Features

- **URL Shortening**: Convert long URLs into short, manageable links
- **QR Code Generation**: Automatic QR code creation for each shortened URL
- **In-Memory Storage**: Fast URL lookup using Map data structure
- **CORS Enabled**: Cross-origin requests supported
- **Responsive UI**: Clean, mobile-friendly interface
- **Error Handling**: Comprehensive error handling and validation

## API Endpoints

### Backend (Port 3000)

- `POST /shorten` - Create a shortened URL
  - Body: `{ "url": "https://example.com" }`
  - Returns: `{ "shortId": "abc1234", "shortUrl": "http://localhost:3000/abc1234", "originalUrl": "https://example.com" }`

- `GET /:shortId` - Redirect to original URL
  - Redirects with 302 status or returns 404 if not found

- `GET /qr/:shortId` - Generate QR code image
  - Returns PNG image of QR code for the shortened URL

- `GET /health` - Health check endpoint
- `GET /urls` - List all shortened URLs (debug endpoint)

### Frontend (Port 3000)

- `GET /` - Main application interface

## Local Development

### Prerequisites

- Node.js (v14 or higher)
- npm

### Setup

1. **Install backend dependencies:**
   ```bash
   cd backend
   npm install
   ```

2. **Install frontend dependencies:**
   ```bash
   cd frontend
   npm install
   ```

3. **Start the backend server:**
   ```bash
   cd backend
   npm start
   ```
   Backend will run on http://localhost:3000

4. **Start the frontend server:**
   ```bash
   cd frontend
   npm start
   ```
   Frontend will run on http://localhost:3000

5. **Open your browser and navigate to:**
   http://localhost:3000

## Codesphere Deployment

This project includes multiple CI configuration files for different environments:

### Environment Profiles

- **`ci.yml`** - Default configuration for basic deployment
- **`ci.dev.yml`** - Development environment with:
  - Smaller resource allocation (plan: 4)
  - Debug mode enabled
  - Development dependencies
  - Hot reloading with nodemon

- **`ci.qa.yml`** - QA/Testing environment with:
  - Enhanced testing suite (coverage, e2e, performance)
  - Linting and code quality checks
  - QA mode flags for debugging
  - Medium resource allocation (plan: 8)

- **`ci.prod.yml`** - Production environment with:
  - Higher resource allocation (plan: 16)
  - Multiple replicas for high availability
  - Security audits during deployment
  - Production optimizations
  - No debug logging

### Usage

To deploy with a specific profile, use the appropriate CI file:
```bash
# Development deployment
codesphere deploy --config ci.dev.yml

# QA deployment  
codesphere deploy --config ci.qa.yml

# Production deployment
codesphere deploy --config ci.prod.yml
```

The configuration automatically:
1. Installs dependencies for both services
2. Runs appropriate tests for the environment
3. Starts both frontend and backend services
4. Configures proper networking and routing

## Usage

1. Open the web interface
2. Enter a long URL in the input field
3. Click "Shorten URL"
4. Get your shortened URL and QR code
5. Share the shortened URL or scan the QR code

## Technologies Used

- **Backend**: Express.js, nanoid, qrcode, cors
- **Frontend**: Express.js, Static HTML
- **Styling**: Vanilla CSS with modern design
- **JavaScript**: ES6+ with async/await

## Configuration

### Environment Variables

- `PORT` - Server port (defaults to 3000 for both services)

### Customization

- Modify QR code settings in `backend/index.js`
- Update UI styling in `frontend/public/index.html`
- Adjust API endpoints in frontend JavaScript

## License

MIT License
