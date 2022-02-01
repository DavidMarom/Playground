import React, { useEffect, useState, useContext } from "react";
import { DebounceInput } from "react-debounce-input";
import { PageContext } from "../Context";


export const Debounce: React.FC = () => {
	const [state, setState] = useState("");
	const { value, setValue } = useContext(PageContext);


	useEffect(() => {
		setValue("debounce");
		return () => { };
	});

	return (
		<div>
			<h1>{value}</h1>
			<div className="h-space"></div>

			<DebounceInput
				minLength={2}
				debounceTimeout={1000}
				onChange={(event) => setState(event.target.value)}
			/>
			<div className="h-space"></div>
			<p>Value: {state}</p>
		</div>
	);
};
