# vnest

A React web application for learning Finnish verb conjugations and sentence structure through interactive, game-based exercises. VNeST (Verb, Noun/Noun Phrase, Sentence Training) is designed as a therapeutic tool for aphasia patients to improve language skills through engaging gameplay.


### Install Dependencies

```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd frontend
npm install

```

### Run the Development Server

```bash
npm start
```

The application will be available at `http://localhost` (or the port configured in your development environment).

## Building

### Build for Production

```bash
cd frontend
npm run build
```

The build output will be in `frontend/dist/`. These static files can be deployed to any static hosting service.

### Linting

```bash
cd frontend
npm run lint
```

## Data Sources

The application supports two data sources:

### Local Data (Default)
- Uses embedded JSON files in `frontend/assets/word_data/`
- Works offline, no backend required
- Best for demos and development
- In this version, the backend has been removed (though poorly, and there is a lot of fluff left over - time crunch & copilot, take the wheel)

### Manual Deployment

Deploy to any static hosting service (Netlify, Vercel, etc.):

```bash
# Build the application
cd frontend
npm run build

# Deploy the frontend/dist/ folder to your hosting service
```

## Technology Stack

- **Frontend Framework:** React 19 with Expo Router
- **Language:** TypeScript
- **Styling:** React Native StyleSheet (web-compatible)
- **State Management:** React Context + Hooks
- **Local Storage:** AsyncStorage (browser localStorage)
- **Database:** Realm (native) / JSON adapter (web)
- **CI/CD:** GitHub Actions
- **Deployment:** GitHub Pages / Static hosting

## Development

### Project Scripts

```bash
# Start development server
npm start --web

# Build for production
npm run build

# Run linter
npm run lint

```

