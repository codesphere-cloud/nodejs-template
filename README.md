# URL Shortener with QR Codes

A complete Codesphere app template featuring a URL shortener service with QR code generation, built with NodeJS and Express using a two-service architecture.

## Features

- **URL Shortening**: Convert long URLs into short, manageable links
- **QR Code Generation**: Automatic QR code creation for each shortened URL
- **Codesphere Optimized**: Multiple deployment profiles for different environments
- **Clean Architecture**: Frontend on root path, API on `/api` namespace
- **Smart Routing**: Automatic forwarding of shortened URLs to backend
- **Responsive UI**: Clean, mobile-friendly interface
- **Error Handling**: Comprehensive error handling and validation

## Project Structure

```
/
├── .github/workflows/       # GitHub Actions for preview deployments
│   └── codesphere-deploy.yml
├── backend/                 # Express API server
│   ├── package.json        # Backend dependencies
│   └── index.js           # API endpoints and QR code generation
├── frontend/               # Express frontend server
│   ├── package.json       # Frontend dependencies
│   ├── index.js          # Frontend server with smart routing
│   └── public/
│       └── index.html    # Main UI page
├── .gitignore             # Git ignore rules
├── .gitlab-ci.yml         # GitLab CI/CD pipeline for preview deployments
├── bitbucket-pipelines.yml # Bitbucket pipeline for preview deployments
├── ci.yml                 # Default Codesphere deployment configuration
├── ci.dev.yml            # Development environment configuration
├── ci.qa.yml             # QA/Testing environment configuration
├── ci.prod.yml           # Production environment configuration
└── README.md             # This file
```

## API Endpoints

### Backend API (`/api`)

- `POST /api/shorten` - Create a shortened URL
  - Body: `{ "url": "https://example.com" }`
  - Returns: `{ "shortId": "abc1234", "shortUrl": "https://yourdomain.codesphere.com/abc1234", "originalUrl": "https://example.com" }`

- `GET /api/:shortId` - Redirect to original URL
  - Redirects with 302 status or returns 404 if not found

- `GET /api/qr/:shortId` - Generate QR code image
  - Returns PNG image of QR code for the shortened URL

- `GET /api/health` - Health check endpoint
- `GET /api/urls` - List all shortened URLs (debug endpoint)

### Frontend

- `GET /` - Main application interface
- `GET /:shortId` - Shortened URL redirects (forwards to `/api/:shortId`)

## Codesphere Deployment (Recommended)

This template is optimized for Codesphere deployment with multiple environment profiles:

### Quick Start
1. **Fork or clone** this repository
2. **Connect to Codesphere** and import your repository  
3. **Choose deployment profile:**
   - Use default `ci.yml` for basic deployment
   - Use `ci.dev.yml` for development environment
   - Use `ci.qa.yml` for testing environment  
   - Use `ci.prod.yml` for production environment

4. **Deploy and access:**
   - Your app will be available at `https://yourdomain.codesphere.com/`
   - Shortened URLs work automatically: `https://yourdomain.codesphere.com/abc1234`

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

The configuration automatically:
1. Installs dependencies for both services
2. Runs appropriate tests for the environment
3. Starts both frontend and backend services
4. Configures proper networking and routing

### Preview Deployments

This template includes CI/CD pipeline configurations for automatic preview deployments:

#### GitLab (`.gitlab-ci.yml`)
- **Triggers**: Merge request events
- **Features**: Automatic deploy and manual teardown
- **Environment**: `Preview Deployment NodeJS MR_$CI_MERGE_REQUEST_IID`

#### Bitbucket (`bitbucket-pipelines.yml`)
- **Triggers**: Pull request events
- **Features**: Automatic preview deployment
- **Plan**: Micro with on-demand scaling

#### GitHub (`.github/workflows/codesphere-deploy.yml`)
- **Triggers**: Pull request events and manual dispatch
- **Features**: Automatic deployment with proper permissions
- **Plan**: Micro with on-demand scaling

**Required Secrets/Variables:**
- `CODESPHERE_EMAIL` - Your Codesphere account email
- `CODESPHERE_PASSWORD` - Your Codesphere account password
- `CODESPHERE_TEAM` - Your Codesphere team name
- Additional platform-specific tokens as needed

## Usage

1. Open your Codesphere application URL
2. Enter a long URL in the input field
3. Click "Shorten URL"
4. Get your shortened URL and QR code
5. Share the shortened URL or scan the QR code

## Local Development (Optional)

For local development and testing:

### Prerequisites
- Node.js (v14 or higher)
- npm

### Setup
1. **Install dependencies:**
   ```bash
   cd backend && npm install
   cd frontend && npm install
   ```

2. **Start both services:**
   ```bash
   # Terminal 1 - Backend
   cd backend && npm start
   
   # Terminal 2 - Frontend  
   cd frontend && npm start
   ```

3. **Access locally:**
   - Frontend: http://localhost:3000
   - API: http://localhost:3000/api

Note: When running locally, shortened URLs will use localhost domains.

## Technologies Used

- **Backend**: Express.js, nanoid, qrcode, cors
- **Frontend**: Express.js, Static HTML
- **Styling**: Vanilla CSS with modern design
- **JavaScript**: ES6+ with async/await

## Configuration

### Environment Variables

- `PORT` - Server port (defaults to 3000, automatically configured by Codesphere)
- `WORKSPACE_DEV_DOMAIN` - Domain for shortened URLs (automatically set by Codesphere)

### Customization

- Modify QR code settings in `backend/index.js`
- Update UI styling in `frontend/public/index.html`
- Adjust API endpoints in frontend JavaScript
- Configure resource allocation in CI profile files

## License

MIT License
