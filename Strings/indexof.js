// The indexOf method searches for a string within another string
// lastIndexOf is similar, except it searchs from the end instead of the front

var paragraph = 'text and another random text. I could not finish without saying text again';

console.log(paragraph.indexOf('text')); // => 0
console.log(paragraph.lastIndexOf('text')); // => 68

// check if text contains another text
if(paragraph.indexOf('another') !== -1) {
	console.log('paragraph contains "another"'); // => paragraph contains "another"
}

if(paragraph.indexOf('Text') === -1) {
	console.log('indexOf is case sensitive!'); // => indexOf is case sensitive!
}

// search how many times a text is found in a string using indexOf
var howManyTimes = function(text, search){
	var position = -1,
		times = 0;
	do{
		// The second optional parameter causes the search to begin at some specified position
		position = paragraph.indexOf(search, (position+1) );
		times += 1;
	} while(position !== -1);

	return times;
};

console.log('"text" found ' + howManyTimes(paragraph,'text') + ' times'); // => "text" found 4 times

