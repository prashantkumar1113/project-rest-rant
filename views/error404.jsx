const React = require("react");
const Def = require("./default");

function error404() {
    return (
        <Def>
            <h1>404: PAGE NOT FOUND</h1>
            <p>Opps, sorry, we can't find this page!</p>
            <img
                src="./images/charlesdeluvio-pOUA8Xay514-unsplash.jpeg"
                width={"50%"}
            ></img>
        </Def>
    );
}

module.exports = error404;
