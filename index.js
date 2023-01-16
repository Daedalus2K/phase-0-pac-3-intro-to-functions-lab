function shout(string){
    return string.toUpperCase();
} //console.log(shout)

function whisper(string){
    return string.toLowerCase();
} //console.log(whisper)

function logShout(string) {
    string
    console.log(string.toUpperCase())
} //console.log(logShout)
  
function logWhisper(string) {
    string
    console.log(string.toLowerCase())
} //console.log(logWhisper)

function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        return "I can't hear you!"
}   if (string === string.toUpperCase()) {
        return "YES INDEED!"
}   if (string === `Let's have dinner together!`)
        return "I would love to!";
}   console.log(sayHiToHeadphonedRoommate)


/*
VARIATION:

function sayHiToHeadphonedRoommate(string) {
    if(string === string.toLowerCase()) {
        return "I can't hear you!";
    }
        else if (string === string.toUpperCase()) {
            return "YES INDEED!";
        }    
            else if (string === "Let's have dinner together!") {
                return "I would love to!";
            }
} console.log(sayHiToHeadphonedRoommate)*/

/*Example of nested "if" Statements
if (age >= 16) {
  canWork = true;

  if (age >= 18) {
    isAdult = true;
    canEnlist = true;

    if (age >= 21) {
      canDrink = true;
    }
  }
} 
*/
