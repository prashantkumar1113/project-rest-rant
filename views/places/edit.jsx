const React = require("react");
const Def = require("../default.jsx");

function edit_form({place}) {
    return (
        <Def>
            <main>
                <h1>Edit Place</h1>
                <form method="POST" action={`/places/${place.id}?_method=PUT`}>
                    <div className="row">
                        <div className="form-group col-sm-6 col-md-4 col-lg-3">
                            <label htmlFor="name">Place Name</label>
                            <input
                                id="name"
                                name="name"
                                className="form-control"
                                defaultValue={place.name}
                                required
                            />
                        </div>
                        <div className="form-group col-sm-6 col-md-4 col-lg-3">
                            <label htmlFor="pic">Place Picture</label>
                            <input
                                id="pic"
                                name="pic"
                                className="form-control"
                                defaultValue={place.pic}
                            />
                        </div>
                        <div className="form-group col-sm-6 col-md-4 col-lg-3">
                            <label htmlFor="city">City</label>
                            <input
                                id="city"
                                name="city"
                                className="form-control"
                                defaultValue={place.city}
                            />
                        </div>
                        <div className="form-group col-sm-6 col-md-4 col-lg-3">
                            <label htmlFor="state">State</label>
                            <input
                                id="state"
                                name="state"
                                className="form-control"
                                defaultValue={place.state}
                            />
                        </div>
                        <div className="form-group col-sm-6 col-md-4 col-lg-3">
                            <label htmlFor="cuisines">Cuisines</label>
                            <input
                                id="cuisines"
                                name="cuisines"
                                className="form-control"
                                defaultValue={place.cuisines}
                            />
                        </div>
                        <div className="form-group col-sm-6 col-md-4 col-lg-3 ">
                            <div className="form-group">
                                <label for="founded">Founded Year</label>
                                <input
                                    className="form-control"
                                    id="founded"
                                    name="founded"
                                    defaultValue={place.founded}
                                />
                            </div>
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

module.exports = edit_form;
