import React from "react";
import { IoIosCart } from "react-icons/io";
import { HiOutlineHeart } from "react-icons/hi";
import { moneyFormater } from "../../utils/moneyFormater";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { IBook } from "../../bussiness/book";
import { handleAddToCart } from "../../utils/cart";

interface IProps {
  book: IBook;
}

const CardProduct = ({ book }: IProps) => {
  const history = useHistory();

  const handleClickSingleProduct = (id: string) => {
    history.push(`/singleproduct/${id}`);
    // window.location.reload();
    window.scrollTo(0, 0);
  };
  return (
    <div className="product">
      <Link
        to={`/singleproduct/${book.id}`}
        // onClick={() => handleClickSingleProduct(props.data?._id)}
        className="img-prod"
      >
        <img
          className="img-fluid"
          src={book?.image_URLs[0]}
          alt="Colorlib Template"
        />
        <div className="overlay"></div>
      </Link>
      <div className="text py-3 pb-4 px-3 text-center">
        <h3>
          <a href="#">{book?.name}</a>
        </h3>
        <div className="d-flex">
          <div className="pricing">
            <p className="price">
              <span>{moneyFormater(book?.price?.price || 0)}</span>
            </p>
          </div>
        </div>
        <div className="bottom-area d-flex px-4">
          <div className="m-auto d-flex">
            <button
              onClick={() => handleAddToCart(book)}
              className="
												buy-now
												d-flex
												justify-content-center
												align-items-center
												mx-1
											"
            >
              <span>
                <IoIosCart />
              </span>
            </button>
            {/* <button
              className="
												heart
												d-flex
												justify-content-center
												align-items-center
											"
            >
              <span>
                <HiOutlineHeart />
              </span>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
