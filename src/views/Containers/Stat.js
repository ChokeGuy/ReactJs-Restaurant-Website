const Stat = (props) => {
  return (
    <section className="stat-container" id="stat">
      <div className="stat-container-background">
        <div className="container stat-container-content">
          <div className="row stat-container-content-list">
            <div className="col-lg-3 col-md-6">
              <div className="stat-container-content__item">
                <p>232</p>
                <span>Clients</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stat-container-content__item">
                <p>521</p>
                <span>Projects</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stat-container-content__item">
                <p>1453</p>
                <span>Hours Of Support</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stat-container-content__item">
                <p>32</p>
                <span>Workers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Stat;
