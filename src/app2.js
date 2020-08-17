import "/app2.css";
import $ from "jquery";

const $tab_nav = $(".app2>.tab-nav");
const $tab_content = $(".app2>.tab-content");

$tab_nav.on("click", "li", (e) => {
  let $target = $(e.currentTarget);
  let index = $target.index();
  $target.addClass("active").siblings().removeClass("active");
  $tab_content
    .children()
    .eq(index)
    .addClass("show")
    .siblings()
    .removeClass("show");
});
