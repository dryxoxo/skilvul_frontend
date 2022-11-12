import "../assets/style/Self.css";
import baim from "../assets/image/baim.png";

export default function Self() {
  return (
    <>
      <div className="row justify-content-center align-items-center my-5">
        <div className="col-md-6 text-center">
          <img src={baim} alt="" style={{ width: "70%" }} />
        </div>
        <div className="col-md-6">
          <h2>Hi, Im Ibrohim Huzaimi ✌</h2>
          <h4>Frontend Engineer</h4>
          <p>
            Someone who had interest in Frontend Engineer and Machine Learning
          </p>
        </div>
      </div>
    </>
  );
}
