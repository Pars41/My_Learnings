import "./contact.scss";

const Contact = () => {
  return (
    <>
      {/* <div>CONTACT</div> */}
      <div className="background"></div>
      <div className="contacts d-flex flex-column justify-content-end align-items-center gap-3 ">
        <h1>Contact Me</h1>
        <div className="contacts_layout row gx-5 gy-2">
          <div className="contacts_layout_contact col-md-4 d-flex flex-column justify-content-center align-items-center gap-3">
            <i className="fa-solid fa-envelope fa-2x"></i>
            <p className="fs-4 fw-semibold">team@mgcoders.org</p>
          </div>
          <div className="contacts_layout_contact col-md-4 d-flex flex-column justify-content-center align-items-center gap-3">
            <i className="fa-solid fa-mobile fa-2x"></i>
            <p className="fs-4 fw-semibold">+1(123)456-7890</p>
          </div>
          <div className="contacts_layout_contact col-md-4 d-flex flex-column justify-content-center align-items-center gap-3">
            <i className="fa-solid fa-location-dot fa-2x"></i>
            <p className="fs-4 fw-semibold">Somewhere</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
