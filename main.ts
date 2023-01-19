input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . . . .
        # # . # #
        # . . # .
        . . . . .
        # # # # #
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        # # . # #
        . # . # .
        . . . . .
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        # # . # #
        . # . # .
        . . . . .
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        # # . # #
        . # . # .
        . . . . .
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        # # . # #
        . # . # .
        . . . . .
        # # # # #
        `)
    basic.showLeds(`
        # # . # .
        . # . # #
        . . . # .
        . . . . .
        # # # # #
        `)
    basic.showLeds(`
        # # . # .
        . # . # #
        . . . # .
        . . . . .
        # # # # #
        `)
    basic.showLeds(`
        # # . # .
        . # . # #
        . . . # .
        . . . . .
        # # # # #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . #
        # # . # #
        . # . . #
        . . . . .
        # # # # #
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . # . . #
        . . . . .
        # # # # #
        # . . . #
        `)
    basic.showLeds(`
        . # . . #
        . . . . .
        . . . . .
        # # # # #
        # . . . #
        `)
    basic.showLeds(`
        # . . # .
        . . . . .
        . . . . .
        # # # # #
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        # . . # .
        . . . . .
        # # # # #
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        . # . . #
        . . . . .
        # # # # #
        # . . . #
        `)
    basic.showLeds(`
        . # . . #
        . . . . .
        . . . . .
        # # # # #
        # . . . #
        `)
    basic.showLeds(`
        # . . . #
        # . . . #
        . . . . .
        # # # # #
        # . . . #
        `)
    basic.showLeds(`
        # . . . #
        # # . # #
        . . . . .
        . # # # .
        # . . . #
        `)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showLeds(`
        # . . . .
        . . . . .
        # # . # #
        . . . . .
        # # # # #
        `)
    basic.showLeds(`
        # . # . .
        . . . . .
        # # . # #
        . . . . .
        # # # # #
        `)
    basic.showLeds(`
        # . # . #
        . . . . .
        # # . # #
        . . . . .
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . # #
        . . . . .
        # # # # #
        `)
    basic.showLeds(`
        # . . . .
        . . . . .
        # # . # #
        . . . . .
        # # # # #
        `)
    basic.showLeds(`
        # . # . .
        . . . . .
        # # . # #
        . . . . .
        # # # # #
        `)
    basic.showLeds(`
        # . # . #
        . . . . .
        # # . # #
        . . . . .
        # # # # #
        `)
})
basic.showLeds(`
    # # . # #
    # # . # #
    . . . . .
    # # # # #
    . # # # .
    `)
