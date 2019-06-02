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

var picker = $('i.lang-picker');
var langs = [
  {"English": "Afar", "alpha2": "aa"},
  {"English": "Abkhazian", "alpha2": "ab"}
];

var ul = document.createElement( "ul" );
    li = document.createElement( "li" );

    ul = $("<ul class='lang-list'>"); // create a new ul element

// iterate over the array and build the list
for (var i = 0, l = langs.length; i < l; ++i) {
    ul.append("<li>"+ langs[i].English + "</a></li>");
}
$(picker).append(ul);
