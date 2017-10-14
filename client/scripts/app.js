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
      data: message,


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
        $('<option id=' + room + '>' + room + '</option>').appendTo('#roomSelect');
        $('.newRoom').val('');
      }
    }
  });

    $('.messageInput').on("click keydown", function(event){
      if (event.which === 13 || event.which === 1) {
        var messageText = $('.messageInput').val();
        var username = window.location.search.slice(10);
        var room = $('select#roomSelect option:selected').val();

        var noScripts = messageText.split('<script>').length;
          if(noScripts > 1){ return; }

          if (messageText) {
            $('<p>' + username + ':' + '</p>').appendTo('#chats');
            $('<p class=' + username + '>' + messageText + '</p>').appendTo('#chats');
            $('.messageInput').val('');

            var message = {
              username: username,
              text: messageText,
              roomname: room
            }
            app.send(JSON.stringify(message));

          }
        }


     });

    //  if ()
   $('#roomSelect').on("change", function(event){
     var room = $('select#roomSelect option:selected').val();

   });







});
