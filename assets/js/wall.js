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
          '<p>'+ comment +'</p>'+
          '<div class=\"tools_comment\">'+
          "<a class='comment' href='#'> <img src=\"https://raw.githubusercontent.com/jeypzz/the-wall/main/assets/images/comment.png\" alt='comment icon'/>"+ commentCounter +" Comment</a>"+
          "<a class='edit' href='#'> <img src=\"https://raw.githubusercontent.com/jeypzz/the-wall/main/assets/images/pencil-write.png\" alt='edit icon'/>Edit</a>"+
          "<a class='delete' href='#'> <img src=\"https://raw.githubusercontent.com/jeypzz/the-wall/main/assets/images/delete.png\" alt='delete icon'/>Delete</a>"+
            "<span class='user'><img src=\"https://raw.githubusercontent.com/jeypzz/the-wall/main/assets/images/user-icon.png\"/ alt='user icon'> <span id=bold>You</span> - Few seconds ago</span>"+
          '</div>'+
          '<ul class="child_replay"></ul>'+
          '</div>';
      document.getElementById('post-area').prepend(el);
      modal.style.display = "none";
      $('#textArea').val('');
  }