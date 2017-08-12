angular.module('demoApp')
	.value('Schema',
		{
			"type" : "object",
			"properties" : {
				"name" : {
					"type" : "string"
				},
				"vegetarian" : {
					"type" : "boolean"
				},
				"birthDate" : {
					"type" : "string",
					"format" : "date"
				},
				"nationality" : {
					"type" : "string",
					"enum" : [
						"DE",
						"IT",
						"JP",
						"US",
						"RU",
						"Other"
					]
				}
			}
		}
);