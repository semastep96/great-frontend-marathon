let userMessage = 'hi';

let echoBotStatus = 'work';

if (userMessage && echoBotStatus === 'work') {
    console.log(`\nYou: ${userMessage}\nEchoBot: ${userMessage}`);
} else if (echoBotStatus !== 'work') {
    console.log(`\nSorry i'am ${echoBotStatus}`);
} else if (!userMessage) {
    console.log('\nSorry i can\'t understand your message :\\');
} else {
    console.log('\nwhat\'s going on?');
}

echoBotStatus = 'paused';

if (userMessage && echoBotStatus === 'work') {
    console.log(`\nYou: ${userMessage}\nEchoBot: ${userMessage}`);
} else if (echoBotStatus !== 'work') {
    console.log(`\nSorry i'am ${echoBotStatus}`);
} else if (!userMessage) {
    console.log('\nSorry i can\'t understand your message :\\');
} else {
    console.log('\nwhat\'s going on?');
}

echoBotStatus = 'work';

userMessage = '';

if (userMessage && echoBotStatus === 'work') {
    console.log(`\nYou: ${userMessage}\nEchoBot: ${userMessage}`);
} else if (echoBotStatus !== 'work') {
    console.log(`\nSorry i'am ${echoBotStatus}`);
} else if (!userMessage) {
    console.log('\nSorry i can\'t understand your message :\\');
} else {
    console.log('\nwhat\'s going on?');
}

userMessage = "you're great like marathon!!!";

if (userMessage && echoBotStatus === 'work') {
    console.log(`\nYou: ${userMessage}\nEchoBot: ${userMessage}`);
} else if (echoBotStatus !== 'work') {
    console.log(`\nSorry i'am ${echoBotStatus}`);
} else if (!userMessage) {
    console.log('\nSorry i can\'t understand your message :\\');
} else {
    console.log('\nwhat\'s going on?');
}

