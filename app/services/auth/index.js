import ApiService from 'ApiService';

class AuthService {
  login = (path, params) => {
    return new Promise((resolve, reject) => {
      ApiService.post(path, params)
        .then(res => {
          resolve(res.data.data);
        })
        .catch(err => {
          reject(err.response.data);
        });
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
