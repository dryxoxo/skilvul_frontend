import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/action/listUserAction";

export default function Login() {
  const [emailUser, setEmailUser] = useState("");
  const [passwordUser, setPasswordUser] = useState("");
  const state = useSelector((state) => state.listUser);
  const dispatch = useDispatch();
  console.log(state);
  useEffect(() => {
    dispatch(getUser());
  }, []);

  const handlingSubmit = () => {
    const data = {
      emailUser,
      passwordUser,
    };

    console.log(data);
  };

  return (
    <>
      <div className="container">
        <div className="row vh-100">
          <div className="col my-auto">
            <div className="card mb-3 mx-auto" style={{ maxWidth: "1500px" }}>
              <div className="row g-0">
                <div className="col-md-6">
                  <img
                    src="https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1484901815/nr8hx938nv4rhp3jflgf.jpg"
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-6 my-auto">
                  <div className="card-body">
                    <h1 className="card-title">Masuk</h1>
                    <div className="card-text mt-2">
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="jhondoe@gmail.com"
                          value={emailUser}
                          onChange={(e) => setEmailUser(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          placeholder="Kata Sandi"
                          value={passwordUser}
                          onChange={(e) => setPasswordUser(e.target.value)}
                        />
                      </div>
                      <button
                        className="btn btn-primary col-12"
                        onClick={handlingSubmit}
                      >
                        Masuk
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
