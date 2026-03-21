const express = require('express')
const path = require('path')
const app = express()

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for data..
app.get('/movies', function (req, res) {
  // Part 1: Remove the next line and replace with your code
  
  const movies =
    [
  {
    "Title": "The Thing",
    "Released": "1982-06-25",
    "Runtime": 109,
    "Genres": ["Horror", "Mystery", "Sci-Fi"],
    "Directors": ["John Carpenter"],
    "Writers": ["Bill Lancaster", "John W. Campbell Jr."],
    "Actors": ["Kurt Russell", "Wilford Brimley", "Keith David"],
    "Plot": "A research team in Antarctica is hunted by a shape-shifting alien that assumes the appearance of its victims.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYTA3NDU5MWEtNTk4Yy00ZDNkLThmZTQtMjU3ZGVhYzAyMzU4XkEyXkFqcGc@._V1_SX300.jpg",
    "Metascore": 57,
    "imdbRating": 8.2
  },
  {
  "Title": "Avatar",
  "Released": "18 Dec 2009",
  "Runtime": 162,
  "Genres": ["Action", "Adventure", "Fantasy"],
  "Directors": ["James Cameron"],
  "Writers": ["James Cameron"],
  "Actors": ["Sam Worthington", "Zoe Saldaña", "Sigourney Weaver"],
  "Plot": "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMDEzMmQwZjctZWU2My00MWNlLWE0NjItMDJlYTRlNGJiZjcyXkEyXkFqcGc@._V1_SX300.jpg",
  "Metascore": 83,
  "imdbRating": 7.9
  },
  {
  "Title": "Robin Hood",
  "Released": "2010-05-14",
  "Runtime": 140,
  "Genres": ["Action", "Adventure", "Drama"],
  "Directors": ["Ridley Scott"],
  "Writers": ["Brian Helgeland", "Ethan Reiff", "Cyrus Voris"],
  "Actors": ["Russell Crowe", "Cate Blanchett", "Matthew Macfadyen"],
  "Plot": "In twelfth-century England, Robin Longstride and his band of marauders confront corruption in a local village and lead an uprising against the crown that will forever alter the balance of world power.",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMTM5NzcwMzEwOF5BMl5BanBnXkFtZTcwNjg5MTgwMw@@._V1_SX300.jpg",
  "Metascore": 53,
  "imdbRating": 6.6
  }
]
  res.send(movies)
})

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")

