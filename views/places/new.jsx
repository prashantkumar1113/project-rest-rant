const React = require("react");
const Def = require("../default");

function newPlace() {
    return (
        <Def>
            <main>
                <form action="/places" method="post">
                    <div>
                        <label>Name:</label>
                        <input id="Name"></input>
                    </div>

                    <div>
                        <label>City:</label>
                        <input id="City"></input>
                    </div>

                    <div>
                        <label>State:</label>
                        <input id="State"></input>
                    </div>

                    <div>
                        <label>Cuisines:</label>
                        <input id="Cuisines"></input>
                    </div>

                    <div>
                        <label>Pic:</label>
                        <input id="Pic"></input>
                    </div>

                    <input type="submit"></input>
                </form>
            </main>
        </Def>
    );
}

module.exports = newPlace;
