const mousePosition = document.querySelector('.mousePosition');
const heightBorder = document.querySelector('.height-border');
const widthBorder = document.querySelector('.width-border')
const target = document.querySelector('.target');

document.addEventListener('mousemove', (event) => {
    mousePosition.innerHTML = `${event.pageX}, ${event.pageY}`
    mousePosition.style.left = `${event.pageX+10}px`;
    mousePosition.style.top = `${event.pageY+10}px`;
    target.style.left = `${event.pageX-37}px`;
    target.style.top = `${event.pageY-37}px`;
    heightBorder.style.left = `${event.pageX}px`;
    widthBorder.style.top = `${event.pageY}px`;
})

// px이 문자열이라....... 안됐네...... position이 absolute이거나 relative일때는 px까지 써줘야함... 잊지말자... 제발
// 자유자재로 위치를 바꾸고싶다?? 그러면 absolute부터 기억하자. 각인시키자.

/* event가 발생하면 항상 event object가 전달된다. */

/*style지정할때에는 px이라는 유닛을 붙여야한다. */
