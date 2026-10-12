import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';

const ProductDetail = () => {
	let {id} = useParams();
	const [product, setProduct] = useState(null);
	const [size, setSize] = useState('Size');
	const getProductDetail = async () => {
		let url = `http://localhost:5000/products/${id}`;
		let response = await fetch(url);
		let data = await response.json();
		setProduct(data);
	}
	useEffect(() => {
		getProductDetail();
	}, []);
  return (
	<Container>
		<Row>
			<Col>
				<img src={product?.img} alt={product?.title} />
			</Col>
			<Col>
				<div>{product?.title}</div>
				<div>{product?.price}</div>
				<div>{product?.new == true? '신제품' : ''}</div>
				<div>{product?.choice == true? 'Conscious Choice' : ''}</div>
				<div>
					<Dropdown>
						<Dropdown.Toggle variant="success" id="dropdown-basic">
							{size}
						</Dropdown.Toggle>

						<Dropdown.Menu>
							{product?.size.map((item) => (
								<Dropdown.Item key={item} onClick={() => setSize(item)}>
									{item}
								</Dropdown.Item>
							))}
						</Dropdown.Menu>
					</Dropdown>
				</div>
			</Col>
		</Row>
	</Container>
  )
}

export default ProductDetail