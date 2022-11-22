/* slide.js */
let slides = document.querySelector(".slideShow");
let slideImg = document.querySelectorAll(".slideShow li");
currentIdx = 0;
slideCount = slideImg.length;
prev = document.querySelector("#prev"); //이전 버튼
next = document.querySelector("#next"); //다음 버튼
slideWidth = 300; //슬라이드이미지 넓이
slideMargin = 45; //슬라이드 끼리의 마진값
makeClone(); // 처음이미지와 마지막 이미지 복사 함수
initfunction(); //슬라이드 넓이와 위치값 초기화 함수
function makeClone() {
  let cloneSlide_first = slideImg[0].cloneNode(true);
  let cloneSlide_last = slides.lastElementChild.cloneNode(true);
  slides.append(cloneSlide_first);
  slides.insertBefore(cloneSlide_last, slides.firstElementChild);
}
function initfunction() {
  slides.style.width = (slideWidth + slideMargin) * (slideCount + 2) + "px";
  slides.style.left = -(slideWidth + slideMargin) + "px";
}
next.addEventListener("click", function () {
  //다음 버튼 눌렀을때
  if (currentIdx <= slideCount - 1) {
    //슬라이드이동
    slides.style.left = -(currentIdx + 2) * (slideWidth + slideMargin) + "px";
    slides.style.transition = `${0.5}s ease-out`; //이동 속도
  }
  if (currentIdx === slideCount - 1) {
    //마지막 슬라이드 일때
    setTimeout(function () {
      //0.5초동안 복사한 첫번째 이미지에서, 진짜 첫번째 위치로 이동
      slides.style.left = -(slideWidth + slideMargin) + "px";
      slides.style.transition = `${0}s ease-out`;
    }, 500);
    currentIdx = -1;
  }
  currentIdx += 1;
});
prev.addEventListener("click", function () {
  //이전 버튼 눌렀을때
  console.log(currentIdx);
  if (currentIdx >= 0) {
    slides.style.left = -currentIdx * (slideWidth + slideMargin) + "px";
    slides.style.transition = `${0.5}s ease-out`;
  }
  if (currentIdx === 0) {
    setTimeout(function () {
      slides.style.left = -slideCount * (slideWidth + slideMargin) + "px";
      slides.style.transition = `${0}s ease-out`;
    }, 500);
    currentIdx = slideCount;
  }
  currentIdx -= 1;
});

let slides1 = document.querySelector(".slides1");
let slideImg1 = document.querySelectorAll(".slides1 li");
currentIdx1 = 0;
slideCount1 = slideImg1.length;
prev1 = document.querySelector(".prev1"); //이전 버튼
next1 = document.querySelector(".next1"); //다음 버튼
slideWidth1 = 300; //슬라이드이미지 넓이
slideMargin1 = 60; //슬라이드 끼리의 마진값
makeClone1(); // 처음이미지와 마지막 이미지 복사 함수
initfunction1(); //슬라이드 넓이와 위치값 초기화 함수
function makeClone1() {
  let cloneSlide_first1 = slideImg1[0].cloneNode(true);
  let cloneSlide_last1 = slides1.lastElementChild.cloneNode(true);
  slides1.append(cloneSlide_first1);
  slides1.insertBefore(cloneSlide_last1, slides1.firstElementChild);
}
function initfunction1() {
  slides1.style.width = (slideWidth + slideMargin) * (slideCount + 2) + "px";
  slides1.style.left = -(slideWidth + slideMargin) + "px";
}
next1.addEventListener("click", function () {
  //다음 버튼 눌렀을때
  if (currentIdx <= slideCount - 1) {
    //슬라이드이동
    slides1.style.left = -(currentIdx + 2) * (slideWidth + slideMargin) + "px";
    slides1.style.transition = `${0.5}s ease-out`; //이동 속도
  }
  if (currentIdx === slideCount - 1) {
    //마지막 슬라이드 일때
    setTimeout(function () {
      //0.5초동안 복사한 첫번째 이미지에서, 진짜 첫번째 위치로 이동
      slides1.style.left = -(slideWidth + slideMargin) + "px";
      slides1.style.transition = `${0}s ease-out`;
    }, 500);
    currentIdx = -1;
  }
  currentIdx += 1;
});
prev1.addEventListener("click", function () {
  //이전 버튼 눌렀을때
  console.log(currentIdx);
  if (currentIdx >= 0) {
    slides1.style.left = -currentIdx * (slideWidth + slideMargin) + "px";
    slides1.style.transition = `${0.5}s ease-out`;
  }
  if (currentIdx === 0) {
    setTimeout(function () {
      slides1.style.left = -slideCount * (slideWidth + slideMargin) + "px";
      slides1.style.transition = `${0}s ease-out`;
    }, 500);
    currentIdx = slideCount;
  }
  currentIdx -= 1;
});
