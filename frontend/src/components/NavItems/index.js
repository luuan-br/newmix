import React from "react";
import { NavLink } from "react-router-dom";

import { Container } from "./styles";

export default function NavItems({ to, img, name, ...props }) {
	return (
		<Container>
			<NavLink to={to} exact={true} activeClassName="active" {...props}>
				<figure>
					<img src={img} alt={name} />
					<figcaption>
						<span>{name}</span>
					</figcaption>
				</figure>
			</NavLink>
		</Container>
	);
}
