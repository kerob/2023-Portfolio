import React, { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import projects from "../data/projects.json";
import { BiLinkExternal } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

function PortfolioItem({ data, openModal, passData }) {
  const { ref: itemRef, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-20% 0px",
  });

  const clickHandler = () => {
    passData(data);
    openModal();
  };
  return (
    <div
      ref={itemRef}
      className={`portfolio-item ${
        inView ? "portfolio-item-animate" : "hidden"
      }`}
      onClick={clickHandler}
    >
      <img src={`images/${data.img}`} alt={`${data.title} preview`} />
      <div className="portfolio-item-overlay">
        <div className="portfolio-item-title">{data.title}</div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [displayData, setDisplayData] = useState(null);
  const dialogRef = useRef();
  return (
    <section id="portfolio" className="portfolio">
      <dialog ref={dialogRef} className="portfolio-dialog">
        <button
          className="portfolio-close"
          onClick={() => dialogRef.current.close()}
        >
          <IoClose />
        </button>
        {displayData && (
          <div>
            <div className="dialog-top flex">
              <div className="dialog-top-text">
                <h2 className="fs-600 ff-highlight fw-lite">
                  {displayData.title}
                </h2>
                <div className="center-row flex">
                  <h3>Stack</h3>
                  <a
                    className="dialog__link"
                    href={`${displayData.link}`}
                    target="_blank"
                  >
                    <BiLinkExternal />
                  </a>
                </div>

                <div className="flex">
                  {displayData.stack.map((item, index) => {
                    return <div key={index}>{item}</div>;
                  })}
                </div>
              </div>
              <img
                src={`images/${displayData.img}`}
                alt={`${displayData.title} preview`}
              />
            </div>
            <div className="dialog-bottom">
              <h3>Description</h3>
              <div>{displayData.desc}</div>
            </div>
          </div>
        )}
      </dialog>
      <h2 className="section-title">Projects</h2>
      <div className="portfolio-grid grid">
        {projects.map((item) => (
          <PortfolioItem
            data={item}
            key={item.title}
            passData={setDisplayData}
            openModal={() => dialogRef.current.showModal()}
          />
        ))}
      </div>
    </section>
  );
}
