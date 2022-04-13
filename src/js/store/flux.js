import { getCharacter, getCharactersdetail, getPlanet, getPlanetsdetail} from "../../api/api";
const getState = ({ getStore, setStore }) => {
	return {
		store: {
			characters: [],
			charactersdetails: undefined,
			planets: [],
			planetsdetails: undefined,
			favorites: []
		},
		actions: {
			getCharacters: () => {
				getCharacter()
					.then(value => {
						setStore({ characters: value });
					})
					.catch(error => {
						setStore({ characters: undefined });
					});
			},
			getCharactersdetails: id => {
				getCharactersdetail(id)
					.then(value => {
						setStore({ charactersdetails: value });
					})
					.catch(error => {
						setStore({ charactersdetails: {} });
					});
			},
			getPlanets: () => {
				getPlanet()
					.then(value => {
						setStore({ planets: value });
					})
					.catch(error => {
						setStore({ planets: undefined });
					});
			},
			getPlanetsdetails: id => {
				getPlanetsdetail(id)
					.then(value => {
						setStore({ planetsdetails: value });
					})
					.catch(error => {
						setStore({ planetsdetails: {} });
					});
			},
			
			addfavorites: dato => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, dato] });
				console.log(store.favorites);
			},
			deletefavorites: index => {
				const store = getStore();
				store.favorites.splice(index, 1);
				setStore({ favorites: [...store.favorites] });
			}
		}
	};
};

export default getState;
