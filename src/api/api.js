export const getCharacter = async () => {
	try {
		return fetch("https://www.swapi.tech/api/people?page=1&limit=100", {
			method: "GET",
			redirect: "follow"
		})
			.then(response => response.json())
			.then(response => response.results);
	} catch (error) {
		return [];
	}
};
export const getCharactersdetail = async id => {
	try {
		return fetch(`https://www.swapi.tech/api/people/${id}`, {
			method: "GET",
			redirect: "follow"
		})
			.then(response => response.json())
			.then(response => response.result);
	} catch (error) {
		return {};
	}
};
export const getPlanet = async () => {
	try {
		return fetch("https://www.swapi.tech/api/planets?page=1&limit=100", {
			method: "GET",
			redirect: "follow"
		})
			.then(response => response.json())
			.then(response => response.results);
	} catch (error) {
		return [];
	}
};
export const getPlanetsdetail = async id => {
	try {
		return fetch(`https://www.swapi.tech/api/planets/${id}`, {
			method: "GET",
			redirect: "follow"
		})
			.then(response => response.json())
			.then(response => response.result);
	} catch (error) {
		return {};
	}
};

