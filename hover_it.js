$(document).ready(function(){

  $('#github-profile').hover(function(){
    $('.hover-indicator').html("Github");
  }, function(){
    $('.hover-indicator').html("");
  });

  $('#linkedin-profile').hover(function(){
    $('.hover-indicator').html("LinkedIn");
  }, function(){
    $('.hover-indicator').html("");
  });

  $('#resume').hover(function(){
    $('.hover-indicator').html("Download resume");
  }, function(){
    $('.hover-indicator').html("");
  });

  $('#email').hover(function(){
    $('.hover-indicator').html("Send me an email");
  }, function(){
    $('.hover-indicator').html("");
  });
})
