let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnersAge = 18;

if (runnersAge > 18 && registeredEarly) {
  raceNumber += 1000;
}

if (runnersAge > 18 && registeredEarly) {
  console.log(`${raceNumber}, you will race at 9:30 am`);
} else if (runnersAge > 18 && !registeredEarly) {
  console.log(`${raceNumber}, you will race at 11:30 am`);
} else if (runnersAge < 18) {
  console.log(`${raceNumber}, you will race at 12:30`);
} else {
  console.log('Please see the registration desk')
}
