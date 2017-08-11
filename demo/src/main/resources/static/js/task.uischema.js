angular.module('demoApp')
	.value("UISchema",
		{
			"type" : "Group",
			"label" : "Hakemuksen tiedot",
			"elements" : [
				{
					"type" : "HorizontalLayout",
					"elements" : [
						{
							"type" : "Control",
							"label" : "Hakemustyyppi",
							"scope" : {
								"$ref" : "#/properties/Hakemustyyppi"
							},
							"readOnly" : true
						}
					]
				},
				{
					"type" : "HorizontalLayout",
					"elements" : [
						{
							"type" : "Control",
							"label" : "Saapunut",
							"scope" : {
								"$ref" : "#/properties/Saapunut"
							},
							"readOnly" : true
						}
					]
				},
				{
					"type" : "HorizontalLayout",
					"elements" : [
						{
							"type" : "Control",
							"label" : "Päivitetty",
							"scope" : {
								"$ref" : "#/properties/Päivitetty"
							},
							"readOnly" : true
						}
					]
				}

			]
		});