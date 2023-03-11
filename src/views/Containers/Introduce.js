import clipboard from "../../assests/images/clipboard-data.svg";
import gem from "../../assests/images/gem.svg";
import inboxes from "../../assests/images/inboxes-fill.svg";
const Introduce = (props) => {
  return (
    <section className="introduce-container" id="introduce">
      <div className="container">
        <div className="row gy-4 introduce-container-content">
          <div className="col-lg-4 col-md-12 col-12">
            <div className="introduce-container-content__why">
              <span>Why Choose Yummy?</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                aute irure dolor in reprehenderit Asperiores dolores sed et.
                Tenetur quia eos. Autem tempore quibusdam vel necessitatibus
                optio ad corporis.
              </p>
              <button className="mybtn introduce-content-btn">
                Learn More
              </button>
            </div>
          </div>
          <div className="introduce-container-content-whylist col-lg-8">
            <div className="row gy-4 content-whylist-bigbox">
              <div className="content-whylist-box col-lg-12 col-xl-4">
                <div className="content-whylist__item ">
                  <div className="whylist__item-icon-contain">
                    <img
                      className="content-whylist__item-icon "
                      alt=""
                      src={clipboard}
                    ></img>
                  </div>
                  <h4>Corporis voluptates officia eiusmod</h4>
                  <p>
                    Consequuntur sunt aut quasi enim aliquam quae harum pariatur
                    laboris nisi ut aliquip
                  </p>
                </div>
              </div>
              <div className="content-whylist-box col-lg-12 col-xl-4">
                <div className="content-whylist__item ">
                  <div className="whylist__item-icon-contain">
                    <img
                      className="content-whylist__item-icon"
                      alt=""
                      src={gem}
                    ></img>
                  </div>
                  <h4>Ullamco laboris ladore pan</h4>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt
                  </p>
                </div>
              </div>
              <div className="content-whylist-box col-lg-12 col-xl-4">
                <div className="content-whylist__item ">
                  <div className="whylist__item-icon-contain">
                    <img
                      className="content-whylist__item-icon"
                      alt=""
                      src={inboxes}
                    ></img>
                  </div>
                  <h4>Labore consequatur incidid dolore</h4>
                  <p>
                    Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut
                    maiores omnis facere
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Introduce;
