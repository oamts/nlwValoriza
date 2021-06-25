import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListUserController } from "./controllers/ListUsersController";

import { ListTagsController } from "./controllers/ListTagsController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSendComplimentsController =
  new ListUserSendComplimentsController();
const listUserReceiveComplimentsController =
  new ListUserReceiveComplimentsController();
const listTagsController = new ListTagsController();
const listUserController = new ListUserController();

router.post("/users", createUserController.handler);

router.get("/users", ensureAuthenticated, listUserController.handle);

router.post(
  "/tags",
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handler
);

router.post("/login", ensureAdmin, authenticateUserController.handler);

router.post(
  "/compliments",
  ensureAuthenticated,
  ensureAdmin,
  createComplimentController.handler
);

router.get(
  "/user/compliments/send",
  ensureAuthenticated,
  listUserSendComplimentsController.handler
);

router.get(
  "/user/compliments/receive",
  ensureAuthenticated,
  listUserReceiveComplimentsController.handler
);

router.get("/tags", ensureAuthenticated, listTagsController.handle);

export { router };
