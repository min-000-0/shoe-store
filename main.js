// 引入全站 SCSS 樣式
import "./assets/scss/all.scss";

// 引入 Bootstrap Icons 字型樣式
import "bootstrap-icons/font/bootstrap-icons.css";

// 引入 Swiper 及其 CSS
import Swiper from "swiper";
import "swiper/css";

// 初始化 Swiper 輪播，啟用無限循環
const swiper = new Swiper(".swiper-container", { loop: true });

// 收藏按鈕：點擊切換空心與實心愛心圖示
const favBtn = document.querySelector("#favBtn");
if (favBtn) {
  favBtn.addEventListener("click", () => {
    const icon = favBtn.querySelector("i");
    icon.classList.toggle("bi-heart");
    icon.classList.toggle("bi-heart-fill");
  });
}
