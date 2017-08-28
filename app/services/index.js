import axios from 'axios';
const url = 'http://abakus-backend.demo.beesightsoft.com/public/api/';

class ApiService {
  get = (path, params) => {
    return new Promise((resolve, reject) => {
      axios.get(url + path, params)
      .then(resolve)
      .catch(reject);
    });
  }

  post = (path, params) => {
    return new Promise((resolve, reject) => {
      axios.post(url + path, params)
      .then(resolve)
      .catch(reject);
    });
  }

  put = () => {
    return;
  }

  delete = () => {
    return;
  }

  upload = () => {
    return;
  }
}

export default new ApiService();
