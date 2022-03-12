const React = require("react");
const Def = require("../default");

function index({places}) {
    let placesFormated = places.map((place) => {
        return (
            <div className="card" style={{width: 18 + "rem"}}>
                <div className="card-header">
                    <h2>{place.name}</h2>
                </div>
                <div className="card-body">
                    <img src={place.pic} alt={place.name} />
                    <p>{place.city}</p>
                </div>
            </div>
        );
    });
    return (
        <Def>
            <main>
                <h1>Places Index Page</h1>
                <row>{placesFormated}</row>
            </main>
        </Def>
    );
}

module.exports = index;
