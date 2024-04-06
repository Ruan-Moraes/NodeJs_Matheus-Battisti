const fs = require('fs');

fs.stat('arquivo.txt', (err, stats) => {

    if (err) {
        console.log(err)

        return
    }

    console.log(stats)
    console.log(stats.isFile())
    console.log(stats.isDirectory())
    console.log(stats.size)
    console.log(stats.birthtime)
    console.log(stats.mtime)
    console.log(stats.ctime)
    console.log(stats.atime)
    console.log(stats.isBlockDevice())
    console.log(stats.isCharacterDevice())
    console.log(stats.isSymbolicLink())
    console.log(stats.isFIFO())
    console.log(stats.isSocket())
});