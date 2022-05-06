
export const setCharactersToFavorite = (character) => ({
	type: 'ADD_CHARACTERS_TO_FAVOVORITE',
	payload: character
})

export const removeCharactersFromFavorite = (personId) => ({
	type: 'REMOVE_CHARACTERS_FROM_FAVOVORITE',
	payload: personId
})