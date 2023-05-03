import React from "react";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const { ref: contactRef, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-400px 0px",
  });
  return (
    <section ref={contactRef} id="contact" className="contact">
      <div className={`contact-left ${inView ? "animate-left" : "hidden"}`}>
        <h2 className="section-title">Contact Me</h2>
        <p className="fw-bold">
          Interested in working together? Just fill in the form and let's see
          what we can create!
        </p>
      </div>
      <div className={`contact-right ${inView ? "animate-right" : "hidden"}`}>
        <form
          target="_blank"
          action="https://formsubmit.co/c41709e8014e841d1d0a538bddfe6541"
          method="POST"
          className="contact-form"
        >
          {/* <p className="contact__form-item"> */}
          <label className="fw-bold fs-400">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name Here"
            required
          />
          {/* </p> */}
          {/* <p className="contact__form-item"> */}
          <label className="fw-bold fs-400">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="example@email.com"
            required
          />
          {/* </p>
          <p className="contact__form-item full"> */}
          <label className="fw-bold fs-400">Your Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Your Message Here"
            rows="10"
            required
          ></textarea>
          {/* </p> */}
          {/* <p className="contact__form-item full"> */}
          <button className="btn-link" type="submit">
            Submit
          </button>
          {/* </p> */}
        </form>
      </div>
    </section>
  );
}
