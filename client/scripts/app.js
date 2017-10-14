// Doesn't run until document is ready
$(document).ready(function() {

  // var message = {};
  //
  // message.username = $('.username').text()
  //   // should get username;
  // }
  // message.text = $('.messageInput').text();
  // message.roomname = $( "#roomSelect option:selected" ).text();


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


      // function (data)
      contentType: 'application/json',
      success: function(data){
        console.log('chatterbox: Boom! Too late to change now!');
      },
      error: function(data) {
        console.log('chatterbox: Didn\'t go through yo!');
      }

    });

  }

  app.clearMessages = function () {
    $('#chats').empty();
  }

  app.renderMessage = function(message){
    var text = message.text
    $('<p>' + text + '</p>').appendTo('#chats');
  }

  app.renderRoom = function(message){
    var room = message.roomname;
    $('<option>'+ room + '</option>').appendTo('#roomSelect');
  }

  app.handleUsernameClick = function(){
    $('.username').trigger('click');


  }

  app.handleSubmit = function(){

  }

  $('.newRoom').on("click keydown", function(event) {
    if (event.which === 13 || event.which === 1) {
      var room = $('.newRoom').val();
      var existingRooms = $('#roomSelect').children();
      var isNotScript = room.split('<script>').length;

      if (isNotScript > 1) { return; }

      for (var i = 0; i < existingRooms.length; i++) {
        if ( room === existingRooms[i].value ){
          alert('room is already there yo');
          return;
        }
      }

      if (room) {
        $('<option value=' + room + '>' + room + '</option>').appendTo('#roomSelect');
        $('.newRoom').val('');
      }
    }
  });






















});
