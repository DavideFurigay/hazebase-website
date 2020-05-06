//Test Comment Script -> Code from W3Schools
$(function(){
    $("#form").submit(function(e){
        // Create data object
        var data = {};
        data.name = $("#name").val();
        data.email = $("#email").val();
        data.comment = $("#comment").val();
        // The url of your server-side script that handles the post submission
        var url = "http://www.someurl.com/post_comment.php";
        $.POST(url, data)
        .done(function(response){
            // This code executes when the server returns a response
            // Do something with the response like adding the comment to the current list of comments
            // Example (if your response is HTML, better would be a JSON string):
            $("#comments").append(response);
        });
        e.preventDefault();
    });
});

//Live Search -> Code from W3Schools
function showResult(str) {
    if (str.length==0) {
      document.getElementById("livesearch").innerHTML="";
      document.getElementById("livesearch").style.border="0px";
      return;
    }
    if (window.XMLHttpRequest) {
      // code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp=new XMLHttpRequest();
    } else {  // code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function() {
      if (this.readyState==4 && this.status==200) {
        document.getElementById("livesearch").innerHTML=this.responseText;
        document.getElementById("livesearch").style.border="1px solid #A5ACB2";
      }
    }
    xmlhttp.open("GET","livesearch.php?q="+str,true);
    xmlhttp.send();
  }

  //COMMENTS SYSTEM
  /*https://codewithawa.com/posts/creating-a-comment-and-reply-system-php-and-mysql*/
  $(document).ready(function(){
    // When user clicks on submit comment to add comment under post
    $(document).on('click', '#submit_comment', function(e) {
      e.preventDefault();
      var comment_text = $('#comment_text').val();
      var url = $('#comment_form').attr('action');
      // Stop executing if not value is entered
      if (comment_text === "" ) return;
      $.ajax({
        url: url,
        type: "POST",
        data: {
          comment_text: comment_text,
          comment_posted: 1
        },
        success: function(data){
          var response = JSON.parse(data);
          if (data === "error") {
            alert('There was an error adding comment. Please try again');
          } else {
            $('#comments-wrapper').prepend(response.comment)
            $('#comments_count').text(response.comments_count); 
            $('#comment_text').val('');
          }
        }
      });
    });
    // When user clicks on submit reply to add reply under comment
    $(document).on('click', '.reply-btn', function(e){
      e.preventDefault();
      // Get the comment id from the reply button's data-id attribute
      var comment_id = $(this).data('id');
      // show/hide the appropriate reply form (from the reply-btn (this), go to the parent element (comment-details)
      // and then its siblings which is a form element with id comment_reply_form_ + comment_id)
      $(this).parent().siblings('form#comment_reply_form_' + comment_id).toggle(500);
      $(document).on('click', '.submit-reply', function(e){
        e.preventDefault();
        // elements
        var reply_textarea = $(this).siblings('textarea'); // reply textarea element
        var reply_text = $(this).siblings('textarea').val();
        var url = $(this).parent().attr('action');
        $.ajax({
          url: url,
          type: "POST",
          data: {
            comment_id: comment_id,
            reply_text: reply_text,
            reply_posted: 1
          },
          success: function(data){
            if (data === "error") {
              alert('There was an error adding reply. Please try again');
            } else {
              $('.replies_wrapper_' + comment_id).append(data);
              reply_textarea.val('');
            }
          }
        });
      });
    });
  });