const test = require('tape')
const rep = require('./repository')

function runTests() {
    var cityId = null
    var cinemaId = null
    var movieId = null

    test('Repository getAllCities', t => {
        rep.getAllCities((err, cities) => {
            if (cities && cities.length > 0) cityId = cities[1]._id

            t.assert(!err && cities && cities.length > 0, 'All Cities Returned')
            t.end()
        })
    })

    test('Repository getCinemasByCityId', t => {
        rep.getCinemasByCityId(cityId, (err, cinemas) => {
            if (cinemas && cinemas.length > 0) cinemaId = cinemas[0]._id

            t.assert(!err && cinemas && cinemas.length > 0, 'All Cinemas Returned By City Id')
            t.end()
        })
    })

    test('Repository getMoviesByCinemaId', (t) => {
        rep.getMoviesByCinemaId(cinemaId, (err, movies) => {
            t.assert(!err && movies && movies.length > 0, "Movies By Cinema Id Returned")
            t.end()
        })
    })

    test('Repository getMoviesByCityId', (t) => {
        rep.getMoviesByCityId(cityId, (err, movies) => {
            if(movies && movies.length > 0) movieId = movies[0].idFilme//Era de Ultron
            t.assert(!err && movies && movies.length > 0, "Movies By City Id Returned")
            t.end()
        })
    })

    test('Repository getMovieSessionsByCityId', (t) => {
        rep.getMovieSessionsByCityId(movieId, cityId, (err, sessions) => {
            t.assert(!err && sessions && sessions.length > 0, "Movie Sessions By City Id Returned")
            t.end()
        })
    })

    test('Repository getMovieSessionsByCinemaId', (t) => {
        rep.getMovieSessionsByCinemaId(movieId, cinemaId, (err, sessions) => {
            t.assert(!err && sessions && sessions.length > 0, "Movie Sessions By Cinema Id Returned")
            t.end()
        })
    })

    test('Repository Disconnect', t => {
        t.assert(rep.disconnect(), 'Disconnect Ok')
        t.end()
    })
}

module.exports = { runTests }