import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { getInfoAsync } from "../../../../apis/auths/getInfo.api";
import { checkoutCart } from "../../../../apis/cart/checkout.api";
import { getAllCartAsync } from "../../../../apis/cart/getallcart.api";
import { SelectCustom } from "../../../../components/Select";
import { CART_KEY, getLocalStorage, ICartProduct, setLocalStorage } from "../../../../utils/localStorage";
import { moneyFormater } from "../../../../utils/moneyFormater";
import { notifyError, notifySuccess } from "../../../../utils/notify";

interface Props {}

const CheckoutInfo = (props: Props) => {
  const [cartList, setCartList] = useState<ICartProduct[]>([]);
  const history = useHistory();

  
  React.useEffect(() => {
    const cart = getLocalStorage(CART_KEY);
    if(!cart) return;
    setCartList(JSON.parse(cart) as ICartProduct[])
  }, []);

  const handleCheckoutCart = async () => {
    const user = await getInfoAsync();
    console.log("user",user)
    if(user.statusCode !== 200 || !user.data) {
      notifyError('Sorry something went wrong');
      return;
    }
    const rs = await checkoutCart(user.data.id, { 
      cardDetail: cartList.map(({bookId, quantity}: ICartProduct) => ({ bookID: bookId, quantity }))
    });
    if(rs && rs.statusCode === 200) {
      notifySuccess('Order success');
      setLocalStorage(CART_KEY, {})
      history.push("/");
    }
  }

  const totalCost = cartList.length > 0 && cartList.reduce(
    (prev: any, current: any) =>
      prev + current.price * current.quantity,
    0
  );
  
  return (
    <div>
      <section className="ftco-section">
        <div className="container-fluid" style={{ padding: '0 50px'}}>
          <div className="row justify-content-center">
            <div className="col-xl-7 ftco-animate">
              <form action="#" className="billing-form">
                <h3 className="mb-4 billing-heading">Chi tiết hóa đơn</h3>
                <div className="row align-items-end">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Địa chỉ giao hàng</label>
                      <SelectCustom />
                    </div>
                  </div>
                </div>

                <label></label>
                <div className="cart-detail cart-total p-3 p-md-4">
                  <div className="row">
                    <div className="col-md-12 ftco-animate">
                      <div className="cart-list">
                        <table className="table">
                          <thead className="thead-primary">
                            <tr className="text-center">
                              {/* <th>Product imgage</th> */}
                              <th>Tên sách</th>
                              {/* <th>Weight</th> */}
                              <th>Giá</th>
                              <th>Số lượng</th>
                              <th>Tổng tiền</th>
                            </tr>
                          </thead>
                          <tbody>
                            {cartList.length > 0 && cartList.map((e: ICartProduct, i: number) => (
                              <tr className="text-center" key={i}>
                                {/* <td className="image-prod">
                                  <div
                                    className="img"
                                    style={{
                                      backgroundImage: `url(${e.image[0]})`,
                                    }}
                                  ></div>
                                </td> */}

                                <td
                                  className="product-name"
                                  style={{ margin: "auto" }}
                                >
                                  <h3>{e.name}</h3>
                                </td>
                                {/* <td className="product-weight">
                                  <h3>{e.weight} kg</h3>
                                </td> */}

                                <td className="price">
                                  {moneyFormater(e.price)}
                                </td>

                                <td className="quantity">
                                  {e.quantity}
                                  {/* <div className="input-group mb-3">
                                    <input
                                      type="number"
                                      name="quantity"
                                      className="quantity form-control input-number"
                                      defaultValue={e.quantity}
                                      min="1"
                                      max="100"
                                      style={{ textAlign: "center" }}
                                    />
                                  </div> */}
                                </td>

                                <td className="total">
                                  {moneyFormater(e.price * e.quantity)}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-xl-5">
              <div className="row mt-5 pt-3">
                <div className="col-md-12 d-flex mb-5">
                  <div className="cart-detail cart-total p-3 p-md-4">
                    <h3 className="billing-heading mb-4">Tổng tiền</h3>
                    <p className="d-flex">
                      <span>Tạm tính</span>
                      <span>{moneyFormater(totalCost)}</span>
                    </p>
                    <p className="d-flex">
                      <span>Phí vận chuyển</span>
                      <span>{moneyFormater(0)}</span>
                    </p>

                    <hr />
                    <p className="d-flex total-price">
                      <span>Tổng cộng</span>
                      <span>{moneyFormater(totalCost)}</span>
                    </p>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="cart-detail p-3 p-md-4">
                    <h3 className="billing-heading mb-4">Phương thức thanh toán</h3>
                    <div className="form-group">
                      <div className="col-md-12">
                        <div className="radio">
                          <label>
                            <input
                              type="radio"
                              name="optradio"
                              className="mr-2"
                              checked
                            />{" "}
                            COD
                          </label>
                        </div>
                      </div>
                    </div>
                    {/* <div className="form-group">
                      <div className="col-md-12">
                        <div className="radio">
                          <label>
                            <input
                              type="radio"
                              name="optradio"
                              className="mr-2"
                            />{" "}
                            VN Pay
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-md-12">
                        <div className="radio">
                          <label>
                            <input
                              type="radio"
                              name="optradio"
                              className="mr-2"
                            />{" "}
                            Paypal
                          </label>
                        </div>
                      </div>
                    </div> */}
                    <div className="form-group">
                      <div className="col-md-12">
                        <div className="checkbox">
                          <label>
                            <input type="checkbox" className="mr-2" /> Tôi đã đọc và đồng ý điều khoản dịch vụ
                          </label>
                        </div>
                      </div>
                    </div>
                    <p>
                      <button onClick={handleCheckoutCart} className="btn btn-primary py-3 px-4">
                        Đặt hàng
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CheckoutInfo;
