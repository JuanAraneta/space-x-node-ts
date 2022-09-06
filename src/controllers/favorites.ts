import { AppDataSource } from "../database/app-data-source";
import { Favorites } from "../entities/favorites";

export const addFavorite = async (req, res) => {
  const favoritesRepo = AppDataSource.getRepository(Favorites);
  const currentFav = await favoritesRepo.find({
    where: {
      flight_number: req.params.flight_number
    }
  });

  if (!currentFav.length) {
    await favoritesRepo.insert({
      flight_number: req.params.flight_number,
      user_id: 22
    });
  }

  return res
    .status(201)
    .json(`Favorite for ${req.params.flight_number} has been updated.`);
};

export const getFavorites = async (req, res) => {
  const favoritesRepo = AppDataSource.getRepository(Favorites);
  const favs = await favoritesRepo.find();
  return res.status(200).json(favs);
};
