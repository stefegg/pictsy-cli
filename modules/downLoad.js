const downLoader = require('../lib/download')

module.exports.downLoad = async function downLoad(file, filepath) {
    let downNow = await downLoader.downloadFile(file, filepath);
    downNow.on('finish', () => {
        console.log(file + ' downloading to ' + filepath);
    })
    return downNow
}