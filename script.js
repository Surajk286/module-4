(function (window) {

	var names = ["Suraj", "Rohit", "Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Jacob", "Laura", "Jim"];
	for (var i in names) {
		var firstLetter = ((names[i]).charAt(0)).toLowerCase();

		  if (firstLetter == 'j') {
     window.byeSpeaker.speak(names[i]);
  } else {
     window.helloSpeaker.speak(names[i]);
  }
}
})(window);