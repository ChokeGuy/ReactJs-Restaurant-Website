import Carousel from "nuka-carousel";
const Events = (props) => {
  return (
    <section className="event-container" id="events">
      <div className="row g-0">
        <div className="col-lg-12">
          <div className="event-header">
            <div>EVENTS</div>
            <p>
              SHARE
              <span> YOUR MOMENTS </span>
              IN OUR RESTAURANT
            </p>
          </div>
        </div>
        <div className="event-content">
          <div className="row gx-1">
            <Carousel
              autoplay={true}
              defaultControlsConfig={{
                nextButtonStyle: {
                  visibility: "hidden",
                },
                prevButtonStyle: {
                  visibility: "hidden",
                },
                pagingDotsClassName: "carousel-dot",
              }}
              slidesToShow={3}
              wrapAround={true}
            >
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="event-content__item event-content__item-1">
                  <div className="event-content__item-box">
                    <h3>Custom Parties</h3>
                    <div>$99</div>
                    <p className="description">
                      Quo corporis voluptas ea ad. Consectetur inventore
                      sapiente ipsum voluptas eos omnis facere. Enim facilis
                      veritatis id est rem repudiandae nulla expedita quas.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="event-content__item event-content__item-2">
                  <div className="event-content__item-box">
                    <h3>Private Parties</h3>
                    <div>$289</div>
                    <p className="description">
                      In delectus sint qui et enim. Et ab repudiandae inventore
                      quaerat doloribus. Facere nemo vero est ut dolores ea
                      assumenda et. Delectus saepe accusamus aspernatur.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="event-content__item event-content__item-3">
                  <div className="event-content__item-box">
                    <h3>Birthday Parties</h3>
                    <div>$499</div>
                    <p className="description">
                      Laborum aperiam atque omnis minus omnis est qui assumenda
                      quos. Quis id sit quibusdam. Esse quisquam ducimus officia
                      ipsum ut quibusdam maxime. Non enim perspiciatis.
                    </p>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
