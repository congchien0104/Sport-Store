import React, { useState } from "react";
import { IBook } from "../../../../bussiness/book";
import CardProduct from "../../../../components/CardProduct";

interface IProps {
  data: IBook[];
}

const ShopProduct = ({ data }: IProps) => {
  return (
    <div className="row">
      {data?.map((e, i) => (
        <div className="col-md-6 col-lg-3 ftco-animate" key={i}>
          <CardProduct book={e} />
        </div>
      ))}
    </div>
  );
};

export default ShopProduct;
