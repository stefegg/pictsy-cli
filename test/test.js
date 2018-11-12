let assert = require('assert');
const listFile = require('../modules/upList.js');
const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

require('dotenv').config({ path: './env/.env' });


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

const Image = mongoose.model('Image', testSchema);

describe('Single Test', function() {
    before(function (done) {
        mongoose.connect(process.env.MONGO_TEST_PATH);
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error'));
        db.once('open', function(){
            console.log('We are connected to the test database!');
            done();
        })
})

describe('Test database', function() {
    it('New Image saved to test database', function(done) {
        var testImage = Image({
            name: 'TestImage',
            url: 'www.test.com',
            date: '121212',
            id: '0'
        });
        testImage.save(done)
    })
    it('Dont save wrong format to db', function(done) {
        var broKen = Image({
            notName: 'Whatever',
            notUrl: 'www.broken.org',
            notDate: '9',
            notId: 'nope'
        })
        broKen.save(err => {
            if(err) {return done();}
            throw new Error('Should make an error');
        })
    })
    it('Should retrevie data from DB', function(done) {
        Image.find({id: '0'}, (err, name) => {
            if(err) {throw err;}
            if(name.length === 0) {throw new Error ('No Data!');}
            done();
        })
    })
})

after(function(done){
    mongoose.connection.db.dropDatabase(function(){
        mongoose.connection.close(done);
    })
})
});

describe('Multi Tests', function() {
    before(function (done) {
        mongoose.connect(process.env.MONGO_TEST_PATH);
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error'));
        db.once('open', function(){
            console.log('We are connected to the test database!');
            done();
        })
})

describe('Test database', function() {
    it('New Image saved to test database', function(done) {
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
    it('Doesnt save wrong format to db', function(done) {
        var broKen = Image({
            notName: 'Whatever',
            notUrl: 'www.broken.org',
            notDate: '9',
            notId: 'nope'
        })
        broKen.save(err => {
            if(err) {return done();}
            throw new Error('Should make an error');
        })
    })
    it('Should retrevie data from DB', async function(done) {
        const listimages = await listFile.getList()
        assert(listimages[0].name.length > 0 )
            done();
        })
    })
})

after(function(done){
    mongoose.connection.close(done);
    })

;

