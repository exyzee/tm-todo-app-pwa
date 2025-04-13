# Todo App - PWA

A dynamic and interactive task manager with added features like live music (Fred Again's Boiler Room set), weather updates, and time. The app allows users to create tasks, mark them as done, and sort tasks by status. It also includes a draggable window for the music player and auto-updates weather and time information in real-time. The app is built as a Progressive Web App (PWA) for offline functionality and native app-like experience.

![image](https://github.com/user-attachments/assets/9c05b09e-9f51-4d3d-98be-54ba4326b6c4)

Figma: https://www.figma.com/design/LxIQaCRxqc4cWZpLG2zLSS/Todo-App?node-id=0-1&t=k1DF12OYiZtCpgH1-1

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [PWA Features](#pwa-features)
- [Deployment](#deployment)
- [Usage](#usage)
- [Contributing](#contributing)

## Description

This is a React-based task manager app that integrates the following cool features:
- **Task Creation & Management**: Add, view, and mark tasks as done. Tasks are sortable between "All," "Done," and "Pending" statuses.
- **Fred Again's Boiler Room Set**: A draggable window that plays Fred Again's Boiler Room set to provide an energetic vibe while you work on tasks.
- **Weather & Time**: Displays the current time and weather on the top corner for a more immersive experience.
- **Task Sorting**: Tasks can be filtered into "All," "Done," or "Pending" categories.
- **Responsive Design**: The interface is mobile-friendly and supports various screen sizes.
- **Progressive Web App**: Works offline and can be installed on supported devices.

## Features

- Create tasks with titles and descriptions
- Tasks can be marked as "Done" with a strikethrough effect
- Filter tasks by their status: All, Done, Pending
- Draggable window for Fred Again's Boiler Room set with auto-play and weather updates
- Auto-updating time and weather in the top corner of the app
- Offline functionality through service worker caching
- Installable on supported devices
- Mobile-responsive design

## Technologies Used

- React.js
- HTML, CSS, JavaScript
- YouTube API for Fred Again's Boiler Room set
- OpenWeather API for live weather updates
- Day.js for time formatting
- Service Workers for PWA functionality
- Web App Manifest for installability

## Installation

1. Clone the repository:
   ```bash
   git clone [repository-url]
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Build for production:
   ```bash
   npm run build
   ```

5. Serve the production build:
   ```bash
   npx serve -s build
   ```

## PWA Features

The app is built as a Progressive Web App with the following features:
- **Offline Functionality**: Core app features work without an internet connection
- **Installable**: Can be added to home screen on mobile devices and desktops
- **App-like Experience**: Full-screen mode and native app feel
- **Automatic Updates**: Service worker ensures the app is always up to date
- **Responsive**: Works on all screen sizes and orientations

## Deployment

The app can be deployed to various platforms. Here's how to deploy to common hosting services:

### GitHub Pages
1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to package.json:
   ```json
   {
     "homepage": "https://[username].github.io/[repo-name]",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

