import React from "react";
const Subcribe = () => {
  return (
    <div>
      <section className="ftco-section ftco-no-pt ftco-no-pb py-5 bg-light">
        <div className="container py-4">
          <div className="row d-flex justify-content-center py-5">
            <div className="col-md-6">
              <h2 className="mb-0">Đăng kí nhận bản tin</h2>
              <span>
                Nhập email để nhận được thông báo mới nhất
              </span>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <form action="#" className="subscribe-form">
                <div className="form-group d-flex">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nhập email của bạn"
                  />
                  <button type="submit" className="submit px-3">
                    Đăng kí
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Subcribe;
