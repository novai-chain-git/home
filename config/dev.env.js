"use strict";
const merge = require("webpack-merge");
const prodEnv = require("./prod.env");
const testEnv = require("./test.env");

module.exports = merge(prodEnv, testEnv, {
  NODE_ENV: '"development"',
  baseURL: '"https://cs.novai.finance"',
  network: 28800,
  networkunit: '"SCF"',
  ios: '"https://yjjkm.naocosmetics.com/TH6ij9h/yte2zjuyod"',
  //iosOverseas: '"https://4c9ixn.bmoi.9heng.vip/mmpnd?p=2H97oZ9d1Gbkp4m3"',
  iosOverseas: '"https://yjjkm.naocosmetics.com/TH6ij9h/yte2zjuyod"',
  android:
    '"https://drag2.s3.ap-east-1.amazonaws.com/pocket/Npay-release-1.0.1.apk"'
});
