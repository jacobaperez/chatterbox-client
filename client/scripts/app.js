// Doesn't run until document is ready
$(document).ready(function() {

  // var $message = {};
  //
  $message.username = $('.username').text()
  //   // should get username;
  // }
  // $message.text = $('.messageInput').text();
  // $message.roomname = $( "#roomSelect option:selected" ).text();


  app = {};

  app.init = function () {


  },

  app.server = 'http://parse.la.hackreactor.com/chatterbox/classes/messages';

  app.send = function (message) {
    $.ajax({
      url: app.server,
      type: 'POST',
      data: message,
      contentType: 'application/json',
      success: function(data){
        console.log('chatterbox: Boom! Too late to change now!');
      },
      error: function(data) {
        console.log('chatterbox: Didn\'t go through yo!');
      }

    });
  },


  app.fetch = function () {
    $.ajax({

      url: app.server,
      type: 'GET',
      data: JSON.stringify(message),
      contentType: 'application/json',
      // success: function(data){
      //   console.log('chatterbox: Boom! Too late to change now!');
      // },
      // error: function(data) {
      //   console.log('chatterbox: Didn\'t go through yo!');
      // }

    });

  }

  app.clearMessages = function () {
    $('#chats').empty();
  }

  app.renderMessage = function(message){
    var text = message.text
    $('<p> text </p>').appendTo('#chats');
  }

  app.renderRoom = function(message){
    var room = message.roomname
    $('<option> room </option>').appendTo('#roomSelect');
  }

app.handleUsernameClick = function(){
  if(window.location.search){
    
  }

}

app.handleSubmit = function(){

}























});
