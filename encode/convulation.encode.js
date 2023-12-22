var map = require('../map')

module.exports = function convulationEncode(input) {

    // input = input.concat('00')

    var state = '00'

    var code = []

    input.split``.forEach(bit => {

        code.push(map[state][bit].code)

        state = map[state][bit].state

    })

    return code
}