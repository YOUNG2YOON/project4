$(function () {
  $('a[href="#"]').on('click', function (e) {
    e.preventDefault();
  });
});



$(document).ready(function(){
	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
	});
});


const circle = document.querySelector('.circleM');

window.addEventListener('scroll', () => {
    // 현재 스크롤 위치를 가져옵니다.
    const scrollY = window.scrollY;

  // 스크롤 위치가 1500 이하일 때만 크기 조정
  if (scrollY <= 1450) {
	const newSize = 100 + scrollY * 1.2; // 스크롤에 따라 크기 증가
	circle.style.width = `${newSize}px`;
	circle.style.height = `${newSize}px`;
}
});


$(window).scroll(function(){
	if($(document).scrollTop() > 0) {
			$('.header').addClass('scroll');
			$('.h1').addClass('scroll');
			$('#nav-icon3').addClass('scroll');
	} else {
		$('.header').removeClass('scroll');
		$('.h1').removeClass('scroll');
		$('#nav-icon3').removeClass('scroll');
	}
});





document.addEventListener("DOMContentLoaded", () => {
  // Lottie 애니메이션 설정
  const lottieAnimation = bodymovin.loadAnimation({
    container: document.getElementById("labBox"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "./project4Img/maeil1.json", // Lottie JSON 파일 경로
  });

  const totalFrames = '100';
  const texts = document.querySelectorAll(".labBoxDes");

  // GSAP ScrollTrigger로 애니메이션 컨트롤
  gsap.registerPlugin(ScrollTrigger);

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".lab-wrapper",
      start: "80% 80%",
      end: "100%",
      scrub: 1,
      pin: true,
			markers: true,
      onUpdate: (self) => {
        const progress = self.progress; // 스크롤 진행 비율 (0 ~ 1)
        const currentFrame = Math.round(progress * totalFrames);
        lottieAnimation.goToAndStop(currentFrame, true);
      },
    },
  });

  // // 텍스트 표시 타이밍 설정
  // const textIntervals = [0,12.5,25,37.5,50,62.5,75,87.5,100]; // 각 텍스트의 표시 구간 비율

  // 텍스트 표시 타이밍 설정
  const textIntervals = [0,1,2,3,4,5,6,7]; // 각 텍스트의 표시 구간 비율



  textIntervals.forEach((interval, index) => {
    timeline.to(
      texts[index],
      { opacity: 1, duration: 0.2},
      interval // 타이밍을 스크롤 비율로 조정
    );
  });
});































// 품질 제일주의 이야기 bar

document.addEventListener("DOMContentLoaded", () => {
  // Lottie 애니메이션 설정
  const lottieAnimation = bodymovin.loadAnimation({
    container: document.getElementById("qualityScroll"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "./project4Img/bar.json", // Lottie JSON 파일 경로
  });

  const totalFrames = '90';
  const texts = document.querySelectorAll(".qualityScrollDes");

  // GSAP ScrollTrigger로 애니메이션 컨트롤
  gsap.registerPlugin(ScrollTrigger);

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".qualityScrollDes-wrapper",
      start: "-10% 80%",
      end: "100%",
      scrub: 3,
      pin: false,
			markers: true,
      onUpdate: (self) => {
        const progress = self.progress; // 스크롤 진행 비율 (0 ~ 1)
        const currentFrame = Math.round(progress * totalFrames);
        lottieAnimation.goToAndStop(currentFrame, true);
      },
    },
  });

  // 텍스트 표시 타이밍 설정
  const textIntervals = [0,13.3,26.6,39.9,51.2,66.5,79.8,93.1]; // 각 텍스트의 표시 구간 비율

  textIntervals.forEach((interval, index) => {
    timeline.to(
      texts[index],
      { opacity: 1, duration: 0.2},
      interval // 타이밍을 스크롤 비율로 조정
    );
  });
});




function resize_Image(){
	newX=event.x;
	newY=event.y;
	event.srcElement.width=newX;
	event.srcElement.height=newY;
}
