function Start () {
    Input = 0
    X1 = 0
    X2 = 0
    Y1 = 0
    Y2 = 0
    Answer = 0
    B = 0
    M = 0
    basic.showString("X1",100)
}
input.onButtonPressed(Button.A, function () {
    if (Input == 0) {
        X1 = X1 - 1
        basic.showNumber(X1,100)
    } else if (Input == 1) {
        X2 = X2 - 1
        basic.showNumber(X2,100)
    } else if (Input == 2) {
        Y1 = Y1 - 1
        basic.showNumber(Y1,100)
    } else if (Input == 3) {
        Y2 = Y2 - 1
        basic.showNumber(Y2,100)
    }
})
input.onButtonPressed(Button.AB, function () {
    Input = Input + 1
    if (Input == 1) {
        basic.showString("X2")
    } else if (Input == 2) {
        basic.showString("Y1")
    } else if (Input == 3) {
        basic.showString("Y2")
    } else {
        M = (Y2 - Y1) / (X2 - X1)
        B = Y1 - M * X1
        basic.showString("Y=" + M + "x+" + B,100)
    }
})
input.onButtonPressed(Button.B, function () {
    if (Input == 0) {
        X1 = X1 + 1
        basic.showNumber(X1,100)
    } else if (Input == 1) {
        X2 = X2 + 1
        basic.showNumber(X2,100)
    } else if (Input == 2) {
        Y1 = Y1 + 1
        basic.showNumber(Y1,100)
    } else if (Input == 3) {
        Y2 = Y2 + 1
        basic.showNumber(Y2,100)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Start()
})
let M = 0
let B = 0
let Answer = 0
let Y2 = 0
let Y1 = 0
let X2 = 0
let X1 = 0
let Input = 0
Start()
