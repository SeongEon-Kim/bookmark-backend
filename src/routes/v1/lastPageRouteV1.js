const Router = require("koa-router");
const LastPageController = require("../../controllers/lastPageController");

const lastPageAPIV1 = (root) => {
  const router = Router();

  root.use("/library/lastpage", router.routes());

  router.post("/:bookId", LastPageController.lastPageController);
};

const lastPageRouteV1 = (root) => {
  console.log("router !!");
  lastPageAPIV1(root);
};

module.exports = { lastPageRouteV1 };
