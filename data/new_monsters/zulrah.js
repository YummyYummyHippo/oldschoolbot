const { roll, rand } = require('../../config/util');
const Items = require('./utils/commonLoot');
const LootTable = require('./utils/LootTable');

const drops = {
	uniques: [6571, 12932, 12927, 12922],
	mutagens: [13200, 13201],
	pet: 12921,
	jarOfSwamp: 12936,
	scales: 12934
};

const randomUnique = () => drops.uniques[Math.floor(Math.random() * drops.uniques.length)];
const randomMutagen = () => drops.mutagens[Math.floor(Math.random() * drops.mutagens.length)];

/* Loot table has exactly 1024 weighting to be consistent with unique rolls, using drop rates from wiki and converting into 1024. */
const NormalTable = new LootTable()
	/* Unqiues */
	.add(drops.uniques[0], 1)
	.add(drops.uniques[1], 1)
	.add(drops.uniques[2], 1)
	.add(drops.uniques[3], 1)
	/* Armour & Weapons */
	.add(Items.dragonMedHelm, 	1024/124)
	.add(Items.dragonHalberd, 	1024/124)
	.add(Items.battlestaff, 	1024/24.8,	 10)
	/* Runes */
	.add(Items.lawRune, 		1024/20.67, 	200)
	.add(Items.chaosRune, 		1024/20.67, 	500)
	.add(Items.deathRune, 		1024/20.67, 	300)
	/* Herbs */
	.add(Items.snapdragon, 		1024/124, 	10)
	.add(Items.dwarfWeed,		1024/124, 	30)
	.add(Items.torstol, 		1024/124,	25)
	.add(Items.toadflax,		1024/124, 	10)
	/* Materials */
	.add(Items.snakeskin, 		1024/22.55, 	35)
	.add(Items.runiteOre,	 	1024/22.55,	2)
	.add(Items.pureEssence, 	1024/24.8, 	1500)
	.add(Items.flax,		1024/24.8, 	1000)
	.add(Items.yewLogs, 		1024/24.8, 	35)
	.add(Items.adamantiteBar, 	1024/31, 	20)
	.add(Items.coal, 		1024/31, 	200)
	.add(Items.dragonBones, 	1024/31, 	12)
	.add(Items.mahoganyLogs, 	1024/31, 	50)
	/* Seeds */
	.add(Items.palmTreeSeed, 	1024/41.33)
	.add(Items.papayaTreeSeed,	1024/41.33,	3)
	.add(Items.calquatTreeSeed, 	1024/41.33, 	2)
	.add(Items.magicSeed,		1024/62)
	.add(Items.toadflaxSeed, 	1024/124, 	2)
	.add(Items.snapdragonSeed, 	1024/124)
	.add(Items.dwarfWeedSeed, 	1024/124, 	2)
	.add(Items.torstolSeed, 	1024/124)
	.add(Items.spiritSeed, 		1024/248)
	/* Other */
	.add(Items.zulAndraTeleport, 	1024/16.53, 	4)
	.add(Items.mantaRay, 		1024/20.67, 	12)
	.add(Items.antidote24, 		1024/27.56, 	10)
	.add(Items.dragonstoneBoltTips, 1024/31, 	12)
	.add(Items.grapes, 		1024/41.33, 	250)
	.add(Items.coconut, 		1024/49.6, 	20)
	.add(Items.swampTar,		1024/49.6, 	1000)
	.add(drops.scales, 		1024/49.6, 	500)
	/* RDT */
	.addRDT(1024/248 * 9);

const zulrah = {
	kill(quantity) {
		const loot = {};

		function addLoot(item, quantityToAdd = 1) {
			if (!loot[item]) loot[item] = quantityToAdd;
			else loot[item] += quantityToAdd;
		}

		for (let i = 0; i < quantity; i++) {
			if (roll(5000) === 1) addLoot(drops.pet);
			
			if (roll(3277)) addLoot(randomMutagen());
			if (roll(3000)) addLoot(drops.jarOfSwamp);
			if (roll(128)) addLoot(randomUnique());

			const firstRoll = NormalTable.roll();
			if (firstRoll.item === Items.flax)
				if(roll(2564) <= 20) {//roll for mutagen
					firstRoll.item = randomMutagen();
					firstRoll.quantity = 1;
				}

			const secondRoll = NormalTable.roll();
			if (secondRoll.item === Items.flax)
				if(roll(2564) <= 20) {//roll for mutagen
					secondRoll.item = randomMutagen();
					secondRoll.quantity = 1;
				}

			addLoot(firstRoll.item, firstRoll.quantity);
			addLoot(secondRoll.item, secondRoll.quantity);
			addLoot(drops.scales, rand(100, 299));
		}

		return loot;
	}
};

module.exports = zulrah;
