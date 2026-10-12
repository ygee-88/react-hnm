import React from 'react'
import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
	const [productList, setProductList] = useState([]);
	const [query, setQuery] = useSearchParams();
	const getProducts=async()=>{
		let searchQuery = query.get('q') || "";
		console.log('searchQuery', searchQuery);
		let url = searchQuery
  ? `http://localhost:5000/products?title:contains=${searchQuery}`
  : 'http://localhost:5000/products';
		let response = await fetch(url);
		let data = await response.json();
		setProductList(data);
	}
	useEffect(() => {
		getProducts();
	}, [query]);
  return (
	<div>
		<Container>
			<Row>
				{productList.map((menu) => (
					<Col xs={12} lg={3}>
						<ProductCard item={menu} />
					  </Col>
				))}
			</Row>
		</Container>
	</div>
  )
}

export default ProductAll