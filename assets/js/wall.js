//Modal JS
var closeButton = document.getElementsByClassName('close')[0],
    modal = document.getElementsByClassName('modal')[0],
    cancelButton = document.getElementsByClassName('cancel')[0],
    createMessage = document.getElementById('createMessage');

function x () {
    modal.style.display = "none";
    textArea.value='';
    bt.disabled = true;
}
closeButton.onclick = x;
cancelButton.onclick = x;

createMessage.onclick = function () {
    modal.style.display = "block";
}

window.onclick = function (e) {
    if (e.target.className === 'modal'){
        e.target.style.display = 'none';
        textArea.value='';
        bt.disabled = true;
    }
}

var textArea = document.getElementById('textArea');
var bt = document.getElementById('post');

let manage = (textArea) => { 
            if (textArea.value != '') {
                bt.disabled = false;
            } else {
                bt.disabled = true;
            }
        }

//Prepend message
var messageCounter = 0;
var commentCounter = 0;
  function submit_comment(){
    $("#placeholderImg").hide();
    $("#placeholderPara").hide();
    messageCounter++;
    $("#message-number").text(messageCounter);

    var comment = $('#textArea').val();
    el = document.createElement('div');
    el.className = "CommentBox";
    el.innerHTML =
        //   '<div class=\"avatar_comment col-md-1\">'+
        //     '<img src=\"https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg\" alt=\"avatar\"/>'+
        //   '</div>'+
          '<p>'+ comment +'</p>'+
          '<div class=\"tools_comment\">'+
          "<img src=\"https://drive.google.com/file/d/1r_ZVCScC1NsPMM1idHursUIJFD8f7Bje/view?usp=sharing\" alt='comment icon'/><a class='comment' href='#'>"+ commentCounter +" Comment</a>"+
          '<i class=\"fa fa-thumbs-o-up\"></i> <span class=\"count\"></span>'+
          '<span aria-hidden=\"true\"> · </span>'+
          '<a class=\"replay\" href=\"#\">Reply</a><span aria-hidden=\"true\"> · </span>'+
              '<span>Few seconds ago</span>'+
          '</div>'+
          '<ul class="child_replay"></ul>'+
          '</div>';
      document.getElementById('post-area').prepend(el);
      $('#textArea').val('');
  }