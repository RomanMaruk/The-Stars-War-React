
export const setCharactersToFavorite = (character) => ({
	type: 'ADD_CHARACTERS_TO_FAVOVORITE',
	paylod: character
})

export const removeCharactersFromFavorite = () => ({
	type: 'REMOVE_CHARACTERS_FROM_FAVOVORITE',
	payload: ''
})