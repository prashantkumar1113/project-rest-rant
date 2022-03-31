const React = require("react");
const Def = require("../default");

function show({place}) {
    let comments = <h3 className="inactive">No comments yet!</h3>;
    let rating = <h3 className="inactive">No ratings yet!</h3>;
    if (place.comments.length) {
        comments = place.comments.map((comment) => {
            return (
                <div className="border">
                    <h2 className="rant">
                        {comment.rant ? "Rant! 😡" : "Rave! 😻"}
                    </h2>
                    <h4>{comment.content}</h4>
                    <h3>
                        <stong>- {comment.author}</stong>
                    </h3>
                    <h4>Rating: {comment.stars}</h4>
                </div>
            );
        });
        let sumRatings = place.comments.reduce((tot, c) => {
            return tot + c.stars;
        }, 0);
        let averageRating = Math.round(sumRatings / place.comments.length);
        let stars = "";
        for (let i = 0; i < averageRating; i++) {
            stars += "⭐️";
        }
        rating = <h3>{stars} stars</h3>;
    }

    return (
        <Def>
            <main>
                <div className="row">
                    <div className="col-md-6">
                        <img src={place.pic} width={"50%"}></img>
                        <h3 className="mt-3">
                            Located in {place.city}, {place.state}
                        </h3>
                    </div>
                    <div className="col-md-6">
                        <h1>{place.name}</h1>
                        <h2>Rating</h2>
                        {rating}
                        <br />

                        <div className="d-grid gap-2 d-md-block">
                            <h2>Description</h2>
                            <h3>{place.showEstablished()}</h3>
                            <h4>Serving {place.cuisines}</h4>
                            <form
                                method="POST"
                                action={`/places/${place.id}?_method=DELETE`}
                            >
                                <a
                                    href={`/places/${place.id}/edit`}
                                    className="btn btn-warning"
                                >
                                    Edit
                                </a>

                                <button
                                    type="submit"
                                    className="btn btn-danger"
                                >
                                    Delete
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                {/* <div>
                    <h2>Rating</h2>
                    <p>No ratings yet</p>
                </div> */}
                <hr />
                <div className="row">
                    <div className="col-md-6">
                        <h2>Add a comment</h2>
                        <form
                            method="POST"
                            action={`/places/${place.id}/comment`}
                        >
                            <div className="mb-3 row">
                                <label
                                    htmlFor="author"
                                    className="col-sm-2 col-form-label"
                                >
                                    Author
                                </label>
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="author"
                                        name="author"
                                    />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label
                                    htmlFor="rant"
                                    className="col-sm-2 col-form-label"
                                >
                                    Rant
                                </label>
                                <div className="col-sm-10">
                                    <div className="form-check form-switch">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            role="switch"
                                            id="rant"
                                            name="rant"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label
                                    htmlFor="stars"
                                    className="col-sm-2 col-form-label"
                                >
                                    Stars
                                </label>
                                <div className="col-sm-10">
                                    <input
                                        type="range"
                                        id="stars"
                                        name="stars"
                                        className="form-range"
                                        min="1"
                                        max="5"
                                        step="0.5"
                                    />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label
                                    htmlFor="content"
                                    className="col-sm-2 col-form-label"
                                >
                                    Content
                                </label>
                                <div className="col-sm-10">
                                    <textarea
                                        id="content"
                                        name="content"
                                        className="form-control"
                                    ></textarea>
                                </div>
                            </div>

                            <button
                                className="btn btn-lg btn-primary mt-3"
                                type="submit"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <div>
                            <h2>Comments</h2>
                            <p>{comments}</p>
                        </div>
                    </div>
                </div>
            </main>
        </Def>
    );
}

module.exports = show;
