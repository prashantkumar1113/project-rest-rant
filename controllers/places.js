const router = require("express").Router();
const db = require("../models");

router.get("/", (req, res) => {
    db.Place.find()
        .then((places) => {
            res.render("places/index", {places});
        })
        .catch((err) => {
            console.log(err);
            res.render("error404");
        });
});

router.post("/", (req, res) => {
    db.Place.create(req.body)
        .then(() => {
            res.redirect("/places");
        })
        .catch((err) => {
            console.log(err);
            res.render("error404");
        });
});

router.get("/new", (req, res) => {
    // res.send("Form page for creating a new place");
    res.render("places/new");
});

router.get("/:id/edit", (req, res) => {
    db.Place.findById(req.params.id)
        .then((place) => {
            res.render("places/edit", {place});
        })
        .catch((err) => {
            console.log(err);
            res.render("error404");
        });
});

router.get("/:id", (req, res) => {
    db.Place.findById(req.params.id)
        .then((place) => {
            res.render("places/show", {place});
        })
        .catch((err) => {
            console.log(err);
            res.render("error404");
        });
});

module.exports = router;
// const router = require("express").Router();
// const places = require("../models/places");

// router.get("/", (req, res) => {
//     // res.send("GET /places");
//     res.render("places/index", {places});
// });
// router.post("/", (req, res) => {
//     //console.log(req.body);
//     if (!req.body.pic) {
//         // Default image if one is not provided
//         req.body.pic = "http://placekitten.com/400/400";
//     }
//     if (!req.body.city) {
//         req.body.city = "Anytown";
//     }
//     if (!req.body.state) {
//         req.body.state = "USA";
//     }
//     places.push(req.body);
//     res.redirect("/places");
// });
// router.get("/new", (req, res) => {
//     // res.send("Form page for creating a new place");
//     res.render("places/new");
// });

// router.get("/:id/edit", (req, res) => {
//     let id = Number(req.params.id);
//     if (isNaN(id)) {
//         res.render("error404");
//     } else if (!places[id]) {
//         res.render("error404");
//     } else {
//         res.render("places/edit", {place: places[id], id});
//     }
// });

// router.get("/:id", (req, res) => {
//     let id = Number(req.params.id);
//     if (isNaN(id)) {
//         res.render("error404");
//     } else if (!places[id]) {
//         res.render("error404");
//     } else {
//         res.render("places/show", {
//             place: places[id],
//             id,
//         });
//     }
// });

// // DELETE
// router.delete("/:id", (req, res) => {
//     let id = Number(req.params.id);
//     if (isNaN(id)) {
//         res.render("error404");
//     } else if (!places[id]) {
//         res.render("error404");
//     } else {
//         places.splice(id, 1);
//         res.redirect("/places");
//     }
// });

// // EDIT
// router.put("/:id", (req, res) => {
//     let id = Number(req.params.id);
//     if (isNaN(id)) {
//         res.render("error404");
//     } else if (!places[id]) {
//         res.render("error404");
//     } else {
//         // Dig into req.body and make sure data is valid
//         if (!req.body.pic) {
//             // Default image if one is not provided
//             req.body.pic = "http://placekitten.com/400/400";
//         }
//         if (!req.body.city) {
//             req.body.city = "Anytown";
//         }
//         if (!req.body.state) {
//             req.body.state = "USA";
//         }

//         // Save the new data into places[id]
//         places[id] = req.body;
//         res.redirect(`/places/${id}`);
//     }
// });

// // router.post("/:id/rant", (req, res) => {
// //     res.send(
// //         "Create a rant (comment) about a particular place, id = " +
// //             req.params.id
// //     );
// // });
// // router.delete("/:id/rant/:rantId", (req, res) => {
// //     res.send(
// //         `Delete a rant (comment) about a particular place, id = ${req.params.id}, rantId = ${req.params.rantId}`
// //     );
// // });

// module.exports = router;
