import axios from "axios";
 //get a the token from localstorage
export const axiosWithAuth = () => {
  const token = localStorage.getItem("authToken");
 //create a new "instance" of axios with the config object built into it
 
  return axios.create({
    // configuration object
    baseURL: "http://localhost:5000/api", // access the env variable
    headers: {
      Authorization: token
    }
  });
};
