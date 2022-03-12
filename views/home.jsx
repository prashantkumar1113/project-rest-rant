const React = require("react");
const Def = require("./default");

function home() {
    return (
        <Def>
            <main>
                <h1>Home</h1>
                <div>
                    <img
                        src="./images/jae-bano-Xbf_4e7YDII-unsplash.jpeg"
                        alt="sunset pic"
                        width={"50%"}
                    ></img>
                    <div>
                        Photo by{" "}
                        <a
                            href="https://unsplash.com/@jae462"
                            target={"_blank"}
                        >
                            jae bano
                        </a>{" "}
                        on{" "}
                        <a
                            href="https://unsplash.com/photos/Xbf_4e7YDII"
                            target={"_blank"}
                        >
                            Unsplash
                        </a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    );
}

module.exports = home;
