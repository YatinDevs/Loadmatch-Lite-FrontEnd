import axios from "./axios-instance";

/*
  References : 
  https://academics.newtonschool.co/api/v1/bookingportals/offers?filter={"type":"add_any_of_the_above_type"}
  
*/
export const fetchOffersDetails = async (type) => {
  console.log("fetched Details Type :", type);

  try {
    const res = await axios.get(`/offers?filter={"type":"${type}"}`);
    console.log("Sending Fetched :", res.data);
    return res.data.data.offers;
  } catch (err) {
    console.error("Something went wrong ", err);
    throw err;
  }
};
