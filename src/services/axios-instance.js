import axios from "axios";

const instance = axios.create({
  baseURL: "https://academics.newtonschool.co/api/v1/bookingportals",
  headers: { projectID: "9h69a26iogeq" },
});

export default instance;
// Easy naming further
