const { rand } = require('../../../config/util');

module.exports = class LootTable {
	constructor(limit) {
		this.table = [];
		this.length = 0;
		this.totalWeight = 0;
		this.limit = limit;
	}

	addMany(arrayOfItems) {
		for (const item of arrayOfItems) {
			this.add(...item);
		}
		return this;
	}

	add(item, weight, quantity) {
		// eslint-disable-next-line eqeqeq
		if (weight == null || weight <= 0) weight = 1;
		// eslint-disable-next-line eqeqeq
		if (quantity == null || quantity <= 0) quantity = 1;

		this.length += 1;
		this.totalWeight += weight;

		this.table.push({
			item,
			weight,
			quantity
		});

		return this;
	}
	
	roll() {
		// If this loot table has no items, return null;
		if (this.length === 0) return null;

		// Random number between 1 and the total weighting
		const randomWeight = rand(1, this.limit || this.totalWeight);

		if (randomWeight > this.totalWeight) return null;

		// The index of the item that will be used.
		let result;
		let weight = 0;

		for (let i = 0; i < this.table.length; i++) {
			const item = this.table[i];

			weight += item.weight;
			if (randomWeight <= weight) {
				result = i;
				break;
			}
		}

		const chosenItem = this.table[result];

		if (chosenItem.item === undefined) return null;

		return {
			item: chosenItem.item,
			quantity:
				typeof chosenItem.quantity === 'function'
					? chosenItem.quantity()
					: chosenItem.quantity
		};
	}
	addRDT(weight) {
		/* runes and ammunition */
		this.add(Items.natureRune, weight / 42.67, 67)
		this.add(Items.adamantJavelin, weight / 64, 20)
		this.add(Items.deathRune, weight / 64, 45)
		this.add(Items.lawRune, weight / 64, 45)
		this.add(Items.runeArrow, weight / 64, 42)
		this.add(Items.steelArrow, weight / 64, 150)

		/* weapons & armor */
		this.add(Items.rune2hSword, weight / 42.67)
		this.add(Items.runeBattleaxe, weight / 42.67)
		this.add(Items.runeSqShield, weight / 64)
		this.add(Items.dragonMedHelm, weight / 128)
		this.add(Items.runeKiteshield, weight / 128)

		/* other */
		this.add(Items.coins, weight / 6.095, 3000)
		this.add(Items.loopHalfOfKey, weight / 6.4)
		this.add(Items.toothHalfOfKey, weight / 6.4)
		this.add(Items.runiteBar, weight / 25.6)
		this.add(Items.dragonstone, weight / 64)
		this.add(Items.silverOre, weight / 64, 100)

		/* subtables */

		// gem table

		this.add(Items.uncutSapphire, weight / 42.67, 67)
		this.add(Items.uncutEmerald, weight / 42.67, 67)
		this.add(Items.uncutRuby, weight / 42.67, 67)
		this.add(Items.natureTalisman, weight / 42.67, 67)
		this.add(Items.uncutDiamond, weight / 42.67, 67)
		this.add(Items.runeJavelin, weight / 42.67, 67)
		this.add(Items.uncutDiamond, weight / 42.67, 67)
		this.add(Items.uncutDiamond, weight / 42.67, 67)
		this.add(Items.uncutDiamond, weight / 42.67, 67)
		this.add(Items.uncutDiamond, weight / 42.67, 67)
		this.add(Items.uncutDiamond, weight / 42.67, 67)
		this.add(Items.uncutDiamond, weight / 42.67, 67)
		this.add(Items.uncutDiamond, weight / 42.67, 67)

		}
	}
};
