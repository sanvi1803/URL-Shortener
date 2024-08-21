
# URL Shortener

A simple URL shortener application that allows users to shorten long URLs and track the number of clicks on the shortened links. Built using Node.js, Express, MongoDB, and EJS templating.

## Features

- Shorten URLs by generating unique IDs
- Track the number of clicks on shortened URLs
- Display the original URL, shortened URL, and click count in a table

## Tech Stack

- **Node.js**: Backend framework
- **Express.js**: Web framework for Node.js
- **MongoDB**: Database to store URLs and click history
- **EJS**: Templating engine to render dynamic HTML
- **Tailwind CSS**: Utility-first CSS framework for styling

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/url-shortener.git
   cd url-shortener
   ```

2. **Install dependencies:**

   Install Node.js dependencies using npm:

   ```bash
   npm install
   ```

3. **Install MongoDB:**

   If you don't have MongoDB installed, download and install MongoDB from [here](https://www.mongodb.com/try/download/community).

4. **Set up environment variables:**

   Create a `.env` file at the root of the project and add the following variables:

   ```env
   PORT=4000
   MONGO_URI=mongodb://127.0.0.1:27017/short-url
   ```

5. **Run MongoDB:**

   Start your local MongoDB server:

   ```bash
   mongod
   

6. **Run the application:**

   Start the Express server using the following command:

   ```bash
   npm start
   ```

   The application will be running at `http://localhost:4000`.

## Usage

1. **Navigate to the Home Page:**

   Open your web browser and go to `http://localhost:4000`.

2. **Shorten a URL:**

   Enter the original URL in the input field and click "Generate URL". The shortened URL will be displayed on the page.

3. **View Shortened URLs:**

   The table below the form will list all the shortened URLs, their original URLs, and the number of clicks.

## API Endpoints

- **POST /url**

  - Description: Generate a shortened URL.
  - Body: `url` (The original URL to shorten).

- **GET /url/:shortId**

  - Description: Redirect to the original URL based on the shortened ID.
  - URL Params: `shortId` (The shortened URL ID).

## Contributing

Feel free to submit issues and pull requests to improve the project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```

Feel free to customize the repository URL and other details as needed!
