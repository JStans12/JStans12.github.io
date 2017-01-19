function type(name){
  letter = name.slice(0,1);

  setTimeout(function(){
    $('#name').append(letter);

    if(name.length > 0){
      type(name.slice(1));
    }

  },100);
}

$(document).ready(function(){
  type("Joey Stansfield");
});
