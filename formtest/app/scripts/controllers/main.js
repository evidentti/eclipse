'use strict';

/**
 * @ngdoc function
 * @name formtestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the formtestApp
 */
angular.module('formtestApp')
  .controller('MainCtrl', function () {

    this.schema = {
      "type": "object",
      "properties": {
        "Hakemustyyppi": {
          "type": "string"
        },
        "Saapunut": {
          "type": "string"
        },
        "Päivitetty": {
          "type": "string",
          "format": "date-time"
        },
        "Hakemusnro": {
          "type": "string"
        },
        "Tila": {
          "type": "string",
          "enum": [
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
            "2016",
            "2017",
            "2018",
            "2019"
          ]
        },
        "Toimiala": {
          "type": "string",
          "enum": [
            "Toimiala1",
            "Toimiala2",
            "Toimiala3",
            "Toimiala4"
          ]
        },
        "Palvelualue": {
          "type": "string",
          "enum": [
            "Palvelualue1",
            "Palvelualue2",
            "Palvelualue3",
            "Palvelualue4"
          ]
        },
        "Vastuualue": {
          "type": "string",
          "enum": [
            "Vastuualue1",
            "Vastuualue2",
            "Vastuualue3",
            "Vastuualue4"
          ]
        },
        "Vastuualueen alajako": {
          "type": "string",
          "enum": [
            "Vastuualueen alajako1",
            "Vastuualueen alajako2",
            "Vastuualueen alajako3",
            "Vastuualueen alajako4"
          ]
        },
        "Käsittelijä": {
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
        "Käyttöselvitys tehty Kas": {
          "type": "boolean"
        },
        "Hakijan tyyppi": {
          "type": "string",
          "enum": [
            "Yksityishenkilö",
            "Rekisteröitynyt yhteisö",
            "Rekisteröitymätön työryhmä"
          ]
        },
        "Hakijan tyyppi Kas": {
          "type": "string",
          "enum": [
            "Yksityishenkilö",
            "Rekisteröitynyt yhteisö",
            "Rekisteröitymätön työryhmä"
          ]
        },
        "Hakijan Tunniste Kas": {
          "type": "integer"
        },
        "Yhteisön virallinen nimi": {
          "type": "string"
        },
        "Yhteisön virallinen nimi Kas": {
          "type": "string"
        },
        "Henkilötunnus": {
          "type": "string"
        },
        "Henkilötunnus Kas": {
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
        "Sähköposti": {
          "type": "string"
        },
        "Sähköposti Kas": {
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
        "Yhteyshenkilö": {
          "type": "string"
        },
        "Yhteyshenkilö Kas": {
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
                  "Puheenjohtaja",
                  "Sihteeri",
                  "Yhteyshenkilö",
                  "Muu",
                  "Taloudesta vastaava",
                  "Tilintarkastaja / toiminnantarkastaja",
                  "ATK -kurssivastaava"
                ]
              }
            }
          }
        },
        "Toimihenkilöt": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "Toimihenkilön nimi": {
                "type": "string"
              },
              "Puhelinnumero": {
                "type": "string"
              },
              "Sähköposti": {
                "type": "string"
              },
              "Rooli": {
                "type": "string",
                "enum": [
                  "Puheenjohtaja",
                  "Sihteeri",
                  "Yhteyshenkilö",
                  "Muu",
                  "Taloudesta vastaava",
                  "Tilintarkastaja / toiminnantarkastaja",
                  "ATK -kurssivastaava"
                ]
              }
            }
          }
        },
        "Toimihenkilöt Kas": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "Toimihenkilön nimi": {
                "type": "string"
              },
              "Puhelinnumero": {
                "type": "string"
              },
              "Sähköposti": {
                "type": "string"
              },
              "Rooli": {
                "type": "string",
                "enum": [
                  "Puheenjohtaja",
                  "Sihteeri",
                  "Yhteyshenkilö",
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
              "Viestintätapa": {
                "type": "string",
                "enum": [
                  "Asiointisovellus",
                  "sähköposti",
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
        "Yhteisö harjoittaa liiketoimintaa": {
          "type": "boolean"
        },
        "Yhteisö harjoittaa liiketoimintaa Kas": {
          "type": "boolean"
        },
        "Maahanmuuttaja yhteisö": {
          "type": "boolean"
        },
        "Syntymävuosi": {
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
        "Yhteensä": {
          "type": "string"
        },
        "Yhteensä Kas": {
          "type": "string"
        },
        "Haetun avustuksen käyttötarkoitus": {
          "type": "string"
        },
        "Haetun avustuksen käyttötarkoitus Kas": {
          "type": "string"
        },
        "Pitkä perustelu": {
          "type": "string"
        },
        "Valmistelijan perustelu": {
          "type": "string"
        },
        "Selvitys edellisen avustuksen käytöstä": {
          "type": "string"
        },
        "Selvitys edellisen avustuksen käytöstä Kas": {
          "type": "string"
        },
        "Muut saadut avustukset": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "Myöntäjä": {
                "type": "string"
              },
              "Myöntäjän nimi": {
                "type": "string"
              },
              "Vuosi": {
                "type": "integer"
              },
              "Euroa": {
                "type": "string"
              },
              "Käyttötarkoitus": {
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
              "Myöntäjä": {
                "type": "string"
              },
              "Myöntäjän nimi": {
                "type": "string"
              },
              "Vuosi": {
                "type": "integer"
              },
              "Euroa": {
                "type": "string"
              },
              "Käyttötarkoitus": {
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
        "Lisätiedot": {
          "type": "string"
        },
        "Lisätiedot Kas": {
          "type": "string"
        },
        "Sukunimi Etunimi": {
          "type": "string"
        },
        "Henkilötunnus käyttäjätunnus": {
          "type": "string"
        },
        "Sähköpostiosoite": {
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
        "Käyttäjätunnus": {
          "type": "string"
        },
        "Hakemuksen lähettäjä sähköposti": {
          "type": "string"
        },
        "Hakijayhteisö henkilö": {
          "type": "integer"
        },
        "Hakijayhteisö yhteisö": {
          "type": "integer"
        },
        "Hakijayhteisö henkilö helsinki": {
          "type": "integer"
        },
        "Hakijayhteisö yhteisö helsinki": {
          "type": "integer"
        },
        "Alayhdistys henkilö": {
          "type": "integer"
        },
        "Alayhdistys yhteisö": {
          "type": "integer"
        },
        "Alayhdistys henkilö helsinki": {
          "type": "integer"
        },
        "Alayhdistys yhteisö helsinki": {
          "type": "integer"
        },
        "Alaosasto henkilö": {
          "type": "integer"
        },
        "Alaosasto yhteisö": {
          "type": "integer"
        },
        "Alaosasto henkilö helsinki": {
          "type": "integer"
        },
        "Alaosasto yhteisö helsinki": {
          "type": "integer"
        },
        "Jäsenmaksun suuruus": {
          "type": "string"
        },
        "Jäsenmaksun suuruus helsinki": {
          "type": "string"
        },
        "Henkilöjäsen euroa": {
          "type": "string"
        },
        "Yhteisöjäsen euroa": {
          "type": "string"
        }
      }
    };

    this.uischema = {
      "type": "Categorization",
      "elements": [
        {
          "type": "Category",
          "label": "Hakemuksen päivitystiedot",
          "elements": [
            {
              "type": "Group",
              "label": "Hakemuksen tiedot",
              "elements": [
                {
                  "type": "HorizontalLayout",
                  "elements": [
                    {
                      "type": "Control",
                      "label": "Hakemustyyppi",
                      "scope": {
                        "$ref": "#/properties/Hakemustyyppi"
                      },
                      "readOnly": true
                    }
                  ]
                },
                {
                  "type": "HorizontalLayout",
                  "elements": [
                    {
                      "type": "Control",
                      "label": "Saapunut",
                      "scope": {
                        "$ref": "#/properties/Saapunut"
                      },
                      "readOnly": true
                    },
                    {
                      "type": "Control",
                      "label": "Hakemusnro",
                      "scope": {
                        "$ref": "#/properties/Hakemusnro"
                      },
                      "readOnly": true
                    }
                  ]
                },
                {
                  "type": "HorizontalLayout",
                  "elements": [
                    {
                      "type": "Control",
                      "label": "Päivitetty",
                      "scope": {
                        "$ref": "#/properties/Päivitetty"
                      },
                      "readOnly": true
                    },
                    {
                      "type": "Control",
                      "label": "Hakemuksen tila",
                      "scope": {
                        "$ref": "#/properties/Tila"
                      }
                    }
                  ]
                },
                {
                  "type": "HorizontalLayout",
                  "elements": [
                    {
                      "type": "Control",
                      "label": "Toimiala",
                      "scope": {
                        "$ref": "#/properties/Toimiala"
                      }
                    },
                    {
                      "type": "Control",
                      "label": "Palvelualue",
                      "scope": {
                        "$ref": "#/properties/Palvelualue"
                      }
                    },
                    {
                      "type": "Control",
                      "label": "Vastuualueen alajako",
                      "scope": {
                        "$ref": "#/properties/Vastuualueen alajako"
                      }
                    },
                    {
                      "type": "Control",
                      "label": "Käsittelijä",
                      "scope": {
                        "$ref": "#/properties/Käsittelijä"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "type": "Group",
              "label": "Hakijan perustiedot",
              "elements": [
                {
                  "type": "HorizontalLayout",
                  "elements": [
                    {
                      "type": "VerticalLayout",
                      "elements": [
                        {
                          "type": "Control",
                          "label": "Vuodelle",
                          "scope": {
                            "$ref": "#/properties/Vuodelle"
                          }
                        },
                        {
                          "type": "Control",
                          "label": "Uusi hakija tai ei rekisterinumeroa/Y-tunnus",
                          "scope": {
                            "$ref": "#/properties/Uusi hakija"
                          }
                        },
                        {
                          "type": "Control",
                          "label": "Rekisterinumero",
                          "scope": {
                            "$ref": "#/properties/Rekisterinumero"
                          }
                        },
                        {
                          "type": "Control",
                          "label": "Y-tunnus",
                          "scope": {
                            "$ref": "#/properties/Y-tunnus"
                          }
                        },
                        {
                          "type": "Control",
                          "label": "Yhteison Virallinen Nimi",
                          "scope": {
                            "$ref": "#/properties/Yhteisön virallinen nimi"
                          }
                        },
                        {
                          "type": "Control",
                          "label": "Yhteison Virallinen lyhenne",
                          "scope": {
                            "$ref": "#/properties/Yhteison virallinen lyhenne"
                          }
                        },
                        {
                          "type": "Control",
                          "label": "Rekisteröimispäivä",
                          "scope": {
                            "$ref": "#/properties/Rekisteroimispaiva"
                          }
                        },
                        {
                          "type": "Control",
                          "label": "Perustamisvuosi",
                          "scope": {
                            "$ref": "#/properties/Perustamisvuosi"
                          }
                        },
                        {
                          "type": "Control",
                          "label": "Kotipaikka",
                          "scope": {
                            "$ref": "#/properties/Kotipaikka"
                          }
                        },
                        {
                          "type": "Control",
                          "label": "www-sivut",
                          "scope": {
                            "$ref": "#/properties/www-sivut"
                          }
                        }
                      ]
                    },
                    {
                      "type": "VerticalLayout",
                      "elements": [
                        {
                          "type": "Control",
                          "label": "Valmistelija",
                          "scope": {
                            "$ref": "#/properties/Valmistelija"
                          }
                        },
                        {
                          "type": "Control",
                          "label": "Uusi hakija tai ei rekisterinumeroa/Y-tunnus",
                          "scope": {
                            "$ref": "#/properties/Uusi hakija Kas"
                          }
                        },
                        {
                          "type": "Control",
                          "label": "Rekisterinumero käsittelijä",
                          "scope": {
                            "$ref": "#/properties/Rekisterinumero"
                          }
                        },
                        {
                          "type": "Control",
                          "label": "Y-tunnus käsittelijä",
                          "scope": {
                            "$ref": "#/properties/Y-tunnus"
                          }
                        },
                        {
                          "type": "Control",
                          "label": "Yhteison virallinen nimi käsittelijä",
                          "scope": {
                            "$ref": "#/properties/Yhteisön virallinen nimi Kas"
                          }
                        },
                        {
                          "type": "Control",
                          "label": "Yhteison Virallinen lyhenne käsittelijä",
                          "scope": {
                            "$ref": "#/properties/Yhteison virallinen lyhenne Kas"
                          }
                        },
                        {
                          "type": "Control",
                          "label": "Rekisteröimispäivä käsittelijä",
                          "scope": {
                            "$ref": "#/properties/Rekisteroimispaiva Kas"
                          }
                        },
                        {
                          "type": "Control",
                          "label": "Perustamisvuosi käsittelijä",
                          "scope": {
                            "$ref": "#/properties/Perustamisvuosi Kas"
                          }
                        },
                        {
                          "type": "Control",
                          "label": "Kotipaikka käsittelijä",
                          "scope": {
                            "$ref": "#/properties/Kotipaikka Kas"
                          }
                        },
                        {
                          "type": "Control",
                          "label": "www-sivut käsittelijä",
                          "scope": {
                            "$ref": "#/properties/www-sivut Kas"
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "Group",
              "label": "Osoite",
              "elements": [
                {
                  "type": "HorizontalLayout",
                  "elements": [
                    {
                      "type": "Control",
                      "label": "Osoite",
                      "scope": {
                        "$ref": "#/properties/Osoite"
                      }
                    },
                    {
                      "type": "Control",
                      "label": "Osoite",
                      "scope": {
                        "$ref": "#/properties/Osoite Kas"
                      }
                    }
                  ]
                },
                {
                  "type": "HorizontalLayout",
                  "elements": [
                    {
                      "type": "Control",
                      "label": "Postinumero",
                      "scope": {
                        "$ref": "#/properties/Postinumero"
                      }
                    },
                    {
                      "type": "Control",
                      "label": "Postinumero",
                      "scope": {
                        "$ref": "#/properties/Postinumero Kas"
                      }
                    }
                  ]
                },
                {
                  "type": "HorizontalLayout",
                  "elements": [
                    {
                      "type": "Control",
                      "label": "Postitoimipaikka",
                      "scope": {
                        "$ref": "#/properties/Postitoimipaikka"
                      }
                    },
                    {
                      "type": "Control",
                      "label": "Postitoimipaikka",
                      "scope": {
                        "$ref": "#/properties/Postitoimipaikka Kas"
                      }
                    }
                  ]
                },
                {
                  "type": "HorizontalLayout",
                  "elements": [
                    {
                      "type": "Control",
                      "label": "Yhteyshenkilö",
                      "scope": {
                        "$ref": "#/properties/Yhteyshenkilö"
                      }
                    },
                    {
                      "type": "Control",
                      "label": "Yhteyshenkilö",
                      "scope": {
                        "$ref": "#/properties/Yhteyshenkilö Kas"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "type": "Group",
              "label": "Yhteydenotto",
              "elements": [
                {
                  "type": "HorizontalLayout",
                  "elements": [
                    {
                      "type": "Control",
                      "label": "Sähköposti",
                      "scope": {
                        "$ref": "#/properties/Sähköposti"
                      }
                    },
                    {
                      "type": "Control",
                      "label": "Sähköposti",
                      "scope": {
                        "$ref": "#/properties/Sähköposti Kas"
                      }
                    }
                  ]
                },
                {
                  "type": "VerticalLayout",
                  "elements": [
                    {
                      "type": "VerticalLayout",
                      "elements": [
                        {
                          "type": "Control",
                          "label": "Toimihenkilö",
                          "scope": {
                            "$ref": "#/properties/Toimihenkilöt"
                          }
                        }
                      ]
                    },
                    {
                      "type": "VerticalLayout",
                      "elements": [
                        {
                          "type": "Control",
                          "label": "Toimihenkilö käsittelijä",
                          "scope": {
                            "$ref": "#/properties/Toimihenkilöt Kas"
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "Group",
              "label": "Pankkiyhteys",
              "elements": [
                {
                  "type": "HorizontalLayout",
                  "elements": [
                    {
                      "type": "VerticalLayout",
                      "elements": [
                        {
                          "type": "Control",
                          "label": "Tilinumero",
                          "scope": {
                            "$ref": "#/properties/Tilinumero"
                          }
                        },
                        {
                          "type": "Control",
                          "label": "Tilinomistajan nimi",
                          "scope": {
                            "$ref": "#/properties/Tilinomistajan nimi"
                          }
                        },
                        {
                          "type": "Control",
                          "label": "Henkilötunnus",
                          "scope": {
                            "$ref": "#/properties/Henkilötunnus"
                          }
                        }
                      ]
                    },
                    {
                      "type": "VerticalLayout",
                      "elements": [
                        {
                          "type": "Control",
                          "label": "Tilinumero",
                          "scope": {
                            "$ref": "#/properties/Tilinumero Kas"
                          }
                        },
                        {
                          "type": "Control",
                          "label": "Tilinomistajan nimi",
                          "scope": {
                            "$ref": "#/properties/Tilinomistajan nimi Kas"
                          }
                        },
                        {
                          "type": "Control",
                          "label": "Henkilötunnus",
                          "scope": {
                            "$ref": "#/properties/Henkilötunnus Kas"
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "Group",
              "label": "Haettava avustus",
              "elements": [
                {
                  "type": "VerticalLayout",
                  "elements": [
                    {
                      "type": "VerticalLayout",
                      "elements": [
                        {
                          "type": "Control",
                          "label": "Avustuslaji",
                          "scope": {
                            "$ref": "#/properties/Avustuslaji"
                          }
                        }
                      ]
                    },
                    {
                      "type": "VerticalLayout",
                      "elements": [
                        {
                          "type": "Control",
                          "label": "Avustuslaji käsittelijä",
                          "scope": {
                            "$ref": "#/properties/Avustuslaji Kas"
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "HorizontalLayout",
                  "elements": [
                    {
                      "type": "VerticalLayout",
                      "elements": [
                        {
                          "type": "Control",
                          "label": "Yhteensä",
                          "scope": {
                            "$ref": "#/properties/Yhteensä"
                          }
                        },
                        {
                          "type": "Control",
                          "label": "Haetun avustuksen käyttötarkoitus",
                          "scope": {
                            "$ref": "#/properties/Haetun avustuksen käyttötarkoitus"
                          },
                          "options": {
                            "multi": true
                          }
                        },
                        {
                          "type": "Control",
                          "label": " ",
                          "scope": {
                            "$ref": "#/properties/Blank"
                          }
                        },
                        {
                          "type": "Control",
                          "label": " ",
                          "scope": {
                            "$ref": "#/properties/Blank"
                          }
                        },
                        {
                          "type": "Control",
                          "label": "Selvitys edellisen avustuksen käytöstä",
                          "scope": {
                            "$ref": "#/properties/Selvitys edellisen avustuksen käytöstä"
                          },
                          "options": {
                            "multi": true
                          }
                        }
                      ]
                    },
                    {
                      "type": "VerticalLayout",
                      "elements": [
                        {
                          "type": "Control",
                          "label": "Yhteensä",
                          "scope": {
                            "$ref": "#/properties/Yhteensä Kas"
                          }
                        },
                        {
                          "type": "Control",
                          "label": "Haetun avustuksen käyttötarkoitus",
                          "scope": {
                            "$ref": "#/properties/Haetun avustuksen käyttötarkoitus Kas"
                          },
                          "options": {
                            "multi": true
                          }
                        },
                        {
                          "type": "Control",
                          "label": "Selvitys edellisen avustuksen käytöstä",
                          "scope": {
                            "$ref": "#/properties/Selvitys edellisen avustuksen käytöstä Kas"
                          },
                          "options": {
                            "multi": true
                          }
                        },
                        {
                          "type": "Control",
                          "label": "Pitkä perustelu",
                          "scope": {
                            "$ref": "#/properties/Pitkä perustelu"
                          },
                          "options": {
                            "multi": true
                          }
                        },
                        {
                          "type": "Control",
                          "label": "Valmistelijan perustelu",
                          "scope": {
                            "$ref": "#/properties/Valmistelijan perustelu"
                          },
                          "options": {
                            "multi": true
                          }
                        },
                        {
                          "type": "Control",
                          "label": "Käyttöselvitys tehty",
                          "scope": {
                            "$ref": "#/properties/Käyttöselvitys tehty Kas"
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "Group",
              "label": "Muut saadut avustukset",
              "elements": [
                {
                  "type": "HorizontalLayout",
                  "elements": [
                    {
                      "type": "VerticalLayout",
                      "elements": [
                        {
                          "type": "Control",
                          "label": "Muut saadut avustukset",
                          "scope": {
                            "$ref": "#/properties/Muut saadut avustukset"
                          },
                          "options": {
                            "multi": true
                          }
                        },
                        {
                          "type": "Control",
                          "label": "Muut saadut avustukset",
                          "scope": {
                            "$ref": "#/properties/Muut saadut avustukset Kas"
                          },
                          "options": {
                            "multi": true
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "Group",
              "label": "Etuisuudet kaupungilta saadut",
              "elements": [
                {
                  "type": "VerticalLayout",
                  "elements": [
                    {
                      "type": "HorizontalLayout",
                      "elements": [
                        {
                          "type": "VerticalLayout",
                          "elements": [
                            {
                              "type": "Control",
                              "label": "Tilat",
                              "scope": {
                                "$ref": "#/properties/Tilat"
                              },
                              "options": {
                                "multi": true
                              }
                            },
                            {
                              "type": "Control",
                              "label": "Lainat ja saadut takaukset",
                              "scope": {
                                "$ref": "#/properties/Lainat ja saadut takaukset"
                              },
                              "options": {
                                "multi": true
                              }
                            }
                          ]
                        },
                        {
                          "type": "VerticalLayout",
                          "elements": [
                            {
                              "type": "Control",
                              "label": "Tilat",
                              "scope": {
                                "$ref": "#/properties/Tilat Kas"
                              },
                              "options": {
                                "multi": true
                              }
                            },
                            {
                              "type": "Control",
                              "label": "Lainat ja saadut takaukset",
                              "scope": {
                                "$ref": "#/properties/Lainat ja saadut takaukset Kas"
                              },
                              "options": {
                                "multi": true
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
              "type": "Group",
              "label": "Toiminta",
              "elements": [
                {
                  "type": "HorizontalLayout",
                  "elements": [
                    {
                      "type": "VerticalLayout",
                      "elements": [
                        {
                          "type": "Control",
                          "label": "Toiminnan tarkoitus",
                          "scope": {
                            "$ref": "#/properties/Toiminnan tarkoitus"
                          },
                          "options": {
                            "multi": true
                          }
                        },
                        {
                          "type": "Control",
                          "label": "Yhteisö harjoittaa liiketoimintaa",
                          "scope": {
                            "$ref": "#/properties/Yhteisö harjoittaa liiketoimintaa"
                          }
                        }
                      ]
                    },
                    {
                      "type": "VerticalLayout",
                      "elements": [
                        {
                          "type": "Control",
                          "label": "Toiminnan tarkoitus",
                          "scope": {
                            "$ref": "#/properties/Toiminnan tarkoitus Kas"
                          },
                          "options": {
                            "multi": true
                          }
                        },
                        {
                          "type": "Control",
                          "label": "Yhteisö harjoittaa liiketoimintaa",
                          "scope": {
                            "$ref": "#/properties/Yhteisö harjoittaa liiketoimintaa Kas"
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "Group",
              "label": "Jäsenmäärä ja jäsenmaksut",
              "elements": [
                {
                  "type": "HorizontalLayout",
                  "elements": [
                    {
                      "type": "VerticalLayout",
                      "elements": [
                        {
                          "type": "Control",
                          "label": "Hakijayhteisö: henkilöjäseniä",
                          "scope": {
                            "$ref": "#/properties/Hakijayhteisö henkilö"
                          }
                        }
                      ]
                    },
                    {
                      "type": "VerticalLayout",
                      "elements": [
                        {
                          "type": "Control",
                          "label": "yhteisöjäseniä",
                          "scope": {
                            "$ref": "#/properties/Hakijayhteisö yhteisö"
                          }
                        }
                      ]
                    },
                    {
                      "type": "VerticalLayout",
                      "elements": [
                        {
                          "type": "Control",
                          "label": "Hakijayhteisö: henkilöjäseniä",
                          "scope": {
                            "$ref": "#/properties/Hakijayhteisö henkilö"
                          }
                        }
                      ]
                    },
                    {
                      "type": "VerticalLayout",
                      "elements": [
                        {
                          "type": "Control",
                          "label": "yhteisöjäseniä",
                          "scope": {
                            "$ref": "#/properties/Hakijayhteisö yhteisö"
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "HorizontalLayout",
                  "elements": [
                    {
                      "type": "VerticalLayout",
                      "elements": [
                        {
                          "type": "Control",
                          "label": "Helsinkiläisiä henkilöjäseniä",
                          "scope": {
                            "$ref": "#/properties/Hakijayhteisö henkilö helsinki"
                          }
                        }
                      ]
                    },
                    {
                      "type": "VerticalLayout",
                      "elements": [
                        {
                          "type": "Control",
                          "label": "Helsinkiläisiä yhteisöjäseniä",
                          "scope": {
                            "$ref": "#/properties/Hakijayhteisö yhteisö helsinki"
                          }
                        }
                      ]
                    },
                    {
                      "type": "VerticalLayout",
                      "elements": [
                        {
                          "type": "Control",
                          "label": "Helsinkiläisiä henkilöjäseniä",
                          "scope": {
                            "$ref": "#/properties/Hakijayhteisö henkilö helsinki"
                          }
                        }
                      ]
                    },
                    {
                      "type": "VerticalLayout",
                      "elements": [
                        {
                          "type": "Control",
                          "label": "Helsinkiläisiä yhteisöjäseniä",
                          "scope": {
                            "$ref": "#/properties/Hakijayhteisö yhteisö helsinki"
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "HorizontalLayout",
                  "elements": [
                    {
                      "type": "VerticalLayout",
                      "elements": [
                        {
                          "type": "Control",
                          "label": "Alayhdistys: henkilöjäseniä",
                          "scope": {
                            "$ref": "#/properties/Alayhdistys henkilö"
                          }
                        }
                      ]
                    },
                    {
                      "type": "VerticalLayout",
                      "elements": [
                        {
                          "type": "Control",
                          "label": "yhteisöjäseniä",
                          "scope": {
                            "$ref": "#/properties/Alayhdistys yhteisö"
                          }
                        }
                      ]
                    },
                    {
                      "type": "VerticalLayout",
                      "elements": [
                        {
                          "type": "Control",
                          "label": "Alayhdistys: henkilöjäseniä",
                          "scope": {
                            "$ref": "#/properties/Alayhdistys henkilö"
                          }
                        }
                      ]
                    },
                    {
                      "type": "VerticalLayout",
                      "elements": [
                        {
                          "type": "Control",
                          "label": "yhteisöjäseniä",
                          "scope": {
                            "$ref": "#/properties/Alayhdistys yhteisö"
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "HorizontalLayout",
                  "elements": [
                    {
                      "type": "VerticalLayout",
                      "elements": [
                        {
                          "type": "Control",
                          "label": "Helsinkiläisiä henkilöjäseniä",
                          "scope": {
                            "$ref": "#/properties/Alayhdistys henkilö helsinki"
                          }
                        }
                      ]
                    },
                    {
                      "type": "VerticalLayout",
                      "elements": [
                        {
                          "type": "Control",
                          "label": "Helsinkiläisiä yhteisöjäseniä",
                          "scope": {
                            "$ref": "#/properties/Alayhdistys yhteisö helsinki"
                          }
                        }
                      ]
                    },
                    {
                      "type": "VerticalLayout",
                      "elements": [
                        {
                          "type": "Control",
                          "label": "Helsinkiläisiä henkilöjäseniä",
                          "scope": {
                            "$ref": "#/properties/Alayhdistys henkilö helsinki"
                          }
                        }
                      ]
                    },
                    {
                      "type": "VerticalLayout",
                      "elements": [
                        {
                          "type": "Control",
                          "label": "Helsinkiläisiä yhteisöjäseniä",
                          "scope": {
                            "$ref": "#/properties/Alayhdistys yhteisö helsinki"
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "HorizontalLayout",
                  "elements": [
                    {
                      "type": "VerticalLayout",
                      "elements": [
                        {
                          "type": "Control",
                          "label": "Alaosasto: henkilöjäseniä",
                          "scope": {
                            "$ref": "#/properties/Alaosasto henkilö"
                          }
                        }
                      ]
                    },
                    {
                      "type": "VerticalLayout",
                      "elements": [
                        {
                          "type": "Control",
                          "label": "yhteisöjäseniä",
                          "scope": {
                            "$ref": "#/properties/Alaosasto yhteisö"
                          }
                        }
                      ]
                    },
                    {
                      "type": "VerticalLayout",
                      "elements": [
                        {
                          "type": "Control",
                          "label": "Alaosasto: henkilöjäseniä",
                          "scope": {
                            "$ref": "#/properties/Alaosasto henkilö"
                          }
                        }
                      ]
                    },
                    {
                      "type": "VerticalLayout",
                      "elements": [
                        {
                          "type": "Control",
                          "label": "yhteisöjäseniä",
                          "scope": {
                            "$ref": "#/properties/Alaosasto yhteisö"
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "HorizontalLayout",
                  "elements": [
                    {
                      "type": "VerticalLayout",
                      "elements": [
                        {
                          "type": "Control",
                          "label": "Helsinkiläisiä henkilöjäseniä",
                          "scope": {
                            "$ref": "#/properties/Alaosasto henkilö helsinki"
                          }
                        }
                      ]
                    },
                    {
                      "type": "VerticalLayout",
                      "elements": [
                        {
                          "type": "Control",
                          "label": "Helsinkiläisiä yhteisöjäseniä",
                          "scope": {
                            "$ref": "#/properties/Alaosasto yhteisö helsinki"
                          }
                        }
                      ]
                    },
                    {
                      "type": "VerticalLayout",
                      "elements": [
                        {
                          "type": "Control",
                          "label": "Helsinkiläisiä henkilöjäseniä",
                          "scope": {
                            "$ref": "#/properties/Alaosasto henkilö helsinki"
                          }
                        }
                      ]
                    },
                    {
                      "type": "VerticalLayout",
                      "elements": [
                        {
                          "type": "Control",
                          "label": "Helsinkiläisiä yhteisöjäseniä",
                          "scope": {
                            "$ref": "#/properties/Alaosasto yhteisö helsinki"
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "HorizontalLayout",
                  "elements": [
                    {
                      "type": "HorizontalLayout",
                      "elements": [
                        {
                          "type": "Control",
                          "label": "Jäsenmaksun suuruus: Henkilöjäsen euroa",
                          "scope": {
                            "$ref": "#/properties/Henkilöjäsen euroa"
                          }
                        },
                        {
                          "type": "Control",
                          "label": "Jäsenmaksun suuruus: Yhteisöjäsen euroa",
                          "scope": {
                            "$ref": "#/properties/Yhteisöjäsen euroa"
                          }
                        },
                        {
                          "type": "Control",
                          "label": "Jäsenmaksun suuruus: Henkilöjäsen euroa",
                          "scope": {
                            "$ref": "#/properties/Henkilöjäsen euroa"
                          }
                        },
                        {
                          "type": "Control",
                          "label": "Jäsenmaksun suuruus: Yhteisöjäsen euroa",
                          "scope": {
                            "$ref": "#/properties/Yhteisöjäsen euroa"
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "Group",
              "label": "Lisätiedot",
              "elements": [
                {
                  "type": "HorizontalLayout",
                  "elements": [
                    {
                      "type": "VerticalLayout",
                      "elements": [
                        {
                          "type": "Control",
                          "label": "Lisätiedot",
                          "scope": {
                            "$ref": "#/properties/Lisätiedot"
                          },
                          "options": {
                            "multi": true
                          }
                        }
                      ]
                    },
                    {
                      "type": "VerticalLayout",
                      "elements": [
                        {
                          "type": "Control",
                          "label": "Lisätiedot",
                          "scope": {
                            "$ref": "#/properties/Lisätiedot Kas"
                          },
                          "options": {
                            "multi": true
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "Group",
              "label": "Hakemuksen lähettäjä",
              "elements": [
                {
                  "type": "HorizontalLayout",
                  "elements": [
                    {
                      "type": "VerticalLayout",
                      "elements": [
                        {
                          "type": "Control",
                          "label": "Sukunimi",
                          "scope": {
                            "$ref": "#/properties/Sukunimi"
                          },
                          "readOnly": true
                        }
                      ]
                    },
                    {
                      "type": "VerticalLayout",
                      "elements": [
                        {
                          "type": "Control",
                          "label": "Etunimi",
                          "scope": {
                            "$ref": "#/properties/Etunimi"
                          },
                          "readOnly": true
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "HorizontalLayout",
                  "elements": [
                    {
                      "type": "VerticalLayout",
                      "elements": [
                        {
                          "type": "Control",
                          "label": "Tunnus",
                          "scope": {
                            "$ref": "#/properties/Tunnus"
                          },
                          "readOnly": true
                        }
                      ]
                    },
                    {
                      "type": "VerticalLayout",
                      "elements": [
                        {
                          "type": "Control",
                          "label": "Käyttäjätunnus",
                          "scope": {
                            "$ref": "#/properties/Käyttäjätunnus"
                          },
                          "readOnly": true
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "HorizontalLayout",
                  "elements": [
                    {
                      "type": "VerticalLayout",
                      "elements": [
                        {
                          "type": "Control",
                          "label": "Sähköposti",
                          "scope": {
                            "$ref": "#/properties/Hakemuksen lähettäjä sähköposti"
                          },
                          "readOnly": true
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
          "type": "Category",
          "label": "Hakijan tiedot",
          "elements": [
            {
              "type": "Group",
              "label": "Hakijan perustiedot",
              "elements": [
                {
                  "type": "VerticalLayout",
                  "elements": [
                    {
                      "type": "Control",
                      "label": "Hakijan tyyppi",
                      "scope": {
                        "$ref": "#/properties/Hakijan tyyppi"
                      }
                    },
                    {
                      "type": "Control",
                      "label": "Rekisterinumero",
                      "scope": {
                        "$ref": "#/properties/Rekisterinumero"
                      }
                    },
                    {
                      "type": "Control",
                      "label": "Y-tunnus",
                      "scope": {
                        "$ref": "#/properties/Y-tunnus"
                      }
                    },
                    {
                      "type": "Control",
                      "label": "Yhteisön virallinen nimi",
                      "scope": {
                        "$ref": "#/properties/Yhteisön virallinen nimi"
                      }
                    },
                    {
                      "type": "Control",
                      "label": "Yhteison virallinen lyhenne",
                      "scope": {
                        "$ref": "#/properties/Yhteison virallinen lyhenne"
                      }
                    },
                    {
                      "type": "Control",
                      "label": "Rekisteröimispäivä",
                      "scope": {
                        "$ref": "#/properties/Rekisteroimispaiva"
                      }
                    },
                    {
                      "type": "Control",
                      "label": "Perustamisvuosi",
                      "scope": {
                        "$ref": "#/properties/Perustamisvuosi"
                      }
                    },
                    {
                      "type": "Control",
                      "label": "Kotipaikka",
                      "scope": {
                        "$ref": "#/properties/Kotipaikka"
                      }
                    },
                    {
                      "type": "Control",
                      "label": "Maahanmuuttaja yhteisö",
                      "scope": {
                        "$ref": "#/properties/Maahanmuuttaja yhteisö"
                      }
                    },
                    {
                      "type": "Control",
                      "label": "Syntymävuosi",
                      "scope": {
                        "$ref": "#/properties/Syntymävuosi"
                      }
                    },
                    {
                      "type": "Control",
                      "label": "Puhelin",
                      "scope": {
                        "$ref": "#/properties/Puhelinnumero"
                      }
                    },
                    {
                      "type": "Control",
                      "label": "Puhelin virka-aikana",
                      "scope": {
                        "$ref": "#/properties/Puhelinnumero"
                      }
                    },
                    {
                      "type": "Control",
                      "label": "Email",
                      "scope": {
                        "$ref": "#/properties/email"
                      }
                    },
                    {
                      "type": "Control",
                      "label": "www-sivut",
                      "scope": {
                        "$ref": "#/properties/www-sivut"
                      }
                    },
                    {
                      "type": "Control",
                      "label": "Osoitteet",
                      "scope": {
                        "$ref": "#/properties/Osoite taulukko"
                      }
                    },
                    {
                      "type": "Control",
                      "label": "Toimihenkilöt",
                      "scope": {
                        "$ref": "#/properties/Toimihenkilöt"
                      }
                    },
                    {
                      "type": "Control",
                      "label": "Pankkitili",
                      "scope": {
                        "$ref": "#/properties/Pankkitili"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "Category",
          "label": "Asian tapahtumat",
          "elements": [
            {
              "type": "Group",
              "label": "Tapahtumat",
              "elements": [
                {
                  "type": "VerticalLayout",
                  "elements": [
                    {
                      "type": "Control",
                      "label": "Tapahtuma",
                      "scope": {
                        "$ref": "#/properties/Tapahtumat"
                      },
                      "readOnly": true
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "Category",
          "label": "Viestintä",
          "elements": [
            {
              "type": "Group",
              "label": "Tapahtumat",
              "elements": [
                {
                  "type": "VerticalLayout",
                  "elements": [
                    {
                      "type": "Control",
                      "label": "Viesti",
                      "scope": {
                        "$ref": "#/properties/Viestit"
                      },
                      "readOnly": true
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    };

    this.getData = {
      "Haetun avustuksen käyttötarkoitus": "Kirjoita lyhyesti erittely haettavan avustuksen käyttötarkoituksesta",
      "Toimihenkilöt Kas": [
        {
          "Sähköposti": "sposti@sposti.fi",
          "Toimihenkilön nimi": "testi1",
          "Puhelinnumero": "09-83948329",
          "Rooli": "Yhteyshenkilö"
        },
        {
          "Sähköposti": "sposti@sposti.fi",
          "Toimihenkilön nimi": "testi2",
          "Puhelinnumero": "09-6787878",
          "Rooli": "Taloudesta vastaava"
        }
      ],
      "Sukunimi": "Meikäläinen",
      "Lisätiedot Kas": "",
      "Postinumero": "00200",
      "Tilat Kas": "Etuisuudet ",
      "Alayhdistys henkilö helsinki": 21,
      "Hakijayhteisö yhteisö": 1,
      "Postitoimipaikka": "Helsinki",
      "Tilinumero Kas": "FI1840551010234569",
      "Lainat ja saadut takaukset Kas": "Kaupungilta saadut laiat ja/tai etuisuudet",
      "Toimiala": "Toimiala1",
      "Hakemustyyppi": "Kaupunginkanslia: yleisavustushakemus",
      "Avustuslaji Kas": [
        {
          "Avustuslaji": "Toiminta-avustus",
          "Ehdotettu avustus euroa": "5800.0"
        }
      ],
      "Selvitys edellisen avustuksen käytöstä Kas": "Kirjoita selvitys Helsingin kaupungilta saadun edellisen avustuksen käytöstä, sillä uutta avustusta ei makseta mikäli selvitystä ei anneta.",
      "Perustamisvuosi Kas": 2017,
      "Henkilötunnus Kas": "Tietoja ei saatavilla",
      "Saapunut": "14.06.2017 13:21:53",
      "Alayhdistys yhteisö helsinki": 1,
      "Yhteensä": 5800,
      "Valmistelija": "Joku valmistelija",
      "Haetun avustuksen käyttötarkoitus Kas": "Kirjoita lyhyesti erittely haettavan avustuksen käyttötarkoituksesta",
      "Etunimi": "Matti",
      "Postinumero Kas": "00200",
      "Kotipaikka": "Helsinki",
      "Rekisteroimispaiva": "01.01.2017",
      "Rekisterinumero": "336.316",
      "Postitoimipaikka Kas": "Helsinki",
      "Toiminnan tarkoitus": "Kirjoita lyhyesti yhteisön toiminnan tarkoitus",
      "Yhteisön virallinen nimi": "Lauttasaaren seniorit ry",
      "Yhteisöjäsen euroa": 5,
      "Alayhdistys yhteisö": 2,
      "Alaosasto yhteisö": 3,
      "Hakijayhteisö henkilö": 12,
      "Yhteensä Kas": 5800,
      "Viestit": [
        {
          "Viesti": "My test",
          "Viestintätapa": "Asiointisovellus",
          "Tapahtuma-aika": "05.07.2017"
        },
        {
          "Viestintätapa": "Asiointisovellus",
          "Viesti": "My test",
          "Tapahtuma-aika": "05.07.2017"
        }
      ],
      "Kotipaikka Kas": "Helsinki",
      "Yhteyshenkilö": "Sirpa Suomi",
      "Vastuualueen alajako": "Vastuualueen alajako1",
      "Muut saadut avustukset": [
        {
          "Euroa": "6.0",
          "Vuosi": 2017,
          "Myöntäjän nimi": "Valtio ",
          "Käyttötarkoitus": "Käyttötarkoitus",
          "Myöntäjä": "Myöntäjän nimi"
        }
      ],
      "Rekisteroimispaiva Kas": "01.01.2017",
      "Yhteison virallinen lyhenne": "yleishyötyä ikääntyville",
      "Rekisterinumero Kas": "336.316",
      "Toiminnan tarkoitus Kas": "Kirjoita lyhyesti yhteisön toiminnan tarkoitus",
      "Yhteisön virallinen nimi Kas": "Lauttasaaren seniorit ry",
      "Alaosasto henkilö helsinki": 32,
      "Sähköposti": "sirpa.suomi@lls.fi",
      "www-sivut": "lss.fi",
      "Tila": "Vastaanotettu",
      "Yhteisö harjoittaa liiketoimintaa": false,
      "Osoite": "Melkonkatu 55",
      "Hakijayhteisö henkilö helsinki": 12,
      "Tilinomistajan nimi": "Tietoja ei saatavilla",
      "Hakemuksen lähettäjä sähköposti": "testi@hel.fiii",
      "Y-tunnus": "5422127-1",
      "Vuodelle": "2017",
      "Alaosasto yhteisö helsinki": 3,
      "Yhteyshenkilö Kas": "Sirpa Suomi",
      "Hakijayhteisö yhteisö helsinki": 1,
      "Henkilöjäsen euroa": 4,
      "Käyttäjätunnus": "SAtesti6",
      "Alayhdistys henkilö": 22,
      "Yhteison virallinen lyhenne Kas": "yleishyötyä ikääntyville",
      "Muut saadut avustukset Kas": [
        {
          "Euroa": "6.0",
          "Vuosi": 2017,
          "Myöntäjän nimi": "Valtio ",
          "Käyttötarkoitus": "Käyttötarkoitus",
          "Myöntäjä": "Myöntäjän nimi"
        }
      ],
      "Alaosasto henkilö": 33,
      "Sähköposti Kas": "sirpa.suomi@lls.fi",
      "Toimihenkilöt": [
        {
          "Sähköposti": "sposti@sposti.fi",
          "Toimihenkilön nimi": "testi1",
          "Puhelinnumero": "09-83948329",
          "Rooli": "Yhteyshenkilö"
        },
        {
          "Sähköposti": "sposti@sposti.fi",
          "Toimihenkilön nimi": "testi2",
          "Puhelinnumero": "09-6787878",
          "Rooli": "Taloudesta vastaava"
        }
      ],
      "www-sivut Kas": "lss.fi",
      "Lisätiedot": "",
      "Yhteisö harjoittaa liiketoimintaa Kas": false,
      "Tilat": "Etuisuudet ",
      "Osoite Kas": "Melkonkatu 55",
      "Käsittelijä": "Joku käsittelijä",
      "Tilinomistajan nimi Kas": "Tietoja ei saatavilla",
      "Tilinumero": "FI1840551010234569",
      "Palvelualue": "Palvelualue1",
      "Lainat ja saadut takaukset": "Kaupungilta saadut laiat ja/tai etuisuudet",
      "Y-tunnus Kas": "5422127-1",
      "Vuodelle Kas": "2017",
      "Avustuslaji": [
        {
          "Avustuslaji": "Toiminta-avustus",
          "Euroa": "5800.0"
        }
      ],
      "Hakemusnro": "44487_1",
      "Selvitys edellisen avustuksen käytöstä": "Kirjoita selvitys Helsingin kaupungilta saadun edellisen avustuksen käytöstä, sillä uutta avustusta ei makseta mikäli selvitystä ei anneta.",
      "Perustamisvuosi": 2017,
      "Henkilötunnus": "Tietoja ei saatavilla",
      "Tunnus": "040170-123D"
    };

    // this.schema = {
    //   'type': 'object',
    //   'properties': {
    //     'name': {
    //       'type': 'string'
    //     },
    //     'vegetarian': {
    //       'type': 'boolean'
    //     },
    //     'birthDate': {
    //       'type': 'string',
    //       'format': 'date'
    //     },
    //     'nationality': {
    //       'type': 'string',
    //       'enum': [
    //         'DE',
    //         'IT',
    //         'JP',
    //         'US',
    //         'RU',
    //         'Other'
    //       ]
    //     }
    //   }
    // };

    // this.uischema = {
    //   'type': 'Categorization',
    //   'elements': [
    //     {
    //       'type': 'Categorization',
    //       'label': 'Sub',
    //       'elements': [
    //         {
    //           'type': 'Category',
    //           'label': 'SubPrivate',
    //           'elements': [
    //             {
    //               'type': 'Control',
    //               'scope': {
    //                 '$ref': '#/properties/name'
    //               }
    //             }
    //           ]
    //         },
    //         {
    //           'type': 'Category',
    //           'label': 'Additional',
    //           'elements': [
    //             {
    //               'type': 'Control',
    //               'scope': {
    //                 '$ref': '#/properties/nationality'
    //               }
    //             },
    //             {
    //               'type': 'Control',
    //               'scope': {
    //                 '$ref': '#/properties/vegetarian'
    //               }
    //             }
    //           ]
    //         }
    //       ]
    //     },
    //     {
    //       'type': 'Category',
    //       'label': 'Private',
    //       'elements': [
    //         {
    //           'type': 'Control',
    //           'scope': {
    //             '$ref': '#/properties/name'
    //           }
    //         },
    //         {
    //           'type': 'Control',
    //           'scope': {
    //             '$ref': '#/properties/birthDate'
    //           }
    //         }
    //       ]
    //     },
    //     {
    //       'type': 'Category',
    //       'label': 'Additional',
    //       'elements': [
    //         {
    //           'type': 'Control',
    //           'scope': {
    //             '$ref': '#/properties/birthDate'
    //           }
    //         },
    //         {
    //           'type': 'Control',
    //           'scope': {
    //             '$ref': '#/properties/vegetarian'
    //           }
    //         }
    //       ]
    //     }
    //   ]
    // };
    
    // this.getData = {
    //   'name': 'John Doe',
    //   'vegetarian': false,
    //   'birthDate': '1985-06-02',
    //   'nationality': 'DE'
    // };

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
