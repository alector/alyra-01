const getRandomInt = (max) => {
	return Math.floor(Math.random() * max);
};

// the purpose of this function is to find what options
// we can remove from the player
// given that the player has already chosen `selectedIndexByPlayer`
// Then the game will randomly remove one of these options
const CanRemoveIndexes = (doors, selectedIndexByPlayer) => {
	const possible_indexes_to_remove = doors.reduce(function (
		finalArray,
		door,
		index
	) {
		if (door === "empty" && index !== selectedIndexByPlayer) {
			finalArray.push(index);
		}

		return finalArray;
	},
	[]);

	return possible_indexes_to_remove;
};

const play = (printOption = true) => {
	let msg = "\n-------------------------------------\nNEW GAME\n\n";

	const doors = ["empty", "empty", "empty"]; // initially every door is empty
	const giftIndex = getRandomInt(3);

	// place a gift in a random door
	doors[giftIndex] = "gift";

	msg += `What the doors hide: [ ${doors.join(", ")} ]`;
	msg += `\nThe player has to select indexes 0,1 or 2`;

	// console.log({ doors });
	const selectedIndexByPlayer = getRandomInt(3);
	msg += `\nselectedIndexByPlayer: ${selectedIndexByPlayer}`;

	let initialChoiceWins = false;
	if (selectedIndexByPlayer == giftIndex) {
		initialChoiceWins = true;
		msg += `\n>> 🎁 The player selected a gift. If he changes his option he loses the gift)`;
	} else {
		msg += `\n>> ⚑ The player selected an empty door. He has to change his option to win the gift)`;
	}

	const can_remove_doorIndexes = CanRemoveIndexes(
		doors,
		selectedIndexByPlayer
	);
	msg += `\n\ncan_remove_doorIndexes: [ ${can_remove_doorIndexes.join(
		", "
	)} ]`;

	const randomIndex = getRandomInt(can_remove_doorIndexes.length);
	const doorIndexToRemove = can_remove_doorIndexes[randomIndex];
	doors[doorIndexToRemove] = "removed_option";

	if (can_remove_doorIndexes.length == 1) {
		msg +=
			"\nMonty Hall will now remove the only empty option available. The other empty option is already selected by the player";
	} else {
		msg +=
			"\nMonty Hall will now remove one of the two empty options available";
	}
	msg += `\n\doors: [ ${doors.join(", ")} ]`;

	const changeChoiceWins = initialChoiceWins ? false : true;

	msg += `\n\ninitialChoiceWins: ${initialChoiceWins}`;
	msg += `\nchangeChoiceWins: ${changeChoiceWins}`;

	if (printOption) {
		console.log(msg);
	}

	return changeChoiceWins;
};

const gameStatistics = (times) => {
	let changeWinsTotal = 0;

	for (let i = 0; i <= times; i++) {
		changeChoiceWins = play(false);
		if (changeChoiceWins) {
			changeWinsTotal++;
		}
	}
	const percentage_wins_if_change = (changeWinsTotal * 100) / times;

	const msg = `\n\n\n===================\nGAME STATISTICS\n\n\nAfter repeating the game ${times} times, we cocnluded that by changing the option the percentage of winning is ${percentage_wins_if_change} %`;

	console.log(msg);
};

play(true);
play(true);
play(true);
play(true);
play(true);
play(true);
play(true);
play(true);
play(true);

gameStatistics((times = 100));
