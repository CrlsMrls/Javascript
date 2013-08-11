// JavaScript includes some standard built-in methods on strings 

var text = 'text',
	text2 = 'another random text',
	concatenated,
	sliced,
	url = 'https://github.com/blog';

console.log(typeof text); // => string
console.log(text.length); // => 4

console.log(text.charAt(0)); // => t
console.log(text.charCodeAt(0)); // => 116

console.log(text.toUpperCase()); // => TEXT
console.log(text.toLowerCase()); // => text


// concatenating can be done with 'concat' method or '+' operator
concatenated = text + ' and ' + text2;
console.log(concatenated); // => text and another random text
concatenated = concatenated.concat( ', yes ', text2, ' again');
console.log(concatenated); // => text and another random text, yes another random text again

// the first 20 chars
sliced = concatenated.slice(0,20);
console.log(sliced); // => Text and another ran

// 'split' method creates an array of strings
console.log('[' + url.split('/') + ']'); // => [https:,,github.com,blog]

