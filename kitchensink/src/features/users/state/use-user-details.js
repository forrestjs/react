import { useEffect } from 'react';
import { useAxios } from '../../../react-axios';

const useUserDetails = (userId) => {
  const axios = useAxios();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
  }, [userId]); // eslint-disable-line

  return {
    called: axios.called,
    loading: axios.loading,
    data: axios.data,
  };
};

export default useUserDetails;
