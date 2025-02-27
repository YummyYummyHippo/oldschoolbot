const { Task } = require('klasa');

const pets = require('../../data/pets');
const { roll } = require('../../config/util');

module.exports = class extends Task {
	async run(msg, triviaCorrect) {
		const user = msg.author;
		const member = await this.client.guilds
			.get('342983479501389826')
			.members.fetch(user)
			.catch(() => null);

		let amount = Math.floor(Math.random() * 5000000) + 500000;
		let bonuses = '';

		const currentDate = new Date();
		if (currentDate.getDay() === 6 || currentDate.getDay() === 0) {
			amount *= 2;
			bonuses += '<:MoneyBag:493286312854683654>';
		}

		if (member) {
			amount = Math.floor(amount * 1.5);
			bonuses += ' <:OSBot:601768469905801226>';
		}

		if (roll(5000)) {
			if (roll(2)) {
				bonuses += ' <:bpaptu:647580762098368523>';
			} else {
				amount += 1000000000;
			}
		}

		if (!triviaCorrect) {
			amount = Math.floor(amount * 0.5);
		}

		let chStr = `${bonuses} ${
			user.username
		} just got their daily and received ${amount.toLocaleString()} GP! <:Smiley:420283725469974529>`;

		const correct = triviaCorrect ? 'correctly' : 'incorrectly';

		let dmStr = `${bonuses} You answered **${correct}** and received...\n`;

		if (triviaCorrect && roll(13)) {
			const pet = pets[Math.floor(Math.random() * pets.length)];
			const userPets = user.settings.get('pets');
			if (!userPets[pet.id]) userPets[pet.id] = 1;
			else userPets[pet.id]++;

			user.settings.update('pets', { ...userPets });

			chStr += `\nThey also received the **${pet.name}** pet! ${pet.emoji}`;
			dmStr += `\n**${pet.name}** pet! ${pet.emoji}`;
		}

		this.client.channels.get('469523207691436042').send(chStr);

		const gpImage = this.client.commands.get('bank').generateImage(amount);

		msg.send(dmStr, gpImage).catch(() => null);
		user.settings.update('GP', user.settings.get('GP') + amount);
	}
};
