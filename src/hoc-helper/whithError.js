import { useState } from "react";
import ErrorComponent from "../components/ErrorComponent/ErrorComponent";

export const withError = (View) => {
	return props => {
		const [errorApi, setErrorApi] = useState(false);
		return (
			<>
				{ errorApi ? <ErrorComponent />
				: (<View setErrorApi={setErrorApi} {...props} />) }
			</>
		);

	};
}