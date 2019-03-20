var parse = {

	textBlock: function(obj) {
		console.log('parsing textBlock', obj);
		var out = $('<div>', { class: 'textblock' });

		if (Array.isArray(obj.text)) {
			obj.text.forEach(graf => {
				out.append($('<p>', { text: graf }));
			});

		} else {
			out.append($('<p>', { text: obj.text }));

		}

		if (obj.source) {
			out.append(parse.source(obj.source));
		}

		return out;
	},

	sources: {
		"PHB": { "name": "Players’ Handbook" },
		"SAGE": { "name": "Sage Advice", "link": "/resources/sageadvice.pdf" },
		"EEC": { "name": "Elemental Evil Companion", "link": "/resources/Companion-PotA.pdf" }
	},
	source: function(obj) {
		console.log('parsing source', obj);
		if (Array.isArray(obj)) {
			return obj.map(parse.source);
		}
		var out = $('<p>', { class: 'source ref' });
		var template = parse.sources[obj.from];

		var name = template.name || obj.from;
		var link = obj.link || template.link;

		if (obj.page) {
			out.text(name + ' — page ' + obj.page);
		} else {
			out.text(name);
		}

		if (link) {
			out = $('<a>').attr('href', link).append(out);
		}

		return out;
	},

	statBlock: function(obj) {
		
	}

}