const React = require("react");
const Def = require("../default");

function show({place, id}) {
    return (
        <Def>
            <main>
                <h1>{place.name}</h1>
                <img src={place.pic} width={"50%"}></img>
                <div>
                    <h2>Rating</h2>
                    <p>No ratings yet</p>
                </div>
                <div>
                    <h2>Description</h2>
                    <p>
                        Located in {place.city}, {place.state} and serving{" "}
                        {place.cuisines}
                    </p>
                </div>
                <div>
                    <h2>Comments</h2>
                    <p>No comments yet</p>
                </div>
                <a href={`/places/${id}/edit`} className="btn btn-warning">
                    Edit
                </a>
                <form method="POST" action={`/places/${id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>
            </main>
        </Def>
    );
}

module.exports = show;
