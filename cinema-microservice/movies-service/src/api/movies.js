module.exports = (app, rep) => {
    app.get('/movies', (req, res, next) => {
        rep.getAllMovies((err, movies) => {
            if (err) return next(err)
            res.json(movies)
        })
    })

    app.get('/movies/premieres', (req, res, next) => {
        rep.getMoviePremiers((err, movies) => {
            if (err) return next(err)
            res.json(movies)
        })
    })

    app.get('/movies/:id', (req, res, next) => {
        rep.getMovieById(req.params.id, (err, movie) => {
            if (err) return next(err)
            res.json(movie)
        })
    })
}