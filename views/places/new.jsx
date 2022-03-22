const React = require("react");
const Def = require("../default");

function new_form(data) {
    // console.log(data.formData);
    let message = "";
    if (data.message) {
        message = <div className="alert alert-danger">{data.message}</div>;
    }
    return (
        <Def>
            <main>
                <h1>Add a New Place</h1>

                <form method="POST" action="/places">
                    <div className="row">
                        {message}
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <div className="form-group">
                                <label htmlFor="name">Place Name</label>
                                {data.formData.name ? (
                                    <input
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        value={data.formData.name}
                                        required
                                    />
                                ) : (
                                    <input
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        value=""
                                        required
                                    />
                                )}
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <div className="form-group">
                                <label htmlFor="pic">Place Picture</label>
                                {data.formData.pic ? (
                                    <input
                                        className="form-control"
                                        id="pic"
                                        name="pic"
                                        value={data.formData.pic}
                                    />
                                ) : (
                                    <input
                                        className="form-control"
                                        id="pic"
                                        name="pic"
                                    />
                                )}
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <div className="form-group">
                                <label htmlFor="city">City</label>
                                {data.formData.city ? (
                                    <input
                                        className="form-control"
                                        id="city"
                                        name="city"
                                        value={data.formData.city}
                                    />
                                ) : (
                                    <input
                                        className="form-control"
                                        id="city"
                                        name="city"
                                    />
                                )}
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <div className="form-group">
                                <label htmlFor="state">State</label>
                                {data.formData.state ? (
                                    <input
                                        className="form-control"
                                        id="state"
                                        name="state"
                                        value={data.formData.state}
                                    />
                                ) : (
                                    <input
                                        className="form-control"
                                        id="state"
                                        name="state"
                                    />
                                )}
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <div className="form-group">
                                <label htmlFor="cuisines">Cuisines</label>
                                {data.formData.cuisines ? (
                                    <input
                                        className="form-control"
                                        id="cuisines"
                                        name="cuisines"
                                        value={data.formData.cuisines}
                                        required
                                    />
                                ) : (
                                    <input
                                        className="form-control"
                                        id="cuisines"
                                        name="cuisines"
                                        required
                                    />
                                )}
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 form-group">
                            <div className="form-group">
                                <label for="founded">Founded Year</label>
                                {data.formData.founded ? (
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="founded"
                                        name="founded"
                                        value={data.formData.founded}
                                    />
                                ) : (
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="founded"
                                        name="founded"
                                        value={new Date().getFullYear()}
                                    />
                                )}
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
