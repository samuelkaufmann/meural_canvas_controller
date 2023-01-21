const http = require('http');

module.exports.swipeRight = async function (canvasIp) {
  try {
    var httpUrl = 'http://' + canvasIp + '/remote/control_command/set_key/right';
    return new Promise((resolve, reject) => {
      http.get(httpUrl, (res) => {
        resolve({'statusCode': res.statusCode, 'successs': true});
      }).on("error", (err) => {
        reject(err);
      });
    });
  } catch (err) {
    return(err);
  }
}

module.exports.swipeLeft = async function (canvasIp) {
  try {
    var httpUrl = 'http://' + canvasIp + '/remote/control_command/set_key/left';
    return new Promise((resolve, reject) => {
      http.get(httpUrl, (res) => {
        resolve({'statusCode': res.statusCode, 'successs': true});
      }).on("error", (err) => {
        reject(err);
      });
    });
  } catch (err) {
    return(err);
  }
}

module.exports.swipeUp = async function (canvasIp) {
  try {
    var httpUrl = 'http://' + canvasIp + '/remote/control_command/set_key/up';
    return new Promise((resolve, reject) => {
      http.get(httpUrl, (res) => {
        resolve({'statusCode': res.statusCode, 'successs': true});
      }).on("error", (err) => {
        reject(err);
      });
    });
  } catch (err) {
    return(err);
  }
}

module.exports.swipeDown = async function (canvasIp) {
  try {
    var httpUrl = 'http://' + canvasIp + '/remote/control_command/set_key/down';
    return new Promise((resolve, reject) => {
      http.get(httpUrl, (res) => {
        resolve({'statusCode': res.statusCode, 'successs': true});
      }).on("error", (err) => {
        reject(err);
      });
    });
  } catch (err) {
    return(err);
  }
}

module.exports.sleep = async function (canvasIp) {
  try {
    var httpUrl = 'http://' + canvasIp + '/remote/control_command/suspend';
    return new Promise((resolve, reject) => {
      http.get(httpUrl, (res) => {
        resolve({'statusCode': res.statusCode, 'successs': true});
      }).on("error", (err) => {
        reject(err);
      });
    });
  } catch (err) {
    return(err);
  }
}

module.exports.wakeUp = async function (canvasIp) {
  try {
    var httpUrl = 'http://' + canvasIp + '/remote/control_command/resume';
    return new Promise((resolve, reject) => {
      http.get(httpUrl, (res) => {
        resolve({'statusCode': res.statusCode, 'successs': true});
      }).on("error", (err) => {
        reject(err);
      });
    });
  } catch (err) {
    return(err);
  }
}

module.exports.setBrightness = async function (canvasIp, brightnes) {
  try {
    var httpUrl = 'http://' + canvasIp + '/remote/control_command/set_backlight/' + brightnes;
    return new Promise((resolve, reject) => {
      http.get(httpUrl, (res) => {
        resolve({'statusCode': res.statusCode, 'successs': true});
      }).on("error", (err) => {
        reject(err);
      });
    });
  } catch (err) {
    return(err);
  }
}