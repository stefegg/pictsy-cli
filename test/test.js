let assert = require('assert');
const listFile = require('../modules/upList.js');
const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

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

describe('Database Tests', function() {
    before(function (done) {
        mongoose.connect('mongodb://localhost/testDatabase');
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
            id: '0000'
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
        Image.find({name: 'TestImage'}, (err, name) => {
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
})

describe('#getList()', function() {
    it ('Gets all the records in the DB', async function() {
        const images = await listFile.getList()
        assert.equal(testSchema, images);

    })

})
