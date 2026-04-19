/* Task 1.1. Add your movie data here 
   and export it so it's available in server.js */
   
const movies = {
  tt0107290: {
    imdbID: "tt0107290",
    Title: "Jurassic Park",
    Released: "1993-06-11",
    Runtime: 127,
    Genres: ["Action", "Adventure", "Sci-Fi"],
    Directors: ["Steven Spielberg"],
    Writers: ["Michael Crichton", "David Koepp"],
    Actors: ["Sam Neill", "Laura Dern", "Jeff Goldblum"],
    Plot: "Huge advancements in scientific technology have enabled a mogul to create an island full of living dinosaurs...",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg",
    Metascore: 68,
    imdbRating: 8.2
  },

  tt9999991: {
    imdbID: "tt9999991",
    Title: "Megalodon",
    Released: "2020-03-05",
    Runtime: 88,
    Genres: ["Action", "Adventure", "Horror"],
    Directors: ["James Thomas"],
    Writers: ["Koichi Petetsky", "Thunder Levin", "Canyon Prince"],
    Actors: ["Michael Madsen", "Dominic Pace", "Caroline Harris"],
    Plot: "A military vessel on the search for an unidentified submersible...",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGZkZGVmZTktNTE5Ny00YzNmLWI0ZmYtMzBhYjU2NmU4ZWNiXkEyXkFqcGc@._V1_SX300.jpg",
    Metascore: 0,
    imdbRating: 2.8
  },

  tt0360717: {
    imdbID: "tt0360717",
    Title: "King Kong",
    Released: "2005-12-14",
    Runtime: 187,
    Genres: ["Action", "Adventure", "Romance"],
    Directors: ["Peter Jackson"],
    Writers: ["Fran Walsh", "Philippa Boyens", "Peter Jackson"],
    Actors: ["Naomi Watts", "Jack Black", "Adrien Brody"],
    Plot: "Carl Denham needs to finish his movie and has the perfect location...",
    Poster: "https://m.media-amazon.com/images/M/MV5BMWY0NWE0ZjUtNjRlOS00ZDViLTgxNTQtMGMwN2FhNDY1YTg2XkEyXkFqcGc@._V1_SX300.jpg",
    Metascore: 81,
    imdbRating: 7.2
  }
};

module.exports = movies;