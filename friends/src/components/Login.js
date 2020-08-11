import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = (e) => {
      //Make a POST  request and send the credentials object to the api
    e.preventDefault();
    axiosWithAuth()
      .post("/login", this.state.credentials)
      .then((res) => {
        console.log("Me: login success: res: ", res);
        window.localStorage.setItem("authToken", res.data.payload);
        //navigate the user to/protected (whatever landing page)
        this.props.history.push("/protected");
      })
      .catch((err) => {
        console.error("bk: login failed: err: ", err.message);
        localStorage.removeItem("authToken");
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;

//How are tokens usually handled? Thru sessions or cookies. are we putting it in local storage just for our use case or is that done normally? There are many different ways
