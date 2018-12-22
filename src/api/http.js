import axios from 'axios';
import qs from 'qs';
import md5 from 'js-md5';

// const domain = 'https://server.apexgame.cn/';
const urlPath = '/WebService.asmx';

const defaultObj = {
    type: 'post',
}

  // 参数加密
const objSortJoin = (arys) => {
    var newkey = Object.keys(arys).sort();
    var newObj = {}; //创建一个新的对象，用于存放排好序的键值对
    for (var i = 0; i < newkey.length; i++) {
      //遍历newkey数组
      newObj[newkey[i]] = arys[newkey[i]];
      //向新创建的对象中按照排好的顺序依次增加键值对
    }
    let str = '';      
    for (let i in newObj) {
        newObj[i] = encodeURIComponent(newObj[i]);
        str += i + '=' + newObj[i] + '&';
    }
    str = str.slice(0, str.length - 1);
    str = str.toLocaleUpperCase();    
    str = md5(str);
    str = str.toLocaleUpperCase();
    return str; //返回排好序连接好的新对象
}

const Http = (urls, obj, load, type = defaultObj.type) => {
    if(load) {

    }
    let obj1 = Object.assign({}, obj);
    let key = "4951841F25AF0C695331B3F3C0369089";
    for(let x in obj) {
        obj[x] = encodeURIComponent(obj[x]);
    }
    obj1.key = key;
    obj.sign = objSortJoin(obj1);
    if (type === 'post') {
        let axiosObj = {
            method: type,
            url: urls === 'file' ? '/img.ashx' : urlPath + urls,
            data: qs.stringify(obj),
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': urls === 'file' ? 'application/x-www-form-urlencoded' : 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        };
        return axios(axiosObj).then(res => {
            if(load) {
              
            }
            return res.data;
        }).catch(err => {
            if(load) {
                
            }
        });
    }
    if (type === 'get') {
        return axios({
            method: type,
            url: urlPath + urls,
            params: obj,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        }).then(res => {
            // if(load) {
            // }
            return res.data;
        });
    }
}

export default Http;