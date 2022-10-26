import React, { useState } from "react";
import { getListByCategory } from "../../apis/category/listByCategory";
import { getProductRecommendAsync } from "../../apis/product/getproductrecommend.api";
import HeroCommon from "../../components/HeroCommon";
import Pagination from "../../components/Pagination";
import ShopFilter from "./components/ShopFilter";
import ShopProduct from "./components/ShopProduct";
import { useLocation } from "react-router";

const ShopPage = () => {
  const [list, setList] = useState<any>([]);
  let { state } = useLocation<any>();

  React.useEffect(() => {
    if(state?.id) {
      getByCategory(state.id);
    } else {
      getData();
    }
  }, [state]);
  const getData = async (page: number = 0) => {
    const result = await getProductRecommendAsync({ size: 10, page });
    console.log(result);
    const { data } = result;
    setList(data.content);
  };

  const getByCategory = async (id?: string) => {
    if(!id) {
      getData();
      return;
    };
    
    const rs = await getListByCategory(id);
    if(rs.statusCode === 200) {
      const { data } = rs;
      setList(data.booksOfCategory)
    }
  }

  return (
    <main>
      <HeroCommon />
      <section className="ftco-section">
        <div className="container">
          <ShopFilter onClick={(id) => getByCategory(id)} currentId={state?.id || 'all'} />
          <ShopProduct data={list} />
          <Pagination onClick={(page) => getData(page)}/>
        </div>
      </section>
    </main>
  );
};

export default ShopPage;
