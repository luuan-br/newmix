import React from "react";

import { Container, Input, Label, Text } from "./styles";

const InputText = ({ label, onChange, maxLength, value, ...props }) => {
	const cunstomOnChange = event => {
		if (onChange) {
			onChange(event);
		}
	};

	return (
		<Container>
			<Input
				onChange={cunstomOnChange}
				maxLength={maxLength}
				value={value}
				{...props}
				type="text"
				required
			/>
			<Label className="label-name">
				<Text className="content-name">
					{label ?? "label undefined"}
				</Text>
			</Label>
		</Container>
	);
};

export default InputText;
