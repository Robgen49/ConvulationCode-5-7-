var convulationEncode = require('./encode/convulation.encode')
var convulationDecode = require('./decode/convulation.decode')

console.log(convulationEncode('11011').join``)
console.log(convulationDecode(['11', '01', '01', '00', '01']))