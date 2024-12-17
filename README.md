# FilmFlow 🎬
FilmFlow is a React Native-based movie browsing application inspired by Netflix. It allows users to browse movies, view details, and search for specific titles using data provided by the TVMaze API.
## Features
-  Splash Screen with Custom Animation
-  Home Screen: Display a list of movies with images, titles, and summaries
-  Search Screen: Search for any movie dynamically
-  Details Screen: View detailed information, including ratings, language, genres, and episodes
-  Bottom Navigation for smooth app navigation
-  Optimized UI inspired by Netflix
## Screens Overview
1. Splash Screen
  A custom splash screen that displays a logo and theme.
2. Home Screen
   - Fetches and displays a list of movies using the ``` https://api.tvmaze.com/search/shows?q=all ``` endpoint.
   - Includes a search bar at the top that redirects to the Search Screen.
3. Search Screen
   - Allows users to search for movies.
   - Utilizes the endpoint: ``` https://api.tvmaze.com/search/shows?q=${search_term} ```
   - Displays results in a format similar to the Home Screen.
4. Details Screen
   - Image
   - Title
   - Summary
   - Rating
   - Genres
   - Language
   - Displays previous and next episodes (if available).

## Tech Stack
  - React Native: Core framework for mobile app development
  - Expo: Simplified React Native development and deployment.
  - TVMaze API: Source for movie data.
  - JavaScript: The primary programming language.

## Steps to Run the Project
   1. Clone the Repository
      
      ```bash
      git clone https://github.com/yourusername/FilmFlow.git
      cd FilmFlow
      ```
  2. Install Dependencies
     ```bash
      npm install
     ```
  3. Start the Expo Development Server
     ```bash
     expo start
     ```
  4.  Run on Emulator or Device
      - Scan the QR code using the Expo Go app (Android/iOS).
      - Or use an emulator (Android Studio / Xcode).

  ## Screenshots
  [Screenshot](https://drive.google.com/drive/folders/1YaLZsTFxcvfXbVLAz3GPoFMhXCg0AoJM?usp=drive_link)
  
  ## Demo Video
  [video](https://drive.google.com/file/d/1c7fpz7TqY8eF9_XuGVICIDybtsP7OH4z/view?usp=sharing) 
