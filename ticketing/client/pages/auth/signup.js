import { useState } from "react";

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    console.log(email, password);
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
              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-primary btn-block btn-lg"
                >
                  Sign In
                </button>
              </div>
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
