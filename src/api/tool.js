
export function formatContent(cellvalue, options, rowObject) {
  //alert(cellvalue);
  if(cellvalue != null && cellvalue != ""){
      //去掉<p><br/></p>
      //return cellvalue.replace(/<p>/ig,"").replace(/<\/p>/ig,"").replace(/<br\/>/ig,"");
      //只提取汉字

      var reg = /[\u4e00-\u9fa5]/g;
      //console.log(cellvalue.match(reg));
      var result = cellvalue.match(reg);
      return result.join("");
  }
  else
    return "";
}
export function randomWord(){

    var str = "",
        range = 10,
        arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    // 随机产生
    //range = Math.round(Math.random() * 4) + 5;
    for(var i=0; i<range; i++){
        var pos = Math.round(Math.random() * (arr.length-1));
        str += arr[pos];
    }
    return str;
}
export function clearDiv(idName,className,className2){
    var domId = document.getElementById(idName);
    var domClass = domId.getElementsByClassName(className)[0];
    domClass.innerHTML = '';
    var div = document.createElement('div');
    div.setAttribute('class', className2);
    domClass.appendChild(div);
}

export function param2Obj(url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
    decodeURIComponent(search)
      .replace(/"/g, '\\"')
      .replace(/&/g, '","')
      .replace(/=/g, '":"')
      .replace(/\+/g, ' ') +
    '"}'
  )
}
export function slideUpFunc(className,timer) {
    var dom = document.getElementsByClassName(className)[0];
    console.log(dom.style.visibility);
    if(dom.style.visibility == 'visible' || dom.style.visibility == ''){
        console.log('up');
        var height = dom.offsetHeight;
        var height2 = height;
        console.log(height);
        timer = setInterval(function(){
            height -= 5;
            if(height <= 5 ) {
                height = 0;
                dom.style.offsetHeight = height2;
                dom.style.height = height2 +'px';
                console.log(dom.style.height);
                console.log(dom.style.offsetHeight);
                dom.style.visibility = 'hidden';
                clearInterval(timer);
                return ;
            }else {
                console.log('inter');
                dom.style.height = height + 'px';
            }

        }, 5);
    }
}

export function slideDownFunc(className,timer) {
    var dom = document.getElementsByClassName(className)[0];
    if(dom.style.visibility == 'hidden'){
        var height = dom.offsetHeight;
        console.log(height);
        dom.style.height = 0;
        dom.style.visibility = 'visible';
        var height2 = 0;
        timer = setInterval(function(){
            height2 += 5;
            if(height2 >=height ) {
                height2 = height;;
                dom.style.height = height2+'px';
                clearInterval(timer);
                return;
            }else {
                console.log('inter');
                dom.style.height = height2 + 'px';
            }

        }, 5);
    }
}
export function in_array(par,arr) {
  if(!Array.isArray(arr)) return false;
  let ind = arr.findIndex((v)=>{
    return v == par;
  })
  if(ind != -1){
    return true
  }else{
    return false;
  }

}

//千分位
export function filter_q(num){
  return (num || 0).toString().replace(/\d+/, function (n) {
    var len = n.length;
    if (len % 3 === 0) {
      return n.replace(/(\d{3})/g, ',$1').slice(1);
    } else {
      return n.slice(0, len % 3) + n.slice(len % 3).replace(/(\d{3})/g, ',$1');
    }
  });
}
// 千分位保留两位小数
export function filter_q2(num){
  num=(Math.round(num*100)/100).toFixed(2);
  return (num || 0).toString().replace(/\d+/, function (n) {
    var len = n.length;
    if (len % 3 === 0) {
      return n.replace(/(\d{3})/g, ',$1').slice(1);
    } else {
      return n.slice(0, len % 3) + n.slice(len % 3).replace(/(\d{3})/g, ',$1');
    }
  });
}
//截取汉字
export function cut_string(str,len = 2){
  if(!str) return '';
  return str.substring(0,len);
}
//批量截取汉字
export function cut_arr_str(arr,len = 2){
  let t = [];
  for(let a of arr){
    t.push(a.substring(0,len))
  }
  return t;
}

