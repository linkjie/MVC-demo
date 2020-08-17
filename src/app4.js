import "/app4.css";
import $ from "jquery";

const $div = $(".app4 div");
$div
  .on("mouseenter", (e) => {
    $div.addClass("change");
  })
  .on("mouseleave", (e) => {
    $div.removeClass("change");
  });
