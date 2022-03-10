const React = require("react");
const Def = require("../default");

function index({places}) {
    let placesFormated = places.map((place) => {
        return (
            <div>
                <h2>{place.name}</h2>
                <img src={place.pic} alt={place.name} />
                <p>{place.city}</p>
                <hr />
            </div>
        );
    });
    return (
        <Def>
            <main>
                <h1>Places Index Page</h1>
                <p>{placesFormated}</p>
            </main>
        </Def>
    );
}

module.exports = index;
