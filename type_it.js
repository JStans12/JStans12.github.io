var snip = "";

function type(name){

  l = name.shift();

  setTimeout(function(){
    snip += l
    $('#name').html('');
    $('#name').html(snip);

    if(name.length > 0){
      type(name);
    }

  },100);
}

$(document).ready(function(){
  type("Joey Stansfield".split(""));
});
