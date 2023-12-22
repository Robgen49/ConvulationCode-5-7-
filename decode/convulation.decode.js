var map = require('../map.js')
var hamming_distance = require('./hamming_distance.js')

module.exports = function convulationDecode(input) {

    var edges = []

    var len = input.length

    find('00', 0)

    function find(state, i) {
        if (i >= len) {
            return
        }

        for (var index = 0; index < 2; index++) {
            var bool = String(index)
            var nextCode = map[state][bool].code
            var nextState = map[state][bool].state
            var metrik = hamming_distance(input[i].split``, nextCode.split``)
            edges.push(`{"from":"${state}","to":"${nextState}","index":"${i}","code":"${nextCode}","input":"${input[i]}","value":"${bool}", "metrik":${metrik}}`)
            find(nextState, i + 1)
        }
    }

    var paths = []
    var path = []

    edges.forEach((e, i) => {
        path.push(e)
        if (+JSON.parse(e).index === len - 1) {
            paths.push([...path])
            if (edges.length > i + 1)
                for (let j = 0; j < len - (+JSON.parse(edges[i + 1]).index); j++) {
                    path.pop()
                }
        }
    })

    var sum = 0
    paths.forEach((path, i) => {
        sum = 0
        path.forEach(item => {
            sum += JSON.parse(item).metrik
        })
        paths[i].push(sum)
    })

    paths.sort((a, b) => a.at(-1) - b.at(-1))

    // console.log(paths)

    return paths[0].reduce((acc, item) => {
        if (typeof item === 'string') {
            acc += JSON.parse(item).value
        }
        return acc
    }, '')

}