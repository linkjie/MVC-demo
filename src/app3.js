import "/app3.css";
import $ from "jquery";

const $div = $(".app3 div");
$div.on("click", (e) => {
  $div.toggleClass("move");
});
