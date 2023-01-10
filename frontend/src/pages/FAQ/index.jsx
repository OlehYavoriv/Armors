import React from "react";
import { Container } from "react-bootstrap";
import { TbDiscount2, TbGift } from "react-icons/tb";

const FAQ = () => {
  return (
    <section>
      <h2 className="page_title">FAQ</h2>
      <hr className="line" />
      <p className="text-center mt-3 mb-5">
        Find the answers for the most frequently asked questions below
      </p>
      <Container>
        <div className="row">
          <div className="col-md-6 col-lg-4 mb-4">
            <h6 className="mb-3 text-primary align-items-center">
              <TbDiscount2 /> How to get a discount card in Armors?
            </h6>
            <p>
              To receive a discount card, you need to be registered on the
              website - and you will receive a 2% discount on your first
              purchase. Further, accumulating purchases, your discount will
              grow.
            </p>
          </div>

          <div className="col-md-6 col-lg-4 mb-4">
            <h6 className="mb-3 text-primary align-items-center">
              <TbGift /> How to buy gift certificates?
            </h6>
            <p>
              Armors gift certificates can be purchased both in the chain of
              retail stores and on the website of the online store. For this, it
              is enough to have a desire.
            </p>
          </div>

          <div className="col-md-6 col-lg-4 mb-4">
            <h6 className="mb-3 text-primary align-items-center">
              <TbDiscount2 /> How to get a discount card in Armors?
            </h6>
            <p>
              To receive a discount card, you need to be registered on the
              website - and you will receive a 2% discount on your first
              purchase. Further, accumulating purchases, your discount will
              grow.
            </p>
          </div>

          <div className="col-md-6 col-lg-4 mb-4">
            <h6 className="mb-3 text-primary align-items-center">
              <TbGift /> How to buy gift certificates?
            </h6>
            <p>
              Armors gift certificates can be purchased both in the chain of
              retail stores and on the website of the online store. For this, it
              is enough to have a desire.
            </p>
          </div>

          <div className="col-md-6 col-lg-4 mb-4">
            <h6 className="mb-3 text-primary align-items-center">
              <TbDiscount2 /> How to get a discount card in Armors?
            </h6>
            <p>
              To receive a discount card, you need to be registered on the
              website - and you will receive a 2% discount on your first
              purchase. Further, accumulating purchases, your discount will
              grow.
            </p>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <h6 className="mb-3 text-primary align-items-center">
              <TbGift /> How to buy gift certificates?
            </h6>
            <p>
              Armors gift certificates can be purchased both in the chain of
              retail stores and on the website of the online store. For this, it
              is enough to have a desire.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
