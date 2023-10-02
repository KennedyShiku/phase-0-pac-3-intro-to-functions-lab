function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  const spy = string.toUpperCase();
  console.log('HELLO');

}

logShout('hello');

function logWhisper(string) {
  const spy = string.toLowerCase();
  console.log('hello');

}

logShout('HELLO');

function sayHiToHeadphonedRoommate(string) {
  if (string.toLowerCase() === string) {
    return "I can't hear you!";
  } else if (string.toUpperCase() === string) {
    return "YES INDEED!";
  } else if (string === "Let's have dinner together!") {
    return "I would love to!";
  } else {
    return "Response for other cases";
  }
}
