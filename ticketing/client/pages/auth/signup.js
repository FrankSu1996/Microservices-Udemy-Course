import { useState } from "react";
import axios from "axios";
import useRequest from "../../hooks/use-request";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { doRequest, errors } = useRequest({
    url: "/api/users/signup",
    method: "post",
    body: {
      email,
      password,
    },
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    doRequest();
  };

  return (
    <div id="myModal" className="Container">
      <div className="modal-dialog modal-login">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Sign In</h4>
          </div>
          <div className="modal-body">
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  required="required"
                ></input>
              </div>
              <div className="form-group">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  required="required"
                ></input>
              </div>
              {errors}
              <button
                type="submit"
                className="btn btn-primary btn-block btn-lg"
              >
                Sign Un
              </button>
              <p className="hint-text">
                <a href="#">Forgot Password?</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
