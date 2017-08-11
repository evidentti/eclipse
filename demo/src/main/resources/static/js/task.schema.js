angular.module('demoApp')
	.value("Schema",
		{
			"type" : "object",
			"properties" : {
				"Hakemustyyppi" : {
					"type" : "string"
				},
				"Saapunut" : {
					"type" : "string"
				},
				"Päivitetty" : {
					"type" : "string"
				}
			}
		});