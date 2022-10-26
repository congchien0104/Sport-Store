import React, { useState } from "react";
import { IoMdCart } from "react-icons/io";
import { Link } from "react-router-dom";
import { getListCategoryName } from "../../apis/category/listCategoryName";
import { ICategoryName } from "../../bussiness/category";
import useAuth from "../../stores/auth";

const Navbar = () => {
  const [categories, setCategories] = useState<ICategoryName[]>([]);
  const [auth, actionAuth] = useAuth()
  const toggleDropdown04 = (e: any) => {
    e.target.className =
      "nav-link dropdown-toggle" === e.target.className
        ? "nav-link dropdown-toggle active"
        : "nav-link dropdown-toggle";
  };
  const blurDropdown04 = (e: any) => {
    e.target.className = "nav-link dropdown-toggle";
  };

  const getData = async () => {
    const rs = await getListCategoryName();
    const { data } = rs;
    setCategories(data || []);
  }

  React.useEffect(() => {
    getData();
  }, []);

  React.useEffect(() => {
    actionAuth.getInfoUser()
  }, [])

  console.log(auth)
  return (
    <nav
      className="
        navbar navbar-expand-lg
        ftco_navbar
        ftco-navbar-light
    "
      id="ftco-navbar"
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          BookGarden
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="oi oi-menu"></span> Menu
        </button>

        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ml-auto" style={{alignItems:"center"}}>
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Trang chủ
                {/* {t('signin:label_sign_login')} "label_header_home": */}
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="dropdown04"
                onClick={toggleDropdown04}
              >
                Danh mục
              </Link>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdown04"
              // onBlur={blurDropdown04}
              >
                <Link className="dropdown-item" to="/shop">
                  Tất cả 
                </Link>
                {categories.length > 0 && categories.map((category: ICategoryName, idx: number) => (
                  <Link className="dropdown-item" to={{
                    pathname: '/shop',
                    state: { id: category.id }
                  }} key={idx}>
                    {category.name}
                  </Link>
                ))}
                {/* <Link className="dropdown-item" to="/wishlist">
                  Comic
                </Link>
                <Link className="dropdown-item" to="/science-fiction">
                  History - Geography
                </Link>
                <Link className="dropdown-item" to="/science-fiction">
                  Science Fiction
                </Link>
                <Link className="dropdown-item" to="/romance">
                  Romance
                </Link>
                <Link className="dropdown-item" to="/exercise-book">
                  Exercise book
                </Link>
                <Link className="dropdown-item" to="/exercise-book">
                  Dictionary
                </Link> */}
              </div>
            </li>
            <li className="nav-item">
              <Link to="/order" className="nav-link">
                Đơn hàng 
              </Link>
            </li>

            {/* <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li> */}
            {!auth.user && <>
              <li className="nav-item">
                <Link to="/signin" className="nav-link">
                  Đăng nhập
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signup" className="nav-link">
                  Đăng kí 
                </Link>
              </li>

            </>}

            {auth.user && <>
              <li className='nav-item' style={{display:"flex"}}>
                <Link className='nav-link' style={{display:"flex",alignItems:"center"}} to='/profile'>
                  <div style={{ width: '40px', height: '40px' }}>
                    <img
                      style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                      src={(auth.user as any).avatar}
                    />
                  </div>

                  <label className='ms-3 fw-bold'>
                    {/* {user?.name} */}
                    {(auth.user as any)?.fullname||(auth.user as any)?.email}
                  </label>
                </Link>
              </li>
            </>}


            {/* <li className='nav-item'>
              <a onClick={() => { ; }} style={{ color: 'red' }}>
                Log out
              </a>
            </li> */}

            <li className="nav-item cta cta-colored">
              <Link to="/cart" className="nav-link">
                <IoMdCart />
                {/* <span className='icon-shopping_cart'></span>[0] */}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
