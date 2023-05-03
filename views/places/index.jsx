const React = require('react')
// the periods in this '../default'. One period steps up the tree once, two periods steps up the tree twice, and so since it's in 'places' folder, it needed to step up twice before being able to be read.
const Def = require('../default')

function Index ({ places }) {
    let placesFormatted = places.map(place => {
        return (
            <div>
                <h2>{place.name}</h2>
                <img className='place-pic' src={place.pic} alt={place.name} />
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>index</h1>
                {placesFormatted}
            </main>
        </Def>
    )
}

module.exports = Index