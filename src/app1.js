import "/app1.css";
import $ from "jquery";

const $add = $(".app1>#add");
const $sub = $(".app1>#sub");
const $mutl = $(".app1>#mutl");
const $divede = $(".app1>#divide");
const $number = $(".app1>.number");

let num = localStorage.getItem("num") || 100;
$number.text(num);
$add.on("click", (e) => {
  let num = parseInt($number.text());
  num += 1;
  localStorage.setItem("num", num);
  $number.text(num);
});
$sub.on("click", (e) => {
  let num = parseInt($number.text());
  num -= 1;
  localStorage.setItem("num", num);
  $number.text(num);
});
$mutl.on("click", (e) => {
  let num = parseInt($number.text());
  num *= 2;
  localStorage.setItem("num", num);
  $number.text(num);
});
$divede.on("click", (e) => {
  let num = parseInt($number.text());
  num /= 2;
  localStorage.setItem("num", num);
  $number.text(num);
});
