$(document).ready(function() {


    $.ajax({
        type: 'GET',
        url: '/bios',
        success: function(bios) {

            $('#getAdam').on('click', function() {
              $.ajax({
                type:'POST',
                url:'/Likes/adam',
                success: function(adamCounter) {
                $('#ajaxers').children().last().remove();
                $('#name').text(bios[0].name);
                $('#bio').text(bios[0].bio);
                $('#ajaxers').append('<button id="likeA">Like</button>');
                $('#ajaxers').append('<p class="adamCount">' + adamCounter + '</p>');
                $('#likeA').on('click', function() {
                        adamCounter++;
                        $('#getAdam').text(adamCounter);
                      });
                }
            });
            });
            $('#getZach').on('click', function() {
                $('#ajaxers').children().last().remove();
                $('#name').text(bios[1].name);
                $('#bio').text(bios[1].bio);
                $('#ajaxers').append('<button id="likeZ">Like</button>');
                $('#ajaxers').append('<p class="zachCount">' + zachCounter + '</p>');
              });
              $('#getThomas').on('click', function() {
                  $('#ajaxers').children().last().remove();
                  $('#name').text(bios[2].name);
                  $('#bio').text(bios[2].bio);
                  $('#ajaxers').append('<button id="likeT">Like</button>');
                  $('#ajaxers').append('<p class="thomasCount">' + thomasCounter + '</p>');
                });
                $('#getLogan').on('click', function() {
                    $('#ajaxers').children().last().remove();
                    $('#name').text(bios[3].name);
                    $('#bio').text(bios[3].bio);
                    $('#ajaxers').append('<button id="likeL">Like</button>');
                    $('#ajaxers').append('<p class="loganCount">' + loganCounter + '</p>');
                  });
        }


});
});
