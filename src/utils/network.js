// import { API_PEOPLE } from '../constants/api'

export const getApiResource = async (url) => {
	const resolt = await fetch(url)
		.then(res => {
				if (!res.ok) {
					console.log('Could not fetch data.', res.status)
					return false
				}
				return res.json()
		})

		return resolt
}

// export const getApiResource = async (url) => {
// 	try {
// 			const res = await fetch(url);

// 			if (!res.ok) {
// 					console.error('Could not fetch.', res.status);
// 					return false;
// 			}

// 			return await res.json(); 
// 	} catch (error) {
// 			console.error('Could not fetch.', error.message);
// 			return false;
// 	}
// }

// (async () => {
// 	const body = await getApiResource( API_PEOPLE)
// 	console.log(body)
// })();
