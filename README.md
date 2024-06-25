# News App README
#Created By Jatin Sood 
## Overview

Welcome to the News App! This project is built using React and Bootstrap to provide a responsive and dynamic news browsing experience. It fetches news articles from [NewsAPI.org](https://newsapi.org) and allows users to filter news based on different categories. Key features include infinite scrolling, routing, and a top loader to enhance user experience.

## Features

- **React**: A JavaScript library for building user interfaces.
- **Bootstrap**: A front-end framework for developing responsive and mobile-first websites.
- **NewsAPI.org**: A service to fetch news articles.
- **Infinite Scroll**: Automatically loads more news articles as the user scrolls down.
- **React Router**: Handles navigation within the app.
- **React Top Loader**: Displays a loading bar at the top of the page during API calls.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   git clone https://github.com/Jatin17248/news.git
   

2. Navigate to the project directory:
   cd news-app
   

3. Install the dependencies:
   
   npm install
   

4. Create a `.env` file in the root directory and add your NewsAPI key:
   
   REACT_APP_NEWS_API_KEY=your_newsapi_key
   

### Running the App

To start the development server, run:

npm start


The app will be available at `http://localhost:3000`.

## Project Structure

```
news-app/
│
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── components/
│   │   ├── NewsItem.js
│   │   ├── News.js
│   │   ├── Navbar.js
│   │   └── ...
│   │
│   │
│   ├── App.js
│   ├── index.js
│   └── ...
│
├── .env
├── package.json
└── README.md
```

## Usage

### Navigation

- **Home Page**: Displays the latest news articles.
- **Category Pages**: Filter news by categories like Business, Technology, Sports, etc.
- Use the navigation bar to switch between different categories.

### Infinite Scroll

The app uses infinite scrolling to load more articles as you reach the bottom of the page.

### Top Loader

A top loader is displayed whenever there is an ongoing API request to fetch news articles.

## API Reference

The app uses [NewsAPI.org](https://newsapi.org) to fetch news articles. Ensure you have a valid API key and set it in the `.env` file as described above.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---
Thanks
Happy coding! If you have any questions, feel free to open an issue or contact the project maintainers.
