angular.module('demoApp')
	.value('UISchema',
		{
			"type" : "Categorization",
			"elements" : [
				{
					"type" : "Categorization",
					"label" : "Sub",
					"elements" : [
						{
							"type" : "Category",
							"label" : "SubPrivate",
							"elements" : [
								{
									"type" : "Control",
									"scope" : {
										"$ref" : "#/properties/name"
									}
								}
							]
						},
						{
							"type" : "Category",
							"label" : "Additional",
							"elements" : [
								{
									"type" : "Control",
									"scope" : {
										"$ref" : "#/properties/nationality"
									}
								},
								{
									"type" : "Control",
									"scope" : {
										"$ref" : "#/properties/vegetarian"
									}
								}
							]
						}
					]
				},
				{
					"type" : "Category",
					"label" : "Private",
					"elements" : [
						{
							"type" : "Control",
							"scope" : {
								"$ref" : "#/properties/name"
							}
						},
						{
							"type" : "Control",
							"scope" : {
								"$ref" : "#/properties/birthDate"
							}
						}
					]
				},
				{
					"type" : "Category",
					"label" : "Additional",
					"elements" : [
						{
							"type" : "Control",
							"scope" : {
								"$ref" : "#/properties/birthDate"
							}
						},
						{
							"type" : "Control",
							"scope" : {
								"$ref" : "#/properties/vegetarian"
							}
						}
					]
				}
			]
		}
);