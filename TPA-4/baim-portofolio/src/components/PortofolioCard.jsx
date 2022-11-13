import React from "react";

const PortofolioCard = () => {
  let dataPortofolio = [
    {
      id: 1,
      urlImage: "https://dryxoxo.github.io/assets/Cooking.jpg",
      title: "Cooking Kuy",
      desc: "Cooking kuy is a project that combines machine learning with a website, where users can get recommendations for food recipes they want to cook",
      languages: "HTML, CSS, JS, FLASK",
      link: "https://github.com/dryxoxo/cooking-kuy",
    },
    {
      id: 2,
      urlImage: "https://dryxoxo.github.io/assets/park.jpg",
      title: "Parkirin Aja",
      desc: "Android application that aims to find parking locations around the user.",
      languages: "Kotlin",
      link: "https://github.com/dryxoxo/parkirin-aja",
    },
    {
      id: 3,
      urlImage: "https://dryxoxo.github.io/assets/rs.jpg",
      title: "Program RS Sederhana",
      desc: "This simple hospital program aims to make it easier for patients to register for inpatient or outpatient care, and also find out information about the doctor on duty",
      languages: "Java",
      link: "https://github.com/dryxoxo/program_rs",
    },
    {
      id: 4,
      urlImage: "https://dryxoxo.github.io/assets/digitalent.jpg",
      title: "Aplikasi Absensi Digitalent Kominfo",
      desc: "This application is a simple application from the Kominfo digitalent project which can make attendance for participants and guests, as well as display teacher and participant data on the dashboard page",
      languages: "HTML, CSS, JS, PHP",
      link: "https://github.com/dryxoxo/digitalentKominfo",
    },
  ];

  return (
    <>
      <div className="row">
        <div className="col-12 border-bottom mb-4">
          <p className="h4 mb-3 text-primary text-opacity-75">
            <i className="fa-solid fa-lightbulb me-2"></i>
            <span>Project's</span>
          </p>
        </div>
          {dataPortofolio.map(
            ({ id, urlImage, title, desc, languages, link }, key) => (
              <div key={key} className="col-xl-3 mb-3">
                <div className="card h-100">
                  <img src={urlImage} className="card-img-top" alt={title} />
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <footer className="blockquote-footer">{languages}</footer>
                  </div>
                  <div className="card-footer">
                    <a href={link} className="btn btn-dark">
                      <i className="fa-brands fa-github me-2"></i>Github
                    </a>
                  </div>
                </div>
              </div>
            )
          )}
      </div>
    </>
  );
};

export default PortofolioCard;
