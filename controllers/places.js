const router = require("express").Router();
const places = require("../models/places");

router.get("/", (req, res) => {
    // res.send("GET /places");
    res.render("places/index", {places});
});
router.post("/", (req, res) => {
    //console.log(req.body);
    if (!req.body.pic) {
        // Default image if one is not provided
        req.body.pic = "http://placekitten.com/400/400";
    }
    if (!req.body.city) {
        req.body.city = "Anytown";
    }
    if (!req.body.state) {
        req.body.state = "USA";
    }
    places.push(req.body);
    res.redirect("/places");
});
router.get("/new", (req, res) => {
    // res.send("Form page for creating a new place");
    res.render("places/new");
});
router.get("/:id", (req, res) => {
    let id = Number(req.params.id);
    if (isNaN(id)) {
        res.render("error404");
    } else if (!places[id]) {
        res.render("error404");
    } else {
        res.render("places/show", {
            place: places[id],
        });
    }
});
// router.post("/:id", (req, res) => {
//     res.send("Update a particular place, id = " + req.params.id);
// });
// router.get("/:id/edit", (req, res) => {
//     res.send("Form page for editing an existing place, id = " + req.params.id);
// });
// router.delete("/:id", (req, res) => {
//     res.send("Delete a particular place, id = " + req.params.id);
// });
// router.post("/:id/rant", (req, res) => {
//     res.send(
//         "Create a rant (comment) about a particular place, id = " +
//             req.params.id
//     );
// });
// router.delete("/:id/rant/:rantId", (req, res) => {
//     res.send(
//         `Delete a rant (comment) about a particular place, id = ${req.params.id}, rantId = ${req.params.rantId}`
//     );
// });

module.exports = router;
