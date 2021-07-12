
// do nt use error function
// describe.only, descirbe.skip, it with only the comment
// this.skip

//expect(auth).to.be.true
var assert = require('assert')
var authController = require('../../controllers/auth.controller')
var expect = require('chai').expect

beforeEach(function(){
    console.log('running before each')
    authController.setRoles(['user'])
})
describe('AuthController', function(){
    
    describe('isAuthorized', function(){
        it('Should return false if not authorized', function() {
            var isAuth = authController.isAuthorized( 'admin')
            assert.equal(false, isAuth)
            expect(isAuth).to.be.false
        })
        it('Should return true if authorized', function() {
            assert.equal(true, authController.isAuthorized('admin'))
        })
    })

    describe('isAuthorizedAsync', function(){
        it('Should return false if not authorized', function(done) {
            this.timeout(2500)
            authController.isAuthorizedAsync('admin', 
            function(isAuth){
                assert.equal(false, isAuth)
                done()
            })
        })
    })
})