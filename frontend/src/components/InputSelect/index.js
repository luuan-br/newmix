import React, { useState } from "react";

import { Container, Input, Selected, Toggle, Label } from "./styles";

const InputSelect = ({ values }) => {
	const [selections, setSelections] = useState([]);
	const [toggle, setToggle] = useState(false);

	function addSelection(e) {
		if (!selections.includes(e)) {
			setSelections([...selections, e]);
			setToggle(!toggle);
		}
	}

	function removeSelection(e) {
		const data = selections;
		data.splice(e, 1);

		setSelections([...data]);
	}

	return (
		<Container>
			<Input onClick={() => setToggle(!toggle)}>
				<span>
					{selections.length === 0 && "Select..."}
					{selections.length > 0 && (
						<>
							<Label>Selected</Label>
							<Selections
								options={selections}
								onClick={removeSelection}
							/>
						</>
					)}
				</span>
			</Input>

			{toggle && (
				<Toggle>
					<Options options={values} onClick={addSelection} />
				</Toggle>
			)}
		</Container>
	);
};

const Selections = ({ options, onClick }) => {
	const cunstomOnChange = event => {
		if (onClick) {
			onClick(event);
		}
	};

	return (
		options &&
		options.length > 0 &&
		options.map((option, index) => (
			<Selected key={index} onClick={() => cunstomOnChange(index)}>
				{option}
			</Selected>
		))
	);
};

const Options = ({ options, onClick }) => {
	const cunstomOnChange = event => {
		if (onClick) {
			onClick(event);
		}
	};

	return (
		options &&
		options.length > 0 &&
		options.map((option, index) => (
			<p key={index} onClick={() => cunstomOnChange(option)}>
				{option}
			</p>
		))
	);
};

export default InputSelect;
