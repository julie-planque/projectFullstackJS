import axios from "axios";
export default axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin" : "http://localhost:8080",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST,GET,PUT,DELETE",
    "Access-Control-Allow-Headers": "Authorization, Lang"
  }
});