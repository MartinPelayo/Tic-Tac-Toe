+function(){
  function immediateInvoke() {
    let $liArray = [$('.boxes li:nth-child(1)'), $('.boxes li:nth-child(2)'), $('.boxes li:nth-child(3)'), $('.boxes li:nth-child(4)'), $('.boxes li:nth-child(5)'), $('.boxes li:nth-child(6)'), $('.boxes li:nth-child(7)'), $('.boxes li:nth-child(8)'), $('.boxes li:nth-child(9)')];

    $('.board').hide(); //Start off by hiding board and finish screen
    $('#finish').hide();

    $('.button').on('click', function(){ //Click starts game by adding class for subsequent conditional statements
      $('.board').show();
      $('#start').hide();
      $('#player1').addClass('active');
    });

    $('.screen-win .button').click(function(){  //Handler on finsih screen button restarts game by bringing values to thier state prior to loop running
      $('.board').show();
      $('#finish').hide();  
      $('.box').attr('id', 'test');
      $('.box').css('background-color', '#EFEFEF');    
      $('li').css('background-image', '');
    });

    for (i = 0; i < $liArray.length; i++){  //facilitates and applies handlers for each item in/to $liArray (the tic tac toe boxes)
      $($liArray[i]).mouseenter(function(e){  //When mouse enters, change background for appropriate square
        if($('#player1').hasClass('active')){
          var target = $(e.target);
          if( target.is($("[id=test]"))){
            $(this).css('background-image', 'url("img/o.svg")');
          }
        } else if($('#player2').hasClass('active')){
          var target = $(e.target);
          if( target.is($("[id=test]"))){
            $(this).css('background-image', 'url("img/x.svg")');
          }
        }
      });
      
      $($liArray[i]).mouseleave(function(e){  //When mouse leaves, remove background for appropriate square
        if($('#player1').hasClass('active')){
          var target = $(e.target);
          if( target.is($("[id=test]"))){
            $(this).css('background-image', '');
            $(this).css('background-color', '#EFEFEF');
          }
        } else if($('#player2').hasClass('active')){
          var target = $(e.target);
          if( target.is($("[id=test]"))){
            $(this).css('background-image', '');
            $(this).css('background-color', '#EFEFEF');
          }
        }
      }); 

      $($liArray[i]).click(function(e){ //When square is clicked change background and color to correct color and image
        var target = $(e.target);
        if($('#player1').hasClass('active') && target.is($("[id=test]"))){
          $(this).css('background-image', 'url("img/o.svg")');
          $(this).css('background-color', '#FFA000');
          $('#player1').removeClass('active');
          $('#player2').addClass('active');
          $(this).removeAttr('id');

          if(!$($liArray)[0].attr('id') && !$($liArray)[1].attr('id') && !$($liArray)[2].attr('id')){ //When O gets three in a row call playerOneWin function and end game
            playerOneWin();
          } else if(!$($liArray)[0].attr('id') && !$($liArray)[4].attr('id') && !$($liArray)[8].attr('id')){
            playerOneWin();
          } else if(!$($liArray)[0].attr('id') && !$($liArray)[3].attr('id') && !$($liArray)[6].attr('id')){
            playerOneWin();
          } else if(!$($liArray)[1].attr('id') && !$($liArray)[4].attr('id') && !$($liArray)[7].attr('id')){
            playerOneWin();
          } else if(!$($liArray)[2].attr('id') && !$($liArray)[4].attr('id') && !$($liArray)[6].attr('id')){
            playerOneWin();
          } else if(!$($liArray)[2].attr('id') && !$($liArray)[5].attr('id') && !$($liArray)[8].attr('id')){
            playerOneWin();
          } else if(!$($liArray)[5].attr('id') && !$($liArray)[4].attr('id') && !$($liArray)[3].attr('id')){
            playerOneWin();
          } else if(!$($liArray)[8].attr('id') && !$($liArray)[4].attr('id') && !$($liArray)[0].attr('id')){
            playerOneWin();
          } else if(!$($liArray)[8].attr('id') && !$($liArray)[7].attr('id') && !$($liArray)[6].attr('id')){
            playerOneWin();
          }

        }else if($('#player2').hasClass('active') && target.is($("[id=test]"))){ 
          $(this).css('background-image', 'url("img/x.svg")');
          $(this).css('background-color', '#3688C3');
          $('#player1').addClass('active');
          $('#player2').removeClass('active');
          $(this).removeAttr('id');
          $(this).attr('id', 'testing');
    
          if($($liArray)[0].is($("[id=testing]")) && $($liArray)[1].is($("[id=testing]")) && $($liArray)[2].is($("[id=testing]"))){  //Alternativley if x wins, call playerTwoWin and end game
            playerTwoWin();
          } else if($($liArray)[0].is($("[id=testing]")) && $($liArray)[4].is($("[id=testing]")) && $($liArray)[8].is($("[id=testing]"))){
            playerTwoWin();
          } else if($($liArray)[0].is($("[id=testing]")) && $($liArray)[3].is($("[id=testing]")) && $($liArray)[6].is($("[id=testing]"))){
            playerTwoWin();
          } else if($($liArray)[1].is($("[id=testing]")) && $($liArray)[4].is($("[id=testing]")) && $($liArray)[7].is($("[id=testing]"))){
            playerTwoWin();
          } else if($($liArray)[2].is($("[id=testing]")) && $($liArray)[4].is($("[id=testing]")) && $($liArray)[6].is($("[id=testing]"))){
            playerTwoWin();
          } else if($($liArray)[2].is($("[id=testing]")) && $($liArray)[5].is($("[id=testing]")) && $($liArray)[8].is($("[id=testing]"))){
            playerTwoWin();
          } else if($($liArray)[5].is($("[id=testing]")) && $($liArray)[4].is($("[id=testing]")) && $($liArray)[3].is($("[id=testing]"))){
            playerTwoWin();
          } else if($($liArray)[8].is($("[id=testing]")) && $($liArray)[4].is($("[id=testing]")) && $($liArray)[0].is($("[id=testing]"))){
            playerTwoWin();
          } else if($($liArray)[8].is($("[id=testing]")) && $($liArray)[7].is($("[id=testing]")) && $($liArray)[6].is($("[id=testing]"))){
            playerTwoWin();
          }        
        }
        
        if($("[id=test]").length === 0 && $("[id=testing]").length === 4) { //Or if tie, still end game
          $('.message').text('Tie');
          $('.screen-win').prop('class', 'screen screen-win screen-win-tie');
          boardReset();
        }
      });
    }

    function playerOneWin(){  //Resets game if player1 wins
      $('.message').text('Winner');
      $('.screen-win').prop('class', 'screen screen-win screen-win-one');
      boardReset();
    }

    function playerTwoWin(){  //Resets game if 2 wins
      $('.message').text('Winner');
      $('.screen-win').prop('class', 'screen screen-win screen-win-two');
      boardReset();
    }   

    function boardReset(){ //The functions is just here to make code more DRY, it just helps reset the board, Im still not done refactoring
      $('#finish').show();
      $('.board').hide();
      $('#player1').addClass('active');
      $('#player2').removeClass('active');
    }

  }
  immediateInvoke();
}();

