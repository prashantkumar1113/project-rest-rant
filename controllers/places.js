const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("GET /places");
});
router.post("/", (req, res) => {
    res.send("Create new place");
});
router.get("/new", (req, res) => {
    res.send("Form page for creating a new place");
});
router.get("/:id", (req, res) => {
    res.send("Details about a particular place, id = " + req.params.id);
});
router.post("/:id", (req, res) => {
    res.send("Update a particular place, id = " + req.params.id);
});
router.get("/:id/edit", (req, res) => {
    res.send("Form page for editing an existing place, id = " + req.params.id);
});
router.delete("/:id", (req, res) => {
    res.send("Delete a particular place, id = " + req.params.id);
});
router.post("/:id/rant", (req, res) => {
    res.send(
        "Create a rant (comment) about a particular place, id = " +
            req.params.id
    );
});
router.delete("/:id/rant/:rantId", (req, res) => {
    res.send(
        `Delete a rant (comment) about a particular place, id = ${req.params.id}, rantId = ${req.params.rantId}`
    );
});

module.exports = router;
