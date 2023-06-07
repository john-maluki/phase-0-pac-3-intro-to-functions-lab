/**
 * receives one argument and returns it in all caps
 */
function shout(str) {
  return `${str}`.toUpperCase();
}

/**
 * receives one argument and returns it in all lowercase
 * @param {*} str
 * @returns lowercased string
 */
function whisper(str) {
  return `${str}`.toLowerCase();
}

/**
 * takes a string argument and logs it in all caps using console.log()
 * @param {*} str
 */
function logShout(str) {
  console.log(`${str}`.toUpperCase());
}

/**
 * takes a string argument and logs it in all lowercase using console.log()
 * @param {*} str
 */
function logWhisper(str) {
  console.log(`${str}`.toLowerCase());
}

function sayHiToHeadphonedRoommate(str) {
  switch (str) {
    case str.toLowerCase():
      return "I can't hear you!";
    case str.toUpperCase():
      return "YES INDEED!";
    case "Let's have dinner together!":
      return "I would love to!";
  }
}
