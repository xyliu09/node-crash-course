const dgram = require('dgram')

// Server
const server = dgram.createSocket('udp4')

server.on('listening', () => console.log('UDP Server listening'))

server.on('message', (msg, rinfo) => {
    console.log(`${rinfo.address}:${rinfo.port} - ${msg}`)
})

const PORT = 3333
const HOST = '127.0.0.1'
server.bind(PORT, HOST)

// Client 

const client = dgram.createSocket('udp4') 
const msg = Buffer.from('Plurasight rocks')

client.send(msg, 0, msg.length, PORT, HOST, (err) => {
    if (err) throw err
    console.log('UDP message sent')
    client.close()
})

// setInterval( function() {
//     const client = dgram.createSocket('udp4') 
//     // every time you create a new socket, it will use a different port
//     client.send('Plurasight rocks', PORT, HOST, (err) => {
//         if (err) throw err
//         console.log('UDP message sent')
//         client.close()
//     })
// }, 1000)
