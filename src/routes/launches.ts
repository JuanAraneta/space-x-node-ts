// import attachCurrentUser from '../middlewares/attachCurrentUser'
// import { getLaunches, addLaunchToUserFavorites, removeLaunchFromUserFavorites} from '../../controllers/launches'
import { getLaunches } from "../controllers/launches";
import { addFavorite } from "../controllers/favorites";

export default (router) => {
  router.get("/launches", getLaunches);
  router.post("/launches/:flight_number/favorite", addFavorite);
};
