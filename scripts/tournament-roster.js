(function () {
	'use strict';

	// Official Tournament Roster (86 Real Participants)
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
		"nick": "LfyZ_",
		"opponent": "Nikitos_Ultra",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 28,
		"nick": "Nikitos_Ultra",
		"opponent": "LfyZ_",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 29,
		"nick": "_JYSED_",
		"opponent": "KypTu3aHku",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 30,
		"nick": "KypTu3aHku",
		"opponent": "_JYSED_",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 31,
		"nick": "Dipovsky_",
		"opponent": "silentkaiser",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 32,
		"nick": "silentkaiser",
		"opponent": "Dipovsky_",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 33,
		"nick": "Zitster",
		"opponent": "PoLoLoDI",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 34,
		"nick": "PoLoLoDI",
		"opponent": "Zitster",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 35,
		"nick": "SPAGICH",
		"opponent": "Flaroq",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 36,
		"nick": "Flaroq",
		"opponent": "SPAGICH",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 37,
		"nick": "lord_volkOG",
		"opponent": "WeretiKo",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 38,
		"nick": "WeretiKo",
		"opponent": "lord_volkOG",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 39,
		"nick": "NoNamelessMore",
		"opponent": "_riment",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 40,
		"nick": "_riment",
		"opponent": "NoNamelessMore",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 41,
		"nick": "Sev0n",
		"opponent": "Ib_Happy",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 42,
		"nick": "Ib_Happy",
		"opponent": "Sev0n",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 43,
		"nick": "Pyteshectvenik",
		"opponent": "PATRONIOO",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 44,
		"nick": "PATRONIOO",
		"opponent": "Pyteshectvenik",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 45,
		"nick": "neAlexei4884",
		"opponent": "_Ne3",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 46,
		"nick": "_Ne3",
		"opponent": "neAlexei4884",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 47,
		"nick": "MeNotCloy",
		"opponent": "FrogmanXD",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 48,
		"nick": "FrogmanXD",
		"opponent": "MeNotCloy",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 49,
		"nick": "Endercat1058",
		"opponent": "SlameR_",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 50,
		"nick": "SlameR_",
		"opponent": "Endercat1058",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 51,
		"nick": "rivl_mas",
		"opponent": "AxooKnight",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 52,
		"nick": "AxooKnight",
		"opponent": "rivl_mas",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 53,
		"nick": "Itz_tTiCh_Ezz",
		"opponent": "Mantikorit",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 54,
		"nick": "Mantikorit",
		"opponent": "Itz_tTiCh_Ezz",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 55,
		"nick": "flankorXD",
		"opponent": "MineKr1stal",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 56,
		"nick": "MineKr1stal",
		"opponent": "flankorXD",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 57,
		"nick": "miro980",
		"opponent": "WenyaFox",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 58,
		"nick": "WenyaFox",
		"opponent": "miro980",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 59,
		"nick": "MrTobkins",
		"opponent": "gilines",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 60,
		"nick": "gilines",
		"opponent": "MrTobkins",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 61,
		"nick": "Ifritik",
		"opponent": "x_conya",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 62,
		"nick": "x_conya",
		"opponent": "Ifritik",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 63,
		"nick": "play_Azim",
		"opponent": "WellDie_YT",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 64,
		"nick": "WellDie_YT",
		"opponent": "play_Azim",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 65,
		"nick": "Pahtet__",
		"opponent": "Sayfers_Off",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 66,
		"nick": "Sayfers_Off",
		"opponent": "Pahtet__",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 67,
		"nick": "Aakariu",
		"opponent": "nuslya",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 68,
		"nick": "nuslya",
		"opponent": "Aakariu",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 69,
		"nick": "Derny11",
		"opponent": "ArtMine_",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 70,
		"nick": "ArtMine_",
		"opponent": "Derny11",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 71,
		"nick": "KarrimencatYt",
		"opponent": "Me4o0n",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 72,
		"nick": "Me4o0n",
		"opponent": "KarrimencatYt",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 73,
		"nick": "UVV0",
		"opponent": "Olerve1n",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 74,
		"nick": "Olerve1n",
		"opponent": "UVV0",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 75,
		"nick": "ArisNight",
		"opponent": "mirilop_",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 76,
		"nick": "mirilop_",
		"opponent": "ArisNight",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 77,
		"nick": "Sevetyan",
		"opponent": "LLI_Jl_I0_X_U",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 78,
		"nick": "LLI_Jl_I0_X_U",
		"opponent": "Sevetyan",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 79,
		"nick": "Zzopi6ames",
		"opponent": "MrFrogodil",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 80,
		"nick": "MrFrogodil",
		"opponent": "Zzopi6ames",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 81,
		"nick": "cheqiew",
		"opponent": "SH4URM3N",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 82,
		"nick": "SH4URM3N",
		"opponent": "cheqiew",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 83,
		"nick": "deficiit",
		"opponent": "MarFik910",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 84,
		"nick": "MarFik910",
		"opponent": "deficiit",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 85,
		"nick": "Forkiiss",
		"opponent": "zabeniks",
		"matchType": "Случайный подбор",
		"registered": true
	},
	{
		"seed": 86,
		"nick": "zabeniks",
		"opponent": "Forkiiss",
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
