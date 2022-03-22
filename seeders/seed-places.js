const db = require("../models");

db.Place.create([
    {
        name: "H-Thai-ML",
        city: "Seattle",
        state: "WA",
        cuisines: "Thai, Pan-Asian",
        pic: "/images/restaurants/mgg-vitchakorn-vBOxsZrfiCw-unsplash.jpeg",
        founded: 1989,
    },
    {
        name: "Coding Cat Cafe",
        city: "Phoenix",
        state: "AZ",
        cuisines: "Coffee, Bakery",
        pic: "/images/restaurants/dan-gold-E6HjQaB7UEA-unsplash.jpeg",
        founded: 2020,
    },
])
    .then(() => {
        console.log("Success!");
        process.exit();
    })
    .catch((err) => {
        console.log("Failure!", err);
        process.exit();
    });
