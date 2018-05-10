const router = require("express").Router();
router
  .route("/")
  .get(articlesController.findAll)
  .post(articlesController.create);
router
  .route("/:id")
  .delete(articlesController.remove);

module.exports = router;
