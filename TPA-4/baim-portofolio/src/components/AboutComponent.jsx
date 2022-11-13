import React from "react";

const AboutComponent = () => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <i class="fa-regular fa-face-grin-wide fa-3x mb-3"></i>
        </div>
        <div className="col-10">
          <h3 className="text-primary">About Me</h3>
          <p className="text-secondary">
            Hi, my name is Ibrahim Huzaimi. I am currently a final semester
            student majoring in Informatics Engineering. I am very interested in
            machine learning and website development. I really hope that someday
            I can become a professional developer
          </p>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-10">
          <h3 className="text-primary">What Can I Do?</h3>
          <p className="text-secondary">
            basically, I can do electrical installations because I come from a
            vocational high school. besides that, I can also develop a website
            using the laravel framework and also react. Besides that, I can also
            create machine learning models for classification, regression, and
            classification
          </p>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-10">
          <h3 className="text-primary">Skills</h3>
          <p className="text-secondary">
            <span className="border rounded p-2">
              <i class="fa-brands fa-react me-1"></i>React
            </span>
            <span className="border rounded p-2 mx-2">
              <i class="fa-brands fa-laravel me-1"></i>Laravel
            </span>
            <span className="border rounded p-2">
              <i class="fa-brands fa-python me-1"></i>Python
            </span>
            <span className="border rounded p-2 mx-2">
              <i class="fa-brands fa-js me-1"></i>Javascript
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutComponent;
