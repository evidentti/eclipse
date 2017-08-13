angular.module('demoApp').value('UISchema', {
	"type" : "Categorization",
	"elements" : [
		{
			"type" : "Category",
			"label" : "Hakemuksen paivitystiedot",
			"elements" : [
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
								},
								{
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
							"elements" : [
								{
									"type" : "Control",
									"label" : "Paivitetty",
									"scope" : {
										"$ref" : "#/properties/Paivitetty"
									},
									"readOnly" : true
								},
								{
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
							"elements" : [
								{
									"type" : "Control",
									"label" : "Toimiala",
									"scope" : {
										"$ref" : "#/properties/Toimiala"
									}
								},
								{
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
								},
								{
									"type" : "Control",
									"label" : "Kasittelija",
									"scope" : {
										"$ref" : "#/properties/Kasittelija"
									}
								}
							]
						}
					]
				},
				
				{
					"type" : "Group",
					"label" : "Hakijan perustiedot",
					"elements" : [
						{
							"type" : "HorizontalLayout",
							"elements" : [
								{
									"type" : "VerticalLayout",
									"elements" : [
										{
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
										},
										{
											"type" : "Control",
											"label" : "Yhteison Virallinen Nimi",
											"scope" : {
												"$ref" : "#/properties/Yhteison virallinen nimi"
											}
										},
										{
											"type" : "Control",
											"label" : "Yhteison Virallinen lyhenne",
											"scope" : {
												"$ref" : "#/properties/Yhteison virallinen lyhenne"
											}
										},
										{
											"type" : "Control",
											"label" : "Rekisteroimispaiva",
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
											"label" : "www-sivut",
											"scope" : {
												"$ref" : "#/properties/www-sivut"
											}
										}
									]
								},
								{
									"type" : "VerticalLayout",
									"elements" : [
										{
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
											"label" : "Rekisterinumero kasittelija",
											"scope" : {
												"$ref" : "#/properties/Rekisterinumero"
											}
										},
										{
											"type" : "Control",
											"label" : "Y-tunnus kasittelija",
											"scope" : {
												"$ref" : "#/properties/Y-tunnus"
											}
										},
										{
											"type" : "Control",
											"label" : "Yhteison virallinen nimi kasittelija",
											"scope" : {
												"$ref" : "#/properties/Yhteison virallinen nimi Kas"
											}
										},
										{
											"type" : "Control",
											"label" : "Yhteison Virallinen lyhenne kasittelija",
											"scope" : {
												"$ref" : "#/properties/Yhteison virallinen lyhenne Kas"
											}
										},
										{
											"type" : "Control",
											"label" : "Rekisteroimispaiva kasittelija",
											"scope" : {
												"$ref" : "#/properties/Rekisteroimispaiva Kas"
											}
										},
										{
											"type" : "Control",
											"label" : "Perustamisvuosi kasittelija",
											"scope" : {
												"$ref" : "#/properties/Perustamisvuosi Kas"
											}
										},
										{
											"type" : "Control",
											"label" : "Kotipaikka kasittelija",
											"scope" : {
												"$ref" : "#/properties/Kotipaikka Kas"
											}
										},
										{
											"type" : "Control",
											"label" : "www-sivut kasittelija",
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
					"elements" : [
						{
							"type" : "HorizontalLayout",
							"elements" : [
								{
									"type" : "Control",
									"label" : "Osoite",
									"scope" : {
										"$ref" : "#/properties/Osoite"
									}
								},
								{
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
							"elements" : [
								{
									"type" : "Control",
									"label" : "Postinumero",
									"scope" : {
										"$ref" : "#/properties/Postinumero"
									}
								},
								{
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
							"elements" : [
								{
									"type" : "Control",
									"label" : "Postitoimipaikka",
									"scope" : {
										"$ref" : "#/properties/Postitoimipaikka"
									}
								},
								{
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
							"elements" : [
								{
									"type" : "Control",
									"label" : "Yhteyshenkilo",
									"scope" : {
										"$ref" : "#/properties/Yhteyshenkilo"
									}
								},
								{
									"type" : "Control",
									"label" : "Yhteyshenkilo",
									"scope" : {
										"$ref" : "#/properties/Yhteyshenkilo Kas"
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
							"elements" : [
								{
									"type" : "Control",
									"label" : "Sahkoposti",
									"scope" : {
										"$ref" : "#/properties/Sahkoposti"
									}
								},
								{
									"type" : "Control",
									"label" : "Sahkoposti",
									"scope" : {
										"$ref" : "#/properties/Sahkoposti Kas"
									}
								}
							]
						},
						{
							"type" : "VerticalLayout",
							"elements" : [
								{
									"type" : "VerticalLayout",
									"elements" : [
										{
											"type" : "Control",
											"label" : "Toimihenkilo",
											"scope" : {
												"$ref" : "#/properties/Toimihenkilot"
											}
										}
									]
								},
								{
									"type" : "VerticalLayout",
									"elements" : [
										{
											"type" : "Control",
											"label" : "Toimihenkilo kasittelija",
											"scope" : {
												"$ref" : "#/properties/Toimihenkilot Kas"
											}
										}
									]
								}
							]
						}
					]
				},
				
//				{
//					"type" : "Group",
//					"label" : "Pankkiyhteys",
//					"elements" : [
//						{
//							"type" : "HorizontalLayout",
//							"elements" : [
//								{
//									"type" : "VerticalLayout",
//									"elements" : [
//										{
//											"type" : "Control",
//											"label" : "Tilinumero",
//											"scope" : {
//												"$ref" : "#/properties/Tilinumero"
//											}
//										},
//										{
//											"type" : "Control",
//											"label" : "Tilinomistajan nimi",
//											"scope" : {
//												"$ref" : "#/properties/Tilinomistajan nimi"
//											}
//										},
//										{
//											"type" : "Control",
//											"label" : "Henkilotunnus",
//											"scope" : {
//												"$ref" : "#/properties/Henkilotunnus"
//											}
//										}
//									]
//								},
//								{
//									"type" : "VerticalLayout",
//									"elements" : [
//										{
//											"type" : "Control",
//											"label" : "Tilinumero",
//											"scope" : {
//												"$ref" : "#/properties/Tilinumero Kas"
//											}
//										},
//										{
//											"type" : "Control",
//											"label" : "Tilinomistajan nimi",
//											"scope" : {
//												"$ref" : "#/properties/Tilinomistajan nimi Kas"
//											}
//										},
//										{
//											"type" : "Control",
//											"label" : "Henkilotunnus",
//											"scope" : {
//												"$ref" : "#/properties/Henkilotunnus Kas"
//											}
//										}
//									]
//								}
//							]
//						}
//					]
//				},
				
//				{
//					"type" : "Group",
//					"label" : "Haettava avustus",
//					"elements" : [
//						{
//							"type" : "VerticalLayout",
//							"elements" : [
//								{
//									"type" : "VerticalLayout",
//									"elements" : [
//										{
//											"type" : "Control",
//											"label" : "Avustuslaji",
//											"scope" : {
//												"$ref" : "#/properties/Avustuslaji"
//											}
//										}
//									]
//								},
//								{
//									"type" : "VerticalLayout",
//									"elements" : [
//										{
//											"type" : "Control",
//											"label" : "Avustuslaji kasittelija",
//											"scope" : {
//												"$ref" : "#/properties/Avustuslaji Kas"
//											}
//										}
//									]
//								}
//							]
//						},
//						{
//							"type" : "HorizontalLayout",
//							"elements" : [
//								{
//									"type" : "VerticalLayout",
//									"elements" : [
//										{
//											"type" : "Control",
//											"label" : "Yhteensa",
//											"scope" : {
//												"$ref" : "#/properties/Yhteensa"
//											}
//										},
//										{
//											"type" : "Control",
//											"label" : "Haetun avustuksen kayttotarkoitus",
//											"scope" : {
//												"$ref" : "#/properties/Haetun avustuksen kayttotarkoitus"
//											},
//											"options" : {
//												"multi" : true
//											}
//										},
//										{
//											"type" : "Control",
//											"label" : " ",
//											"scope" : {
//												"$ref" : "#/properties/Blank"
//											}
//										},
//										{
//											"type" : "Control",
//											"label" : " ",
//											"scope" : {
//												"$ref" : "#/properties/Blank"
//											}
//										},
//										{
//											"type" : "Control",
//											"label" : "Selvitys edellisen avustuksen kaytosta",
//											"scope" : {
//												"$ref" : "#/properties/Selvitys edellisen avustuksen kaytosta"
//											},
//											"options" : {
//												"multi" : true
//											}
//										}
//									]
//								},
//								{
//									"type" : "VerticalLayout",
//									"elements" : [
//										{
//											"type" : "Control",
//											"label" : "Yhteensa",
//											"scope" : {
//												"$ref" : "#/properties/Yhteensa Kas"
//											}
//										},
//										{
//											"type" : "Control",
//											"label" : "Haetun avustuksen kayttotarkoitus",
//											"scope" : {
//												"$ref" : "#/properties/Haetun avustuksen kayttotarkoitus Kas"
//											},
//											"options" : {
//												"multi" : true
//											}
//										},
//										{
//											"type" : "Control",
//											"label" : "Selvitys edellisen avustuksen kaytosta",
//											"scope" : {
//												"$ref" : "#/properties/Selvitys edellisen avustuksen kaytosta Kas"
//											},
//											"options" : {
//												"multi" : true
//											}
//										},
//										{
//											"type" : "Control",
//											"label" : "Pitka perustelu",
//											"scope" : {
//												"$ref" : "#/properties/Pitka perustelu"
//											},
//											"options" : {
//												"multi" : true
//											}
//										},
//										{
//											"type" : "Control",
//											"label" : "Valmistelijan perustelu",
//											"scope" : {
//												"$ref" : "#/properties/Valmistelijan perustelu"
//											},
//											"options" : {
//												"multi" : true
//											}
//										},
//										{
//											"type" : "Control",
//											"label" : "Kayttoselvitys tehty",
//											"scope" : {
//												"$ref" : "#/properties/Kayttoselvitys tehty Kas"
//											}
//										}
//									]
//								}
//							]
//						}
//					]
//				},
				
//				{
//					"type" : "Group",
//					"label" : "Muut saadut avustukset",
//					"elements" : [
//						{
//							"type" : "HorizontalLayout",
//							"elements" : [
//								{
//									"type" : "VerticalLayout",
//									"elements" : [
//										{
//											"type" : "Control",
//											"label" : "Muut saadut avustukset",
//											"scope" : {
//												"$ref" : "#/properties/Muut saadut avustukset"
//											},
//											"options" : {
//												"multi" : true
//											}
//										},
//										{
//											"type" : "Control",
//											"label" : "Muut saadut avustukset",
//											"scope" : {
//												"$ref" : "#/properties/Muut saadut avustukset Kas"
//											},
//											"options" : {
//												"multi" : true
//											}
//										}
//									]
//								}
//							]
//						}
//					]
//				},
				
				{
					"type" : "Group",
					"label" : "Etuisuudet kaupungilta saadut",
					"elements" : [
						{
							"type" : "VerticalLayout",
							"elements" : [
								{
									"type" : "HorizontalLayout",
									"elements" : [
										{
											"type" : "VerticalLayout",
											"elements" : [
												{
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
										},
										{
											"type" : "VerticalLayout",
											"elements" : [
												{
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
					"elements" : [
						{
							"type" : "HorizontalLayout",
							"elements" : [
								{
									"type" : "VerticalLayout",
									"elements" : [
										{
											"type" : "Control",
											"label" : "Toiminnan tarkoitus",
											"scope" : {
												"$ref" : "#/properties/Toiminnan tarkoitus"
											},
											"options" : {
												"multi" : true
											}
										},
										{
											"type" : "Control",
											"label" : "Yhteiso harjoittaa liiketoimintaa",
											"scope" : {
												"$ref" : "#/properties/Yhteiso harjoittaa liiketoimintaa"
											}
										}
									]
								},
								{
									"type" : "VerticalLayout",
									"elements" : [
										{
											"type" : "Control",
											"label" : "Toiminnan tarkoitus",
											"scope" : {
												"$ref" : "#/properties/Toiminnan tarkoitus Kas"
											},
											"options" : {
												"multi" : true
											}
										},
										{
											"type" : "Control",
											"label" : "Yhteiso harjoittaa liiketoimintaa",
											"scope" : {
												"$ref" : "#/properties/Yhteiso harjoittaa liiketoimintaa Kas"
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
					"label" : "Jasenmaara ja jasenmaksut",
					"elements" : [
						{
							"type" : "HorizontalLayout",
							"elements" : [
								{
									"type" : "VerticalLayout",
									"elements" : [
										{
											"type" : "Control",
											"label" : "Hakijayhteiso: henkilojasenia",
											"scope" : {
												"$ref" : "#/properties/Hakijayhteiso henkilo"
											}
										}
									]
								},
								{
									"type" : "VerticalLayout",
									"elements" : [
										{
											"type" : "Control",
											"label" : "yhteisojasenia",
											"scope" : {
												"$ref" : "#/properties/Hakijayhteiso yhteiso"
											}
										}
									]
								},
								{
									"type" : "VerticalLayout",
									"elements" : [
										{
											"type" : "Control",
											"label" : "Hakijayhteiso: henkilojasenia",
											"scope" : {
												"$ref" : "#/properties/Hakijayhteiso henkilo"
											}
										}
									]
								},
								{
									"type" : "VerticalLayout",
									"elements" : [
										{
											"type" : "Control",
											"label" : "yhteisojasenia",
											"scope" : {
												"$ref" : "#/properties/Hakijayhteiso yhteiso"
											}
										}
									]
								}
							]
						},
						{
							"type" : "HorizontalLayout",
							"elements" : [
								{
									"type" : "VerticalLayout",
									"elements" : [
										{
											"type" : "Control",
											"label" : "Helsinkilaisia henkilojasenia",
											"scope" : {
												"$ref" : "#/properties/Hakijayhteiso henkilo helsinki"
											}
										}
									]
								},
								{
									"type" : "VerticalLayout",
									"elements" : [
										{
											"type" : "Control",
											"label" : "Helsinkilaisia yhteisojasenia",
											"scope" : {
												"$ref" : "#/properties/Hakijayhteiso yhteiso helsinki"
											}
										}
									]
								},
								{
									"type" : "VerticalLayout",
									"elements" : [
										{
											"type" : "Control",
											"label" : "Helsinkilaisia henkilojasenia",
											"scope" : {
												"$ref" : "#/properties/Hakijayhteiso henkilo helsinki"
											}
										}
									]
								},
								{
									"type" : "VerticalLayout",
									"elements" : [
										{
											"type" : "Control",
											"label" : "Helsinkilaisia yhteisojasenia",
											"scope" : {
												"$ref" : "#/properties/Hakijayhteiso yhteiso helsinki"
											}
										}
									]
								}
							]
						},
						{
							"type" : "HorizontalLayout",
							"elements" : [
								{
									"type" : "VerticalLayout",
									"elements" : [
										{
											"type" : "Control",
											"label" : "Alayhdistys: henkilojasenia",
											"scope" : {
												"$ref" : "#/properties/Alayhdistys henkilo"
											}
										}
									]
								},
								{
									"type" : "VerticalLayout",
									"elements" : [
										{
											"type" : "Control",
											"label" : "yhteisojasenia",
											"scope" : {
												"$ref" : "#/properties/Alayhdistys yhteiso"
											}
										}
									]
								},
								{
									"type" : "VerticalLayout",
									"elements" : [
										{
											"type" : "Control",
											"label" : "Alayhdistys: henkilojasenia",
											"scope" : {
												"$ref" : "#/properties/Alayhdistys henkilo"
											}
										}
									]
								},
								{
									"type" : "VerticalLayout",
									"elements" : [
										{
											"type" : "Control",
											"label" : "yhteisojasenia",
											"scope" : {
												"$ref" : "#/properties/Alayhdistys yhteiso"
											}
										}
									]
								}
							]
						},
						{
							"type" : "HorizontalLayout",
							"elements" : [
								{
									"type" : "VerticalLayout",
									"elements" : [
										{
											"type" : "Control",
											"label" : "Helsinkilaisia henkilojasenia",
											"scope" : {
												"$ref" : "#/properties/Alayhdistys henkilo helsinki"
											}
										}
									]
								},
								{
									"type" : "VerticalLayout",
									"elements" : [
										{
											"type" : "Control",
											"label" : "Helsinkilaisia yhteisojasenia",
											"scope" : {
												"$ref" : "#/properties/Alayhdistys yhteiso helsinki"
											}
										}
									]
								},
								{
									"type" : "VerticalLayout",
									"elements" : [
										{
											"type" : "Control",
											"label" : "Helsinkilaisia henkilojasenia",
											"scope" : {
												"$ref" : "#/properties/Alayhdistys henkilo helsinki"
											}
										}
									]
								},
								{
									"type" : "VerticalLayout",
									"elements" : [
										{
											"type" : "Control",
											"label" : "Helsinkilaisia yhteisojasenia",
											"scope" : {
												"$ref" : "#/properties/Alayhdistys yhteiso helsinki"
											}
										}
									]
								}
							]
						},
						{
							"type" : "HorizontalLayout",
							"elements" : [
								{
									"type" : "VerticalLayout",
									"elements" : [
										{
											"type" : "Control",
											"label" : "Alaosasto: henkilojasenia",
											"scope" : {
												"$ref" : "#/properties/Alaosasto henkilo"
											}
										}
									]
								},
								{
									"type" : "VerticalLayout",
									"elements" : [
										{
											"type" : "Control",
											"label" : "yhteisojasenia",
											"scope" : {
												"$ref" : "#/properties/Alaosasto yhteiso"
											}
										}
									]
								},
								{
									"type" : "VerticalLayout",
									"elements" : [
										{
											"type" : "Control",
											"label" : "Alaosasto: henkilojasenia",
											"scope" : {
												"$ref" : "#/properties/Alaosasto henkilo"
											}
										}
									]
								},
								{
									"type" : "VerticalLayout",
									"elements" : [
										{
											"type" : "Control",
											"label" : "yhteisojasenia",
											"scope" : {
												"$ref" : "#/properties/Alaosasto yhteiso"
											}
										}
									]
								}
							]
						},
						{
							"type" : "HorizontalLayout",
							"elements" : [
								{
									"type" : "VerticalLayout",
									"elements" : [
										{
											"type" : "Control",
											"label" : "Helsinkilaisia henkilojasenia",
											"scope" : {
												"$ref" : "#/properties/Alaosasto henkilo helsinki"
											}
										}
									]
								},
								{
									"type" : "VerticalLayout",
									"elements" : [
										{
											"type" : "Control",
											"label" : "Helsinkilaisia yhteisojasenia",
											"scope" : {
												"$ref" : "#/properties/Alaosasto yhteiso helsinki"
											}
										}
									]
								},
								{
									"type" : "VerticalLayout",
									"elements" : [
										{
											"type" : "Control",
											"label" : "Helsinkilaisia henkilojasenia",
											"scope" : {
												"$ref" : "#/properties/Alaosasto henkilo helsinki"
											}
										}
									]
								},
								{
									"type" : "VerticalLayout",
									"elements" : [
										{
											"type" : "Control",
											"label" : "Helsinkilaisia yhteisojasenia",
											"scope" : {
												"$ref" : "#/properties/Alaosasto yhteiso helsinki"
											}
										}
									]
								}
							]
						},
						{
							"type" : "HorizontalLayout",
							"elements" : [
								{
									"type" : "HorizontalLayout",
									"elements" : [
										{
											"type" : "Control",
											"label" : "Jasenmaksun suuruus: Henkilojasen euroa",
											"scope" : {
												"$ref" : "#/properties/Henkilojasen euroa"
											}
										},
										{
											"type" : "Control",
											"label" : "Jasenmaksun suuruus: Yhteisojasen euroa",
											"scope" : {
												"$ref" : "#/properties/Yhteisojasen euroa"
											}
										},
										{
											"type" : "Control",
											"label" : "Jasenmaksun suuruus: Henkilojasen euroa",
											"scope" : {
												"$ref" : "#/properties/Henkilojasen euroa"
											}
										},
										{
											"type" : "Control",
											"label" : "Jasenmaksun suuruus: Yhteisojasen euroa",
											"scope" : {
												"$ref" : "#/properties/Yhteisojasen euroa"
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
					"label" : "Lisatiedot",
					"elements" : [
						{
							"type" : "HorizontalLayout",
							"elements" : [
								{
									"type" : "VerticalLayout",
									"elements" : [
										{
											"type" : "Control",
											"label" : "Lisatiedot",
											"scope" : {
												"$ref" : "#/properties/Lisatiedot"
											},
											"options" : {
												"multi" : true
											}
										}
									]
								},
								{
									"type" : "VerticalLayout",
									"elements" : [
										{
											"type" : "Control",
											"label" : "Lisatiedot",
											"scope" : {
												"$ref" : "#/properties/Lisatiedot Kas"
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
					"label" : "Hakemuksen lahettaja",
					"elements" : [
						{
							"type" : "HorizontalLayout",
							"elements" : [
								{
									"type" : "VerticalLayout",
									"elements" : [
										{
											"type" : "Control",
											"label" : "Sukunimi",
											"scope" : {
												"$ref" : "#/properties/Sukunimi"
											},
											"readOnly" : true
										}
									]
								},
								{
									"type" : "VerticalLayout",
									"elements" : [
										{
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
						},
						{
							"type" : "HorizontalLayout",
							"elements" : [
								{
									"type" : "VerticalLayout",
									"elements" : [
										{
											"type" : "Control",
											"label" : "Tunnus",
											"scope" : {
												"$ref" : "#/properties/Tunnus"
											},
											"readOnly" : true
										}
									]
								},
								{
									"type" : "VerticalLayout",
									"elements" : [
										{
											"type" : "Control",
											"label" : "Kayttajatunnus",
											"scope" : {
												"$ref" : "#/properties/Kayttajatunnus"
											},
											"readOnly" : true
										}
									]
								}
							]
						},
						{
							"type" : "HorizontalLayout",
							"elements" : [
								{
									"type" : "VerticalLayout",
									"elements" : [
										{
											"type" : "Control",
											"label" : "Sahkoposti",
											"scope" : {
												"$ref" : "#/properties/Hakemuksen lahettaja sahkoposti"
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
					"elements" : [
						{
							"type" : "VerticalLayout",
							"elements" : [
								{
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
									"label" : "Yhteison virallinen nimi",
									"scope" : {
										"$ref" : "#/properties/Yhteison virallinen nimi"
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
									"label" : "Rekisteroimispaiva",
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
									"label" : "Maahanmuuttaja yhteiso",
									"scope" : {
										"$ref" : "#/properties/Maahanmuuttaja yhteiso"
									}
								},
								{
									"type" : "Control",
									"label" : "Syntymavuosi",
									"scope" : {
										"$ref" : "#/properties/Syntymavuosi"
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
									"label" : "Toimihenkilot",
									"scope" : {
										"$ref" : "#/properties/Toimihenkilot"
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
			"elements" : [
				{
					"type" : "Group",
					"label" : "Tapahtumat",
					"elements" : [
						{
							"type" : "VerticalLayout",
							"elements" : [
								{
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
			"label" : "Viestinta",
			"elements" : [
				{
					"type" : "Group",
					"label" : "Tapahtumat",
					"elements" : [
						{
							"type" : "VerticalLayout",
							"elements" : [
								{
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
		}
	]
});