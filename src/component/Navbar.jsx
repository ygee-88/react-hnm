import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

const Navbar = ({authenticate, setAuthenticate}) => {
	const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];
	const [show, setShow] = useState(false);

	const navigate = useNavigate();

	const gotoLogin = () => {	
		navigate('/login');
	}

	const gotoLogout = () => {	
		setAuthenticate(false);
		navigate('/');
	}

	const search = (e) => {
		if (e.key === 'Enter') {
			let keyword = e.target.value;
			navigate(`/?q=${keyword}`);
		} 
	}

  return (
	<div>
		<div>
			<div className="login-button">
				<FontAwesomeIcon icon={faUser} />
				<button onClick={authenticate ? gotoLogout : gotoLogin}>{authenticate ? '로그아웃' : '로그인'}</button>
			</div>
		</div>
		<div className="logo-section">
			<img
			 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMxxpIksWTphjcvgnFcf59UuoyY8vklxzJE357RDeujA&s=10" alt="logo"
			 width={100}
			 onClick={()=>navigate('/')}
			 />
		</div>
		<div className="nav-section">
			<ul className="gnb">
				{menuList.map((menu) => (
					<li key={menu}>{menu}</li>
				))}
			</ul>
			<div className="search-bar">
				<FontAwesomeIcon icon={faSearch} />
				<input type="text" placeholder="검색어를 입력해주세요." onKeyPress={(e) => search(e)} />
			</div>
		</div>
	</div>
  )
}

export default Navbar