// login.js
import React, { useState } from "react";

const Login = () => {
    const [uname, setUname] = useState("");
    const [pwd, setPwd] = useState("");

    const validate = () => {
        if (uname === "swapna" && pwd === "12345") {
            alert("Authentication successful");
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <div>
            <h3>Login</h3>
            <div>
                <form className="form group">
                    <label className="form-label" htmlFor="uname">
                        Username:
                        <input
                            className="form-control"
                            name="uname"
                            id="uname"
                            type="text"
                            placeholder="Enter username"
                            onChange={(event) => { setUname(event.target.value) }}
                        />
                    </label>
                    <label className="form-label" htmlFor="pwd">
                        Password:
                        <input
                            className="form-control"
                            name="pwd"
                            id="pwd"
                            type="password"
                            placeholder="Enter password"
                            onChange={(event) => setPwd(event.target.value)}
                        />
                    </label>
                    <button type="submit" className="btn btn-primary" onClick={validate}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
