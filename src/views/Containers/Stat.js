import { NumberCount } from "./Components/NumberCount";
const Stat = (props) => {
  return (
    <section className="stat-container" id="stat">
      <div className="stat-container-background">
        <div className="container stat-container-content">
          <div className="row stat-container-content-list">
            <div className="col-lg-3 col-md-6">
              <div className="stat-container-content__item">
                <NumberCount start={150} timing={40} end={232}></NumberCount>
                <span>Clients</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stat-container-content__item">
                <NumberCount start={290} timing={13} end={521}></NumberCount>
                <span>Projects</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stat-container-content__item">
                <NumberCount start={1000} timing={6} end={1452}></NumberCount>
                <span>Hours Of Support</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stat-container-content__item">
                <NumberCount start={1} timing={105} end={32}></NumberCount>

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
