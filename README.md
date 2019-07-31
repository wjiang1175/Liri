# Liri

LIRI is a command line node app that takes in commands (sportify, band, movie, and read) and gives you back data accordingly.

## Liri Command
```node liri.js(command) (search item)``` LIRI takes in two user arguments, the first one specifies what kind of category you want to search; the second one is the item to search for

## Spotify
The ```Spotify``` command will search for a song track, it will then display Artist(s)The song's name, a preview link of the song, and the album that the song is from.

## Band In Town
The ```band``` command uses the Bands in Town API and uses the search item to show you the latest venue of the artist you searched for.

## Movie
The movie command uses OMDB's API to retrieve the search item the user provides. This is the ouput of the search

- Title of the movie.
- Year the movie came out.
- IMDB Rating of the movie.
- Rotten Tomatoes Rating of the movie.
- Country where the movie was produced.
- Language of the movie.
- Plot of the movie.
- Actors in the movie.