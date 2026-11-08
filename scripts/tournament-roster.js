(function () {
	'use strict';

	// Official Tournament Roster (87 Real Participants)
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
		"opponent": "Cherrytigggo",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 4,
		"nick": "Cherrytigggo",
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
		"opponent": "K1r1toe",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 8,
		"nick": "K1r1toe",
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
		"opponent": "Polonium67",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 20,
		"nick": "Polonium67",
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
		"opponent": "Zavet_Tenej",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 26,
		"nick": "Zavet_Tenej",
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
		"nick": "Riksa",
		"opponent": "LfyZ_",
		"matchType": "Выбранная пара",
		"registered": true
	},
	{
		"seed": 38,
		"nick": "LfyZ_",
		"opponent": "Riksa",
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
		"nick": "Nikitos_Ultra",
		"opponent": "KypTu3aHku",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 48,
		"nick": "KypTu3aHku",
		"opponent": "Nikitos_Ultra",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 49,
		"nick": "Dipovsky_",
		"opponent": "silentkaiser",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 50,
		"nick": "silentkaiser",
		"opponent": "Dipovsky_",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 51,
		"nick": "Zitster",
		"opponent": "PoLoLoDI",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 52,
		"nick": "PoLoLoDI",
		"opponent": "Zitster",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 53,
		"nick": "SPAGICH",
		"opponent": "Flaroq",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 54,
		"nick": "Flaroq",
		"opponent": "SPAGICH",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 55,
		"nick": "lord_volkOG",
		"opponent": "WeretiKo",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 56,
		"nick": "WeretiKo",
		"opponent": "lord_volkOG",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 57,
		"nick": "NoNamelessMore",
		"opponent": "_riment",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 58,
		"nick": "_riment",
		"opponent": "NoNamelessMore",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 59,
		"nick": "Sev0n",
		"opponent": "Pyteshectvenik",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 60,
		"nick": "Pyteshectvenik",
		"opponent": "Sev0n",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 61,
		"nick": "PATRONIOO",
		"opponent": "neAlexei4884",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 62,
		"nick": "neAlexei4884",
		"opponent": "PATRONIOO",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 63,
		"nick": "_Ne3",
		"opponent": "FrogmanXD",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 64,
		"nick": "FrogmanXD",
		"opponent": "_Ne3",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 65,
		"nick": "Endercat1058",
		"opponent": "SlameR_",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 66,
		"nick": "SlameR_",
		"opponent": "Endercat1058",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 67,
		"nick": "AxooKnight",
		"opponent": "Mantikorit",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 68,
		"nick": "Mantikorit",
		"opponent": "AxooKnight",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 69,
		"nick": "flankorXD",
		"opponent": "MineKr1stal",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 70,
		"nick": "MineKr1stal",
		"opponent": "flankorXD",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 71,
		"nick": "miro980",
		"opponent": "WenyaFox",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 72,
		"nick": "WenyaFox",
		"opponent": "miro980",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 73,
		"nick": "MrTobkins",
		"opponent": "play_Azim",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 74,
		"nick": "play_Azim",
		"opponent": "MrTobkins",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 75,
		"nick": "WellDie_YT",
		"opponent": "Pahtet__",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 76,
		"nick": "Pahtet__",
		"opponent": "WellDie_YT",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 77,
		"nick": "Sayfers_Off",
		"opponent": "Aakariu",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 78,
		"nick": "Aakariu",
		"opponent": "Sayfers_Off",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 79,
		"nick": "Derny11",
		"opponent": "KarrimencatYt",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 80,
		"nick": "KarrimencatYt",
		"opponent": "Derny11",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 81,
		"nick": "Olerve1n",
		"opponent": "Sevetyan",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 82,
		"nick": "Sevetyan",
		"opponent": "Olerve1n",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 83,
		"nick": "LLI_Jl_I0_X_U",
		"opponent": "Zzopi6ames",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 84,
		"nick": "Zzopi6ames",
		"opponent": "LLI_Jl_I0_X_U",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 85,
		"nick": "MrFrogodil",
		"opponent": "SH4URM3N",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 86,
		"nick": "SH4URM3N",
		"opponent": "MrFrogodil",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 87,
		"nick": "deficiit",
		"opponent": null,
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
