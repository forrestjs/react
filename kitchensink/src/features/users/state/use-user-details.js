import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAxios } from '../../../react-axios';

const useUserDetails = () => {
  const { id: userId } = useParams();
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
