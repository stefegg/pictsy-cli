const assert = require('assert');
const listFile = require('../modules/upList.js');
const showFile = require('../modules/showID.js');
const upChain = require('../modules/upchain.js');
const dbConn = require('../lib/dbConn.js');
const downLoad = require('../modules/downLoad.js');
const Image = require('../models/image');


require('dotenv').config({
    path: './env/.env'
});

console.log(process.env)
describe('Single Test', function () {
    it('connects to the database', function () {
        const connectDb = dbConn.makeConn()
        assert(connectDb.name == 'testDatabase')
    })

    describe('Test single insertion into database', function () {
        it('New Image saved to test database', function (done) {
            var testImage = Image({
                name: 'TestImage',
                url: 'www.test.com',
                date: '121212',
                id: '0'
            });
            testImage.save(done)
        })
        it('Dont save wrong format to db', function (done) {
            var broKen = Image({
                notName: 'Whatever',
                notUrl: 'www.broken.org',
                notDate: '9',
                notId: 'nope'
            })
            broKen.save(err => {
                if (err) {
                    return done();
                }
                throw new Error('Insertion Error');
            })
        })
        it('Should retrevie an item from DB by ID 0', async function () {
            const showImages = await showFile.getShow('0')
            assert(showImages[0].id == '0')

        })
    })
})

describe('Test database', function () {
    it('Two New Images saved to test database', function (done) {
        var testImage = Image({
            name: 'TestImage',
            url: 'www.test.com',
            date: '121212',
            id: '1'
        });
        testImage.save()
        var testImage2 = Image({
            name: 'TestImage2',
            url: 'www.test2.com',
            date: '222222',
            id: '2'
        });
        testImage2.save(done)
    })
    it('Should retrevie all images from DB', async function () {
        const listimages = await listFile.getList()
        assert(listimages[1].name.length > 0)

    })
})

describe('Test upload', function(){
    it('Uploads to s3 and inserts into mongo', async function () {
        let testFile = '../tree.jpg'
        const uploadTest = await upChain.upChain(testFile)
        assert(uploadTest.url.length > 0)
    })
})

describe('Test download', function(){
    it('Downloads the target file to the requested path', async function () {
        let testPic = 'tree.jpg'
        let testPath = '/home/stef/Desktop/'
        const dlTest = await downLoad.downLoad(testPic, testPath)
        assert(dlTest.path.length > 0)
    })
})



// after(function(done){
//     // mongoose.connection.db.dropDatabase(function(){
//         mongoose.connection.close(done);
//     })
// })
// });