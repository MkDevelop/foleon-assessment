import { useQuery } from 'react-query';
import getToken from '../auth/getToken';
import api from '../api/Api';
import qs from 'qs';

export interface Filter {
  field: string;
  type: string;
  value: string;
}

export interface Publication {
  id: string;
  name: string;
  identifier?: string;
  hostname?: string;
}

const getPublications = async (filter: [Filter] | {}) => {
  const token = localStorage.getItem('token');
  const accessToken = token ? token : await getToken();
  const query = qs.stringify({
    query: filter,
  });

  const { data } = await api.get(
    `${process.env.REACT_APP_API_URL}/magazine/title?${query}`,
    {
      headers: {
        Authorization: 'Bearer ' + accessToken,
        Accept: 'application/vnd.becky.v2+json',
      },
    }
  );

  return data._embedded;
};

const usePublications = (filter: [Filter] | {}) => {
  return useQuery(['pubs'], () => getPublications(filter));
};

export default usePublications;
