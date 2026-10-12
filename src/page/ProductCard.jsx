import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
	const navigate = useNavigate();
	const showDetail = () => {
		navigate(`/product/${item.id}`);
	}
  return (
	<div onClick={showDetail}>
		<img src={item?.img} alt={item.title} />
		<div>{item?.choice ? 'Conscious Choice' : ''}</div>
		<div>{item?.title}</div>
		<div>W{item?.price}</div>
		<div>{item?.new == true? '신제품' : ''}</div>
	</div>
  )
}

export default ProductCard