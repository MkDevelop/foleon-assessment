import axios from "axios";

const getToken = async () => {
  const body = {
    grant_type: "client_credentials",
    client_id: process.env.REACT_APP_CLIENT_ID,
    client_secret: process.env.REACT_APP_CLIENT_SECRET,
  };
  const result = await axios.post(
    `${process.env.REACT_APP_API_URL}/oauth`,
    body
  );

  if (result.data.access_token) {
    localStorage.setItem("token", result.data.access_token);
  }

  return result.data.access_token;
};

export default getToken;
