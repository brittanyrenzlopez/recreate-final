import axios from 'axios';

const setAuthToken = token => {
	//if token exists
  if (token) {
    //apply to every request
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    //if no token delete auth header
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setAuthToken;
