# Task

Design a URL shortener service that takes in a valid URL and returns a shortened URL, redirecting the user to the previously provided URL.

Also, keep track of total visits/clicks on the URL.

## Routes:

- POST /URL - Generates a new short URL and returns the shortened URL in the format example.com/random-id.

- GET /:id - Redirects the user to the original URL

- GET /URL/analytics/:id - Returns the clicks for the provided short id.

In controllers we write functions that need to go inside the route function i.e after say router.post('/',function)
firstly create schema/ model in models-> create route -> create controller function -> install short id ->create model ->expotr everyhting insde index.js -> make mongodb connection inside connect.js
