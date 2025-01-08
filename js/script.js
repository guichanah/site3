/*mainvisual 스와이퍼 호출*/
var mainvisual = new Swiper("#mainvisual", {
    wrapperClass:"slider", //슬라이드 요소를 감싸는 요소의 클래스
    slideClass:"view", //슬라이드 요소들의 클래스
    slideActiveClass:"active", //활성화된 슬라이드 요소의 클래스
    spaceBetween:10, //슬라이드 사이의 간격
    speed: 800, //슬라이드 이동 속도
    autoplay: { //자동 슬라이드 설정
        delay: 5000, //슬라이드 지연시간, 전환간격(5초)
    },
    pagination: { //페이지버튼 설정
        el:'.pager', //페이지버튼 영역 지정
        clickable:true, //클릭시 슬라이드 전환기능 활성화
        bulletActiveClass:"active" //활성화된 페이지버튼의 클래스
    },
});