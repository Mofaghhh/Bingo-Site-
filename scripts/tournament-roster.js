(function () {
	'use strict';

	// Official Tournament Roster (102 Real Participants)
	var TOURNAMENT_ROSTER = [
	{
		"seed": 1,
		"nick": "berlair_",
		"opponent": "_Klim4ek_",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 2,
		"nick": "_Klim4ek_",
		"opponent": "berlair_",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 3,
		"nick": "localchef228",
		"opponent": "CherryTigggo",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 4,
		"nick": "CherryTigggo",
		"opponent": "localchef228",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 5,
		"nick": "DR_Coldness",
		"opponent": "JustATea_",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 6,
		"nick": "JustATea_",
		"opponent": "DR_Coldness",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 7,
		"nick": "SirRomawka",
		"opponent": "KiritoBlack",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 8,
		"nick": "KiritoBlack",
		"opponent": "SirRomawka",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 9,
		"nick": "GoverNed_",
		"opponent": "Fowr0",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 10,
		"nick": "Fowr0",
		"opponent": "GoverNed_",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 11,
		"nick": "EmelyaX3",
		"opponent": "Komimir0__",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 12,
		"nick": "Komimir0__",
		"opponent": "EmelyaX3",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 13,
		"nick": "yanechernay",
		"opponent": "Kvvait",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 14,
		"nick": "Kvvait",
		"opponent": "yanechernay",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 15,
		"nick": "SA1L_DX",
		"opponent": "Kenko32",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 16,
		"nick": "Kenko32",
		"opponent": "SA1L_DX",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 17,
		"nick": "Alttera",
		"opponent": "TVINKI98",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 18,
		"nick": "TVINKI98",
		"opponent": "Alttera",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 19,
		"nick": "Coftek1773",
		"opponent": "polonium67",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 20,
		"nick": "polonium67",
		"opponent": "Coftek1773",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 21,
		"nick": "Krimpi",
		"opponent": "SumberTheCreator",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 22,
		"nick": "SumberTheCreator",
		"opponent": "Krimpi",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 23,
		"nick": "Mslan_G",
		"opponent": "qStoryteller",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 24,
		"nick": "qStoryteller",
		"opponent": "Mslan_G",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 25,
		"nick": "Fi6Ka",
		"opponent": "Zavetyan",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 26,
		"nick": "Zavetyan",
		"opponent": "Fi6Ka",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 27,
		"nick": "MeNotCloy",
		"opponent": "UVV0",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 28,
		"nick": "UVV0",
		"opponent": "MeNotCloy",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 29,
		"nick": "_JYSED_",
		"opponent": "mirilop_",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 30,
		"nick": "mirilop_",
		"opponent": "_JYSED_",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 31,
		"nick": "Itz_tTiCh_Ezz",
		"opponent": "ArtMine_",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 32,
		"nick": "ArtMine_",
		"opponent": "Itz_tTiCh_Ezz",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 33,
		"nick": "ArisNight",
		"opponent": "Ib_Happy",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 34,
		"nick": "Ib_Happy",
		"opponent": "ArisNight",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 35,
		"nick": "nuslya",
		"opponent": "MarFik910",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 36,
		"nick": "MarFik910",
		"opponent": "nuslya",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 37,
		"nick": "RIcsa5c",
		"opponent": "LfyZ_",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 38,
		"nick": "LfyZ_",
		"opponent": "RIcsa5c",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 39,
		"nick": "x_conya",
		"opponent": "Me4o0n",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 40,
		"nick": "Me4o0n",
		"opponent": "x_conya",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 41,
		"nick": "rivl_mas",
		"opponent": "Ifritik",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 42,
		"nick": "Ifritik",
		"opponent": "rivl_mas",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 43,
		"nick": "gilines",
		"opponent": "zabeniks",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 44,
		"nick": "zabeniks",
		"opponent": "gilines",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 45,
		"nick": "cheqiew",
		"opponent": "Forkiiss",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 46,
		"nick": "Forkiiss",
		"opponent": "cheqiew",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 47,
		"nick": "Eta_Kvarrrr",
		"opponent": "Pahtet__",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 48,
		"nick": "Pahtet__",
		"opponent": "Eta_Kvarrrr",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 49,
		"nick": "_Ne3",
		"opponent": "play_Azim",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 50,
		"nick": "play_Azim",
		"opponent": "_Ne3",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 51,
		"nick": "TwKraystall",
		"opponent": "Derny11",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 52,
		"nick": "Derny11",
		"opponent": "TwKraystall",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 53,
		"nick": "Sevetyan",
		"opponent": "Fereden",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 54,
		"nick": "Fereden",
		"opponent": "Sevetyan",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 55,
		"nick": "PATRONIOO",
		"opponent": "Sev0n",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 56,
		"nick": "Sev0n",
		"opponent": "PATRONIOO",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 57,
		"nick": "Nikitos_Ultra",
		"opponent": "KypTu3aHku",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 58,
		"nick": "KypTu3aHku",
		"opponent": "Nikitos_Ultra",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 59,
		"nick": "Dipovsky_",
		"opponent": "silentkaiser",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 60,
		"nick": "silentkaiser",
		"opponent": "Dipovsky_",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 61,
		"nick": "Zitster",
		"opponent": "PoLoLoDI",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 62,
		"nick": "PoLoLoDI",
		"opponent": "Zitster",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 63,
		"nick": "SPAGICH",
		"opponent": "Flaroq",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 64,
		"nick": "Flaroq",
		"opponent": "SPAGICH",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 65,
		"nick": "lord_volkOG",
		"opponent": "WeretiKo",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 66,
		"nick": "WeretiKo",
		"opponent": "lord_volkOG",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 67,
		"nick": "NoNamelessMore",
		"opponent": "_riment",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 68,
		"nick": "_riment",
		"opponent": "NoNamelessMore",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 69,
		"nick": "Pyteshectvenik",
		"opponent": "neAlexei4884",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 70,
		"nick": "neAlexei4884",
		"opponent": "Pyteshectvenik",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 71,
		"nick": "FrogmanXD",
		"opponent": "Endercat1058",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 72,
		"nick": "Endercat1058",
		"opponent": "FrogmanXD",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 73,
		"nick": "SlameR_",
		"opponent": "AxooKnight",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 74,
		"nick": "AxooKnight",
		"opponent": "SlameR_",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 75,
		"nick": "Mantikorit",
		"opponent": "flankorXD",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 76,
		"nick": "flankorXD",
		"opponent": "Mantikorit",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 77,
		"nick": "MineKr1stal",
		"opponent": "miro980",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 78,
		"nick": "miro980",
		"opponent": "MineKr1stal",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 79,
		"nick": "WenyaFox",
		"opponent": "MrTobkins",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 80,
		"nick": "MrTobkins",
		"opponent": "WenyaFox",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 81,
		"nick": "WellDie_YT",
		"opponent": "Sayfers_Off",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 82,
		"nick": "Sayfers_Off",
		"opponent": "WellDie_YT",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 83,
		"nick": "Aakariu",
		"opponent": "KarrimencatYt",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 84,
		"nick": "KarrimencatYt",
		"opponent": "Aakariu",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 85,
		"nick": "Olerve1n",
		"opponent": "LLI_Jl_I0_X_U",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 86,
		"nick": "LLI_Jl_I0_X_U",
		"opponent": "Olerve1n",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 87,
		"nick": "Zzopi6ames",
		"opponent": "MrFrogodil",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 88,
		"nick": "MrFrogodil",
		"opponent": "Zzopi6ames",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 89,
		"nick": "SH4URM3N",
		"opponent": "deficiit",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 90,
		"nick": "deficiit",
		"opponent": "SH4URM3N",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 91,
		"nick": "_Felex",
		"opponent": "ItsR0kot",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 92,
		"nick": "ItsR0kot",
		"opponent": "_Felex",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 93,
		"nick": "Rai23visYT",
		"opponent": "Spear2",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 94,
		"nick": "Spear2",
		"opponent": "Rai23visYT",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 95,
		"nick": "chkeikka",
		"opponent": "UlUTeaUlU",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 96,
		"nick": "UlUTeaUlU",
		"opponent": "chkeikka",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 97,
		"nick": "Ravit0wo",
		"opponent": "marik3k",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 98,
		"nick": "marik3k",
		"opponent": "Ravit0wo",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 99,
		"nick": "0TVECHAU",
		"opponent": "lendysha1",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 100,
		"nick": "lendysha1",
		"opponent": "0TVECHAU",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 101,
		"nick": "gribkoB",
		"opponent": "soniccost",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 102,
		"nick": "soniccost",
		"opponent": "gribkoB",
		"matchType": "Случайный подбор",
		"registered": true
	}
];

	window.TOURNAMENT_ROSTER = TOURNAMENT_ROSTER;

	window.getPlayerAvatarUrl = function (nick, size) {
		size = size || 32;
		if (!nick) return '';
		return 'https://minotar.net/helm/' + encodeURIComponent(nick) + '/' + size;
	};
})();
