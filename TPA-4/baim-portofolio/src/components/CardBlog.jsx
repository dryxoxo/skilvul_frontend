export default function CardBlog() {
  return (
    <>
      <div className="row mb-3 border-bottom">
        <div className="col mb-2">
          <p className="h4">
            <span>
              <i class="fa-regular fa-pen-to-square"></i>
            </span>{" "}
            Blog
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 my-2 border-bottom">
          <h4>How to solve problem using Design Thinking</h4>
          <div className="d-flex">
            <p className="text-muted">
              Let's briefly explore each of these phases in relation to a
              practical design process.
            </p>
            <p className="text-muted ms-auto">29 April 2022</p>
          </div>
        </div>
        <div className="col-12 my-2 border-bottom">
          <h4>How to solve problem using Design Thinking</h4>
          <div className="d-flex">
            <p className="text-muted">
              Let's briefly explore each of these phases in relation to a
              practical design process.
            </p>
            <p className="text-muted ms-auto">29 April 2022</p>
          </div>
          <a href="#" className="btn-link">
            See More
          </a>
        </div>
      </div>
    </>
  );
}
