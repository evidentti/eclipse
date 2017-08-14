angular.module('demoApp').value('Schema',
	{
		'type' : 'object',
		'properties' : {
			'Hakemustyyppi' : {
				'type' : 'string'
			},
			'Saapunut' : {
				'type' : 'string'
			},
			'Päivitetty' : {
				'type' : 'string',
				'format' : 'date-time'
			},
			'Hakemusnro' : {
				'type' : 'string'
			},
			'Tila' : {
				'type' : 'string',
				'enum' : [
					'Vastaanotettu',
					'Avustusvalmistelussa',
					'Esitysvalmistelu'
				]
			},
			'Vuodelle' : {
				'type' : 'string'
			},
			'Vuodelle Kas' : {
				'type' : 'string',
				'enum' : [
					'2016',
					'2017',
					'2018',
					'2019'
				]
			},
			'Toimiala' : {
				'type' : 'string',
				'enum' : [
					'Toimiala1',
					'Toimiala2',
					'Toimiala3',
					'Toimiala4'
				]
			},
			'Palvelualue' : {
				'type' : 'string',
				'enum' : [
					'Palvelualue1',
					'Palvelualue2',
					'Palvelualue3',
					'Palvelualue4'
				]
			},
			'Vastuualue' : {
				'type' : 'string',
				'enum' : [
					'Vastuualue1',
					'Vastuualue2',
					'Vastuualue3',
					'Vastuualue4'
				]
			},
			'Vastuualueen alajako' : {
				'type' : 'string',
				'enum' : [
					'Vastuualueen alajako1',
					'Vastuualueen alajako2',
					'Vastuualueen alajako3',
					'Vastuualueen alajako4'
				]
			},
			'Käsittelijä' : {
				'type' : 'string'
			},
			'Valmistelija' : {
				'type' : 'string'
			},
			'Hakijan Tunniste' : {
				'type' : 'integer'
			},
			'Uusi hakija' : {
				'type' : 'boolean'
			},
			'Uusi hakija Kas' : {
				'type' : 'boolean'
			},
			'Käyttöselvitys tehty Kas' : {
				'type' : 'boolean'
			},
			'Hakijan tyyppi' : {
				'type' : 'string',
				'enum' : [
					'Yksityishenkilö',
					'Rekisteröitynyt yhteisö',
					'Rekisteröitymätön työryhmä'
				]
			},
			'Hakijan tyyppi Kas' : {
				'type' : 'string',
				'enum' : [
					'Yksityishenkilö',
					'Rekisteröitynyt yhteisö',
					'Rekisteröitymätön työryhmä'
				]
			},
			'Hakijan Tunniste Kas' : {
				'type' : 'integer'
			},
			'Yhteisön virallinen nimi' : {
				'type' : 'string'
			},
			'Yhteisön virallinen nimi Kas' : {
				'type' : 'string'
			},
			'Henkilötunnus' : {
				'type' : 'string'
			},
			'Henkilötunnus Kas' : {
				'type' : 'string'
			},
			'Yhteison virallinen lyhenne' : {
				'type' : 'string'
			},
			'Yhteison virallinen lyhenne Kas' : {
				'type' : 'string'
			},
			'Rekisteroimispaiva' : {
				'type' : 'string'
			},
			'Rekisteroimispaiva Kas' : {
				'type' : 'string'
			},
			'Perustamisvuosi' : {
				'type' : 'string'
			},
			'Perustamisvuosi Kas' : {
				'type' : 'string'
			},
			'Kotipaikka' : {
				'type' : 'string'
			},
			'Kotipaikka Kas' : {
				'type' : 'string'
			},
			'www-sivut' : {
				'type' : 'string'
			},
			'www-sivut Kas' : {
				'type' : 'string'
			},
			'Osoite' : {
				'type' : 'string'
			},
			'Osoite Kas' : {
				'type' : 'string'
			},
			'Postinumero ja -toimipaikka' : {
				'type' : 'string'
			},
			'Postinumero ja -toimipaikka Kas' : {
				'type' : 'string'
			},
			'Vastaanottaja' : {
				'type' : 'string'
			},
			'Vastaanottaja Kas' : {
				'type' : 'string'
			},
			'Sähköposti' : {
				'type' : 'string'
			},
			'Sähköposti Kas' : {
				'type' : 'string'
			},
			'Postinumero' : {
				'type' : 'string'
			},
			'Postitoimipaikka' : {
				'type' : 'string'
			},
			'Postinumero Kas' : {
				'type' : 'string'
			},
			'Postitoimipaikka Kas' : {
				'type' : 'string'
			},
			'Yhteyshenkilö' : {
				'type' : 'string'
			},
			'Yhteyshenkilö Kas' : {
				'type' : 'string'
			},
			'Tilinumero' : {
				'type' : 'string'
			},
			'Tilinumero Kas' : {
				'type' : 'string'
			},
			'Tilinomistajan nimi' : {
				'type' : 'string'
			},
			'Tilinomistajan nimi Kas' : {
				'type' : 'string'
			},
			'Osoite taulukko' : {
				'type' : 'array',
				'items' : {
					'type' : 'object',
					'properties' : {
						'Osoite' : {
							'type' : 'string'
						},
						'Postinumero' : {
							'type' : 'string'
						},
						'Postitoimipaikka' : {
							'type' : 'string'
						},
						'Vastaanottaja' : {
							'type' : 'string',
							'enum' : [
								'Puheenjohtaja',
								'Sihteeri',
								'Yhteyshenkilö',
								'Muu',
								'Taloudesta vastaava',
								'Tilintarkastaja / toiminnantarkastaja',
								'ATK -kurssivastaava'
							]
						}
					}
				}
			},
			'Toimihenkilöt' : {
				'type' : 'array',
				'items' : {
					'type' : 'object',
					'properties' : {
						'Toimihenkilön nimi' : {
							'type' : 'string'
						},
						'Puhelinnumero' : {
							'type' : 'string'
						},
						'Sähköposti' : {
							'type' : 'string'
						},
						'Rooli' : {
							'type' : 'string',
							'enum' : [
								'Puheenjohtaja',
								'Sihteeri',
								'Yhteyshenkilö',
								'Muu',
								'Taloudesta vastaava',
								'Tilintarkastaja / toiminnantarkastaja',
								'ATK -kurssivastaava'
							]
						}
					}
				}
			},
			'Toimihenkilöt Kas' : {
				'type' : 'array',
				'items' : {
					'type' : 'object',
					'properties' : {
						'Toimihenkilön nimi' : {
							'type' : 'string'
						},
						'Puhelinnumero' : {
							'type' : 'string'
						},
						'Sähköposti' : {
							'type' : 'string'
						},
						'Rooli' : {
							'type' : 'string',
							'enum' : [
								'Puheenjohtaja',
								'Sihteeri',
								'Yhteyshenkilö',
								'Muu',
								'Taloudesta vastaava',
								'Tilintarkastaja / toiminnantarkastaja',
								'ATK -kurssivastaava'
							]
						}
					}
				}
			},
			'Pankkitili' : {
				'type' : 'array',
				'items' : {
					'type' : 'object',
					'properties' : {
						'Pankkitili' : {
							'type' : 'string'
						},
						'Voimassa' : {
							'type' : 'boolean'
						}
					}
				}
			},
			'Pankkitili Kas' : {
				'type' : 'array',
				'items' : {
					'type' : 'object',
					'properties' : {
						'Pankkitili' : {
							'type' : 'string'
						},
						'Voimassa' : {
							'type' : 'boolean'
						}
					}
				}
			},
			'Tapahtumat' : {
				'type' : 'array',
				'items' : {
					'type' : 'object',
					'properties' : {
						'Tapahtuma-aika' : {
							'type' : 'string'
						},
						'Tapahtuma' : {
							'type' : 'string'
						}
					}
				}
			},
			'Viestit' : {
				'type' : 'array',
				'items' : {
					'type' : 'object',
					'properties' : {
						'Tapahtuma-aika' : {
							'type' : 'string'
						},
						'Viesti' : {
							'type' : 'string'
						},
						'Viestintätapa' : {
							'type' : 'string',
							'enum' : [
								'Asiointisovellus',
								'sähköposti',
								'Muu'
							]
						}
					}
				}
			},
			'Toiminnan tarkoitus' : {
				'type' : 'string'
			},
			'Rekisterinumero' : {
				'type' : 'string'
			},
			'Y-tunnus' : {
				'type' : 'string'
			},
			'Toiminnan tarkoitus Kas' : {
				'type' : 'string'
			},
			'Yhteisö harjoittaa liiketoimintaa' : {
				'type' : 'boolean'
			},
			'Yhteisö harjoittaa liiketoimintaa Kas' : {
				'type' : 'boolean'
			},
			'Maahanmuuttaja yhteisö' : {
				'type' : 'boolean'
			},
			'Syntymävuosi' : {
				'type' : 'string'
			},
			'Puhelinnumero' : {
				'type' : 'string'
			},
			'email' : {
				'type' : 'string'
			},
			'postinumero' : {
				'type' : 'string'
			},
			'postitoimipaikka' : {
				'type' : 'string'
			},
			'Avustuslaji' : {
				'type' : 'array',
				'items' : {
					'type' : 'object',
					'properties' : {
						'Avustuslaji' : {
							'type' : 'string',
							'enum' : [
								'Yleisavustus',
								'Toiminta-avustus',
								'Muu avustus',
								'Projektiavustus',
								'Vuokra-avustus',
								'Korot ja lyhennykset',
								'Muu'
							]
						},
						'Euroa' : {
							'type' : 'string'
						}
					}
				}
			},
			'Avustuslaji Kas' : {
				'type' : 'array',
				'items' : {
					'type' : 'object',
					'properties' : {
						'Avustuslaji' : {
							'type' : 'string',
							'enum' : [
								'Yleisavustus',
								'Toiminta-avustus',
								'Muu avustus',
								'Projektiavustus',
								'Vuokra-avustus',
								'Korot ja lyhennykset',
								'Muu'
							]
						},
						'Ehdotettu avustus euroa' : {
							'type' : 'string'
						},
						'Lyhyt perustelu' : {
							'type' : 'string'
						}
					}
				}
			},
			'Yhteensä' : {
				'type' : 'string'
			},
			'Yhteensä Kas' : {
				'type' : 'string'
			},
			'Haetun avustuksen käyttötarkoitus' : {
				'type' : 'string'
			},
			'Haetun avustuksen käyttötarkoitus Kas' : {
				'type' : 'string'
			},
			'Pitkä perustelu' : {
				'type' : 'string'
			},
			'Valmistelijan perustelu' : {
				'type' : 'string'
			},
			'Selvitys edellisen avustuksen käytöstä' : {
				'type' : 'string'
			},
			'Selvitys edellisen avustuksen käytöstä Kas' : {
				'type' : 'string'
			},
			'Muut saadut avustukset' : {
				'type' : 'array',
				'items' : {
					'type' : 'object',
					'properties' : {
						'Myöntäjä' : {
							'type' : 'string'
						},
						'Myöntäjän nimi' : {
							'type' : 'string'
						},
						'Vuosi' : {
							'type' : 'integer'
						},
						'Euroa' : {
							'type' : 'string'
						},
						'Käyttötarkoitus' : {
							'type' : 'string'
						}
					}
				}
			},
			'Muut saadut avustukset Kas' : {
				'type' : 'array',
				'items' : {
					'type' : 'object',
					'properties' : {
						'Myöntäjä' : {
							'type' : 'string'
						},
						'Myöntäjän nimi' : {
							'type' : 'string'
						},
						'Vuosi' : {
							'type' : 'integer'
						},
						'Euroa' : {
							'type' : 'string'
						},
						'Käyttötarkoitus' : {
							'type' : 'string'
						}
					}
				}
			},
			'Etuisuudet' : {
				'type' : 'string'
			},
			'Etuisuudet Kas' : {
				'type' : 'string'
			},
			'Kaupungilta saadut lainat ja takaukset' : {
				'type' : 'string'
			},
			'Kaupungilta saadut lainat ja takaukset Kas' : {
				'type' : 'string'
			},
			'Lisätiedot' : {
				'type' : 'string'
			},
			'Lisätiedot Kas' : {
				'type' : 'string'
			},
			'Sukunimi Etunimi' : {
				'type' : 'string'
			},
			'Henkilötunnus käyttäjätunnus' : {
				'type' : 'string'
			},
			'Sähköpostiosoite' : {
				'type' : 'string'
			},
			'Tilat' : {
				'type' : 'string'
			},
			'Tilat Kas' : {
				'type' : 'string'
			},
			'Lainat ja saadut takaukset' : {
				'type' : 'string'
			},
			'Lainat ja saadut takaukset Kas' : {
				'type' : 'string'
			},
			'Etunimi' : {
				'type' : 'string'
			},
			'Sukunimi' : {
				'type' : 'string'
			},
			'Tunnus' : {
				'type' : 'string'
			},
			'Käyttäjätunnus' : {
				'type' : 'string'
			},
			'Hakemuksen lähettäjä sähköposti' : {
				'type' : 'string'
			},
			'Hakijayhteisö henkilö' : {
				'type' : 'integer'
			},
			'Hakijayhteisö yhteisö' : {
				'type' : 'integer'
			},
			'Hakijayhteisö henkilö helsinki' : {
				'type' : 'integer'
			},
			'Hakijayhteisö yhteisö helsinki' : {
				'type' : 'integer'
			},
			'Alayhdistys henkilö' : {
				'type' : 'integer'
			},
			'Alayhdistys yhteisö' : {
				'type' : 'integer'
			},
			'Alayhdistys henkilö helsinki' : {
				'type' : 'integer'
			},
			'Alayhdistys yhteisö helsinki' : {
				'type' : 'integer'
			},
			'Alaosasto henkilö' : {
				'type' : 'integer'
			},
			'Alaosasto yhteisö' : {
				'type' : 'integer'
			},
			'Alaosasto henkilö helsinki' : {
				'type' : 'integer'
			},
			'Alaosasto yhteisö helsinki' : {
				'type' : 'integer'
			},
			'Jäsenmaksun suuruus' : {
				'type' : 'string'
			},
			'Jäsenmaksun suuruus helsinki' : {
				'type' : 'string'
			},
			'Henkilöjäsen euroa' : {
				'type' : 'string'
			},
			'Yhteisöjäsen euroa' : {
				'type' : 'string'
			}
		}
	}
);