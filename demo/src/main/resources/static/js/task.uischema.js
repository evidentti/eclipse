angular.module('demoApp')
	.value('UISchema',
		{
			"type" : "Categorization",
			"elements" : [ {
				"type" : "Category",
				"label" : "Hakemuksen päivitystiedot",
				"elements" : [
					{
						"type" : "Group",
						"label" : "Hakemuksen tiedot",
						"elements" : [ {
							"type" : "HorizontalLayout",
							"elements" : [ {
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
								"elements" : [ {
									"type" : "Control",
									"label" : "Saapunut",
									"scope" : {
										"$ref" : "#/properties/Saapunut"
									},
									"readOnly" : true
								}, {
									"type" : "Control",
									"label" : "Hakemusnro",
									"scope" : {
										"$ref" : "#/properties/Hakemusnro"
									},
									"readOnly" : true
								}
								]
							},
							{
								"type" : "HorizontalLayout",
								"elements" : [ {
									"type" : "Control",
									"label" : "Päivitetty",
									"scope" : {
										"$ref" : "#/properties/Päivitetty"
									},
									"readOnly" : true
								}, {
									"type" : "Control",
									"label" : "Hakemuksen tila",
									"scope" : {
										"$ref" : "#/properties/Tila"
									}
								}
								]
							},
							{
								"type" : "HorizontalLayout",
								"elements" : [ {
									"type" : "Control",
									"label" : "Toimiala",
									"scope" : {
										"$ref" : "#/properties/Toimiala"
									}
								}, {
									"type" : "Control",
									"label" : "Palvelualue",
									"scope" : {
										"$ref" : "#/properties/Palvelualue"
									}
								},
									{
										"type" : "Control",
										"label" : "Vastuualueen alajako",
										"scope" : {
											"$ref" : "#/properties/Vastuualueen alajako"
										}
									}, {
										"type" : "Control",
										"label" : "Käsittelijä",
										"scope" : {
											"$ref" : "#/properties/Käsittelijä"
										}
									}
								]
							}
						]
					},
					{
						"type" : "Group",
						"label" : "Hakijan perustiedot",
						"elements" : [ {
							"type" : "HorizontalLayout",
							"elements" : [ {
								"type" : "VerticalLayout",
								"elements" : [ {
									"type" : "Control",
									"label" : "Vuodelle",
									"scope" : {
										"$ref" : "#/properties/Vuodelle"
									}
								},
									{
										"type" : "Control",
										"label" : "Uusi hakija tai ei rekisterinumeroa/Y-tunnus",
										"scope" : {
											"$ref" : "#/properties/Uusi hakija"
										}
									},
									{
										"type" : "Control",
										"label" : "Rekisterinumero",
										"scope" : {
											"$ref" : "#/properties/Rekisterinumero"
										}
									},
									{
										"type" : "Control",
										"label" : "Y-tunnus",
										"scope" : {
											"$ref" : "#/properties/Y-tunnus"
										}
									}
									, {
										"type" : "Control",
										"label" : "Yhteison Virallinen Nimi",
										"scope" : {
											"$ref" : "#/properties/Yhteisön virallinen nimi"
										}
									}
									, {
										"type" : "Control",
										"label" : "Yhteison Virallinen lyhenne",
										"scope" : {
											"$ref" : "#/properties/Yhteison virallinen lyhenne"
										}
									}
									, {
										"type" : "Control",
										"label" : "Rekisteröimispäivä",
										"scope" : {
											"$ref" : "#/properties/Rekisteroimispaiva"
										}
									}
									, {
										"type" : "Control",
										"label" : "Perustamisvuosi",
										"scope" : {
											"$ref" : "#/properties/Perustamisvuosi"
										}
									}, {
										"type" : "Control",
										"label" : "Kotipaikka",
										"scope" : {
											"$ref" : "#/properties/Kotipaikka"
										}
									}, {
										"type" : "Control",
										"label" : "www-sivut",
										"scope" : {
											"$ref" : "#/properties/www-sivut"
										}
									}
								]
							}, {
								"type" : "VerticalLayout",
								"elements" : [ {
									"type" : "Control",
									"label" : "Valmistelija",
									"scope" : {
										"$ref" : "#/properties/Valmistelija"
									}
								},
									{
										"type" : "Control",
										"label" : "Uusi hakija tai ei rekisterinumeroa/Y-tunnus",
										"scope" : {
											"$ref" : "#/properties/Uusi hakija Kas"
										}
									},
									{
										"type" : "Control",
										"label" : "Rekisterinumero käsittelijä",
										"scope" : {
											"$ref" : "#/properties/Rekisterinumero"
										}
									},
									{
										"type" : "Control",
										"label" : "Y-tunnus käsittelijä",
										"scope" : {
											"$ref" : "#/properties/Y-tunnus"
										}
									},
									{
										"type" : "Control",
										"label" : "Yhteison virallinen nimi käsittelijä",
										"scope" : {
											"$ref" : "#/properties/Yhteisön virallinen nimi Kas"
										}
									}
									, {
										"type" : "Control",
										"label" : "Yhteison Virallinen lyhenne käsittelijä",
										"scope" : {
											"$ref" : "#/properties/Yhteison virallinen lyhenne Kas"
										}
									}
									, {
										"type" : "Control",
										"label" : "Rekisteröimispäivä käsittelijä",
										"scope" : {
											"$ref" : "#/properties/Rekisteroimispaiva Kas"
										}
									}
									, {
										"type" : "Control",
										"label" : "Perustamisvuosi käsittelijä",
										"scope" : {
											"$ref" : "#/properties/Perustamisvuosi Kas"
										}
									}, {
										"type" : "Control",
										"label" : "Kotipaikka käsittelijä",
										"scope" : {
											"$ref" : "#/properties/Kotipaikka Kas"
										}
									}, {
										"type" : "Control",
										"label" : "www-sivut käsittelijä",
										"scope" : {
											"$ref" : "#/properties/www-sivut Kas"
										}
									}
								]
							}
							]
						}
						]
					},
					{
						"type" : "Group",
						"label" : "Osoite",
						"elements" : [ {
							"type" : "HorizontalLayout",
							"elements" : [ {
								"type" : "Control",
								"label" : "Osoite",
								"scope" : {
									"$ref" : "#/properties/Osoite"
								}
							}, {
								"type" : "Control",
								"label" : "Osoite",
								"scope" : {
									"$ref" : "#/properties/Osoite Kas"
								}
							}
							]
						},
							{
								"type" : "HorizontalLayout",
								"elements" : [ {
									"type" : "Control",
									"label" : "Postinumero",
									"scope" : {
										"$ref" : "#/properties/Postinumero"
									}
								}, {
									"type" : "Control",
									"label" : "Postinumero",
									"scope" : {
										"$ref" : "#/properties/Postinumero Kas"
									}
								}
								]
							},
							{
								"type" : "HorizontalLayout",
								"elements" : [ {
									"type" : "Control",
									"label" : "Postitoimipaikka",
									"scope" : {
										"$ref" : "#/properties/Postitoimipaikka"
									}
								}, {
									"type" : "Control",
									"label" : "Postitoimipaikka",
									"scope" : {
										"$ref" : "#/properties/Postitoimipaikka Kas"
									}
								}
								]
							},
							{
								"type" : "HorizontalLayout",
								"elements" : [ {
									"type" : "Control",
									"label" : "Yhteyshenkilö",
									"scope" : {
										"$ref" : "#/properties/Yhteyshenkilö"
									}
								}, {
									"type" : "Control",
									"label" : "Yhteyshenkilö",
									"scope" : {
										"$ref" : "#/properties/Yhteyshenkilö Kas"
									}
								}
								]
							}
						]
					},
					{
						"type" : "Group",
						"label" : "Yhteydenotto",
						"elements" : [
							{
								"type" : "HorizontalLayout",
								"elements" : [ {
									"type" : "Control",
									"label" : "Sähköposti",
									"scope" : {
										"$ref" : "#/properties/Sähköposti"
									}
								}, {
									"type" : "Control",
									"label" : "Sähköposti",
									"scope" : {
										"$ref" : "#/properties/Sähköposti Kas"
									}
								}
								]
							},
							{
								"type" : "VerticalLayout",
								"elements" : [ {
									"type" : "VerticalLayout",
									"elements" : [ {
										"type" : "Control",
										"label" : "Toimihenkilö",
										"scope" : {
											"$ref" : "#/properties/Toimihenkilöt"
										}
									}
									]
								}, {
									"type" : "VerticalLayout",
									"elements" : [ {
										"type" : "Control",
										"label" : "Toimihenkilö käsittelijä",
										"scope" : {
											"$ref" : "#/properties/Toimihenkilöt Kas"
										}
									}
									]
								}
								]
							}
						]
					},
					{
						"type" : "Group",
						"label" : "Pankkiyhteys",
						"elements" : [ {
							"type" : "HorizontalLayout",
							"elements" : [ {
								"type" : "VerticalLayout",
								"elements" : [ {
									"type" : "Control",
									"label" : "Tilinumero",
									"scope" : {
										"$ref" : "#/properties/Tilinumero"
									}
								},
									{
										"type" : "Control",
										"label" : "Tilinomistajan nimi",
										"scope" : {
											"$ref" : "#/properties/Tilinomistajan nimi"
										}
									},
									{
										"type" : "Control",
										"label" : "Henkilötunnus",
										"scope" : {
											"$ref" : "#/properties/Henkilötunnus"
										}
									}
								]
							}, {
								"type" : "VerticalLayout",
								"elements" : [ {
									"type" : "Control",
									"label" : "Tilinumero",
									"scope" : {
										"$ref" : "#/properties/Tilinumero Kas"
									}
								},
									{
										"type" : "Control",
										"label" : "Tilinomistajan nimi",
										"scope" : {
											"$ref" : "#/properties/Tilinomistajan nimi Kas"
										}
									},
									{
										"type" : "Control",
										"label" : "Henkilötunnus",
										"scope" : {
											"$ref" : "#/properties/Henkilötunnus Kas"
										}
									}
								]
							}
							]
						}
						]
					},
					{
						"type" : "Group",
						"label" : "Haettava avustus",
						"elements" : [ {
							"type" : "VerticalLayout",
							"elements" : [ {
								"type" : "VerticalLayout",
								"elements" : [ {
									"type" : "Control",
									"label" : "Avustuslaji",
									"scope" : {
										"$ref" : "#/properties/Avustuslaji"
									}
								}
								]
							}, {
								"type" : "VerticalLayout",
								"elements" : [ {
									"type" : "Control",
									"label" : "Avustuslaji käsittelijä",
									"scope" : {
										"$ref" : "#/properties/Avustuslaji Kas"
									}
								}
								]
							}
							]
						},
							{
								"type" : "HorizontalLayout",
								"elements" : [ {
									"type" : "VerticalLayout",
									"elements" : [ {
										"type" : "Control",
										"label" : "Yhteensä",
										"scope" : {
											"$ref" : "#/properties/Yhteensä"
										}
									},
										{
											"type" : "Control",
											"label" : "Haetun avustuksen käyttötarkoitus",
											"scope" : {
												"$ref" : "#/properties/Haetun avustuksen käyttötarkoitus"
											},
											"options" : {
												"multi" : true
											}
										},
										{
											"type" : "Control",
											"label" : " ",
											"scope" : {
												"$ref" : "#/properties/Blank"
											}
										}, {
											"type" : "Control",
											"label" : " ",
											"scope" : {
												"$ref" : "#/properties/Blank"
											}
										}, {
											"type" : "Control",
											"label" : "Selvitys edellisen avustuksen käytöstä",
											"scope" : {
												"$ref" : "#/properties/Selvitys edellisen avustuksen käytöstä"
											},
											"options" : {
												"multi" : true
											}
										}
									]
								}, {
									"type" : "VerticalLayout",
									"elements" : [ {
										"type" : "Control",
										"label" : "Yhteensä",
										"scope" : {
											"$ref" : "#/properties/Yhteensä Kas"
										}
									},
										{
											"type" : "Control",
											"label" : "Haetun avustuksen käyttötarkoitus",
											"scope" : {
												"$ref" : "#/properties/Haetun avustuksen käyttötarkoitus Kas"
											},
											"options" : {
												"multi" : true
											}
										}, {
											"type" : "Control",
											"label" : "Selvitys edellisen avustuksen käytöstä",
											"scope" : {
												"$ref" : "#/properties/Selvitys edellisen avustuksen käytöstä Kas"
											},
											"options" : {
												"multi" : true
											}
										},
										{
											"type" : "Control",
											"label" : "Pitkä perustelu",
											"scope" : {
												"$ref" : "#/properties/Pitkä perustelu"
											},
											"options" : {
												"multi" : true
											}
										},
										{
											"type" : "Control",
											"label" : "Valmistelijan perustelu",
											"scope" : {
												"$ref" : "#/properties/Valmistelijan perustelu"
											},
											"options" : {
												"multi" : true
											}
										}, {
											"type" : "Control",
											"label" : "Käyttöselvitys tehty",
											"scope" : {
												"$ref" : "#/properties/Käyttöselvitys tehty Kas"
											}
										}
									]
								}
								]
							}
						]
					},
					{
						"type" : "Group",
						"label" : "Muut saadut avustukset",
						"elements" : [ {
							"type" : "HorizontalLayout",
							"elements" : [ {
								"type" : "VerticalLayout",
								"elements" : [ {
									"type" : "Control",
									"label" : "Muut saadut avustukset",
									"scope" : {
										"$ref" : "#/properties/Muut saadut avustukset"
									},
									"options" : {
										"multi" : true
									}
								}, {
									"type" : "Control",
									"label" : "Muut saadut avustukset",
									"scope" : {
										"$ref" : "#/properties/Muut saadut avustukset Kas"
									},
									"options" : {
										"multi" : true
									}
								}
								]
							}
							]
						}
						]
					},
					{
						"type" : "Group",
						"label" : "Etuisuudet kaupungilta saadut",
						"elements" : [ {
							"type" : "VerticalLayout",
							"elements" : [
								{
									"type" : "HorizontalLayout",
									"elements" : [ {
										"type" : "VerticalLayout",
										"elements" : [ {
											"type" : "Control",
											"label" : "Tilat",
											"scope" : {
												"$ref" : "#/properties/Tilat"
											},
											"options" : {
												"multi" : true
											}
										},
											{
												"type" : "Control",
												"label" : "Lainat ja saadut takaukset",
												"scope" : {
													"$ref" : "#/properties/Lainat ja saadut takaukset"
												},
												"options" : {
													"multi" : true
												}
											}
										]
									}, {
										"type" : "VerticalLayout",
										"elements" : [ {
											"type" : "Control",
											"label" : "Tilat",
											"scope" : {
												"$ref" : "#/properties/Tilat Kas"
											},
											"options" : {
												"multi" : true
											}
										},
											{
												"type" : "Control",
												"label" : "Lainat ja saadut takaukset",
												"scope" : {
													"$ref" : "#/properties/Lainat ja saadut takaukset Kas"
												},
												"options" : {
													"multi" : true
												}
											}
										]
									}
									]
								}
							]
						}
						]
					},
					{
						"type" : "Group",
						"label" : "Toiminta",
						"elements" : [ {
							"type" : "HorizontalLayout",
							"elements" : [ {
								"type" : "VerticalLayout",
								"elements" : [ {
									"type" : "Control",
									"label" : "Toiminnan tarkoitus",
									"scope" : {
										"$ref" : "#/properties/Toiminnan tarkoitus"
									},
									"options" : {
										"multi" : true
									}
								}, {
									"type" : "Control",
									"label" : "Yhteisö harjoittaa liiketoimintaa",
									"scope" : {
										"$ref" : "#/properties/Yhteisö harjoittaa liiketoimintaa"
									}
								}
								]
							}, {
								"type" : "VerticalLayout",
								"elements" : [ {
									"type" : "Control",
									"label" : "Toiminnan tarkoitus",
									"scope" : {
										"$ref" : "#/properties/Toiminnan tarkoitus Kas"
									},
									"options" : {
										"multi" : true
									}
								}, {
									"type" : "Control",
									"label" : "Yhteisö harjoittaa liiketoimintaa",
									"scope" : {
										"$ref" : "#/properties/Yhteisö harjoittaa liiketoimintaa Kas"
									}
								}
								]
							}
							]
						}
						]
					},
					{
						"type" : "Group",
						"label" : "Jäsenmäärä ja jäsenmaksut",
						"elements" : [ {
							"type" : "HorizontalLayout",
							"elements" : [ {
								"type" : "VerticalLayout",
								"elements" : [ {
									"type" : "Control",
									"label" : "Hakijayhteisö: henkilöjäseniä",
									"scope" : {
										"$ref" : "#/properties/Hakijayhteisö henkilö"
									}
								}
								]
							}, {
								"type" : "VerticalLayout",
								"elements" : [ {
									"type" : "Control",
									"label" : "yhteisöjäseniä",
									"scope" : {
										"$ref" : "#/properties/Hakijayhteisö yhteisö"
									}
								}
								]
							}, {
								"type" : "VerticalLayout",
								"elements" : [ {
									"type" : "Control",
									"label" : "Hakijayhteisö: henkilöjäseniä",
									"scope" : {
										"$ref" : "#/properties/Hakijayhteisö henkilö"
									}
								}
								]
							}, {
								"type" : "VerticalLayout",
								"elements" : [ {
									"type" : "Control",
									"label" : "yhteisöjäseniä",
									"scope" : {
										"$ref" : "#/properties/Hakijayhteisö yhteisö"
									}
								}
								]
							}
							]
						},
							{
								"type" : "HorizontalLayout",
								"elements" : [ {
									"type" : "VerticalLayout",
									"elements" : [ {
										"type" : "Control",
										"label" : "Helsinkiläisiä henkilöjäseniä",
										"scope" : {
											"$ref" : "#/properties/Hakijayhteisö henkilö helsinki"
										}
									}
									]
								}, {
									"type" : "VerticalLayout",
									"elements" : [ {
										"type" : "Control",
										"label" : "Helsinkiläisiä yhteisöjäseniä",
										"scope" : {
											"$ref" : "#/properties/Hakijayhteisö yhteisö helsinki"
										}
									}
									]
								}, {
									"type" : "VerticalLayout",
									"elements" : [ {
										"type" : "Control",
										"label" : "Helsinkiläisiä henkilöjäseniä",
										"scope" : {
											"$ref" : "#/properties/Hakijayhteisö henkilö helsinki"
										}
									}
									]
								}, {
									"type" : "VerticalLayout",
									"elements" : [ {
										"type" : "Control",
										"label" : "Helsinkiläisiä yhteisöjäseniä",
										"scope" : {
											"$ref" : "#/properties/Hakijayhteisö yhteisö helsinki"
										}
									}
									]
								}
								]
							},
							{
								"type" : "HorizontalLayout",
								"elements" : [ {
									"type" : "VerticalLayout",
									"elements" : [ {
										"type" : "Control",
										"label" : "Alayhdistys: henkilöjäseniä",
										"scope" : {
											"$ref" : "#/properties/Alayhdistys henkilö"
										}
									}
									]
								}, {
									"type" : "VerticalLayout",
									"elements" : [ {
										"type" : "Control",
										"label" : "yhteisöjäseniä",
										"scope" : {
											"$ref" : "#/properties/Alayhdistys yhteisö"
										}
									}
									]
								}, {
									"type" : "VerticalLayout",
									"elements" : [ {
										"type" : "Control",
										"label" : "Alayhdistys: henkilöjäseniä",
										"scope" : {
											"$ref" : "#/properties/Alayhdistys henkilö"
										}
									}
									]
								}, {
									"type" : "VerticalLayout",
									"elements" : [ {
										"type" : "Control",
										"label" : "yhteisöjäseniä",
										"scope" : {
											"$ref" : "#/properties/Alayhdistys yhteisö"
										}
									}
									]
								}
								]
							}, {
								"type" : "HorizontalLayout",
								"elements" : [ {
									"type" : "VerticalLayout",
									"elements" : [ {
										"type" : "Control",
										"label" : "Helsinkiläisiä henkilöjäseniä",
										"scope" : {
											"$ref" : "#/properties/Alayhdistys henkilö helsinki"
										}
									}
									]
								}, {
									"type" : "VerticalLayout",
									"elements" : [ {
										"type" : "Control",
										"label" : "Helsinkiläisiä yhteisöjäseniä",
										"scope" : {
											"$ref" : "#/properties/Alayhdistys yhteisö helsinki"
										}
									}
									]
								}, {
									"type" : "VerticalLayout",
									"elements" : [ {
										"type" : "Control",
										"label" : "Helsinkiläisiä henkilöjäseniä",
										"scope" : {
											"$ref" : "#/properties/Alayhdistys henkilö helsinki"
										}
									}
									]
								}, {
									"type" : "VerticalLayout",
									"elements" : [ {
										"type" : "Control",
										"label" : "Helsinkiläisiä yhteisöjäseniä",
										"scope" : {
											"$ref" : "#/properties/Alayhdistys yhteisö helsinki"
										}
									}
									]
								}
								]
							},
							{
								"type" : "HorizontalLayout",
								"elements" : [ {
									"type" : "VerticalLayout",
									"elements" : [ {
										"type" : "Control",
										"label" : "Alaosasto: henkilöjäseniä",
										"scope" : {
											"$ref" : "#/properties/Alaosasto henkilö"
										}
									}
									]
								}, {
									"type" : "VerticalLayout",
									"elements" : [ {
										"type" : "Control",
										"label" : "yhteisöjäseniä",
										"scope" : {
											"$ref" : "#/properties/Alaosasto yhteisö"
										}
									}
									]
								}, {
									"type" : "VerticalLayout",
									"elements" : [ {
										"type" : "Control",
										"label" : "Alaosasto: henkilöjäseniä",
										"scope" : {
											"$ref" : "#/properties/Alaosasto henkilö"
										}
									}
									]
								}, {
									"type" : "VerticalLayout",
									"elements" : [ {
										"type" : "Control",
										"label" : "yhteisöjäseniä",
										"scope" : {
											"$ref" : "#/properties/Alaosasto yhteisö"
										}
									}
									]
								}
								]
							},
							{
								"type" : "HorizontalLayout",
								"elements" : [ {
									"type" : "VerticalLayout",
									"elements" : [ {
										"type" : "Control",
										"label" : "Helsinkiläisiä henkilöjäseniä",
										"scope" : {
											"$ref" : "#/properties/Alaosasto henkilö helsinki"
										}
									}
									]
								}, {
									"type" : "VerticalLayout",
									"elements" : [ {
										"type" : "Control",
										"label" : "Helsinkiläisiä yhteisöjäseniä",
										"scope" : {
											"$ref" : "#/properties/Alaosasto yhteisö helsinki"
										}
									}
									]
								}, {
									"type" : "VerticalLayout",
									"elements" : [ {
										"type" : "Control",
										"label" : "Helsinkiläisiä henkilöjäseniä",
										"scope" : {
											"$ref" : "#/properties/Alaosasto henkilö helsinki"
										}
									}
									]
								}, {
									"type" : "VerticalLayout",
									"elements" : [ {
										"type" : "Control",
										"label" : "Helsinkiläisiä yhteisöjäseniä",
										"scope" : {
											"$ref" : "#/properties/Alaosasto yhteisö helsinki"
										}
									}
									]
								}
								]
							},
							{
								"type" : "HorizontalLayout",
								"elements" : [ {
									"type" : "HorizontalLayout",
									"elements" : [ {
										"type" : "Control",
										"label" : "Jäsenmaksun suuruus: Henkilöjäsen euroa",
										"scope" : {
											"$ref" : "#/properties/Henkilöjäsen euroa"
										}
									},
										{
											"type" : "Control",
											"label" : "Jäsenmaksun suuruus: Yhteisöjäsen euroa",
											"scope" : {
												"$ref" : "#/properties/Yhteisöjäsen euroa"
											}
										},
										{
											"type" : "Control",
											"label" : "Jäsenmaksun suuruus: Henkilöjäsen euroa",
											"scope" : {
												"$ref" : "#/properties/Henkilöjäsen euroa"
											}
										},
										{
											"type" : "Control",
											"label" : "Jäsenmaksun suuruus: Yhteisöjäsen euroa",
											"scope" : {
												"$ref" : "#/properties/Yhteisöjäsen euroa"
											}
										}
									]
								}
								]
							}
						]
					},
					{
						"type" : "Group",
						"label" : "Lisätiedot",
						"elements" : [ {
							"type" : "HorizontalLayout",
							"elements" : [ {
								"type" : "VerticalLayout",
								"elements" : [ {
									"type" : "Control",
									"label" : "Lisätiedot",
									"scope" : {
										"$ref" : "#/properties/Lisätiedot"
									},
									"options" : {
										"multi" : true
									}
								}
								]
							}, {
								"type" : "VerticalLayout",
								"elements" : [ {
									"type" : "Control",
									"label" : "Lisätiedot",
									"scope" : {
										"$ref" : "#/properties/Lisätiedot Kas"
									},
									"options" : {
										"multi" : true
									}
								}
								]
							}
							]
						}
						]
					},
					{
						"type" : "Group",
						"label" : "Hakemuksen lähettäjä",
						"elements" : [ {
							"type" : "HorizontalLayout",
							"elements" : [ {
								"type" : "VerticalLayout",
								"elements" : [ {
									"type" : "Control",
									"label" : "Sukunimi",
									"scope" : {
										"$ref" : "#/properties/Sukunimi"
									},
									"readOnly" : true
								}
								]
							}, {
								"type" : "VerticalLayout",
								"elements" : [ {
									"type" : "Control",
									"label" : "Etunimi",
									"scope" : {
										"$ref" : "#/properties/Etunimi"
									},
									"readOnly" : true
								}
								]
							}
							]
						}, {
							"type" : "HorizontalLayout",
							"elements" : [ {
								"type" : "VerticalLayout",
								"elements" : [ {
									"type" : "Control",
									"label" : "Tunnus",
									"scope" : {
										"$ref" : "#/properties/Tunnus"
									},
									"readOnly" : true
								}
								]
							}, {
								"type" : "VerticalLayout",
								"elements" : [ {
									"type" : "Control",
									"label" : "Käyttäjätunnus",
									"scope" : {
										"$ref" : "#/properties/Käyttäjätunnus"
									},
									"readOnly" : true
								}
								]
							}
							]
						}, {
							"type" : "HorizontalLayout",
							"elements" : [ {
								"type" : "VerticalLayout",
								"elements" : [ {
									"type" : "Control",
									"label" : "Sähköposti",
									"scope" : {
										"$ref" : "#/properties/Hakemuksen lähettäjä sähköposti"
									},
									"readOnly" : true
								}
								]
							}
							]
						}
						]
					}
				]
			},
				{
					"type" : "Category",
					"label" : "Hakijan tiedot",
					"elements" : [
						{
							"type" : "Group",
							"label" : "Hakijan perustiedot",
							"elements" : [ {
								"type" : "VerticalLayout",
								"elements" : [ {
									"type" : "Control",
									"label" : "Hakijan tyyppi",
									"scope" : {
										"$ref" : "#/properties/Hakijan tyyppi"
									}
								},
									{
										"type" : "Control",
										"label" : "Rekisterinumero",
										"scope" : {
											"$ref" : "#/properties/Rekisterinumero"
										}
									},
									{
										"type" : "Control",
										"label" : "Y-tunnus",
										"scope" : {
											"$ref" : "#/properties/Y-tunnus"
										}
									},
									{
										"type" : "Control",
										"label" : "Yhteisön virallinen nimi",
										"scope" : {
											"$ref" : "#/properties/Yhteisön virallinen nimi"
										}
									},
									{
										"type" : "Control",
										"label" : "Yhteison virallinen lyhenne",
										"scope" : {
											"$ref" : "#/properties/Yhteison virallinen lyhenne"
										}
									},
									{
										"type" : "Control",
										"label" : "Rekisteröimispäivä",
										"scope" : {
											"$ref" : "#/properties/Rekisteroimispaiva"
										}
									},
									{
										"type" : "Control",
										"label" : "Perustamisvuosi",
										"scope" : {
											"$ref" : "#/properties/Perustamisvuosi"
										}
									},
									{
										"type" : "Control",
										"label" : "Kotipaikka",
										"scope" : {
											"$ref" : "#/properties/Kotipaikka"
										}
									},
									{
										"type" : "Control",
										"label" : "Maahanmuuttaja yhteisö",
										"scope" : {
											"$ref" : "#/properties/Maahanmuuttaja yhteisö"
										}
									},
									{
										"type" : "Control",
										"label" : "Syntymävuosi",
										"scope" : {
											"$ref" : "#/properties/Syntymävuosi"
										}
									},
									{
										"type" : "Control",
										"label" : "Puhelin",
										"scope" : {
											"$ref" : "#/properties/Puhelinnumero"
										}
									},
									{
										"type" : "Control",
										"label" : "Puhelin virka-aikana",
										"scope" : {
											"$ref" : "#/properties/Puhelinnumero"
										}
									},
									{
										"type" : "Control",
										"label" : "Email",
										"scope" : {
											"$ref" : "#/properties/email"
										}
									},
									{
										"type" : "Control",
										"label" : "www-sivut",
										"scope" : {
											"$ref" : "#/properties/www-sivut"
										}
									},
									{
										"type" : "Control",
										"label" : "Osoitteet",
										"scope" : {
											"$ref" : "#/properties/Osoite taulukko"
										}
									},
									{
										"type" : "Control",
										"label" : "Toimihenkilöt",
										"scope" : {
											"$ref" : "#/properties/Toimihenkilöt"
										}
									},
									{
										"type" : "Control",
										"label" : "Pankkitili",
										"scope" : {
											"$ref" : "#/properties/Pankkitili"
										}
									}

								]
							}
							]
						}
					]
				},
				{
					"type" : "Category",
					"label" : "Asian tapahtumat",
					"elements" : [ {
						"type" : "Group",
						"label" : "Tapahtumat",
						"elements" : [ {
							"type" : "VerticalLayout",
							"elements" : [ {
								"type" : "Control",
								"label" : "Tapahtuma",
								"scope" : {
									"$ref" : "#/properties/Tapahtumat"
								},
								"readOnly" : true
							}
							]
						}
						]
					}
					]
				},
				{
					"type" : "Category",
					"label" : "Viestintä",
					"elements" : [ {
						"type" : "Group",
						"label" : "Tapahtumat",
						"elements" : [ {
							"type" : "VerticalLayout",
							"elements" : [ {
								"type" : "Control",
								"label" : "Viesti",
								"scope" : {
									"$ref" : "#/properties/Viestit"
								},
								"readOnly" : true
							}
							]
						}
						]
					}
					]
				},

			]
		}
);