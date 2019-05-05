export const compileGenres = events => {
    const genres = [];
    events.map(event => {
        let genre = event.classifications[0].genre.name;
        if(genres.indexOf(genre) === -1) genres.push(genre)  //compiling all the different genres
    })
    return genres;
}