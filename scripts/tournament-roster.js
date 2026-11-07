(function () {
	'use strict';

	// Tournament Roster Configuration (256 Slots)
	// You can replace these with your exact tournament player nicknames at any time!
	var CREATOR_NICKS = [
		'Mofaghhh', 'Nerkin', 'MrLololoshka', 'FixEye', 'EdisonPts', 'Demaster',
		'Fluger', 'Koreshzy', 'ZakMini', 'ShadowPriestok', 'Teroser', 'Smike',
		'Dargas', 'VikaKarter', 'Compot', 'Evgexa', 'EugeneSagaz', 'Frost',
		'Coffi', 'Kompik', 'Danilka', 'Marmok', 'Buster', 'Kuplinov',
		'Stray228', 'SilverName', 'Recrent', 'C_a_k_e', 'Guit88Man', 'VooDooSh',
		'JesusAVGN', 'Bratishkinoff', 'DmitryBale', 'TheBrainDit', 'Filipin', 'JackShepard',
		'Tresh', 'Teran', 'Scarlight', 'Fantom', 'MrBav', 'Snoop',
		'MrFreeze', 'MrUnfiny', 'SlivkiShow', 'Pozzi', 'Robzi', 'Ewok',
		'HappyLime', 'Rimas', 'Windy31', 'Quantum', 'Kreyk', 'Zheka',
		'DakPlay', 'SuperEvgexa', 'Vanya', 'Mistik', 'Lagger', 'Deo',
		'Fruitberries', 'IlluminaHD', 'Feinberg', 'Cougar429'
	];

	// Generate full 256 roster
	var fullRoster = [];

	for (var i = 0; i < 256; i++) {
		var isCreator = i < 64;
		var nick = isCreator && CREATOR_NICKS[i] ? CREATOR_NICKS[i] : (isCreator ? 'Creator_' + (i + 1) : 'Player_' + (i + 1));
		fullRoster.push({
			seed: i + 1,
			nick: nick,
			type: isCreator ? 'creators' : 'community'
		});
	}

	window.TOURNAMENT_ROSTER = fullRoster;

	window.getPlayerAvatarUrl = function (nick, size) {
		size = size || 32;
		if (!nick) return '';
		return 'https://mc-heads.net/avatar/' + encodeURIComponent(nick) + '/' + size;
	};
})();
