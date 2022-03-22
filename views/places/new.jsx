const React = require("react");
const Def = require("../default");

function new_form() {
    return (
        <Def>
            <main>
                <h1>Add a New Place</h1>
                <form method="POST" action="/places">
                    <div className="row">
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <div className="form-group">
                                <label htmlFor="name">Place Name</label>
                                <input
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <div className="form-group">
                                <label htmlFor="pic">Place Picture</label>
                                <input
                                    className="form-control"
                                    id="pic"
                                    name="pic"
                                />
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <div className="form-group">
                                <label htmlFor="city">City</label>
                                <input
                                    className="form-control"
                                    id="city"
                                    name="city"
                                />
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <div className="form-group">
                                <label htmlFor="state">State</label>
                                <input
                                    className="form-control"
                                    id="state"
                                    name="state"
                                />
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <div className="form-group">
                                <label htmlFor="cuisines">Cuisines</label>
                                <input
                                    className="form-control"
                                    id="cuisines"
                                    name="cuisines"
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 form-group">
                            <div className="form-group">
                                <label for="founded">Founded Year</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="founded"
                                    name="founded"
                                    value={new Date().getFullYear()}
                                />
                            </div>
                        </div>
                    </div>

                    <button className="btn btn-lg btn-primary" type="submit">
                        Add a place
                    </button>
                </form>
            </main>
        </Def>
    );
}

module.exports = new_form;
