
const timer = (arr) => {
  let x, y, times;
  [x, y, ...times] = arr;
  let sorted = times.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < sorted.length; i++) {
    sorted[i] <= 0 || !Number(sorted[i]) ? null :
      setTimeout(() => {
        process.stdout.write('beep');
      }, sorted[i] * 1000);
  }
};

timer(process.argv);
