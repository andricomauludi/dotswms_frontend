import React from "react";

const page = () => {
  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="column is-centered">
            <div className="column is-4-desktop">
              <div className="field">
                <label className="label">Email or Username</label>
                <div className="controls">
                  <input type="text" className="input" placeholder="Username" />
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="controls">
                  <input
                    type="password"
                    className="input"
                    placeholder="******"
                  />
                </div>
              </div>
              <div className="field">
                <button className="button is-success is-fullwidth">
                  {" "}
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
