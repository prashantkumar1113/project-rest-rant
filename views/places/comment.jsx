const React = require("react");
const Def = require("../default");

function comment({restaurantId, restaurantName}) {
    return (
        <Def>
            <main>
                <h1>Comment for {restaurantName}</h1>
                <form method="POST" action={`/places/${restaurantId}/comment`}>
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
                            <input
                                id="content"
                                name="content"
                                className="form-control"
                            />
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

module.exports = comment;
