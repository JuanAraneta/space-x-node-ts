"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFavorites = exports.addFavorite = void 0;
const app_data_source_1 = require("../database/app-data-source");
const favorites_1 = require("../entities/favorites");
const addFavorite = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const favoritesRepo = app_data_source_1.AppDataSource.getRepository(favorites_1.Favorites);
    const currentFav = yield favoritesRepo.find({
        where: {
            flight_number: req.params.flight_number
        }
    });
    if (!currentFav.length) {
        yield favoritesRepo.insert({
            flight_number: req.params.flight_number,
            user_id: 22
        });
    }
    return res
        .status(201)
        .json(`Favorite for ${req.params.flight_number} has been updated.`);
});
exports.addFavorite = addFavorite;
const getFavorites = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const favoritesRepo = app_data_source_1.AppDataSource.getRepository(favorites_1.Favorites);
    const favs = yield favoritesRepo.find();
    return res.status(200).json(favs);
});
exports.getFavorites = getFavorites;
