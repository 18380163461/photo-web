const axios = require('axios')
const Qs = require('qs')
import config from './config';

class API {

  baseURL = config.baseURL;
  url = {
    folders: 'photo/folders',
    files: 'photo/files',
    download: 'photo/download',
  }
  get = function (url, param) {
    let params = param || {};
    if (sessionStorage.isTest != undefined) {
      params.isTest = sessionStorage.isTest;
    }
    return axios.get(config.baseURL + url, {
      params: params
    }, config);
  }
  post = function (url, param) {
    let params = param || {};
    if (sessionStorage.isTest != undefined) {
      params.isTest = sessionStorage.isTest;
    }
    return axios.post(config.baseURL + url, params, config);
  }
  hasMore = function (total, pageIndex, pageSize) {
    return pageIndex * pageSize < total ? true : false;
  }
  getPageCount = function (total, pageSize) {
    let pageCount = total / pageSize;
    if (total % pageSize > 0) {
      pageCount += 1;
    }
    return pageCount;
  }
  // 复制内容到剪切板
  copyTextToClipBoard = function (text, msg) {
    var oInput = document.createElement('input');
    oInput.value = text;
    document.body.appendChild(oInput);
    oInput.select(); // 选择对象
    document.execCommand("Copy"); // 执行浏览器复制命令
    oInput.className = 'oInput';
    oInput.style.display = 'none';
    alert(msg);
  }
  getUrlStr = function (name) {
    /**
     * 获取地址栏参数
     */
    let reg = new RegExp("(^|\\?|&)" + name + "=([^&]*)(\\s|&|$)", "i");
    if (reg.test(window.location.href)) {
      return unescape(RegExp.$2.replace(/\+/g, " "))
    }
    return undefined;
  }
  getUrlArg = function (sHref, sArgName) {
    var args = sHref.split("?");
    var retval = "";
    if (args[0] == sHref) /*参数为空*/ {
      return retval; /*无需做任何处理*/
    }
    var str = args[1];
    args = str.split("&");
    for (var i = 0; i < args.length; i++) {
      str = args[i];
      var arg = str.split("=");
      if (arg.length <= 1) {
        continue;
      }
      if (arg[0] == sArgName) {
        retval = arg[1];
      }
    }
    return retval;
  }
  changeUrlArg = function (url, arg, val) {
    let pattern = arg + '=([^&]*)';
    let replaceText = arg + '=' + val;
    return url.match(pattern) ? url.replace(eval('/(' + arg + '=)([^&]*)/gi'),
      replaceText) : (url.match('[\?]') ? url +
      '&' + replaceText : url + '?' + replaceText);
  }
}

export default API;
