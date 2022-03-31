const router = require("express").Router();
const db = require("../models");
const placesSeedData = require("../seeders/seed-places");
const commentsSeedData = require("../seeders/seed_comments");

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
    if (!req.body.pic) {
        // Default image if one is not provided
        req.body.pic = "http://placekitten.com/400/400";
    }

    db.Place.create(req.body)
        .then(() => {
            res.redirect("/places");
        })
        .catch((err) => {
            if (err && err.name == "ValidationError") {
                let message = "Validation Error: ";
                for (var field in err.errors) {
                    message += `${field} was ${err.errors[field].value}. `;
                    message += `${err.errors[field].message}`;
                }
                console.log("Validation error message", message);
                res.render("places/new", {message, formData: req.body});
            } else {
                res.render("error404");
            }
        });
});

router.get("/seed/data", (req, res) => {
    db.Place.insertMany(placesSeedData)
        .then(() => {
            res.redirect("/places");
        })
        .catch((err) => {
            console.log(err);
            res.render("error404");
        });
});

router.get("/seed/comments", (req, res) => {
    commentsSeedData();
    res.redirect("/places");
});

router.get("/new", (req, res) => {
    // res.send("Form page for creating a new place");
    res.render("places/new", {formData: {}});
});

router.get("/:id/comment", (req, res) => {
    db.Place.findById(req.params.id)
        .then((place) => {
            res.render("places/comment", {
                restaurantId: place.id,
                restaurantName: place.name,
            });
        })
        .catch((err) => {
            console.log(err);
            res.render("error404");
        });
});

router.post("/:id/comment", (req, res) => {
    req.body.rant === "on" ? (req.body.rant = true) : (req.body.rant = false);
    // console.log(req.body);
    db.Place.findById(req.params.id)
        .then((place) => {
            db.Comment.create(req.body)
                .then((comment) => {
                    place.comments.push(comment.id);
                    place.save().then(() => {
                        res.redirect(`/places/${req.params.id}`);
                    });
                })
                .catch((err) => {
                    // console.log("INNER", err);
                    res.render("error404");
                });
        })
        .catch((err) => {
            // console.log("OUTER");
            res.render("error404");
        });
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
        .populate("comments")
        .then((place) => {
            //console.log(place.comments);
            res.render("places/show", {place});
        })
        .catch((err) => {
            console.log(err);
            res.render("error404");
        });
});

router.put("/:id", (req, res) => {
    db.Place.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then((updatedPlace) => {
            console.log(updatedPlace);
            res.redirect(`/places/${req.params.id}`);
        })
        .catch((err) => {
            console.log("error", err);
            res.render("error404");
        });
});

router.delete("/:id", (req, res) => {
    db.Place.findByIdAndDelete(req.params.id)
        .then((deletedRestaurant) => {
            res.status(303).redirect("/places");
        })
        .catch((err) => {
            console.log("error", err);
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
