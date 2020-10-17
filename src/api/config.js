import Qs from 'qs';

export default {

  baseURL: '/myphoto-srv/',
  method: 'POST',

  transformRequest: [function (data) {

    return Qs.stringify(data);
  }],

  transformResponse: [function (data) {
    if (typeof data === 'string') {
      return JSON.parse(data);
    }
    return data;
  }],

  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  },

  data: {},

  timeout: 30000,

  withCredentials: true,

  responseType: 'json',

  productionGzip: true,

}
