const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  const numericKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!");
    process.exit();
  } else if (key === 'b') {
    process.stdout.write('beep!');
  } else if (numericKeys.includes(key)) {
    process.stdout.write(`setting timer for ${key} seconds...`);
    setTimeout(() => {
      process.stdout.write('beep!');
    }, Number(key) * 1000);
  }
  
});

console.log('after callback');
