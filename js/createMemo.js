$(document).ready(() => {
    
    // 1. 메모 생성
    $("#wrap").contextmenu(createMemo = (evt) => {
        evt.preventDefault();
        // const copyMemo = $.parseHTML(memoTemplate);
        const copyMemo = $(".memo").first().clone(true);
        
        if (evt.target.closest(".memo") || evt.target.closest("button")) {
            return; 
        }
        
        let closeBtn = copyMemo.children().children()[1];
        let topVal = evt.clientY + "px";
        let leftVal = evt.clientX + "px";
        
        copyMemo.css('top', topVal);
        copyMemo.css('left', leftVal);
        copyMemo.attr('id', "memo-" + ($('.memo').length + 1));//memo-id 생성
        dragMemo(copyMemo[0]);
        $('#wrap').append(copyMemo);
        
        return false; //도움말 박스 팝업 방지
        
    });
    const memoTextArea = $(".memo .content .textarea");
    // const closeBtn = $(".memo .header .btn_close");
    // $(".memo .header .btn_close").bind("click",(e) => {
    //     console.log(e);
    //     alert("bbbb");
    // });

    //2. 메모 focus 확인  
    memoTextArea.click((e) => {
        let memoId = $(e.target).parent().parent().attr('id');
        console.log(memoId, "df");
        $("#wrap").append($("#" + memoId));// focus 가 있다면, 최상단으로 위치 변경
        $(e.target).focus();// focus 재설정.
    });

    // memoTextArea.keyup((e) => {
    //     e.preventDefault();
    // });

    //3. 메모 삭제 

});
