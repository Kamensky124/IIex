// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
//     If the function is passed a valid PIN string, return true, else return false.
// Test.assertEquals(validatePIN("1"),false, "Wrong output for '1'")
// Test.assertEquals(validatePIN("12"),false, "Wrong output for '12'")
// Test.assertEquals(validatePIN("123"),false, "Wrong output for '123'")
// Test.assertEquals(validatePIN("12345"),false, "Wrong output for '12345'")
// Test.assertEquals(validatePIN("1234567"),false, "Wrong output for '1234567'")
// Test.assertEquals(validatePIN("-1234"),false, "Wrong output for '-1234'")
// Test.assertEquals(validatePIN("1.234"),false, "Wrong output for '1.234'")
// Test.assertEquals(validatePIN("-1.234"),false, "Wrong output for '-1.234'")
// Test.assertEquals(validatePIN("00000000"),false, "Wrong output for '00000000'")

function validatePIN(pin) {
    // console.log(pin.length)
    if (pin.length !== 4) {
        return false
    }
    pin = pin.split('')
    console.log(pin)
    for (let i = 0; i < pin.length; i++) {
        console.log(typeof (pin[i]))
        // typeof (pin) == 'number'
        return true
    }
}
console.log(validatePIN('1'))
console.log(validatePIN("-1234"))
console.log(validatePIN("1234"))
