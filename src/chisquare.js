import defaultSource from "./defaultSource.js";
import normal from "./normal.js";

export default (function sourceRandomChi(source) {
  var randomNormal = normal.source(source)();
  function randomChi(k, theta) {
