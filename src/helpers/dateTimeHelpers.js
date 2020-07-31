function leftPad(value, count = 2, char = '0') {
    const strinValue = value.toString();
    let newValue = strinValue;
  
    if (strinValue.length < count) {
      for (let i = 0; i < count - strinValue.length; i++) {
        newValue = char + strinValue;
      }
    }
    return newValue;
  }
  
  
  function getPrimeiroDia() {
    const now = new Date();
    let primeiroDia = new Date(now.getFullYear(), now.getMonth(), 1);
    let result = '';
  
    result += now.getUTCFullYear();
    result += '-';
    result += leftPad(now.getUTCMonth() + 1);
    result += '-';
    result += leftPad(primeiroDia.getDate());
  
  
  
    return result;
  }

  function getUltimoDia() {
    const now = new Date();
    let ultimoDia = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    let result = '';
  
    result += now.getUTCFullYear();
    result += '-';
    result += leftPad(now.getUTCMonth() + 1);
    result += '-';
    result += leftPad(ultimoDia.getDate());
  
  
  
    return result;
  }
  

  function getFormatData(data) {
    const now = new Date(data);
    let result = '';
  
    result += now.getUTCFullYear();
    result += '/';
    result += leftPad(now.getUTCMonth() + 1);
    result += '/';
    result += leftPad(now.getUTCDate());
  
  
  
    return result;
  }

  export {getPrimeiroDia,getUltimoDia,getFormatData};