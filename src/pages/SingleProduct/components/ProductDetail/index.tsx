import React, { useState } from "react";
import { createCartAsync } from "../../../../apis/cart/createcart.api";
import { getDetailProductAsync } from "../../../../apis/product/getdetailproduct.api";
import { IBook } from "../../../../bussiness/book";
import { handleAddToCart } from "../../../../utils/cart";
import { moneyFormater } from "../../../../utils/moneyFormater";
import { notifySuccess } from "../../../../utils/notify";
const img =
  "https://vnn-imgs-f.vgcloud.vn/2018/06/09/16/cach-don-gian-phan-biet-trai-cay-chua-hoa-chat-1.jpg";
const product = {
  id: 'congchien',
  name: 'iPhone 14 Pro Max',
  createDate: new Date(),
  author: 'Cong Chien',
  publishers: {
    name: 'Neymar JR',
    date: new Date(),
  },
  description: {
    language: 'VietNam',
    description: 'Haha',
  },
  price: {
    price: 40000000,
    currency: 'VND',
  },
  image_URLs: ['https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-6ceb543/wp-content/uploads/2022/09/iPhone14pro-ShopDunk-space-black.png'],
  quantity: 5,
  sold: 10,
  bookLockNumber: 2,
  discount: 10,
  fallIntoCategories: {
    id: '321',
    name: 'Football',
  },
  enable: true,
};

const ProductDetail = (props: { id: string }) => {
  //const [product, setProduct] = useState<IBook>();
  const [quantity, setQuantity] = useState<number>(1);
  
  React.useEffect(() => {
    window.scrollTo(0, 0);

    (async () => {
      const result = await getDetailProductAsync({
        id: props?.id,
      });
      console.log("asdasds");
      const { data } = result;
      console.log(data);
      //setProduct(data);
    })();
  }, [props?.id]);

  const renderImage = (image?: Array<string>) => {
    console.log("renderImage", image);
    if (typeof image === "undefined") return "";
    return image[0];
  };
  return (
    <div>
      <section className="ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5 ftco-animate">
              <a className="image-popup">
                <img
                  src={renderImage(product?.image_URLs)}
                  className="img-fluid"
                  alt="Colorlib Template"
                />
              </a>
            </div>
            <div className="col-lg-6 product-details pl-md-5 ftco-animate">
              <h3>{product?.name}</h3>

              <p className="price">
                <span>{moneyFormater(product?.price?.price || 0)}</span>
              </p>
              {/* <p>{product?.description}</p> */}
              <div className="row mt-4">
                <div className="col-md-6">
                  <div className="form-group d-flex">
                    <div className="select-wrap">
                      <div className="icon">
                        <span className="ion-ios-arrow-down"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-100"></div>
                <div className="input-group col-md-6 d-flex mb-3">
                  <input
                    type="number"
                    onKeyDown={(e: any) => {
                      e.preventDefault();
                    }}
                    id="quantity"
                    name="quantity"
                    className="form-control input-number"
                    defaultValue={quantity}
                    min="1"
                    max={product?.quantity || 0}
                    onChange={(e: any) => setQuantity(parseInt(e.target.value))}
                  />
                </div>
                <div className="w-100"></div>
                {/* <div className="col-md-12">
                  <p>{product.weight} kg/each</p>
                  <p>{product.quantity} available</p>
                </div> */}
              </div>
              <p>
                <a
                  onClick={() => handleAddToCart(product!, quantity)}
                  className="btn btn-primary py-3 px-5"
                  aria-disabled={!product || !product?.id}
                >
                  Thêm vào giỏ hàng
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
