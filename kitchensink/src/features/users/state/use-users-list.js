import { useEffect } from 'react';
import { useAxios } from '../../../react-axios';

const useUsersList = () => {
  const axios = useAxios();

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users');
  }, []); // eslint-disable-line

  return {
    called: axios.called,
    loading: axios.loading,
    items: axios.data || [],
  };
};

export default useUsersList;
