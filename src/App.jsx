import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetail from './page/ProductDetail'
import Login from './page/Login'
import ProductAll from './page/ProductAll'
import Navbar from './component/Navbar'
import PrivateRoute from './route/PrivateRoute'

// 1. 전체 상품 페이지, 로그인 페이지, 상품 상세 페이지
// 2. 전체 상품 페이지 에서는 전체 상품을 볼 수 있다.
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
// 4. 상품 디테일을 눌렀으나, 로그인이 안되어 있을 경우 로그인 페이지가 나온다
// 5. 로그인이 되어있는 경우 상품 디테일 페이지를 볼 수 있다.
// 6. 로그아웃 버튼을 누르면 로그아웃이 된다.
// 7. 상품 검색을 할 수 있다.
function App() {
	const [authenticate, setAuthenticate] = useState(false); //true: 로그인 된 상태, false: 로그인 안된 상태
	const [count, setCount] = useState(0);
	useEffect(() => {
		console.log('authenticate', authenticate);
	}, [authenticate]);

  return (
	<div>
		<Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
		<Routes>
			<Route path="/" element={<ProductAll />} />
			<Route path="/login" element={<Login setAuthenticate={setAuthenticate} />} />
			<Route path="/product/:id" element={<PrivateRoute authenticate={authenticate} />} />
		</Routes>
	</div>
  )
}

export default App
