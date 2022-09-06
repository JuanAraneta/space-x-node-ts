"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import attachCurrentUser from '../middlewares/attachCurrentUser'
// import { getLaunches, addLaunchToUserFavorites, removeLaunchFromUserFavorites} from '../../controllers/launches'
const launches_1 = require("../controllers/launches");
const favorites_1 = require("../controllers/favorites");
exports.default = (router) => {
    router.get("/launches", launches_1.getLaunches);
    router.post("/launches/:flight_number/favorite", favorites_1.addFavorite);
};
