const prettyLevel = [
	'cantrip',
	'first level',
	'second level',
	'third level',
	'fourth level',
	'fifth level',
	'sixth level',
	'seventh level',
	'eighth level',
	'ninth level'
];

$(document).ready(function() {

	$.ajax({
		method: 'GET',
		url: 'data/spells/blink.json'
	}).then(res => {
		console.log(res);

		$('#name').text(res.name);
		$('#level').text(prettyLevel[res.level] + ' ' + res.school.toLowerCase());

		$('#description').html(parse.textBlock(res.description.rules));
		$('#notes').html(res.description.notes.map(parse.textBlock));
	});


});