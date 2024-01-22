import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <section className="">
      <h3 className="text-center mb-5 pb-2 text-warning2 fw-bold mt-5 custom-sentence-user-gallery">
        Privacy Policy
      </h3>
      <p className="text-center mb-5 p-5">
        Our entity legal name is Rayn look. we are located in Beirut, Lebanon.
        we follow all Lebanese governing laws
      </p>

      <div className="row m-5">
        <div className="col-md-6 col-lg-4 mb-5">
          <h6 className="mb-3 text-warning2">
            <i className=" text-warning2 pe-2"></i>RETURN POLICY
          </h6>
          <p>
            Rayn-look is delighted to offer you a straight forward return and
            exchange policy to any unopened, undamaged and unexpired products
            within 7 days of purchase. please be aware that our products are
            considered a hygienic product by law and we are unable to offer a
            return or exchange if the non-tamper seal on your packaging is
            broken and/or the products are removed from the box. the return cost
            for shipping is free, within Lebanon using our preferred courier
            company. international returns must be sent as a tracked package and
            the transportation cost must be paid by the customer.
          </p>
        </div>

        <div className="col-md-6 col-lg-4 mb-5">
          <h6 className="mb-3 text-warning2">
            <i className=" text-warning2 pe-2"></i>CONCLUSIONS OF AGREEMENT
          </h6>
          <p>
            All goods displayed on Rayn-look.com (the ‘website’) including
            prices quoted are non-binding and subject to change. all prices
            quoted contain the statutory value-added tax of the United Arab
            Emirates. If the agreement has been entered into, but we are unable
            to deliver the ordered articles within the foreseeable future
            despite congruent hedging transactions, we reserve the right to
            withdraw from the agreement. if we should establish that delivery of
            goods may be delayed for an unforeseeable amount of time, we will
            advise you of this fact and refund any payments already made by you.
          </p>
        </div>

        <div className="col-md-6 col-lg-4 mb-5">
          <h6 className="mb-3 text-warning2">
            <i className=" text-warning2 pe-2"></i>THE VALIDITY OF THE GENERAL
            CONDITIONS
          </h6>
          <p>
            All our offers, products and services are based exclusively on the
            following general terms and conditions, even when accessed from
            outside Lebanon. terms and conditions that deviate from or are
            contrary to these general terms and conditions will not be
            recognized by the seller and shall not apply.
          </p>
        </div>

        <div className="col-md-6 col-lg-4 mb-5">
          <h6 className="mb-3 text-warning2">
            <i className=" text-warning2 pe-2"></i>DELIVERIES, SHIPPING
          </h6>
          <p>
            when you have submitted an order, you will receive an email from us
            acknowledging that we have received your order and confirming the
            details of your order, including the full shipping address and your
            order number. once the order is ready to be dispatched, you will
            receive a shipment confirmation email with tracking number. We ship
            to over 99% of the countries of the world. Depending upon
            availability, all goods are dispatched as soon as possible. should
            the requested item be out of stock, we will ensure that it is
            delivered as soon as possible. Rayn-look.com shall bear the risk of
            any damage, theft or loss of items during transport to the delivery
            address. this risk will be passed to the customer the moment he/she
            receives the delivery. upon delivery the customer should inspect the
            items to check for damage. if there is any damage, the product
            should not be used and should instead return them as set out in the
            returns policy. Should the content of the package be opened, damaged
            or stolen, a replacement for the exact same product including
            prescription power as ordered according to the order confirmation
            will be provided after receiving a valid report from the courier
            company.
          </p>
        </div>

        <div className="col-md-6 col-lg-4 mb-5">
          <h6 className="mb-3 text-warning2">
            <i className="text-warning2 pe-2"></i>PLACING AN ORDER
          </h6>
          <p>
            If any goods ordered are not available, youmibeauty.com may offer
            you substitute products of equivalent quality and price. if we are
            unable to offer substitutes or you do not agree to accept such
            substitutes youmibeauty.com shall reimburse your payment within 10
            days of the date youmibeauty.com receives your order.
          </p>
        </div>

        <div className="col-md-6 col-lg-4 mb-5">
          <h6 className="mb-3 text-warning2">
            <i className=" text-warning2 pe-2"></i>INFORMATION
          </h6>
          <p>
            Once we have received the returned merchandise in sealed condition,
            we will refund the original purchase, minus any outstanding payments
            the customer may owe us. The customer will be responsible to pay for
            trackable shipment for return shipments By subscribing to item
            beauty text alerts you consent to receive a varying number of
            marketing messages via automated technology and agree to the terms
            and conditions.
          </p>
        </div>
        <div className="text-center w-100">If you have any other question don't hesitate to<Link className="text-warning2 nav-link" to={'/contact-us'}>Contact Us</Link> </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
