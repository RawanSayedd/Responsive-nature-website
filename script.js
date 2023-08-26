const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const menuList = document.querySelector(".menu-list");

menuBtn.onclick = () => {
  menuList.classList.add("active");
  menuBtn.classList.add("hide");
};

cancelBtn.onclick = () => {
  menuList.classList.remove("active");
  menuBtn.classList.remove("hide");
};
