module.exports = [
	{
		"@type": "Answer",

		attributes: [
			{
				key: "@type",
				type: "string",
				source: "value",
				value: "Answer",
			},
			{
				key: "@id",
				type: "string",
				source: "identifier",
			},
			{
				key: "url",
				type: "string",
				source: "identifier",
			},
			{
				key: "text",
				type: "string",
				source: "area",
				childrenTypes: [ "Description" ],
			},
		],

		editTemplate: [
			"Description",
		],
		templateLock: true,
	},
	{
		"@type": "Question",

		attributes: [
			{
				key: "@type",
				type: "string",
				source: "value",
				value: "Question",
			},
			{
				key: "@id",
				type: "string",
				source: "identifier",
			},
			{
				key: "url",
				type: "string",
				source: "identifier",
			},
			{
				key: "answerCount",
				type: "number",
				source: "value",
				value: 1,
			},
			{
				key: "name",
				type: "string",
				source: "area",
				childrenTypes: [ "Title" ],
			},
			{
				key: "acceptedAnswer",
				type: "string",
				source: "area",
				childrenTypes: [ "Answer" ],
			},
		],

		editTemplate: [
			"Title",
			"Answer",
		],

		templateLock: true,
	},
	{
		"@type": "FAQPage",
		blockLabel: "FAQ",
		addPageType: true,
		hideInGraph: true,

		attributes: [
			{
				key: "@type",
				type: "string",
				source: "value",
				value: "FAQPage",
			},
			{
				isMainEntity: true,
				key: "mainEntity",
				type: "array",
				source: "area",
				area: "main",
				childrenTypes: [ "Question" ],
				collection: {
					name: "Questions",
					editTemplate: [ "Question" ],
				},
			},
		],

		editTemplate: [
			"Questions",
		],

		editAreas: [
			{
				areaName: "main",
			},
		],

		templateLock: true,
	},
];