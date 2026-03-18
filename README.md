# DaaS (Device as a Service)

## Overview
DaaS is a microservice in the Aku platform ecosystem. It provides device management, provisioning, and monitoring features for users and other services.

## Features
- REST API for device management
- Scalable Node.js backend

## Getting Started

### Prerequisites
- Node.js 20+
- Docker (optional)

### Development
```bash
git clone <repo-url>
cd DaaS
npm install
npm run dev
```

### Docker
```bash
docker build -t daas:latest .
docker run -p 8080:8080 daas:latest
```

### Testing
```bash
npm test
```

## Deployment
See `.github/workflows/ci.yml` for CI/CD pipeline.

## License
MIT
