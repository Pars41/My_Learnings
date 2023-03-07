import "./about.scss";

const About = () => {
  return (
    <>
      {/* <div>ABOUT</div> */}
      <div className="background"></div>
      <div className="about-me container d-flex flex-column justify-content-center align-items-center">
        <h1 className="about-me_header">BIO</h1>
        <p className="about-me_description">
          Jane Doe is lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Esse magni autem minima dolor quod nulla ipsam. Ducimus dolores quia
          quam ullam dolorem tempora corrupti perspiciatis quas! Perspiciatis
          expedita error animi consequatur impedit quia unde eum illo repellat
          odit magni neque amet reprehenderit iste perferendis laborum quo
          voluptate vitae explicabo accusantium, ratione minus aliquam harum?
          Ipsa laboriosam sequi quas qui blanditiis esse, explicabo id
          perspiciatis veniam natus quam quidem cupiditate neque dicta
          reiciendis soluta iure rerum repudiandae. Dolorum voluptates
          reiciendis mollitia tempora unde commodi, inventore ipsam sint? Quae
          iure nobis accusamus placeat obcaecati hic magni ad incidunt, vitae
          dolorum dolores vero.
        </p>
      </div>
      <div className="about-me-history container-fluid d-flex flex-column justify-content-start align-items-center gap-3">
        <div className="about-me-history_job">
          <h2 className="text-dark">2020 - 2021</h2>
          <h3>MGCoders Team</h3>
          <h6>Full Stack Developer</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            temporibus, neque deserunt eius accusamus ut. In ipsa dicta
            voluptatem, culpa at optio consequatur nobis, quod, libero rem quia.
            Reiciendis, harum.
          </p>
        </div>
        <div className="about-me-history_job">
          <h2 className="text-dark">2019 - 2020</h2>
          <h3>Google</h3>
          <h6>Front End Developer</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            error maiores nam alias asperiores veritatis delectus aliquam eius
            ab voluptates neque esse dolore, commodi nisi ducimus quos,
            voluptate corporis cumque.
          </p>
        </div>
        <div className="about-me-history_job">
          <h2 className="text-dark">2017 - 2019</h2>
          <h3>The Best Websites Co.</h3>
          <h6>Front End Developer</h6>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
            perferendis ab iste, saepe cupiditate quo dolor autem! Minima,
            aperiam repellat saepe tempora veniam minus recusandae pariatur,
            numquam exercitationem, voluptate molestias.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
