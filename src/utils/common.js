export const formatMobile = (mobile) => {
  return mobile.substr(0, 11) + '...'
}

export const sleep = async (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export const formatAddress = (wallet, len = 3) => {
  if (!wallet) {
    return wallet
  }
  try {
    return wallet.substring(0, len) + '**' + wallet.substring(wallet.length - len, wallet.length)
  } catch (e) {
    return wallet
  }
}

export const getDefaultLng = (preLng) => {
  let returnLng = ''
  if (preLng) {
    returnLng = preLng
  } else {
    returnLng = navigator.language || navigator.browserLanguage
  }
  // $store.dispatch('common/setLng', returnLng)
  return returnLng
}

export const copy=(text)=>{
  this.$copyText(text).then(
    (e) => {
      this.$toast(this.$t("copiedText"));
    },
    (e) => {
    }
  );
}
export const getTime =(time)=>{
  const date = new Date(time);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  // 获取到的日期格式为2021.08.06 09:50:35
  // const formattedDate = `${year}.${month < 10 ? '0' : ''}${month}.${day < 10 ? '0' : ''}${day} ${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  // 获取到的日期格式为2021-08-06
  let formattedDate;
  if (!this.isShow) {
    formattedDate = `${year}.${month < 10 ? "0" : ""}${month}.${
      day < 10 ? "0" : ""
    }${day}`;
  } else {
    formattedDate = `${year}.${month < 10 ? "0" : ""}${month}.${
      day < 10 ? "0" : ""
    }${day} ${hours < 10 ? "0" : ""}${hours}:${
      minutes < 10 ? "0" : ""
    }${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    // console.log(formattedDate);
  }
  return formattedDate;
}

export const copyObject =(targetObject)=> {

  let returnObject = {}
  if(targetObject){
    for(let item in targetObject){
      if(targetObject.hasOwnProperty(item) && targetObject[item] !== undefined){
        returnObject[item] = targetObject[item]
      }
    }
  }

  return returnObject
}
