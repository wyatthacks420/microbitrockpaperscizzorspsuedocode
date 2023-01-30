input.onButtonPressed(Button.A, function () {
    basic.showString("a")
    playerA += 1
    rounds += 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("t")
    tie += 1
    rounds += 1
})
input.onButtonPressed(Button.B, function () {
    basic.showString("b")
    playerB += 1
    rounds += 1
})
input.onGesture(Gesture.Shake, function () {
	
})
function justShowTheSCOREBOARD () {
    OLED.clear()
    OLED.writeStringNewLine("PlayerA: " + playerA)
    OLED.newLine()
    OLED.writeStringNewLine("PlayerB: " + playerB)
    OLED.newLine()
    OLED.writeStringNewLine("Ties:" + tie)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds:" + rounds)
}
let rounds = 0
let tie = 0
let playerB = 0
let playerA = 0
OLED.init(128, 64)
playerA = 0
playerB = 0
tie = 0
rounds = 0
OLED.writeStringNewLine("Let's play a game... have you heard of, \"rock, paper, scissors?\"")
basic.pause(3000)
justShowTheSCOREBOARD()
