import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setEmailandPassword } from "../../store/slices/userSlice";
import logoKakao from "../../images/logoKakao.png";
import cart from "../../images/cart.png";

function GNB() {
  const email = useSelector((state) => state.user.email);
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(setEmailandPassword(null));
    alert("로그아웃 되었습니다.");
  };

  return (
    <header className="header float-left">
      <div className=" contents">
        <Link to="/">
          <img src={logoKakao} alt="logoKakao.png" height={30} />
        </Link>
        <nav>
          <div className="navigation">
            <span>
              {/* 장바구니 버튼 */}
              <Link to="/cart">
                <img src={cart} alt="cart.png" height={30} />
              </Link>
            </span>
            <span> | </span>
            <span>
              {/* 로그인 버튼 */}
              {email ? (
                <Link
                  to="/login"
                  onClick={handleLogout}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {" "}
                  로그아웃{" "}
                </Link>
              ) : (
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {" "}
                  로그인{" "}
                </Link>
              )}
            </span>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default GNB;
