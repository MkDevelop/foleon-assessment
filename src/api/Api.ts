import axios from 'axios';
import getToken from '../auth/getToken';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

/**
 * Catch the AunAuthorized Request
 */
instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      await getToken();
    }
  }
);

export default instance;
