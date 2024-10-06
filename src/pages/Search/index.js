import { Link } from "react-router-dom";

const Search = () => {
  return (
    <>
      {/*	List Product	*/}
      <div className="products">
        <div id="search-result">
          Kết quả tìm kiếm với sản phẩm <span>iPhone Xs Max 2 Sim - 256GB</span>
        </div>
        <div className="product-list card-deck">
          <div className="product-item card text-center">
            <Link to="#">
              <img src="images/product-1.png" />
            </Link>
            <h4>
              <Link to="#">iPhone Xs Max 2 Sim - 256GB</Link>
            </h4>
            <p>
              Giá Bán: <span>32.990.000đ</span>
            </p>
          </div>
          <div className="product-item card text-center">
            <Link to="#">
              <img src="images/product-2.png" />
            </Link>
            <h4>
              <Link to="#">iPhone Xs Max 2 Sim - 256GB</Link>
            </h4>
            <p>
              Giá Bán: <span>32.990.000đ</span>
            </p>
          </div>
          <div className="product-item card text-center">
            <Link to="#">
              <img src="images/product-3.png" />
            </Link>
            <h4>
              <Link to="#">iPhone Xs Max 2 Sim - 256GB</Link>
            </h4>
            <p>
              Giá Bán: <span>32.990.000đ</span>
            </p>
          </div>
        </div>
        <div className="product-list card-deck">
          <div className="product-item card text-center">
            <Link to="#">
              <img src="images/product-4.png" />
            </Link>
            <h4>
              <Link to="#">iPhone Xs Max 2 Sim - 256GB</Link>
            </h4>
            <p>
              Giá Bán: <span>32.990.000đ</span>
            </p>
          </div>
          <div className="product-item card text-center">
            <Link to="#">
              <img src="images/product-5.png" />
            </Link>
            <h4>
              <Link to="#">iPhone Xs Max 2 Sim - 256GB</Link>
            </h4>
            <p>
              Giá Bán: <span>32.990.000đ</span>
            </p>
          </div>
          <div className="product-item card text-center">
            <Link to="#">
              <img src="images/product-6.png" />
            </Link>
            <h4>
              <Link to="#">iPhone Xs Max 2 Sim - 256GB</Link>
            </h4>
            <p>
              Giá Bán: <span>32.990.000đ</span>
            </p>
          </div>
        </div>
        <div className="product-list card-deck">
          <div className="product-item card text-center">
            <Link to="#">
              <img src="images/product-7.png" />
            </Link>
            <h4>
              <Link to="#">iPhone Xs Max 2 Sim - 256GB</Link>
            </h4>
            <p>
              Giá Bán: <span>32.990.000đ</span>
            </p>
          </div>
          <div className="product-item card text-center">
            <Link to="#">
              <img src="images/product-8.png" />
            </Link>
            <h4>
              <Link to="#">iPhone Xs Max 2 Sim - 256GB</Link>
            </h4>
            <p>
              Giá Bán: <span>32.990.000đ</span>
            </p>
          </div>
          <div className="product-item card text-center">
            <Link to="#">
              <img src="images/product-9.png" />
            </Link>
            <h4>
              <Link to="#">iPhone Xs Max 2 Sim - 256GB</Link>
            </h4>
            <p>
              Giá Bán: <span>32.990.000đ</span>
            </p>
          </div>
        </div>
      </div>
      {/*	End List Product	*/}
      <div id="pagination">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#">
              Trang trước
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Trang sau
            </a>
          </li>
        </ul>
      </div>
      <div id="sidebar" className="col-lg-4 col-md-12 col-sm-12">
        <div id="banner">
          <div className="banner-item">
            <Link to="#">
              <img className="img-fluid" src="images/banner-1.png" />
            </Link>
          </div>
          <div className="banner-item">
            <Link to="#">
              <img className="img-fluid" src="images/banner-2.png" />
            </Link>
          </div>
          <div className="banner-item">
            <Link to="#">
              <img className="img-fluid" src="images/banner-3.png" />
            </Link>
          </div>
          <div className="banner-item">
            <Link to="#">
              <img className="img-fluid" src="images/banner-4.png" />
            </Link>
          </div>
          <div className="banner-item">
            <Link to="#">
              <img className="img-fluid" src="images/banner-5.png" />
            </Link>
          </div>
          <div className="banner-item">
            <Link to="#">
              <img className="img-fluid" src="images/banner-6.png" />
            </Link>
          </div>
        </div>
      </div>
      {/*	End Body	*/}
    </>
  );
};
export default Search;
