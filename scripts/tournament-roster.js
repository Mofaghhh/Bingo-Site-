(function () {
	'use strict';

	// Official Tournament Participants (Registered Players & Pairings)
	var TOURNAMENT_ROSTER = [
	{
		"seed": 1,
		"nick": "berlair_",
		"tg": "berlair",
		"opponent": "_Klim4ek_",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 2,
		"nick": "_Klim4ek_",
		"tg": "Klim4ek",
		"opponent": "berlair_",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 3,
		"nick": "localchef228",
		"tg": "localchef",
		"opponent": "Cherrytigggo",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 4,
		"nick": "Cherrytigggo",
		"tg": "CherryTiggo",
		"opponent": "localchef228",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 5,
		"nick": "DR_Coldness",
		"tg": "Coldness Glac",
		"opponent": "justatea0",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 6,
		"nick": "justatea0",
		"tg": "justatea0",
		"opponent": "DR_Coldness",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 7,
		"nick": "SirRomawka",
		"tg": "Romashka Shagov",
		"opponent": "K1r1toe",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 8,
		"nick": "K1r1toe",
		"tg": "K1r1toe",
		"opponent": "SirRomawka",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 9,
		"nick": "GoverNed_",
		"tg": "Кирилл ГоверНедовский",
		"opponent": "Fowr0",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 10,
		"nick": "Fowr0",
		"tg": "Фовр",
		"opponent": "GoverNed_",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 11,
		"nick": "EmelyaX3",
		"tg": "3Корочки",
		"opponent": "Komimir0__",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 12,
		"nick": "Komimir0__",
		"tg": "Komimir",
		"opponent": "EmelyaX3",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 13,
		"nick": "yanechernay",
		"tg": "чоо черняй",
		"opponent": "Kvvait",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 14,
		"nick": "Kvvait",
		"tg": "Kvvait",
		"opponent": "yanechernay",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 15,
		"nick": "SA1L_DX",
		"tg": "SA1L_DX",
		"opponent": "Kenko32",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 16,
		"nick": "Kenko32",
		"tg": "Тимур",
		"opponent": "SA1L_DX",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 17,
		"nick": "Alttera",
		"tg": "Alttera",
		"opponent": "TVINKI98",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 18,
		"nick": "TVINKI98",
		"tg": "TVINKI",
		"opponent": "Alttera",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 19,
		"nick": "Coftek1773",
		"tg": "ZXC Софтик",
		"opponent": "Polonium67",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 20,
		"nick": "Polonium67",
		"tg": "Polonium67",
		"opponent": "Coftek1773",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 21,
		"nick": "Krimpi",
		"tg": "Кремовый пирог",
		"opponent": "SumberTheCreator",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 22,
		"nick": "SumberTheCreator",
		"tg": "SumberTheCreator",
		"opponent": "Krimpi",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 23,
		"nick": "Mslan_G",
		"tg": "Mslan_G",
		"opponent": "qStoryteller",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 24,
		"nick": "qStoryteller",
		"tg": "qStoryteller",
		"opponent": "Mslan_G",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 25,
		"nick": "f16ka",
		"tg": "f16ka",
		"opponent": "Zavet_Tenej",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 26,
		"nick": "Zavet_Tenej",
		"tg": "Zavet_Tenej",
		"opponent": "f16ka",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 27,
		"nick": "LfyZ_",
		"tg": "лфуз⁴²",
		"opponent": "Nikitos_Ultra",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 28,
		"nick": "Nikitos_Ultra",
		"tg": "Никитос",
		"opponent": "LfyZ_",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 29,
		"nick": "_JYSED_",
		"tg": "Тимофей",
		"opponent": "KypTu3aHku",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 30,
		"nick": "KypTu3aHku",
		"tg": "DomBezKrishi",
		"opponent": "_JYSED_",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 31,
		"nick": "Dipovsky_",
		"tg": "вартуфак",
		"opponent": "silentkaiser",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 32,
		"nick": "silentkaiser",
		"tg": "silent",
		"opponent": "Dipovsky_",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 33,
		"nick": "Zitster",
		"tg": "Зит",
		"opponent": "PoLoLoDI",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 34,
		"nick": "PoLoLoDI",
		"tg": "PololoDik",
		"opponent": "Zitster",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 35,
		"nick": "SPAGICH",
		"tg": "SPAGICH",
		"opponent": "Flaroq",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 36,
		"nick": "Flaroq",
		"tg": "Flaroq",
		"opponent": "SPAGICH",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 37,
		"nick": "lord_volkOG",
		"tg": "Лорд волк",
		"opponent": "WeretiKo",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 38,
		"nick": "WeretiKo",
		"tg": "WeretiKo",
		"opponent": "lord_volkOG",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 39,
		"nick": "NoNamelessMore",
		"tg": "э, А ч",
		"opponent": "_riment",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 40,
		"nick": "_riment",
		"tg": "Riment",
		"opponent": "NoNamelessMore",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 41,
		"nick": "Sev0n",
		"tg": "Sev0n",
		"opponent": "Ib_Happy",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 42,
		"nick": "Ib_Happy",
		"tg": "Феликс",
		"opponent": "Sev0n",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 43,
		"nick": "Pyteshectvenik",
		"tg": "Илья",
		"opponent": "PATRONIOO",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 44,
		"nick": "PATRONIOO",
		"tg": "PATRONIO",
		"opponent": "Pyteshectvenik",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 45,
		"nick": "neAlexei4884",
		"tg": "neAlexei",
		"opponent": "_Ne3",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 46,
		"nick": "_Ne3",
		"tg": "Ne3",
		"opponent": "neAlexei4884",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 47,
		"nick": "MeNotCloy",
		"tg": "Богдан | Клой",
		"opponent": "FrogmanXD",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 48,
		"nick": "FrogmanXD",
		"tg": "ФрогМан",
		"opponent": "MeNotCloy",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 49,
		"nick": "Endercat1058",
		"tg": "Endercat",
		"opponent": "SlameR_",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 50,
		"nick": "SlameR_",
		"tg": "SlameR_",
		"opponent": "Endercat1058",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 51,
		"nick": "rivl_mas",
		"tg": "Ривл Прайм",
		"opponent": "AxooKnight",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 52,
		"nick": "AxooKnight",
		"tg": "Axoo",
		"opponent": "rivl_mas",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 53,
		"nick": "Itz_tTiCh_Ezz",
		"tg": "TICH",
		"opponent": "Mantikorit",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 54,
		"nick": "Mantikorit",
		"tg": "Mantikorit",
		"opponent": "Itz_tTiCh_Ezz",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 55,
		"nick": "flankorXD",
		"tg": "flankor",
		"opponent": "MineKr1stal",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 56,
		"nick": "MineKr1stal",
		"tg": "MineKr1stal",
		"opponent": "flankorXD",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 57,
		"nick": "miro980",
		"tg": "Миро",
		"opponent": "WenyaFox",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 58,
		"nick": "WenyaFox",
		"tg": "Матвей",
		"opponent": "miro980",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 59,
		"nick": "MrTobkins",
		"tg": "MrTobkins",
		"opponent": "gilines",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 60,
		"nick": "gilines",
		"tg": "gilines",
		"opponent": "MrTobkins",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 61,
		"nick": "Ifritik",
		"tg": "Ванечка Ифрит",
		"opponent": "x_conya",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 62,
		"nick": "x_conya",
		"tg": "X_conya",
		"opponent": "Ifritik",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 63,
		"nick": "play_Azim",
		"tg": "А3_1М_",
		"opponent": "WellDie_YT",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 64,
		"nick": "WellDie_YT",
		"tg": "Welldie",
		"opponent": "play_Azim",
		"type": "creators",
		"registered": true
	},
	{
		"seed": 65,
		"nick": "Pahtet__",
		"tg": "Паштетина",
		"opponent": "Sayfers_Off",
		"type": "community",
		"registered": true
	},
	{
		"seed": 66,
		"nick": "Sayfers_Off",
		"tg": "Sayfers",
		"opponent": "Pahtet__",
		"type": "community",
		"registered": true
	},
	{
		"seed": 67,
		"nick": "Aakariu",
		"tg": "Кариу",
		"opponent": "nuslya",
		"type": "community",
		"registered": true
	},
	{
		"seed": 68,
		"nick": "nuslya",
		"tg": "nuslya",
		"opponent": "Aakariu",
		"type": "community",
		"registered": true
	},
	{
		"seed": 69,
		"nick": "Derny11",
		"tg": "Дэрни",
		"opponent": "ArtMine_",
		"type": "community",
		"registered": true
	},
	{
		"seed": 70,
		"nick": "ArtMine_",
		"tg": "Арт",
		"opponent": "Derny11",
		"type": "community",
		"registered": true
	},
	{
		"seed": 71,
		"nick": "KarrimencatYt",
		"tg": "Karri",
		"opponent": "Me4o0n",
		"type": "community",
		"registered": true
	},
	{
		"seed": 72,
		"nick": "Me4o0n",
		"tg": "Me4o0n",
		"opponent": "KarrimencatYt",
		"type": "community",
		"registered": true
	},
	{
		"seed": 73,
		"nick": "UVV0",
		"tg": "Уво",
		"opponent": null,
		"type": "community",
		"registered": true
	},
	{
		"seed": 74,
		"nick": "Слот 74",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 75,
		"nick": "Слот 75",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 76,
		"nick": "Слот 76",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 77,
		"nick": "Слот 77",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 78,
		"nick": "Слот 78",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 79,
		"nick": "Слот 79",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 80,
		"nick": "Слот 80",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 81,
		"nick": "Слот 81",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 82,
		"nick": "Слот 82",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 83,
		"nick": "Слот 83",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 84,
		"nick": "Слот 84",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 85,
		"nick": "Слот 85",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 86,
		"nick": "Слот 86",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 87,
		"nick": "Слот 87",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 88,
		"nick": "Слот 88",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 89,
		"nick": "Слот 89",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 90,
		"nick": "Слот 90",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 91,
		"nick": "Слот 91",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 92,
		"nick": "Слот 92",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 93,
		"nick": "Слот 93",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 94,
		"nick": "Слот 94",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 95,
		"nick": "Слот 95",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 96,
		"nick": "Слот 96",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 97,
		"nick": "Слот 97",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 98,
		"nick": "Слот 98",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 99,
		"nick": "Слот 99",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 100,
		"nick": "Слот 100",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 101,
		"nick": "Слот 101",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 102,
		"nick": "Слот 102",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 103,
		"nick": "Слот 103",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 104,
		"nick": "Слот 104",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 105,
		"nick": "Слот 105",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 106,
		"nick": "Слот 106",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 107,
		"nick": "Слот 107",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 108,
		"nick": "Слот 108",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 109,
		"nick": "Слот 109",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 110,
		"nick": "Слот 110",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 111,
		"nick": "Слот 111",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 112,
		"nick": "Слот 112",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 113,
		"nick": "Слот 113",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 114,
		"nick": "Слот 114",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 115,
		"nick": "Слот 115",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 116,
		"nick": "Слот 116",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 117,
		"nick": "Слот 117",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 118,
		"nick": "Слот 118",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 119,
		"nick": "Слот 119",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 120,
		"nick": "Слот 120",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 121,
		"nick": "Слот 121",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 122,
		"nick": "Слот 122",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 123,
		"nick": "Слот 123",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 124,
		"nick": "Слот 124",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 125,
		"nick": "Слот 125",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 126,
		"nick": "Слот 126",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 127,
		"nick": "Слот 127",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 128,
		"nick": "Слот 128",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 129,
		"nick": "Слот 129",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 130,
		"nick": "Слот 130",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 131,
		"nick": "Слот 131",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 132,
		"nick": "Слот 132",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 133,
		"nick": "Слот 133",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 134,
		"nick": "Слот 134",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 135,
		"nick": "Слот 135",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 136,
		"nick": "Слот 136",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 137,
		"nick": "Слот 137",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 138,
		"nick": "Слот 138",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 139,
		"nick": "Слот 139",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 140,
		"nick": "Слот 140",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 141,
		"nick": "Слот 141",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 142,
		"nick": "Слот 142",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 143,
		"nick": "Слот 143",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 144,
		"nick": "Слот 144",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 145,
		"nick": "Слот 145",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 146,
		"nick": "Слот 146",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 147,
		"nick": "Слот 147",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 148,
		"nick": "Слот 148",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 149,
		"nick": "Слот 149",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 150,
		"nick": "Слот 150",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 151,
		"nick": "Слот 151",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 152,
		"nick": "Слот 152",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 153,
		"nick": "Слот 153",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 154,
		"nick": "Слот 154",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 155,
		"nick": "Слот 155",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 156,
		"nick": "Слот 156",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 157,
		"nick": "Слот 157",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 158,
		"nick": "Слот 158",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 159,
		"nick": "Слот 159",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 160,
		"nick": "Слот 160",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 161,
		"nick": "Слот 161",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 162,
		"nick": "Слот 162",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 163,
		"nick": "Слот 163",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 164,
		"nick": "Слот 164",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 165,
		"nick": "Слот 165",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 166,
		"nick": "Слот 166",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 167,
		"nick": "Слот 167",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 168,
		"nick": "Слот 168",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 169,
		"nick": "Слот 169",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 170,
		"nick": "Слот 170",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 171,
		"nick": "Слот 171",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 172,
		"nick": "Слот 172",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 173,
		"nick": "Слот 173",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 174,
		"nick": "Слот 174",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 175,
		"nick": "Слот 175",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 176,
		"nick": "Слот 176",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 177,
		"nick": "Слот 177",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 178,
		"nick": "Слот 178",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 179,
		"nick": "Слот 179",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 180,
		"nick": "Слот 180",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 181,
		"nick": "Слот 181",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 182,
		"nick": "Слот 182",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 183,
		"nick": "Слот 183",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 184,
		"nick": "Слот 184",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 185,
		"nick": "Слот 185",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 186,
		"nick": "Слот 186",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 187,
		"nick": "Слот 187",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 188,
		"nick": "Слот 188",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 189,
		"nick": "Слот 189",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 190,
		"nick": "Слот 190",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 191,
		"nick": "Слот 191",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 192,
		"nick": "Слот 192",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 193,
		"nick": "Слот 193",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 194,
		"nick": "Слот 194",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 195,
		"nick": "Слот 195",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 196,
		"nick": "Слот 196",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 197,
		"nick": "Слот 197",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 198,
		"nick": "Слот 198",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 199,
		"nick": "Слот 199",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 200,
		"nick": "Слот 200",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 201,
		"nick": "Слот 201",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 202,
		"nick": "Слот 202",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 203,
		"nick": "Слот 203",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 204,
		"nick": "Слот 204",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 205,
		"nick": "Слот 205",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 206,
		"nick": "Слот 206",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 207,
		"nick": "Слот 207",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 208,
		"nick": "Слот 208",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 209,
		"nick": "Слот 209",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 210,
		"nick": "Слот 210",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 211,
		"nick": "Слот 211",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 212,
		"nick": "Слот 212",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 213,
		"nick": "Слот 213",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 214,
		"nick": "Слот 214",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 215,
		"nick": "Слот 215",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 216,
		"nick": "Слот 216",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 217,
		"nick": "Слот 217",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 218,
		"nick": "Слот 218",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 219,
		"nick": "Слот 219",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 220,
		"nick": "Слот 220",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 221,
		"nick": "Слот 221",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 222,
		"nick": "Слот 222",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 223,
		"nick": "Слот 223",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 224,
		"nick": "Слот 224",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 225,
		"nick": "Слот 225",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 226,
		"nick": "Слот 226",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 227,
		"nick": "Слот 227",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 228,
		"nick": "Слот 228",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 229,
		"nick": "Слот 229",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 230,
		"nick": "Слот 230",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 231,
		"nick": "Слот 231",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 232,
		"nick": "Слот 232",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 233,
		"nick": "Слот 233",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 234,
		"nick": "Слот 234",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 235,
		"nick": "Слот 235",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 236,
		"nick": "Слот 236",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 237,
		"nick": "Слот 237",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 238,
		"nick": "Слот 238",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 239,
		"nick": "Слот 239",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 240,
		"nick": "Слот 240",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 241,
		"nick": "Слот 241",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 242,
		"nick": "Слот 242",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 243,
		"nick": "Слот 243",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 244,
		"nick": "Слот 244",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 245,
		"nick": "Слот 245",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 246,
		"nick": "Слот 246",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 247,
		"nick": "Слот 247",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 248,
		"nick": "Слот 248",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 249,
		"nick": "Слот 249",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 250,
		"nick": "Слот 250",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 251,
		"nick": "Слот 251",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 252,
		"nick": "Слот 252",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 253,
		"nick": "Слот 253",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 254,
		"nick": "Слот 254",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 255,
		"nick": "Слот 255",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	},
	{
		"seed": 256,
		"nick": "Слот 256",
		"tg": "",
		"opponent": null,
		"type": "community",
		"registered": false
	}
];

	window.TOURNAMENT_ROSTER = TOURNAMENT_ROSTER;

	window.getPlayerAvatarUrl = function (nick, size) {
		size = size || 32;
		if (!nick || nick.indexOf('Слот') === 0 || nick.indexOf('Slot') === 0) {
			return 'https://mc-heads.net/avatar/Steve/' + size;
		}
		return 'https://mc-heads.net/avatar/' + encodeURIComponent(nick) + '/' + size;
	};
})();
