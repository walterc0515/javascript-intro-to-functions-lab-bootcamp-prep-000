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
