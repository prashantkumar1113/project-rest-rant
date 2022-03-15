const React = require("react");
const Def = require("../default.jsx");

function edit_form({place, id}) {
    return (
        <Def>
            <main>
                <h1>Edit Place</h1>
                <form method="POST" action={`/places/${id}?_method=PUT`}>
                    <div className="row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="name">Place Name</label>
                            <input
                                id="name"
                                name="name"
                                className="form-control"
                                defaultValue={place.name}
                            />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="pic">Place Picture</label>
                            <input
                                id="pic"
                                name="pic"
                                className="form-control"
                                defaultValue={place.pic}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="city">City</label>
                            <input
                                id="city"
                                name="city"
                                className="form-control"
                                defaultValue={place.city}
                            />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="state">State</label>
                            <input
                                id="state"
                                name="state"
                                className="form-control"
                                defaultValue={place.state}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-sm-12">
                            <label htmlFor="cuisines">Cuisines</label>
                            <input
                                id="cuisines"
                                name="cuisines"
                                className="form-control"
                                defaultValue={place.cuisines}
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

module.exports = edit_form;
