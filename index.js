function shout(string) {
return string.toUpperCase()
}
function whisper(string){
  return string.toLowerCase()
}
function spy(string) {
  console.log("HELLO")
}
function logShout(string) {
  spy("HELLO")
}
function spyOn(string){
  console.log('hello')
}
function logWhisper(string) {
  spyOn('hello')
}
function sayHiToGrandma(whisper) {
  whisper("hello")
}
function sayHitoGrandma(shout) {
  shout("hello")
}
function love(){
  console.log("I love you, Grandma.")
}
function sayHiToGrandma(love) {
  console.log("I love you, Grandma.")
}

if ("hello") {
  "I can't hear you!"
}
if ("HELLO") {
  "YES INDEED!"
}
if ("I love you, Grandma.") {
  "I love you, too."
}
