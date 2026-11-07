(function () {
	'use strict';

	// Official Tournament Roster (Only Real Participants from User List)
	var TOURNAMENT_ROSTER = [
	{
		"seed": 1,
		"nick": "berlair_",
		"tg": "berlair",
		"opponent": "_Klim4ek_",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 2,
		"nick": "_Klim4ek_",
		"tg": "Klim4ek",
		"opponent": "berlair_",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 3,
		"nick": "localchef228",
		"tg": "localchef",
		"opponent": "Cherrytigggo",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 4,
		"nick": "Cherrytigggo",
		"tg": "CherryTiggo",
		"opponent": "localchef228",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 5,
		"nick": "DR_Coldness",
		"tg": "Coldness Glac",
		"opponent": "justatea0",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 6,
		"nick": "justatea0",
		"tg": "justatea0",
		"opponent": "DR_Coldness",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 7,
		"nick": "SirRomawka",
		"tg": "Romashka Shagov",
		"opponent": "K1r1toe",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 8,
		"nick": "K1r1toe",
		"tg": "K1r1toe",
		"opponent": "SirRomawka",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 9,
		"nick": "GoverNed_",
		"tg": "Кирилл ГоверНедовский",
		"opponent": "Fowr0",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 10,
		"nick": "Fowr0",
		"tg": "Фовр",
		"opponent": "GoverNed_",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 11,
		"nick": "EmelyaX3",
		"tg": "3Корочки",
		"opponent": "Komimir0__",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 12,
		"nick": "Komimir0__",
		"tg": "Komimir",
		"opponent": "EmelyaX3",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 13,
		"nick": "yanechernay",
		"tg": "чоо черняй",
		"opponent": "Kvvait",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 14,
		"nick": "Kvvait",
		"tg": "Kvvait",
		"opponent": "yanechernay",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 15,
		"nick": "SA1L_DX",
		"tg": "SA1L_DX",
		"opponent": "Kenko32",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 16,
		"nick": "Kenko32",
		"tg": "Тимур",
		"opponent": "SA1L_DX",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 17,
		"nick": "Alttera",
		"tg": "Alttera",
		"opponent": "TVINKI98",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 18,
		"nick": "TVINKI98",
		"tg": "TVINKI",
		"opponent": "Alttera",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 19,
		"nick": "Coftek1773",
		"tg": "ZXC Софтик",
		"opponent": "Polonium67",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 20,
		"nick": "Polonium67",
		"tg": "Polonium67",
		"opponent": "Coftek1773",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 21,
		"nick": "Krimpi",
		"tg": "Кремовый пирог",
		"opponent": "SumberTheCreator",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 22,
		"nick": "SumberTheCreator",
		"tg": "SumberTheCreator",
		"opponent": "Krimpi",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 23,
		"nick": "Mslan_G",
		"tg": "Mslan_G",
		"opponent": "qStoryteller",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 24,
		"nick": "qStoryteller",
		"tg": "qStoryteller",
		"opponent": "Mslan_G",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 25,
		"nick": "f16ka",
		"tg": "f16ka",
		"opponent": "Zavet_Tenej",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 26,
		"nick": "Zavet_Tenej",
		"tg": "Zavet_Tenej",
		"opponent": "f16ka",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 27,
		"nick": "Itz_tTiCh_Ezz",
		"tg": "TICH",
		"opponent": "PoLoLoDI",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 28,
		"nick": "PoLoLoDI",
		"tg": "PololoDik",
		"opponent": "Itz_tTiCh_Ezz",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 29,
		"nick": "silentkaiser",
		"tg": "silent",
		"opponent": "Zitster",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 30,
		"nick": "Zitster",
		"tg": "Зит",
		"opponent": "silentkaiser",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 31,
		"nick": "Endercat1058",
		"tg": "Endercat",
		"opponent": "Flaroq",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 32,
		"nick": "Flaroq",
		"tg": "Flaroq",
		"opponent": "Endercat1058",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 33,
		"nick": "KarrimencatYt",
		"tg": "Karri",
		"opponent": "Dipovsky_",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 34,
		"nick": "Dipovsky_",
		"tg": "вартуфак",
		"opponent": "KarrimencatYt",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 35,
		"nick": "lord_volkOG",
		"tg": "Лорд волк",
		"opponent": "Ifritik",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 36,
		"nick": "Ifritik",
		"tg": "Ванечка Ифрит",
		"opponent": "lord_volkOG",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 37,
		"nick": "neAlexei4884",
		"tg": "neAlexei",
		"opponent": "MeNotCloy",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 38,
		"nick": "MeNotCloy",
		"tg": "Богдан | Клой",
		"opponent": "neAlexei4884",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 39,
		"nick": "Pahtet__",
		"tg": "Паштетина",
		"opponent": "WenyaFox",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 40,
		"nick": "WenyaFox",
		"tg": "Матвей",
		"opponent": "Pahtet__",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 41,
		"nick": "WellDie_YT",
		"tg": "Welldie",
		"opponent": "PATRONIOO",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 42,
		"nick": "PATRONIOO",
		"tg": "PATRONIO",
		"opponent": "WellDie_YT",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 43,
		"nick": "MineKr1stal",
		"tg": "MineKr1stal",
		"opponent": "WeretiKo",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 44,
		"nick": "WeretiKo",
		"tg": "WeretiKo",
		"opponent": "MineKr1stal",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 45,
		"nick": "Mantikorit",
		"tg": "Mantikorit",
		"opponent": "_JYSED_",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 46,
		"nick": "_JYSED_",
		"tg": "Тимофей",
		"opponent": "Mantikorit",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 47,
		"nick": "Ib_Happy",
		"tg": "Феликс",
		"opponent": "Sayfers_Off",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 48,
		"nick": "Sayfers_Off",
		"tg": "Sayfers",
		"opponent": "Ib_Happy",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 49,
		"nick": "play_Azim",
		"tg": "А3_1М_",
		"opponent": "UVV0",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 50,
		"nick": "UVV0",
		"tg": "Уво",
		"opponent": "play_Azim",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 51,
		"nick": "Nikitos_Ultra",
		"tg": "Никитос",
		"opponent": "Sev0n",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 52,
		"nick": "Sev0n",
		"tg": "Sev0n",
		"opponent": "Nikitos_Ultra",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 53,
		"nick": "Derny11",
		"tg": "Дэрни",
		"opponent": "SlameR_",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 54,
		"nick": "SlameR_",
		"tg": "SlameR_",
		"opponent": "Derny11",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 55,
		"nick": "AxooKnight",
		"tg": "Axoo",
		"opponent": "x_conya",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 56,
		"nick": "x_conya",
		"tg": "X_conya",
		"opponent": "AxooKnight",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 57,
		"nick": "nuslya",
		"tg": "nuslya",
		"opponent": "LfyZ_",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 58,
		"nick": "LfyZ_",
		"tg": "лфуз⁴²",
		"opponent": "nuslya",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 59,
		"nick": "ArtMine_",
		"tg": "Арт",
		"opponent": "miro980",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 60,
		"nick": "miro980",
		"tg": "Миро",
		"opponent": "ArtMine_",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 61,
		"nick": "_Ne3",
		"tg": "Ne3",
		"opponent": "gilines",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 62,
		"nick": "gilines",
		"tg": "gilines",
		"opponent": "_Ne3",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 63,
		"nick": "NoNamelessMore",
		"tg": "э, А ч",
		"opponent": "KypTu3aHku",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 64,
		"nick": "KypTu3aHku",
		"tg": "DomBezKrishi",
		"opponent": "NoNamelessMore",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 65,
		"nick": "Pyteshectvenik",
		"tg": "Илья",
		"opponent": "MrTobkins",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 66,
		"nick": "MrTobkins",
		"tg": "MrTobkins",
		"opponent": "Pyteshectvenik",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 67,
		"nick": "SPAGICH",
		"tg": "SPAGICH",
		"opponent": "flankorXD",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 68,
		"nick": "flankorXD",
		"tg": "flankor",
		"opponent": "SPAGICH",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 69,
		"nick": "Aakariu",
		"tg": "Кариу",
		"opponent": "FrogmanXD",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 70,
		"nick": "FrogmanXD",
		"tg": "ФрогМан",
		"opponent": "Aakariu",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 71,
		"nick": "Me4o0n",
		"tg": "Me4o0n",
		"opponent": "_riment",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 72,
		"nick": "_riment",
		"tg": "Riment",
		"opponent": "Me4o0n",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 73,
		"nick": "rivl_mas",
		"tg": "Ривл Прайм",
		"opponent": null,
		"matchType": "Ожидает соперника",
		"registered": true
	}
];

	window.TOURNAMENT_ROSTER = TOURNAMENT_ROSTER;

	window.getPlayerAvatarUrl = function (nick, size) {
		size = size || 32;
		if (!nick) return '';
		return 'https://mc-heads.net/avatar/' + encodeURIComponent(nick) + '/' + size;
	};
})();
