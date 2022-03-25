const React = require("react");
const Def = require("../default");

function show({place}) {
    let comments = <h3 className="inactive">No comments yet!</h3>;

    if (place.comments.length > 0) {
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
    }

    return (
        <Def>
            <main>
                <h1>{place.name}</h1>
                <img src={place.pic} width={"50%"}></img>
                <h3>
                    Located in {place.city}, {place.state}
                </h3>
                <div>
                    <h2>Description</h2>
                    <h3>{place.showEstablished()}</h3>
                    <h4>Serving {place.cuisines}</h4>
                </div>
                {/* <div>
                    <h2>Rating</h2>
                    <p>No ratings yet</p>
                </div> */}
                <hr />
                <div>
                    <h2>Comments</h2>
                    <p>{comments}</p>
                </div>
                <a
                    href={`/places/${place.id}/edit`}
                    className="btn btn-warning"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-pencil-square"
                        viewBox="0 0 16 16"
                    >
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path>
                        <path
                            fill-rule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                        ></path>
                    </svg>{" "}
                    Edit
                </a>
                <form
                    method="POST"
                    action={`/places/${place.id}?_method=DELETE`}
                >
                    <button type="submit" className="btn btn-danger">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-trash-fill"
                            viewBox="0 0 16 16"
                        >
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                        </svg>{" "}
                        Delete
                    </button>
                </form>
                <form method="POST" action={`/places/${place.id}/comment`}>
                    <div className="row">
                        <div className="form-group col-sm-6 col-md-4 col-lg-3">
                            <label htmlFor="author">Author</label>
                            <input
                                id="author"
                                name="author"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group col-sm-6 col-md-4 col-lg-3">
                            <label htmlFor="rant">Rant</label>
                            <input type="checkbox" id="rant" name="rant" />
                        </div>
                        <div className="form-group col-sm-6 col-md-4 col-lg-3">
                            <label htmlFor="stars">Stars</label>
                            <input
                                type="number"
                                id="stars"
                                name="stars"
                                className="form-control"
                                min="1"
                                max="5"
                                step="0.5"
                            />
                        </div>
                        <div className="form-group col-sm-6 col-md-4 col-lg-3">
                            <label htmlFor="content">Content</label>
                            {/* <input
                                id="content"
                                name="content"
                                className="form-control"
                            /> */}
                            <textarea
                                id="content"
                                name="content"
                                className="form-control"
                            ></textarea>
                        </div>
                    </div>

                    <button className="btn btn-lg btn-primary" type="submit">
                        Submit
                    </button>
                </form>
            </main>
        </Def>
    );
}

module.exports = show;
