// alert(window.innerHeight);

const toggle = document.getElementById('toggle_button');
const toggle_menu = document.getElementById('toggle_menu')
const toggle_item = document.getElementById('toggle_item')
function know() {


  let is_checked = toggle.checked;
  if (is_checked === true){
    // console.log('참')
    toggle_menu.style.display='block';
    toggle_item.style.display='block';

  }
  else {
    // console.log('거짓')
    toggle_menu.style.display='none';
    toggle_item.style.display='none';
  }
}


// 웹 브라우저 사이즈가 조정되면 toggle 메뉴 사라짐
// (checkbox.checked -> false, display none)
window.addEventListener("resize", function(event) {
  // console.log(document.body.clientWidth + 'and' + toggle.checked);
  if (document.body.clientWidth >= 992){
    toggle.checked = false;
    toggle_menu.style.display='none';
    toggle_item.style.display='none';
  }
})

// 아직 준비되지 못한 페이지
function prepare(){
  alert('준비 중 입니다.');
}

// main home으로 가는 함수
function go_home(){
  location.href="main.html";
}
