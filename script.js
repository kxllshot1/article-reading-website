"use strict";

const mainWindow = document.querySelector(".main-window");
const postArticleOne = document.querySelector(".box-1");
const postArticleTwo = document.querySelector(".box-2");
const postArticleThree = document.querySelector(".box-3");
const boxArticleOne = document.querySelector(".article-1");
const boxArticleTwo = document.querySelector(".article-2");
const boxArticleThree = document.querySelector(".article-3");
const allBoxArticles = document.querySelectorAll(".article");
const btnBack = document.querySelector(".btn-back");

postArticleOne.addEventListener("click", function () {
  mainWindow.classList.remove("window-active");
  btnBack.classList.add("btn-show");
  setTimeout(() => {
    boxArticleOne.classList.add("window-active");
    btnBack.classList.add("btn-active");
  }, 1000);
});
postArticleTwo.addEventListener("click", function () {
  mainWindow.classList.remove("window-active");
  setTimeout(() => {
    boxArticleTwo.classList.add("window-active");
    btnBack.classList.add("btn-active");
  }, 1000);
});
postArticleThree.addEventListener("click", function () {
  mainWindow.classList.remove("window-active");
  setTimeout(() => {
    boxArticleThree.classList.add("window-active");
    btnBack.classList.add("btn-active");
  }, 1000);
});

btnBack.addEventListener("click", function () {
  allBoxArticles.forEach((article) => {
    article.classList.remove("window-active");
  });
  btnBack.classList.remove("btn-active");
  setTimeout(() => {
    mainWindow.classList.add("window-active");
  }, 1000);
});
