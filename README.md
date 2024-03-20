# Weather Dashboard App

Welcome to the Weather Dashboard App!

## How It Works

1. **Input Your City**: Enter the name of the city you want to check the weather for in the input field provided.
  
2. **Get Weather**: Click on the "Get Weather" button to fetch the latest weather data for the city you entered.

3. **Stay Informed**: The app will display essential weather information, including temperature, humidity, wind speed, and more, so you can plan your day accordingly.

## Components Overview

### App.js
- The heart of the application.
- Handles the main functionalities, such as fetching weather data and managing state.
- Coordinates between different components to ensure a smooth user experience.

### WeatherForm.js
- A user-friendly form component.
- Lets you input the city name and submit to fetch weather data.
- Simple and intuitive, making it easy to get weather updates in seconds.

### WeatherDisplay.js
- Your window to the weather world.
- Presents the weather data fetched from the API in a clear and concise manner.
- Gives you the key weather details at a glance, so you're always in the know.

### LoadingIndicator.js
- A friendly helper during data fetching.
- Shows a cute loading animation to keep you entertained while waiting for the weather data to load.
- Ensures you know the app is working hard behind the scenes to get you the latest updates.

## Set Up Your Environment

To get started with the Weather Dashboard App, follow these simple steps:

1. **Create an Account and Obtain API Key**:
   - Visit the WeatherAPI website: [https://www.weatherapi.com/](https://www.weatherapi.com/)
   - Fill in the required information to create your account.
   - Look for the option to generate an API key or access your API key.
   - Copy the existing API key provided to you.

2. **Clone the Repository**: Use `git clone https://github.com/yash1000/Test_react.git` to get a copy of the project on your local machine.

3. **Install Dependencies**: Run `npm install` to install all necessary dependencies.

4. **Configure Environment Variables**:
   - Rename the `.env.example` file to `.env`.
   - Open the `.env` file and add your WeatherAPI key:
     ```
     REACT_APP_WEATHER_API_KEY=YOUR_WEATHERAPI_KEY
     ```
     Replace `YOUR_WEATHERAPI_KEY` with your actual WeatherAPI key.

5. **Start the App**: Run `npm start` to start the development server.

6. **Explore and Enjoy**: Open your browser and visit [http://localhost:3000](http://localhost:3000) to explore the Weather Dashboard App.