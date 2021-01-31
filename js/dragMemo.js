const memos = document.querySelectorAll(".memo");
const wrap = document.getElementById('wrap');
const button = '';
for (let memo of memos){
    dragMemo(memo);
}

function dragMemo(memo) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  let mHeader = memo.getElementsByClassName("header")[0];
  if (mHeader){ 
    let closeBtn = mHeader.childNodes[3];
    closeBtn.removeEventListener("mousedown", dragMouseDown, true);
    closeBtn.addEventListener("click", close = () => {
      memo.remove();
    }, true);

  }
  else {
      memo.onmousedown = dragMouseDown;
  }
    
  function dragMouseDown(e) {
    // 드래그 시작시, 해당 요소 최상단에 위치
    wrap.appendChild(document.getElementById(memo.id));

    e = e || window.event;
    e.preventDefault();
    // 커서의 시작 위치를 잡음 
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closedragMemo;
    // 커서가 움직일 때 memoDrag 호출한다. 
    document.onmousemove = memoDrag;

  }

  function memoDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // 요소의 새로운 위치를 잡음
    memo.style.top = (memo.offsetTop - pos2) + "px";
    memo.style.left = (memo.offsetLeft - pos1) + "px";
  }

  function closedragMemo() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// drag = (ev) => {
//     console.log( ev.currentTarget.id);
//     ev.dataTransfer.setData("text", ev.target.id);
// }

// allowDrop = (ev) => {
//     ev.preventDefault();
//     preventDropInMemo();
// }
  
// drop = (ev) => {
//     ev.preventDefault();
//     var data = ev.dataTransfer.getData("text");
//     let topVal = ev.clientY + "px";
//     let leftVal = ev.clientX + "px";

//     document.getElementById(data).style.top = topVal;
//     document.getElementById(data).style.left = leftVal;

//     preventDropInMemo();
//     ev.target.appendChild(document.getElementById(data));
// }

// const insideMemo = document.querySelectorAll(".memo");
// preventDropInMemo = () => {
//     for (let eachMemo of insideMemo){
//         eachMemo.addEventListener("ondrop", preventDrop = () => {
//             return false;
//         });
//         eachMemo.addEventListener("dragover", preventDrop = () => {
//             return false;
//         });
//     }
// }