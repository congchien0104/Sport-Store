import React, { useState } from "react";
import { Link } from "react-router-dom";
import { deleteCartAsync } from "../../../../apis/cart/deletecart.api";
import { getAllCartAsync } from "../../../../apis/cart/getallcart.api";
import { updateCartAsync } from "../../../../apis/cart/updatecart.api";
import { CART_KEY, getLocalStorage, ICartProduct, setLocalStorage } from "../../../../utils/localStorage";
import { moneyFormater } from "../../../../utils/moneyFormater";
import { notifyError, notifySuccess } from "../../../../utils/notify";

interface Props {}

const CartInfo = (props: Props) => {
  const [cartList, setCartList] = useState<ICartProduct[]>([]);

  const handleRemoveFromCart = async (id: string, index: number) => {
    console.log(index)
    let cart: any = getLocalStorage(CART_KEY);
    if(!cart) {
      notifyError('Sorry something went wrong');
      return;
    }
    cart = JSON.parse(cart);
    (cart as ICartProduct[]).splice(index, 1);
    console.log(cart)
    setLocalStorage(CART_KEY, cart);
    setCartList(cart);
    notifySuccess("Item removed from cart");
  };

  const handleChangeQuantity = (changeQuantity: number, id: string) => {
    setCartList(
      [...cartList].map((e: ICartProduct) => {
        if (e.bookId === id) {
          return { ...e, quantity: changeQuantity };
        } else {
          return e;
        }
      })
    );
  };

  React.useEffect(() => {
    (async () => {
      const cart = getLocalStorage(CART_KEY);
      if(!cart) return;
      setCartList(JSON.parse(cart) as ICartProduct[])
    })(); 
  }, []);

  // React.useEffect(() => {
  //   if(cartList.length === 0) return;
  //   localStorage.removeItem(CART_KEY)
  // }, [cartList])

  const totalCost = cartList.length > 0 && cartList.reduce(
    (prev: any, current: any) =>
      prev + current.price * current.quantity,
    0
  );

  return (
    <div>
      <section className="ftco-section ftco-cart">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ftco-animate">
              <div className="cart-list">
                <table className="table">
                  <thead className="thead-primary">
                    <tr className="text-center">
                      <th>&nbsp;</th>
                      <th>Hình ảnh</th>
                      <th>Tên sách</th>
                      {/* <th>Weight</th> */}
                      <th>Giá</th>
                      <th>Số lượng</th>
                      <th>Tổng tiền</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartList.length > 0 && cartList.map((e: ICartProduct, i: number) => (
                      <tr
                        id={`text-center-${i}`}
                        key={i}
                        className="text-center"
                      >
                        <td className="product-remove">
                          <button
                            onClick={() => handleRemoveFromCart(e.bookId, i)}
                          >
                            X
                          </button>
                        </td>
                        <td className="image-prod">
                          <div
                            className="img"
                            style={{
                              backgroundImage: `url(${e.image})`,
                            }}
                          ></div>
                        </td>

                        <td className="product-name">
                          <h3>{e.name}</h3>
                        </td>
                        {/* <td>{e.weight} kg</td> */}
                        <td className="price">{moneyFormater(e.price)}</td>

                        <td className="quantity">
                          <div className="input-group mb-3">
                            <input
                              onKeyDown={(e: any) => e.preventDefault()}
                              type="number"
                              name="quantity"
                              className="quantity form-control input-number"
                              defaultValue={e.quantity}
                              min="1"
                              max="100"
                              onChange={(event: any) =>
                                handleChangeQuantity(parseInt(event.target.value), e.bookId)
                              }
                            />
                          </div>
                        </td>

                        <td className="total">
                          {moneyFormater(e.quantity * e.price)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row justify-content-start">
            <div className="col-lg-4 mt-5 cart-wrap ftco-animate">
              <div className="cart-total mb-3">
                <h3>Tổng tiền </h3>
                <p></p>
                <p className="d-flex">
                  <span>Tạm tính</span>
                  <span>
                    {moneyFormater(totalCost || 0)}
                  </span>
                </p>
                <p className="d-flex">
                  <span>Phí vận chuyển</span>
                  <span>{moneyFormater(0)}</span>
                </p>
                <hr />
                <p className="d-flex total-price">
                  <span>Tổng cộng</span>
                  <span>{moneyFormater(totalCost || 0)}</span>
                </p>
              </div>
              <p>
                <Link to="/checkout" className="btn btn-primary py-3 px-4">
                  Thanh toán đơn hàng
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartInfo;
