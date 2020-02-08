import React from "react";
import TextField from "@material-ui/core/TextField";
// import { Container } from './styles';

const Input = ({ id, label, placeholder, color, descrition }) => {
	// configura exposicao de valor para o mundo externo
	return (
		<TextField
			id={id}
			label={label}
			// variant="outlined"
			variant="standard"
			placeholder={placeholder}
			color={color ? color : "primary"}
			// value="Luan"
			// onChange={handleChange}
			aria-describedby={descrition}
		/>
	);
};

export default Input;
