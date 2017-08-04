import axios from 'axios';

class ApiService {
  get = (path, params) => {
    return new Promise((resolve, reject) => {
      axios.get(path, params)
      .then(resolve)
      .catch(reject);
    });
  }

  post = (path, params) => {
    return new Promise((resolve, reject) => {
      axios.post(path, params)
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
