const fs = require('fs')
const path = require('path')
const dirname = path.join(__dirname, 'files')


const files= fs.readdirSync(dirname)

files.forEach(file => {
    const filePath = path.join(dirname, file)
    fs.stat(filePath, (err, stats) => {
        if (err) throw err
        fs.truncate(filePath, stats.size/2, (err) => {
            if (err) throw err
        })
    })
})


// fs.readFile(__filename, (err, data) => {
//     if (err) throw err;
// })

// const data = fs.readFileSync(__filename)