export function getColor(num){
  if(num == null || num == ''){
    return 'black';
  }
  num = parseFloat(num);
  if(num >= 0){
    return 'red';
  }else {
    return 'green';
  }
}


/*政企大屏*/
//数字加工                   通用
export function num_f(num,type,unit_c,unit2,unit3){
  // unit2表示M单位 unit3表示人单位不为小数
  // console.log(num);
  if(!num) {if(num!=0)return '--';else return 0;}
  num = parseFloat(num);
  if(isNaN(num)){return '--'}
  let t = 0;
  let unit = '';
  if(!type){
    return '--';
  }
  if(type == 1){
    if(num == '--' || num === '') return '--';

    if(num < 1){
      if(unit3){
        if(num == 0){
          return 0;
        }
        return 1;
      }
      return (Math.round(num*100)/100).toFixed(2);
    }else if(num < 10000){
      if(num%1!=0){
        num = (Math.round(num*100)/100).toFixed(2);
      }
      if(unit3){
        num = Math.round(num);
      }
    }
    if(unit_c){
      t = num_unit(num,unit_c);
    }else{
      let c = num_t(num);
      t = c[0]+c[1];
    }
  }else if(type == 2){
    t = (Math.round((num * 10000))/100).toFixed(2);
    if(num>0 && unit2==2){
      t = '+'+t;
    }
    unit = '%';
  }else if(type == 22){
    t = num;
    unit = '%';
  }else if(type == 10){
    //前端自我格式控制
    t = '--';
  }else if(type == 3){
    t = '--';
  }
  if(type == 1 && unit2==3){
    return t+unit+'M';
  }
  return t+unit;
}


//数字带单位
export function num_unit(num,unit_class = ''){
   let n = num_t(num);
   return n[0]+"<span class='"+unit_class+"'>"+n[1]+"</span>";
}

//数字单位加工
export function num_t(vt){
  let unit = '';
  let t = 0;
  let abs_v = Math.abs(vt);
  if(abs_v < 10000 && abs_v > 1000){
    t = filter_q(vt);
  }else if(abs_v < 100000000 && abs_v >= 10000){
    t =(Math.round((vt/10000)*100)/100).toFixed(2);
    t = filter_q(t)
    unit = '万';
  }else if(abs_v >= 1000000000000){
    t = (Math.round((vt/1000000000000)*100)/100).toFixed(2);
    unit = '万亿';
  }else if(abs_v >= 100000000000){
    t =(Math.round((vt/100000000000)*100)/100).toFixed(2);
    unit = '千亿';
  }else if(abs_v >= 100000000){
    t = (Math.round((vt/100000000)*100)/100).toFixed(2);
    unit = '亿';
  }else{
    t = vt;
  }
  return [t,unit];
}
//抛出数字+单位
export function numUnit(num){
  let n = num_t(num);
  return n[0]+n[1];
}

//抛出数字+自带单位
export function numByUnit(num,unit){
  if(!num && num !== 0) return '--';
  let n = num_t(num);
  return n[0]+n[1]+unit;
}



//返回上下箭头
export function icon_s(num,type = 1){
  if(type == 3) return '';
  let t ='';
  if(num == 0){
    t = '';
  }else if(num > 0){
     t = "<i class='iconfont icon-up'></i>";
  }else{
    t = "<i class='iconfont icon-down'></i>";
  }
  return t;
}

//将数组内的各项长度都控制在2个字符以内
export function array_length(arr){
  var arr2 = [];
  for( var item of arr) {
    if(item.length > 2){
      arr2.push(item.substring(0,2)+'.');
    }else {
      arr2.push(item);
    }
  }
  return arr2;
}
export function string_length(string){
  if(string){
    return string.substring(0,2);
  }
}


//浮点数相加
export function FloatAdd(arg1,arg2) {
  var r1, r2, m;
  try {
    r1 = arg1.toString().split(".")[1].length
  } catch (e) {
    r1 = 0
  }
  try {
    r2 = arg2.toString().split(".")[1].length
  } catch (e) {
    r2 = 0
  }
  m = Math.pow(10, Math.max(r1, r2));
  return (arg1 * m + arg2 * m) / m;
}


//color颜色输出
export function color_by_type(type,num){
  return type == 3 ? 'grey1' : num > 0 ? 'red1' : 'green1';
}












