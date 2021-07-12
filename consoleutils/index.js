const fs = require('fs')
const out = fs.createWriteStream('./out.log')
const err = fs.createWriteStream('./err.log')

const console2 = new console.Console(out, err)

setInterval(function () {
    console2.log(new Date())
    console2.error(new Error('Whoops'))
}, 5000)

// console.log('One %s', 'thing') vs util.format('One %s', thing)
// console.log(module) vs util.inspect(module)
// console.trace()
// cosnole.assert()
//util.debuglog