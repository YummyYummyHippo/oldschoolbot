const { roll } = require('../config/util');
const raids = require('../data/monsters/raids');

const xpEmoji = '<:xp:630911040510623745>';
const gpEmoji = '<:RSGP:369349580040437770>';
const fm = num => num.toLocaleString();

const pets = [
	{
		id: 1,
		emoji: '<:Baby_chinchompa_red:324127375539306497>',
		chance: 95898,
		name: 'Baby Chinchompa',
		type: 'SKILL',
		altNames: ['CHINCHOMPA', 'BABYCHINCHOMPA', 'CHIN'],
		formatFinish: num =>
			`You had to catch ${fm(num)} Red Chinchompas to get the Baby Chinchompa Pet! ` +
			`<:Baby_chinchompa_red:324127375539306497> You also got...\n${xpEmoji} ${fm(
				num * 265
			)} XP\n${gpEmoji} ${fm(num * 1318)} GP`
	},
	{
		id: 2,
		emoji: '<:Baby_mole:324127375858204672>',
		chance: 3000,
		name: 'Baby Mole',
		type: 'BOSS',
		altNames: ['BABYMOLE', 'MOLE', 'GIANTMOLE'],
		formatFinish: num =>
			`You had to kill ${fm(
				num
			)} Giant Moles to get the Baby Mole Pet! <:Baby_mole:324127375858204672>`
	},
	{
		id: 3,
		emoji: '<:Beaver:324127375761604611>',
		chance: 69846,
		name: 'Beaver',
		type: 'SKILL',
		altNames: ['BEAVER', 'WC', 'WOODCUTTING'],
		formatFinish: num =>
			`You had to cut ${fm(
				num
			)} Magic Logs to get the Beaver Pet! <:Beaver:324127375761604611> ` +
			`You also got...\n${xpEmoji} ${fm(num * 250)} XP\n${gpEmoji} ${fm(num * 1043)} GP`
	},
	{
		id: 4,
		emoji: '<:Bloodhound:324127375602483212>',
		chance: 1000,
		name: 'Bloodhound',
		type: 'SPECIAL',
		altNames: ['BLOODHOUND'],
		formatFinish: num =>
			`You had to complete ${fm(
				num
			)} Master Clues to get the Bloodhound Pet! <:Bloodhound:324127375602483212>`
	},
	{
		id: 5,
		emoji: '<:Callisto_cub:324127376273440768>',
		chance: 2000,
		name: 'Callisto Cub',
		type: 'BOSS',
		altNames: ['CALLISTO', 'CALLISTOCUB', 'CUB'],
		formatFinish: num =>
			`You had to slay Callisto ${fm(
				num
			)} times to get the Callisto Cub Pet! <:Callisto_cub:324127376273440768>`
	},
	{
		id: 6,
		emoji: '<:Giant_squirrel:324127376432824320>',
		chance: 31965,
		name: 'Giant Squirrel',
		type: 'SKILL',
		altNames: ['SQUIRREL', 'GIANTSQUIRREL', 'AGILITY'],
		formatFinish: num =>
			`You had to run around the Ardougne Rooftops ${fm(
				num
			)} times to get the Giant Squirrel Pet! <:Giant_squirrel:324127376432824320> You also got...\n${xpEmoji} ${fm(
				num * 570
			)} XP\n<:ehpclock:352323705210142721> ${Math.round(
				(num * 45) / 3600
			)} Hours of your time wasted!`
	},
	{
		id: 7,
		emoji: '<:Heron:324127376516841483>',
		chance: 136108,
		name: 'Heron',
		type: 'SKILL',
		altNames: ['HERON', 'FISHING', 'AGILITY'],
		formatFinish: num =>
			`You had to catch ${fm(
				num
			)} Monkfish to get the Heron Pet! <:Heron:324127376516841483> You also got...\n${xpEmoji} ${fm(
				num * 120
			)} XP\n${gpEmoji} ${fm(num * 294)} GP`
	},
	{
		id: 8,
		emoji: '<:Kalphite_princess_2nd_form:324127376915300352>',
		chance: 3000,
		name: 'Kalphite Princess',
		type: 'BOSS',
		altNames: ['KALPHITE', 'KALPHITEPRINCESS', 'KALPHITEQUEEN', 'KQ'],
		formatFinish: num =>
			`You had to kill the Kalphite Queen ${fm(
				num
			)} times to get the Kalphite Princess Pet! <:Kalphite_princess_2nd_form:324127376915300352>`
	},
	{
		id: 9,
		emoji: '<:Noon:379595337234382848>',
		chance: 3000,
		name: 'Noon',
		type: 'BOSS',
		altNames: ['GARGOYLE', 'NOON', 'DAWN', 'GG', 'MIDNIGHT'],
		formatFinish: num =>
			`You had to kill ${fm(
				num
			)} Grotesque Guardians to get the Noon Pet! <:Noon:379595337234382848>`
	},
	{
		id: 10,
		emoji: '<:Olmlet:324127376873357316>',
		chance: 3000,
		name: 'Olmlet',
		type: 'BOSS',
		altNames: ['OLMLET', 'RAIDS', 'OLMLET', 'OLM'],
		formatFinish: num =>
			`You had to do ${fm(
				num
			)} Raids to get the Olmlet Pet! <:Olmlet:324127376873357316> it came with a ${
				raids.determineItem().emoji
			}`
	},
	{
		id: 11,
		emoji: '<:Pet_chaos_elemental:324127377070227456>',
		chance: 300,
		name: 'Chaos Elemental Jr.',
		type: 'BOSS',
		altNames: ['CHAOSELE', 'CHAOSELEMENTAL'],
		formatFinish: num =>
			`You had to kill the Chaos Elemental ${fm(
				num
			)} times to get the Chaos Elemental Pet! <:Pet_chaos_elemental:324127377070227456>`
	},
	{
		id: 12,
		emoji: '<:Pet_dagannoth_prime:324127376877289474>',
		chance: 5000,
		name: 'Dagannoth Prime Jr.',
		type: 'BOSS',
		altNames: ['PRIME', 'DAGANNOTHPRIME'],
		formatFinish: num =>
			`You had to kill Dagannoth Prime ${fm(
				num
			)} times to get the Dagannoth Prime Pet! <:Pet_dagannoth_prime:324127376877289474>`
	},
	{
		id: 13,
		emoji: '<:Pet_dagannoth_rex:324127377091330049>',
		chance: 5000,
		name: 'Dagannoth Rex Jr.',
		type: 'BOSS',
		altNames: ['REX', 'DAGANNOTHREX'],
		formatFinish: num =>
			`You had to kill Dagannoth Rex ${fm(
				num
			)} times to get the Dagannoth Rex Pet! <:Pet_dagannoth_rex:324127377091330049>`
	},
	{
		id: 14,
		emoji: '<:Pet_dagannoth_supreme:324127377066164245>',
		chance: 5000,
		name: 'Dagannoth Supreme Jr.',
		type: 'BOSS',
		altNames: ['SUPREME', 'DAGANNOTHSUPREME'],
		formatFinish: num =>
			`You had to kill Dagannoth Supreme ${fm(
				num
			)} times to get the Dagannoth Supreme Pet! <:Pet_dagannoth_supreme:324127377066164245>`
	},
	{
		id: 15,
		emoji: '<:Pet_dark_core:324127377347313674>',
		chance: 5000,
		name: 'Dark Core',
		type: 'BOSS',
		altNames: ['CORP', 'CORE', 'DARKCORE', 'CORPBEAST'],
		formatFinish: num =>
			`You had to slay the Corporeal Beast ${fm(
				num
			)} times to get the Dark Core Pet! <:Pet_dark_core:324127377347313674>`
	},
	{
		id: 16,
		emoji: '<:Pet_general_graardor:324127377376673792>',
		chance: 5000,
		name: 'General Graardor Jr.',
		type: 'BOSS',
		altNames: ['BANDOS', 'GRAARDOR'],
		formatFinish: num =>
			`You had to kill General Graardor ${fm(
				num
			)} times to get the General Graardor Jr. Pet! <:Pet_general_graardor:324127377376673792>`
	},
	{
		id: 17,
		emoji: '<:Pet_kraken:324127377477206016>',
		chance: 3000,
		name: 'Kraken',
		type: 'BOSS',
		altNames: ['KRAKEN'],
		formatFinish: num =>
			`You had to slay the Kraken ${fm(
				num
			)} times to get the Kraken Pet! <:Pet_kraken:324127377477206016>`
	},
	{
		id: 18,
		emoji: '<:Pet_kreearra:324127377305239555>',
		chance: 5000,
		name: "Kree'arra Jr.",
		type: 'BOSS',
		altNames: ['KREE', 'ARMA', 'ARMADYL', 'KREEARRA'],
		formatFinish: num =>
			`You had to kill Kree'arra ${fm(
				num
			)} times to get the Kree'arra Pet! <:Pet_kreearra:324127377305239555>`
	},
	{
		id: 19,
		emoji: '<:Pet_kril_tsutsaroth:324127377527406594>',
		chance: 5000,
		name: "K'ril Tsutsaroth Jr.",
		type: 'BOSS',
		altNames: ['KRILL', 'ZAMMY', 'ZAMORAK', 'KRIL', 'ZAM'],
		formatFinish: num =>
			`You had to kill K'ril Tsutsaroth ${fm(
				num
			)} times to get the K'ril Tsutsaroth Pet! <:Pet_kril_tsutsaroth:324127377527406594>`
	},
	{
		id: 20,
		emoji: '<:Pet_penance_queen:324127377649303553>',
		chance: 1000,
		name: 'Pet Penance Queen',
		type: 'SPECIAL',
		altNames: ['PENANCE', 'PENANCEQUEEN', 'BARB'],
		formatFinish: num =>
			`You had to do ${fm(
				num
			)} High Level Gambles to get the Penance Queen Pet! <:Pet_penance_queen:324127377649303553>`
	},
	{
		id: 21,
		emoji: '<:Pet_smoke_devil:324127377493852162>',
		chance: 3000,
		name: 'Pet Smoke Devil',
		type: 'BOSS',
		altNames: ['SMOKEDEVIL', 'THERMY'],
		formatFinish: num =>
			`You had to kill ${fm(
				num
			)} Thermonuclear Smoke Devil's to get the Smoke Devil Pet! <:Pet_smoke_devil:324127377493852162>`
	},
	{
		id: 22,
		emoji: '<:Pet_snakeling:324127377816944642>',
		chance: 4000,
		name: 'Snakeling',
		type: 'BOSS',
		altNames: ['ZULRAH', 'SNAKELING'],
		formatFinish: num =>
			`You had to kill Zulrah ${fm(
				num
			)} times to get the Snakeling Pet! <:Pet_snakeling:324127377816944642>`
	},
	{
		id: 23,
		emoji: '<:Pet_zilyana:324127378248957952>',
		chance: 5000,
		name: 'Zilyana Jr.',
		type: 'BOSS',
		altNames: ['SARA', 'SARADOMIN', 'ZILLY', 'ZILYANA'],
		formatFinish: num =>
			`You had to kill Commander Zilyana ${fm(
				num
			)} times to get the Zilyana Jr. Pet! <:Pet_zilyana:324127378248957952>`
	},
	{
		id: 24,
		emoji: '<:Phoenix:324127378223792129>',
		chance: 5000,
		name: 'Phoenix',
		type: 'SPECIAL',
		altNames: ['PHOENIX', 'PHEONIX', 'WINTERTODT', 'FM'],
		formatFinish: num =>
			`You had to open ${fm(
				num
			)} Wintertodt Supply Crates to get the Phoenix Pet! <:Phoenix:324127378223792129>`
	},
	{
		id: 25,
		emoji: '<:Prince_black_dragon:324127378538364928>',
		chance: 3000,
		name: 'Prince Black Dragon',
		type: 'BOSS',
		altNames: ['KBD', 'KINGBLACKDRAGON', 'PRINCEBLACKDRAGON'],
		formatFinish: num =>
			`You had to kill the King Black Dragon ${fm(
				num
			)} times to get the Prince Black Dragon Pet! <:Prince_black_dragon:324127378538364928>`
	},
	{
		id: 26,
		emoji: '<:Rift_guardian_fire:324127378588827648>',
		chance: 1793283,
		name: 'Rift Guardian',
		type: 'SKILL',
		altNames: ['RC', 'RIFTGUARDIAN', 'RUNECRAFTING'],
		formatFinish: num =>
			`You had to craft ${fm(
				num
			)} Nature Runes to get the Rift Guardian Pet! <:Rift_guardian_fire:324127378588827648>`
	},
	{
		id: 27,
		emoji: '<:Rock_golem:324127378429313026>',
		chance: 244725,
		name: 'Rock Golem',
		type: 'SKILL',
		altNames: ['GOLEM', 'ROCKGOLEM', 'MINING'],
		formatFinish: num =>
			`You had to mine ${fm(
				num
			)} Paydirt at Motherlode Mine to get the Rock Golem Pet! <:Rock_golem:324127378429313026>`
	},
	{
		id: 28,
		emoji: '<:Rocky:324127378647285771>',
		chance: 254736,
		name: 'Rocky',
		type: 'SKILL',
		altNames: ['ROCKY', 'THIEVING', 'RACCOON'],
		formatFinish: num =>
			`You had to pickpocket that Ardougne Knight ${fm(
				num
			)} times to get the Rocky Pet! <:Rocky:324127378647285771> You also got...\n${xpEmoji} ${fm(
				num * 84
			)} XP\n${gpEmoji} ${fm(num * 100)} GP`
	},
	{
		id: 29,
		emoji: '<:Scorpias_offspring:324127378773377024>',
		chance: 2000,
		name: 'Scorpias Offspring',
		type: 'BOSS',
		altNames: ['SCORPIA', 'SCORPION'],
		formatFinish: num =>
			`You had to kill Scorpia ${fm(
				num
			)} times to get the Scorpia's Offspring Pet! <:Scorpias_offspring:324127378773377024>`
	},
	{
		id: 30,
		emoji: '<:Skotos:324127378890817546>',
		chance: 65,
		name: 'Skotos',
		type: 'BOSS',
		altNames: ['SKOTOS', 'SKOTIZO'],
		formatFinish: num =>
			`You had to kill Skotizo ${fm(
				num
			)} times to get the Skotos Pet! <:Skotos:324127378890817546>`
	},
	{
		id: 31,
		emoji: '<:Tangleroot:324127378978635778>',
		chance: 6893,
		name: 'Tangleroot',
		type: 'SKILL',
		altNames: ['FARMING', 'TANGLEROOT'],
		formatFinish: num =>
			`You had to harvest ${fm(
				num
			)} Magic Trees to get the Tangleroot Pet! <:Tangleroot:324127378978635778> You also got...\n${xpEmoji} ${fm(
				num * 13768.3
			)} XP\n${gpEmoji} -${fm(num * 116894)} GP`
	},
	{
		id: 32,
		emoji: '<:Tzrekjad:324127379188613121>',
		chance: 200,
		name: 'Tzrek-Jad',
		type: 'BOSS',
		altNames: ['JAD'],
		formatFinish: num =>
			`You had to kill Jad ${fm(
				num
			)} times to get the TzRek-Jad Pet! <:Tzrekjad:324127379188613121>`
	},
	{
		id: 33,
		emoji: '<:Venenatis_spiderling:324127379092144129>',
		chance: 2000,
		name: 'Venenatis Spiderling',
		type: 'BOSS',
		altNames: ['SPIDER', 'VENNY', 'VENENATIS', 'SPIDERLING'],
		formatFinish: num =>
			`You had to kill Venenatis ${fm(
				num
			)} times to get the Venenatis Spiderling Pet! <:Venenatis_spiderling:324127379092144129>`
	},
	{
		id: 34,
		emoji: '<:Vetion_jr:324127378999738369>',
		chance: 2000,
		name: 'Vetion Jr',
		type: 'BOSS',
		altNames: ['VETION'],
		formatFinish: num =>
			`You had to kill Vet'ion ${fm(
				num
			)} times to get the Vet'ion Jr. Pet! <:Vetion_jr:324127378999738369>`
	},
	{
		id: 35,
		emoji: '<:Abyssal_orphan:324127375774449664>',
		chance: 2560,
		name: 'Abyssal Orphan',
		type: 'BOSS',
		altNames: ['SIRE', 'ABYSSALSIRE', 'ABYSSALOPRHAN'],
		formatFinish: num =>
			`You had to kill the Abyssal Sire ${fm(
				num
			)} times to get the Abyssal orphan Pet! <:Abyssal_orphan:324127375774449664>`
	},
	{
		id: 36,
		emoji: '<:Hellpuppy:324127376185491458>',
		chance: 3000,
		name: 'Hellpuppy',
		type: 'BOSS',
		altNames: ['CERB', 'CERBERUS', 'HELLPUPPY'],
		formatFinish: num =>
			`You had to kill Cerberus ${fm(
				num
			)} times to get the Hellpuppy Pet! <:Hellpuppy:324127376185491458>`
	},
	{
		id: 37,
		emoji: '<:Chompy_chick:346196885859598337>',
		chance: 500,
		name: 'Chompy chick',
		type: 'SPECIAL',
		altNames: ['CHOMPYCHICK'],
		formatFinish: num =>
			`You had to kill ${fm(
				num
			)} Chompy Birds to get the Chompy Chick Pet! <:Chompy_chick:346196885859598337>`
	},
	{
		id: 38,
		emoji: '<:Jalnibrek:346196886119514113>',
		chance: 100,
		name: 'Jal-nib-rek',
		type: 'BOSS',
		altNames: ['INFERNO', 'JALNIBREK', 'NIBBLER'],
		formatFinish: num =>
			`You had to complete the Inferno ${fm(
				num
			)} times to get the Jal-Nib-Rek Pet! <:Jalnibrek:346196886119514113>`
	},
	{
		id: 39,
		emoji: '<:Herbi:357773175318249472>',
		chance: 6500,
		name: 'Herbi',
		type: 'SPECIAL',
		altNames: ['HERBIBOAR', 'HERBI'],
		formatFinish: num =>
			`You had to track down ${fm(
				num
			)} Herbiboars to get the Herbi Pet! <:Herbi:357773175318249472>`
	},
	{
		id: 40,
		emoji: '<:Vorki:400713309252222977>',
		chance: 3000,
		name: 'Vorki',
		type: 'SPECIAL',
		altNames: ['VORKI', 'VORKATH'],
		formatFinish: num =>
			`You had to slay the almighty Vorkath ${fm(
				num
			)} times to get the Vorki Pet! <:Vorki:400713309252222977>`
	},
	{
		id: 41,
		emoji: '<:Lil_zik:479460344423776266>',
		chance: 650,
		name: "Lil' Zik",
		type: 'BOSS',
		altNames: ['LILZIK', 'TOB', 'THEATREOFBLOOD', 'ZIK'],
		formatFinish: num =>
			`You had to complete the Theatre of Blood ${fm(
				num
			)} times to get the Lil' Zik pet! <:Lil_zik:479460344423776266>`
	},
	{
		id: 42,
		emoji: '<:Ikkle_hydra:534941897228156948>',
		chance: 3000,
		name: 'Ikkle hydra',
		type: 'BOSS',
		altNames: ['HYDRA', 'IKKLEHYDRA'],
		formatFinish: num =>
			`You had to slay the Alchemical Hydra ${fm(
				num
			)} times to get the Ikkle hydra pet! <:Ikkle_hydra:534941897228156948>`
	},
	{
		id: 43,
		emoji: '<:Smolcano:604670895113633802>',
		chance: 3000,
		name: 'Smolcano',
		type: 'BOSS',
		altNames: ['ZALCANO'],
		formatFinish: num =>
			`You had to take down Zalcano ${fm(
				num
			)} times to get the Smolcano pet! <:Smolcano:604670895113633802>`
	},
	{
		id: 44,
		emoji: '<:Youngllef:604670894798798858>',
		chance: 1000,
		name: 'Youngllef',
		type: 'BOSS',
		altNames: ['GAUNTLET', 'YOUNGLEF'],
		formatFinish: num =>
			`You had to complete the Gauntlet ${fm(
				num
			)} times to get the Youngllef pet! <:Youngllef:604670894798798858> This took you ${fm(
				num * 0.15
			)} hours.`
	},
	{
		id: 45,
		emoji: '<:Sraracha:608231007803670529>',
		chance: 3000,
		name: 'Sraracha',
		type: 'BOSS',
		altNames: ['SRARACHA', 'SARACHNIS', 'SARACH'],
		formatFinish: num =>
			`You had to kill Sarachnis ${fm(
				num
			)} times to get the Sraracha pet! <:Sraracha:608231007803670529>`
	}
];

for (const pet of pets) {
	pet.finish = () => {
		let count = 0;
		let hasPet = false;
		while (!hasPet) {
			count++;
			if (roll(pet.chance)) hasPet = true;
		}

		return count;
	};
}

module.exports = pets;
