const React = require("react");
const Def = require("../default");

function index({places}) {
    let placesFormated = places.map((place) => {
        return (
            <div className="col-sm-3 card" id={place.id}>
                <div className="card-header">
                    <h2>
                        <a href={`/places/${place.id}`}>{place.name}</a>
                    </h2>
                </div>
                <div className="card-body">
                    <p className="text-center">{place.cuisines}</p>
                    <img src={place.pic} alt={place.name} width={"100%"} />
                    <p className="text-center">
                        Located in {place.city}, {place.state}
                    </p>
                </div>
            </div>
        );
    });
    return (
        <Def>
            <main>
                <h1>Places Index Page</h1>
                <row className="row">{placesFormated}</row>
                <a href="/places/new">
                    <button className="btn btn-primary">Add New</button>
                </a>
            </main>
        </Def>
    );
}

module.exports = index;
