/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/

/**
 * Motor directions
 */
enum cpeMotor {
    //% block="Forward"
    Forward,
    //% block="Backward"
    Backward
}

/**
 * Turn directions
 */
enum cpeTurn {
    //% block="Left"
    Left,
    //% block="Right"
    Right
}

/**
 * Spin directions
 */
enum cpeSpin {
    //% block="Left"
    Left,
    //% block="Right"
    Right
}

/**
* Custom motor control blocks for CPE_PNU
*/
//% block="CPE PNU" weight=100 color=#FFA500 icon="\uf085"
namespace cpe_pnu {

    /**
    * Drive both motors forward or backward with the same speed.
    * @param Motor Direction to move, eg: cpeMotor.Forward
    * @param speed Speed (0 to 100), eg: 50
    */
    //% block
    //% speed.min=0 speed.max=100
    export function Motor(Motor: cpeMotor, speed: number): void {
        let motorspeed = pins.map(speed, 0, 100, 0, 1023)

        if (Motor == cpeMotor.Forward) {
            pins.digitalWritePin(DigitalPin.P13, 1)
            pins.analogWritePin(AnalogPin.P14, motorspeed)
            pins.digitalWritePin(DigitalPin.P15, 0)
            pins.analogWritePin(AnalogPin.P16, motorspeed)
        }
        else if (Motor == cpeMotor.Backward) {
            pins.digitalWritePin(DigitalPin.P13, 0)
            pins.analogWritePin(AnalogPin.P14, motorspeed)
            pins.digitalWritePin(DigitalPin.P15, 1)
            pins.analogWritePin(AnalogPin.P16, motorspeed)
        }
    }

    /**
    * Drive both motors with individual speeds forward or backward.
    * @param Motor Direction to move, eg: cpeMotor.Forward
    * @param speed1 Speed for motor1 (0 to 100), eg: 50
    * @param speed2 Speed for motor2 (0 to 100), eg: 50
    */
    //% block
    //% speed1.min=0 speed1.max=100
    //% speed2.min=0 speed2.max=100
    export function Motor2(Motor: cpeMotor, speed1: number, speed2: number): void {
        let motorspeed1 = pins.map(speed1, 0, 100, 0, 1023)
        let motorspeed2 = pins.map(speed2, 0, 100, 0, 1023)

        if (Motor == cpeMotor.Forward) {
            pins.digitalWritePin(DigitalPin.P13, 1)
            pins.analogWritePin(AnalogPin.P14, motorspeed1)
            pins.digitalWritePin(DigitalPin.P15, 0)
            pins.analogWritePin(AnalogPin.P16, motorspeed2)
        }
        else if (Motor == cpeMotor.Backward) {
            pins.digitalWritePin(DigitalPin.P13, 0)
            pins.analogWritePin(AnalogPin.P14, motorspeed1)
            pins.digitalWritePin(DigitalPin.P15, 1)
            pins.analogWritePin(AnalogPin.P16, motorspeed2)
        }
    }

    /**
    * Turn the robot by running one motor.
    * @param Turn Direction to turn, eg: cpeTurn.Left
    * @param speed Speed (0 to 100), eg: 50
    */
    //% block
    //% speed.min=0 speed.max=100
    export function Turn(Turn: cpeTurn, speed: number): void {
        let motorspeed = pins.map(speed, 0, 100, 0, 1023)

        if (Turn == cpeTurn.Left) {
            pins.digitalWritePin(DigitalPin.P13, 1)
            pins.analogWritePin(AnalogPin.P14, 0)
            pins.digitalWritePin(DigitalPin.P15, 0)
            pins.analogWritePin(AnalogPin.P16, motorspeed)
        }
        else if (Turn == cpeTurn.Right) {
            pins.digitalWritePin(DigitalPin.P13, 1)
            pins.analogWritePin(AnalogPin.P14, motorspeed)
            pins.digitalWritePin(DigitalPin.P15, 0)
            pins.analogWritePin(AnalogPin.P16, 0)
        }
    }

    /**
    * Spin the robot in place (left or right).
    * @param Spin Direction to spin, eg: cpeSpin.Left
    * @param speed Speed (0 to 100), eg: 50
    */
    //% block
    //% speed.min=0 speed.max=100
    export function Spin(Spin: cpeSpin, speed: number): void {
        let motorspeed = pins.map(speed, 0, 100, 0, 1023)

        if (Spin == cpeSpin.Left) {
            pins.digitalWritePin(DigitalPin.P13, 0)
            pins.analogWritePin(AnalogPin.P14, motorspeed)
            pins.digitalWritePin(DigitalPin.P15, 0)
            pins.analogWritePin(AnalogPin.P16, motorspeed)
        }
        else if (Spin == cpeSpin.Right) {
            pins.digitalWritePin(DigitalPin.P13, 1)
            pins.analogWritePin(AnalogPin.P14, motorspeed)
            pins.digitalWritePin(DigitalPin.P15, 1)
            pins.analogWritePin(AnalogPin.P16, motorspeed)
        }
    }

    /**
    * Stop both motors.
    */
    //% block
    export function MotorStop(): void {
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.analogWritePin(AnalogPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 1)
        pins.analogWritePin(AnalogPin.P16, 0)
    }
}
