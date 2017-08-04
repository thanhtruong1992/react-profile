import ApiService from 'ApiService';

class AuthService {
  login = (path, params) => {
    return new Promise((resolve, reject) => {
      ApiService.post(path, params)
        .then(resolve)
        .catch(reject);
    });
  }

  register = () => {

  }

  findMe = () => {

  }

  logOut = () => {

  }
}

export default new AuthService();
