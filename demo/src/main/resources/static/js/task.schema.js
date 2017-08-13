angular.module('demoApp')
	.value('Schema',
			{
		"type": "object",
		"properties": {
			"Hakemustyyppi": {
				"type": "string"
			},
			"Saapunut": {
				"type": "string"
			},
			"Paivitetty": {
				"type": "string",
				"format": "date-time"
			},
			"Hakemusnro": {
				"type": "string"
			},
			"Tila": {
				"type": "string",
				"enum": [
					"string",
					"Vastaanotettu",
					"Avustusvalmistelussa",
					"Esitysvalmistelu"
				]
			},
			"Vuodelle": {
				"type": "string"
			},
			"Vuodelle Kas": {
				"type": "string",
				"enum": [
					"string",
					"2016",
					"2017",
					"2018",
					"2019"
				]
			},
			"Toimiala": {
				"type": "string",
				"enum": [
					"string",
					"Toimiala1",
					"Toimiala2",
					"Toimiala3",
					"Toimiala4"
				]
			},
			"Palvelualue": {
				"type": "string",
				"enum": [
					"string",
					"Palvelualue1",
					"Palvelualue2",
					"Palvelualue3",
					"Palvelualue4"
				]
			},
			"Vastuualue": {
				"type": "string",
				"enum": [
					"string",
					"Vastuualue1",
					"Vastuualue2",
					"Vastuualue3",
					"Vastuualue4"
				]
			},
			"Vastuualueen alajako": {
				"type": "string",
				"enum": [
					"string",
					"Vastuualueen alajako1",
					"Vastuualueen alajako2",
					"Vastuualueen alajako3",
					"Vastuualueen alajako4"
				]
			},
			"Kasittelija": {
				"type": "string"
			},
			"Valmistelija": {
				"type": "string"
			},
			"Hakijan Tunniste": {
				"type": "integer"
			},
			"Uusi hakija": {
				"type": "boolean"
			},
			"Uusi hakija Kas": {
				"type": "boolean"
			},
			"Kayttoselvitys tehty Kas": {
				"type": "boolean"
			},
			"Hakijan tyyppi": {
				"type": "string",
				"enum": [
					"string",
					"Yksityishenkilo",
					"Rekisteroitynyt yhteiso",
					"Rekisteroitymaton tyoryhma"
				]
			},
			"Hakijan tyyppi Kas": {
				"type": "string",
				"enum": [
					"string",
					"Yksityishenkilo",
					"Rekisteroitynyt yhteiso",
					"Rekisteroitymaton tyoryhma"
				]
			},
			"Hakijan Tunniste Kas": {
				"type": "integer"
			},
			"Yhteison virallinen nimi": {
				"type": "string"
			},
			"Yhteison virallinen nimi Kas": {
				"type": "string"
			},
			"Henkilotunnus": {
				"type": "string"
			},
			"Henkilotunnus Kas": {
				"type": "string"
			},
			"Yhteison virallinen lyhenne": {
				"type": "string"
			},
			"Yhteison virallinen lyhenne Kas": {
				"type": "string"
			},
			"Rekisteroimispaiva": {
				"type": "string"
			},
			"Rekisteroimispaiva Kas": {
				"type": "string"
			},
			"Perustamisvuosi": {
				"type": "integer"
			},
			"Perustamisvuosi Kas": {
				"type": "integer"
			},
			"Kotipaikka": {
				"type": "string"
			},
			"Kotipaikka Kas": {
				"type": "string"
			},
			"www-sivut": {
				"type": "string"
			},
			"www-sivut Kas": {
				"type": "string"
			},
			"Osoite": {
				"type": "string"
			},
			"Osoite Kas": {
				"type": "string"
			},
			"Postinumero ja -toimipaikka": {
				"type": "string"
			},
			"Postinumero ja -toimipaikka Kas": {
				"type": "string"
			},
			"Vastaanottaja": {
				"type": "string"
			},
			"Vastaanottaja Kas": {
				"type": "string"
			},
			"Sahkoposti": {
				"type": "string"
			},
			"Sahkoposti Kas": {
				"type": "string"
			},
			"Postinumero": {
				"type": "string"
			},
			"Postitoimipaikka": {
				"type": "string"
			},
			"Postinumero Kas": {
				"type": "string"
			},
			"Postitoimipaikka Kas": {
				"type": "string"
			},
			"Yhteyshenkilo": {
				"type": "string"
			},
			"Yhteyshenkilo Kas": {
				"type": "string"
			},
			"Tilinumero": {
				"type": "string"
			},
			"Tilinumero Kas": {
				"type": "string"
			},
			"Tilinomistajan nimi": {
				"type": "string"
			},
			"Tilinomistajan nimi Kas": {
				"type": "string"
			},
			"Osoite taulukko": {
				"type": "array",
				"items": {
					"type": "object",
					"properties": {
						"Osoite": {
							"type": "string"
						},
						"Postinumero": {
							"type": "string"
						},
						"Postitoimipaikka": {
							"type": "string"
						},
						"Vastaanottaja": {
							"type": "string",
							"enum": [
								"string",
								"Puheenjohtaja",
								"Sihteeri",
								"Yhteyshenkilo",
								"Muu",
								"Taloudesta vastaava",
								"Tilintarkastaja / toiminnantarkastaja",
								"ATK -kurssivastaava"
							]
						}
					}
				}
			},
			"Toimihenkilot": {
				"type": "array",
				"items": {
					"type": "object",
					"properties": {
						"Toimihenkilon nimi": {
							"type": "string"
						},
						"Puhelinnumero": {
							"type": "string"
						},
						"Sahkoposti": {
							"type": "string"
						},
						"Rooli": {
							"type": "string",
							"enum": [
								"string",
								"Puheenjohtaja",
								"Sihteeri",
								"Yhteyshenkilo",
								"Muu",
								"Taloudesta vastaava",
								"Tilintarkastaja / toiminnantarkastaja",
								"ATK -kurssivastaava"
							]
						}
					}
				}
			},
			"Toimihenkilot Kas": {
				"type": "array",
				"items": {
					"type": "object",
					"properties": {
						"Toimihenkilon nimi": {
							"type": "string"
						},
						"Puhelinnumero": {
							"type": "string"
						},
						"Sahkoposti": {
							"type": "string"
						},
						"Rooli": {
							"type": "string",
							"enum": [
								"string",
								"Puheenjohtaja",
								"Sihteeri",
								"Yhteyshenkilo",
								"Muu",
								"Taloudesta vastaava",
								"Tilintarkastaja / toiminnantarkastaja",
								"ATK -kurssivastaava"
							]
						}
					}
				}
			},
			"Pankkitili": {
				"type": "array",
				"items": {
					"type": "object",
					"properties": {
						"Pankkitili": {
							"type": "string"
						},
						"Voimassa": {
							"type": "boolean"
						}
					}
				}
			},
			"Pankkitili Kas": {
				"type": "array",
				"items": {
					"type": "object",
					"properties": {
						"Pankkitili": {
							"type": "string"
						},
						"Voimassa": {
							"type": "boolean"
						}
					}
				}
			},
			"Tapahtumat": {
				"type": "array",
				"items": {
					"type": "object",
					"properties": {
						"Tapahtuma-aika": {
							"type": "string"
						},
						"Tapahtuma": {
							"type": "string"
						}
					}
				}
			},
			"Viestit": {
				"type": "array",
				"items": {
					"type": "object",
					"properties": {
						"Tapahtuma-aika": {
							"type": "string"
						},
						"Viesti": {
							"type": "string"
						},
						"Viestintatapa": {
							"type": "string",
							"enum": [
								"string",
								"Asiointisovellus",
								"sahkoposti",
								"Muu"
							]
						}
					}
				}
			},
			"Toiminnan tarkoitus": {
				"type": "string"
			},
			"Rekisterinumero": {
				"type": "string"
			},
			"Y-tunnus": {
				"type": "string"
			},
			"Toiminnan tarkoitus Kas": {
				"type": "string"
			},
			"Yhteiso harjoittaa liiketoimintaa": {
				"type": "boolean"
			},
			"Yhteiso harjoittaa liiketoimintaa Kas": {
				"type": "boolean"
			},
			"Maahanmuuttaja yhteiso": {
				"type": "boolean"
			},
			"Syntymavuosi": {
				"type": "string"
			},
			"Puhelinnumero": {
				"type": "string"
			},
			"email": {
				"type": "string"
			},
			"postinumero": {
				"type": "string"
			},
			"postitoimipaikka": {
				"type": "string"
			},
			"Avustuslaji": {
				"type": "array",
				"items": {
					"type": "object",
					"properties": {
						"Avustuslaji": {
							"type": "string",
							"enum": [
								"string",
								"Yleisavustus",
								"Toiminta-avustus",
								"Muu avustus",
								"Projektiavustus",
								"Vuokra-avustus",
								"Korot ja lyhennykset",
								"Muu"
							]
						},
						"Euroa": {
							"type": "string"
						}
					}
				}
			},
			"Avustuslaji Kas": {
				"type": "array",
				"items": {
					"type": "object",
					"properties": {
						"Avustuslaji": {
							"type": "string",
							"enum": [
								"string",
								"Yleisavustus",
								"Toiminta-avustus",
								"Muu avustus",
								"Projektiavustus",
								"Vuokra-avustus",
								"Korot ja lyhennykset",
								"Muu"
							]
						},
						"Ehdotettu avustus euroa": {
							"type": "string"
						},
						"Lyhyt perustelu": {
							"type": "string"
						}
					}
				}
			},
			"Yhteensa": {
				"type": "string"
			},
			"Yhteensa Kas": {
				"type": "string"
			},
			"Haetun avustuksen kayttotarkoitus": {
				"type": "string"
			},
			"Haetun avustuksen kayttotarkoitus Kas": {
				"type": "string"
			},
			"Pitka perustelu": {
				"type": "string"
			},
			"Valmistelijan perustelu": {
				"type": "string"
			},
			"Selvitys edellisen avustuksen kaytosta": {
				"type": "string"
			},
			"Selvitys edellisen avustuksen kaytosta Kas": {
				"type": "string"
			},
			"Muut saadut avustukset": {
				"type": "array",
				"items": {
					"type": "object",
					"properties": {
						"Myontaja": {
							"type": "string"
						},
						"Myontajan nimi": {
							"type": "string"
						},
						"Vuosi": {
							"type": "integer"
						},
						"Euroa": {
							"type": "string"
						},
						"Kayttotarkoitus": {
							"type": "string"
						}
					}
				}
			},
			"Muut saadut avustukset Kas": {
				"type": "array",
				"items": {
					"type": "object",
					"properties": {
						"Myontaja": {
							"type": "string"
						},
						"Myontajan nimi": {
							"type": "string"
						},
						"Vuosi": {
							"type": "integer"
						},
						"Euroa": {
							"type": "string"
						},
						"Kayttotarkoitus": {
							"type": "string"
						}
					}
				}
			},
			"Etuisuudet": {
				"type": "string"
			},
			"Etuisuudet Kas": {
				"type": "string"
			},
			"Kaupungilta saadut lainat ja takaukset": {
				"type": "string"
			},
			"Kaupungilta saadut lainat ja takaukset Kas": {
				"type": "string"
			},
			"Lisatiedot": {
				"type": "string"
			},
			"Lisatiedot Kas": {
				"type": "string"
			},
			"Sukunimi Etunimi": {
				"type": "string"
			},
			"Henkilotunnus kayttajatunnus": {
				"type": "string"
			},
			"Sahkopostiosoite": {
				"type": "string"
			},
			"Tilat": {
				"type": "string"
			},
			"Tilat Kas": {
				"type": "string"
			},
			"Lainat ja saadut takaukset": {
				"type": "string"
			},
			"Lainat ja saadut takaukset Kas": {
				"type": "string"
			},
			"Etunimi": {
				"type": "string"
			},
			"Sukunimi": {
				"type": "string"
			},
			"Tunnus": {
				"type": "string"
			},
			"Kayttajatunnus": {
				"type": "string"
			},
			"Hakemuksen lahettaja sahkoposti": {
				"type": "string"
			},
			"Hakijayhteiso henkilo": {
				"type": "integer"
			},
			"Hakijayhteiso yhteiso": {
				"type": "integer"
			},
			"Hakijayhteiso henkilo helsinki": {
				"type": "integer"
			},
			"Hakijayhteiso yhteiso helsinki": {
				"type": "integer"
			},
			"Alayhdistys henkilo": {
				"type": "integer"
			},
			"Alayhdistys yhteiso": {
				"type": "integer"
			},
			"Alayhdistys henkilo helsinki": {
				"type": "integer"
			},
			"Alayhdistys yhteiso helsinki": {
				"type": "integer"
			},
			"Alaosasto henkilo": {
				"type": "integer"
			},
			"Alaosasto yhteiso": {
				"type": "integer"
			},
			"Alaosasto henkilo helsinki": {
				"type": "integer"
			},
			"Alaosasto yhteiso helsinki": {
				"type": "integer"
			},
			"Jasenmaksun suuruus": {
				"type": "string"
			},
			"Jasenmaksun suuruus helsinki": {
				"type": "string"
			},
			"Henkilojasen euroa": {
				"type": "string"
			},
			"Yhteisojasen euroa": {
				"type": "string"
			}
		}
	}
);