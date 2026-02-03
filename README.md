# vnest

A React web application for learning Finnish verb conjugations and sentence structure through interactive, game-based exercises. VNeST (Verb, Noun/Noun Phrase, Sentence Training) is designed as a therapeutic tool for aphasia patients to improve language skills through engaging gameplay.


### Install Dependencies

```bash
# Install root dependencies
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
npm run build
```

The build output will be in `frontend/dist/`. These static files can be deployed to any static hosting service.

### Linting

```bash
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
```

## License / information
The repository for this app is hosted at https://github.com/Hakalath/vnest

The repository is a detached* fork of the Tampere University student project developed by 
Eder, Paul (@paul-j-eder)
Hakala, Thomas (@hakaltho)
Kuts, Diana,
Kuusjärvi, Aava
Tran, Anh (@trnvanh)
Varrela, Essi (@varress)
The original project repository can be found at https://github.com/varress/vnest-monorepo

*Why detached? Because I (@hakaltho) was a project manager with poor technical skills. For the course purposes, I promised the customer a simplified version of the project, that is only the static fronend without the databases, APIs, bells, whistles, etc.
The fork I created for the purpose of hacking away the backend bits has an extremely embarrassing commit history of me trying to get the thing to deploy succesfully on Github Pages. I want no public trace of that atrocity, so I "fork --depth 1"'d my fork to hide my shameful secrets from the world.

If you (possibly a COMP.SE student at Tampere University) have been tasked with the unfortunate task of further developing the application, continue developing the vnest-monorepo linked above. This current piece of junk is mostly me prompting Copilot to help me hack away the backend while keeping the frontend approximately intact. The code in __this__ repo should not be developed further.

The original project was set to develop the app with open source. Since it was a somewhat poorly managed school project, we never set up actual license information for the text. However, the group consensus was that you are free to further develop with this code, if you wish. You will probably be better off starting from scratch, though.