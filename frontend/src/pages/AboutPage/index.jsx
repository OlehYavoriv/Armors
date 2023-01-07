import React from "react";
import AboutShop1 from "../../assets/images/about-shop-1.jpeg";
import AboutShop2 from "../../assets/images/about-shop-2.jpeg";

const About = () => {
  return (
    <section className="container my-5">
      <div className="row">
        <div className="col-md-6 p-4 p-sm-5 order-2 order-sm-1">
          <small className="text-uppercase">About us</small>
          <h2 className="h2 mb-4">
            About the <span className="text_yellow text_effect">team</span>
          </h2>
          <p className="text-secondary">
            The 'Armors' team are people who themselves use the equipment and
            wardrobe items that are offered to customers. This allows you to get
            a more accurate understanding of what needs to be improved, and what
            conditions this or that model is designed for.
          </p>
        </div>
        <div className="col-md-6 p-0 text-center order-1 order-sm-2">
          <img src={AboutShop1} className="w-100" alt="Shop" />
        </div>

        <div className="col-md-6 p-0 text-center">
          <img src={AboutShop2} className="w-100" alt="Shop" />
        </div>
        <div className="col-md-6 p-4 p-sm-5">
          <small className="text-uppercase">About us</small>
          <h2 className="h2 mb-4">
            Welcome to{" "}
            <span className="text_yellow text_effect">'Armors'!</span>
          </h2>
          <p className="text-secondary">
            The main principles in our activity are responsibility,
            understanding and high quality of service. We provide a wide
            selection of army and tactical clothing, military equipment, casual
            clothing, gear and equipment for tourism and hunting.In production,
            we use only high-quality and high-tech materials, new types of
            fabrics and modern, well-thought-out design.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
