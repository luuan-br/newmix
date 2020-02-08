import React from "react";

// import { Container } from './styles';

const Images = ({ data }) => {
	return (
		<div>
			{data?.map(d => (
				<div key={d._id}>
					<p>{d.name}</p>
					<p>{d.url_image}</p>
				</div>
			))}
		</div>
	);
};

const Product = ({ data }) => {
	return (
		<>
			<p>{data.name}</p>
			<p>{data.code}</p>
			<hr />
			<Images data={data.images} />
		</>
	);
};

const Showcase = ({ type, data }) => {
	return (
		<ul>
			{data &&
				data[type]?.products.map(product => (
					<Product key={product._id} data={product} />
				))}
		</ul>
	);
};

export default Showcase;
