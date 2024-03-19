import { Link } from "react-router-dom";
import '@components/Header.css';

function Header() {
  return (
    <header className="header">
      <a href="https://www.nike.com/kr">Visit Nike.com</a>
      <Link to="/accounts">멤버 가입하기 / 로그인</Link>
      <Link to="/help">고객센터</Link>
      <Link to="/cart"><i className="ir">장바구니</i></Link>
      <button type="button">대한민국</button>
    </header>
  )
}

export default Header;