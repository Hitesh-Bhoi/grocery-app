"use client";
import { useState } from "react";
import {
  ClockHours,
  InstagramIcon,
  LocationPin,
  MailEnvelope,
  PhoneCall,
  SendPlane,
  TwitterIcon,
  WhatsAppIcon,
} from "../../../icons";
import {
  ContactFormPanel,
  ContactInfoPanel,
  ContactUsBody,
  ContactUsHeader,
  ContactUsMain,
} from "./contactUs.styled";

const TOPICS = ["Order Issue", "Delivery", "Refund", "Partnership", "General"];


const ContactUs = () => {
  const [activeTopic, setActiveTopic] = useState("Order Issue");

  return (
    <ContactUsMain>
      {/* ── header ────────────────────────────────────────────────────── */}
      <ContactUsHeader>
        <div className="contact-title-block">
          <h2>
            Get in <span>Touch</span> with Us
          </h2>
          <p>
            Have a question or feedback? We&apos;re here to help and would love
            to hear from you.
          </p>
        </div>

      </ContactUsHeader>

      {/* ── body ──────────────────────────────────────────────────────── */}
      <ContactUsBody>
        {/* left: info + social */}
        <ContactInfoPanel>
          <div className="info-row">
            <div className="info-icon"><PhoneCall /></div>
            <div className="info-text">
              <h4>Call Us</h4>
              <p>+91 98765 43210</p>
            </div>
          </div>
          <div className="info-row">
            <div className="info-icon"><MailEnvelope /></div>
            <div className="info-text">
              <h4>Email</h4>
              <p>support@ecobazar.com</p>
            </div>
          </div>
          <div className="info-row">
            <div className="info-icon"><LocationPin /></div>
            <div className="info-text">
              <h4>Address</h4>
              <p>Mumbai, Maharashtra, India</p>
            </div>
          </div>
          <div className="info-row">
            <div className="info-icon"><ClockHours /></div>
            <div className="info-text">
              <h4>Hours</h4>
              <p>Mon – Sat · 9 am – 8 pm</p>
            </div>
          </div>

          <div className="social-buttons">
            <button className="social-btn"><WhatsAppIcon /> WhatsApp</button>
            <button className="social-btn"><TwitterIcon /> Twitter</button>
            <button className="social-btn"><InstagramIcon /> Instagram</button>
          </div>
        </ContactInfoPanel>

        {/* right: message form */}
        <ContactFormPanel>
          <p className="form-heading">Send us a Message</p>
          <p className="form-sub">
            We typically reply within 2–4 hours on business days.
          </p>

          {/* topic chips */}
          <p className="topic-label">What is it about?</p>
          <div className="topic-chips">
            {TOPICS.map((topic) => (
              <span
                key={topic}
                className={`chip${activeTopic === topic ? " active" : ""}`}
                onClick={() => setActiveTopic(topic)}
              >
                {topic}
              </span>
            ))}
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            {/* row 1 */}
            <div className="form-row">
              <div className="fl-group">
                <input type="text" id="ct-fn" placeholder=" " />
                <label htmlFor="ct-fn">First Name</label>
              </div>
              <div className="fl-group">
                <input type="text" id="ct-ln" placeholder=" " />
                <label htmlFor="ct-ln">Last Name</label>
              </div>
            </div>

            {/* row 2 */}
            <div className="form-row">
              <div className="fl-group">
                <input type="email" id="ct-em" placeholder=" " />
                <label htmlFor="ct-em">Email Address</label>
              </div>
              <div className="fl-group">
                <input type="tel" id="ct-ph" placeholder=" " />
                <label htmlFor="ct-ph">Phone (Optional)</label>
              </div>
            </div>

            {/* message */}
            <div className="fl-group message-group">
              <textarea id="ct-msg" rows={5} placeholder=" " />
              <label htmlFor="ct-msg">Your Message</label>
            </div>

            {/* footer */}
            <div className="form-footer">
              <p className="privacy-note">
                By submitting, you agree to our{" "}
                <a href="#">Privacy Policy</a>.
              </p>
              <button className="send-btn" type="submit">
                <SendPlane />
                Send Message
              </button>
            </div>
          </form>
        </ContactFormPanel>
      </ContactUsBody>
    </ContactUsMain>
  );
};

export default ContactUs;
