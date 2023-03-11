const Book = (props) => {
  return (
    <section className="book-container" id="book">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-12 col-sm-12 col-md-12">
            <div className="book-header">
              <div>BOOK A TABLE</div>
              <p>
                BOOK <span> YOUR STAY </span>WITH US
              </p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="book-content">
              <div className="row g-0">
                <div className="book-content-img  col-lg-4"></div>
                <div className="book-content-form col-lg-8">
                  <form action="/">
                    <div className="row gy-4 book-content-form-list">
                      <div className="book-content-form-box col-lg-4 col-md-6">
                        <input
                          type="text"
                          placeholder="Your Name"
                          className="form-control book-content-form__input"
                        ></input>
                      </div>
                      <div className="book-content-form-box col-lg-4 col-md-6">
                        <input
                          type="text"
                          placeholder="Your Email"
                          className="form-control book-content-form__input"
                        ></input>
                      </div>
                      <div className="book-content-form-box col-lg-4 col-md-6">
                        <input
                          type="text"
                          placeholder="Your Phone"
                          className="form-control book-content-form__input"
                        ></input>
                      </div>
                      <div className="book-content-form-box col-lg-4 col-md-6">
                        <input
                          type="text"
                          placeholder="Date"
                          className="form-control book-content-form__input"
                        ></input>
                      </div>
                      <div className="book-content-form-box col-lg-4 col-md-6">
                        <input
                          type="text"
                          placeholder="Time"
                          className="form-control form-control book-content-form__input"
                        ></input>
                      </div>
                      <div className="book-content-form-box col-lg-4 col-md-6">
                        <input
                          type="text"
                          placeholder="# of people"
                          className="form-control form-control book-content-form__input"
                        ></input>
                      </div>
                    </div>
                    <div className="form-group">
                      <textarea
                        placeholder="Message"
                        className="form-control book-content-form__textarea"
                        rows="5"
                      ></textarea>
                    </div>
                    <button className="mybtn">Book a Table</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Book;
