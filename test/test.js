const assert = require('assert');
const listFile = require('../modules/upList.js');
const showFile = require('../modules/showID.js');
const upChain = require('../modules/upchain.js');
const dbConn = require('../lib/dbConn.js');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const server = require('../server')

require('dotenv').config({
    path: './env/.env'
});


const testSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    }
});

const TestImage = mongoose.model('TestImage', testSchema);

describe('Single Test', function () {
    it('connects to the database', function () {
        const connectDb = dbConn.makeConn
        assert(connectDb.name == 'testDatabase')
    })

    describe('Test single insertion into database', function () {
        it('New Image saved to test database', function (done) {
            var testImage = TestImage({
                name: 'TestImage',
                url: 'www.test.com',
                date: '121212',
                id: '0'
            });
            testImage.save(done)
        })
        it('Dont save wrong format to db', function (done) {
            var broKen = TestImage({
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
        var testImage = TestImage({
            name: 'TestImage',
            url: 'www.test.com',
            date: '121212',
            id: '1'
        });
        testImage.save()
        var testImage2 = TestImage({
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



// after(function(done){
//     // mongoose.connection.db.dropDatabase(function(){
//         mongoose.connection.close(done);
//     })
// })
// });