input.onPinPressed(TouchPin.P2, function () {
    for (let _1 = 0; _1 <= 4; _1++) {
        sound = sound + 25
    }
    music.playTone(sound, music.beat(BeatFraction.Sixteenth))
    basic.showIcon(IconNames.SmallHeart)
})
input.onPinPressed(TouchPin.P1, function () {
    for (let _1 = 0; _1 <= 4; _1++) {
        sound = sound + 25
    }
    music.playTone(sound, music.beat(BeatFraction.Sixteenth))
    basic.showIcon(IconNames.SmallHeart)
})
let sound = 0
sound = 349
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P1)) {
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P11, 0)
        pins.digitalWritePin(DigitalPin.P9, 0)
    }
})
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P2)) {
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P11, 0)
        pins.digitalWritePin(DigitalPin.P9, 0)
    }
})