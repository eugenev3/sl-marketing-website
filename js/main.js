// var w = $(window).innerWidth(),
//   setIframe = $('iframe'),
//   resWidth;
//
// $(window).resize(function() {
//   viewportwidth = $(window).width();
//
//   if (viewportwidth<1140) {
//     setIframe.width(viewportwidth - 40);
//   } else {
//     setIframe.width(1140);
//   }
//
//   console.log('w', w);
//   console.log('setIframe',setIframe.innerWidth());
// });

var mylangs = JSON.parse(data),
    ul = document.createElement( "ul" ),
    li = document.createElement( "li" ),
    ul = $("<ul class='lang-list'>"), // create a new ul element
    i = 0,
    minimum = 0,
    maximum = mylangs.length;

setInterval(function() {
  var rnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum,
      words = mylangs[rnumber].English,
      picker = $('.lang-picker i').animate({width: words.length + "em", duration: 2000}).addClass("active");

  picker.text(words);
}, 2000);
