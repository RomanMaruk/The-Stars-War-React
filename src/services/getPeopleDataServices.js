
export const getPeopleId = (url) => {
	const id = url.match(/\d+/g)
	return +id[0]
}

export const getImgCharacters = (id) => `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;

// getId(url, SWAPI_PEOPLE)

// var el = 'rat23e-55345'
// var numEl = el.match(/\d+/g).join('')

// console.log(numEl )
