const axios = require("axios");
import config from "./config";

axios.interceptors.request.use(
  config => {
    // console.log("axios.interceptors.request");
    config.headers["X-Requested-With"] = "XMLHttpRequest";
    // console.log(config);

    if (!sessionStorage.tokenId) {
      sessionStorage.tokenId = "";
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

//添加一个返回拦截器
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    //对返回的错误进行一些处理
    console.info("--------error--");
    console.info(error);
    if (error.response && error.response.data && error.response.data.location) {
      console.log("-------2-----redirect-");
      //window.location="/chan-sso/login?service="+window.location.protocol+"//"+window.location.hostname+":"+window.location.port+"/";
    } else {
      return Promise.reject(error);
    }
  }
);

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url, params = {}) {
  if (sessionStorage.isTest != undefined) {
    params.isTest = sessionStorage.isTest;
  }
  return new Promise((resolve, reject) => {
    axios
    .get(
      config.baseURL + url,
      {
        params: params
      },
      config
    )
    .then(response => {
      if (response && response.data) {
        resolve(response.data);
      }
    })
    .catch(err => {
      reject(err);
    });
  });
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}) {
  if (sessionStorage.isTest != undefined) {
    data.isTest = sessionStorage.isTest;
  }
  return new Promise((resolve, reject) => {
    axios.post(url, data, config).then(
      response => {
        if (response && response.data) {
          resolve(response.data);
        }
      },
      err => {
        reject(err);
      }
    );
  });
}

/**
 * 封装post-json请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function j_post(url, data = {}) {
  if (sessionStorage.isTest != undefined) {
    data.isTest = sessionStorage.isTest;
  }
  return new Promise((resolve, reject) => {
    axios.post(config.baseURL + url, data).then(
      response => {
        if (response && response.data) {
          resolve(response.data);
        }
      },
      err => {
        reject(err);
      }
    );
  });
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url, data = {}) {
  if (sessionStorage.isTest != undefined) {
    data.isTest = sessionStorage.isTest;
  }
  return new Promise((resolve, reject) => {
    axios.patch(config.baseURL + url, data, config).then(
      response => {
        if (response && response.data) {
          resolve(response.data);
        }
      },
      err => {
        reject(err);
      }
    );
  });
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url, data = {}) {
  if (sessionStorage.isTest != undefined) {
    data.isTest = sessionStorage.isTest;
  }
  return new Promise((resolve, reject) => {
    axios.put(config.baseURL + url, data, config).then(
      response => {
        if (response && response.data) {
          resolve(response.data);
        }
      },
      err => {
        reject(err);
      }
    );
  });
}
