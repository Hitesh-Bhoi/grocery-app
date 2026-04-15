"use client";
import { Coupon, Discount, NewProduct } from "../../../icons";
import "./newLetter.styled";
import {
  NewsLetterBody,
  NewsLetterFooter,
  NewsLetterHeader,
  NewsLetterMain,
} from "./newLetter.styled";

const NewseLetter = () => {
  return (
    <>
      <NewsLetterMain>
        <NewsLetterHeader>
          <div className="news-letter-title-container">
            <h2>
              Join our <span className="highlight-news-letter">Newsletter</span>{" "}
              & Never Miss a Deal
            </h2>
            <p>
              Get exclusive discounts, new product alerts, and weekly meal
              inspiration delivered to your inbox — curated just for you, every
              week.
            </p>
          </div>
          <div className="news-letter-rating-container">
            <div className="news-letter-subscriber">
              <span className="title">{"12k+"}</span>
              <span className="sub-title">{"Subscribers"}</span>
            </div>
            <div className="news-letter-rating">
              <span className="title">{"4.9/5"}</span>
              <span className="sub-title">{"Rated"}</span>
            </div>
            <div className="news-letter-digest">
              <span className="title">{"Weekly"}</span>
              <span className="sub-title">{"Digest"}</span>
            </div>
          </div>
        </NewsLetterHeader>
        <NewsLetterBody>
          <div className="subscribe-by-email-container">  
            <input
              className="subscribe-email-input"
              placeholder="Enter your email address..."
            />
            <button className="subscribe-btn">Subscribe Now</button>
          </div>
          <div className="subscribe-checkbox-container">
            <div className="responsive-wrapper">
              <label className="checkbox-container">
                <input type="checkbox" className="subscribe-checkbox" />
                <span className="checkmark"></span>
                <span className="checkbox-description">No spam ever</span>
              </label>
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  className="subscribe-checkbox"
                  id="checbox2"
                />
                <span className="checkmark"></span>
                <span className="checkbox-description">
                  Unsubscribe anytime
                </span>
              </label>
            </div>
            <div className="responsive-wrapper">
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  className="subscribe-checkbox"
                  id="checbox3"
                />
                <span className="checkmark"></span>
                <span className="checkbox-description">
                  Weekly exclusive offers
                </span>
              </label>
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  className="subscribe-checkbox"
                  id="checbox4"
                />
                <span className="checkmark"></span>
                <span className="checkbox-description">
                  Early access to sales
                </span>
              </label>
            </div>
          </div>
        </NewsLetterBody>
        <NewsLetterFooter>
          <div className="grocery-deals">
            <Discount />
            <div className="offer-container">
              <span className="offer-title">Weekly Grocery Deals</span>
              <span className="offer-description">
                Top discounts curated every Monday morning
              </span>
            </div>
          </div>
          <div className="food-arrivals">
            <NewProduct />
            <div className="offer-container">
              <span className="offer-title">New Food Arrivals</span>
              <span className="offer-description">
                Be first to discover new products and meals
              </span>
            </div>
          </div>
          <div className="subscriber-coupons">
            <Coupon />
            <div className="offer-container">
              <span className="offer-title">Exclusive Subscriber Coupons</span>
              <span className="offer-description">
                Deals you won't find anywhere else
              </span>
            </div>
          </div>
        </NewsLetterFooter>
      </NewsLetterMain>
    </>
  );
};
export default NewseLetter;
