import "./home.scss";

const Home = () => {
  return (
    <>
      {/* <div>HOME</div> */}
      <div className="background"></div>
      <div className="home-banner container-fluid d-flex flex-column justify-content-center align-items-center gap-0 px-0">
        <p className="home-banner_greeting fs-2 text-primary m-0 text-center">
          Hello there! I am
        </p>
        <h1 className="home-banner_name display-1 fw-bold text-primary w-50 text-center">
          Wednesday <span className="text-danger">Adams</span>
        </h1>
        <p className="home-banner_title fs-2 text-primary m-0 text-center">
          Full Stack Web Developer
        </p>
      </div>
    </>
  );
};

export default Home;
