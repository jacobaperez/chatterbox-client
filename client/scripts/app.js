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
      window.app.fetch();
    // setInterval(function(){
    //   app.fetch()}, 5000)
  },


  app.server = 'http://parse.la.hackreactor.com/chatterbox/classes/messages';

  app.send = function (message) {
    $.ajax({
      url: app.server,
      type: 'POST',
      data: message,
      contentType: 'application/json',
      success: function(data){
        window.app.fetch();
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
      data: {order: '-createdAt'},
      contentType: 'application/json',
      success: function(data){
        var messages = data.results;
        messages.forEach(function(message) {
          app.renderMessage(message);
          app.renderRoom(message);
        })
        console.log(data, 'chatterbox: Boom! Too late to change now!');
      },
      error: function(data) {
        console.log('no data!');
      }
    });

  }

  app.clearMessages = function () {

    $('#chats').empty();
  }

  app.renderMessage = function(message){
    var text = _.escape(message.text);
    var username = _.escape(message.username);
    var room = _.escape(message.roomname);

    if (username === message.username && text === message.text && room === message.roomname) {
      text = text.slice(0,140);
      username = username.slice(0,10);
      $(`<p id=${room} class=${username}> ${username}: ${text}</p>`).appendTo('#chats');
    }
    console.log('You got some hackers');
  }

  app.renderRoom = function(message){
    var room = _.escape(message.roomname);
    $('<option>'+ room + '</option>').appendTo('#roomSelect');
  }
  var friendsList =[];

$("#main").on("click", ".username", function(){
   var username = _.escape(message.username)||window.location.search.slice(10);
    if(friendsList.indexOf(username) === -1){
    ('<option>'+ room + '</option>').appendTo('#friendsList');
      friendsList.push(username);
    }

})


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
            // $(`<p id=${room} class=${username}> ${username}: ${messageText}</p>`).prependTo('#chats');
            //  $('<p>' + username + ':' + '</p>').prependTo('#chats');
            //  $('<p id=' + room + ' class=' + username + '>' + messageText + '</p>').prependTo('#chats');
            $('.messageInput').val('');

            var message = {
              username: username,
              text: messageText,
              roomname: room
            }
            // app.init();
            app.send(JSON.stringify(message));
            // window.location.reload();
          }

        }


     });

     $('.clearMessages').on("click", function(event) {
       if (event.which === 1) {

         app.clearMessages
        //  var room = $('.newRoom').val();
        //  var existingRooms = $('#roomSelect').children();
        //  var isNotScript = room.split('<script>').length;
         //
        //  if (isNotScript > 1) { return; }
         //
        //  for (var i = 0; i < existingRooms.length; i++) {
        //    if ( room === existingRooms[i].value ){
        //      alert('room is already there yo');
        //      return;
        //    }
        //  }
         //
        //  if (room) {
        //    $('<option id=' + room + '>' + room + '</option>').appendTo('#roomSelect');
        //    $('.newRoom').val('');
        //  }
       }
     });

    //  if ()
   $('#roomSelect').on("change", function(event){
     var room = $('select#roomSelect option:selected').val();


   });




    //testing
  window.app.init();

});
