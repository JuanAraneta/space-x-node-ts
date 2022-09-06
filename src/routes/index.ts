import { Router } from "express";
import launches from "./launches";
import favorites from "./favorites";

export default () => {
  const router = Router();
  launches(router);
  favorites(router);

  return router;
};
