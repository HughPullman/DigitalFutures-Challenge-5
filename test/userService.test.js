import { assert, expect } from "chai";
import sinon from "sinon";
import { userService } from "../src/services/user.service.js";
import User from "../src/models/user.model.js";

describe("User service tests ", () => {
    describe("Login tests", () => {
        let findOneStub;

        beforeEach(() => {
            findOneStub =  sinon.stub(User, "findOne").resolves({ _id: "1", password: "TestPass" });
        });

        afterEach(() => {
            User.findOne.restore(); 
        });
       
        it("should call user find one and return the id", async () => {

            const res = await userService.login({ username: "TestUser", password: "TestPass" });

            expect(res).to.equal("1");
            sinon.assert.calledWith(findOneStub, { username: "TestUser"});
            
        });

        it("should throw an error if the user or password doesn't match", async () => {
          
            try {
               await userService.login({ username: "TestUser", password: "TestPassFail" });

                
            } catch (e) {
                expect(e).to.be.an.instanceOf(Error);
            }
            
            
        });
    }) 
    
    describe("Register Tests ", () => {
        let findOneStub;

        beforeEach(() => {
            
        });

        afterEach(() => {
            User.findOne.restore(); 
        });
       
        it("should call user find one and throw and error if the user exists", async () => {

            findOneStub =  sinon.stub(User, "findOne").resolves({ _id: "1", password: "TestPass" });
            try {
                await userService.register({ username: "TestUser", password: "TestPass" });
            } catch (e) {
                sinon.assert.calledWith(findOneStub, { username: "TestUser" });
                expect(e).to.be.an.instanceOf(Error);
            }
        });


    });

    describe("change password tests", () => {
        let findOneStub;

        beforeEach(() => {
            findOneStub = sinon.stub(User, "findOne").resolves({ _id: "1", password: "TestPass" });
        });

        afterEach(() => {
            User.findOne.restore(); 
        });

        it("should call user find one", async () => {
            try {
               await userService.changePassword({ username: "TestUser", password: "TestPassFail", newPassword:"TestNewPassword" });

                
            } catch (e) {
                sinon.assert.calledWith(findOneStub, { username: "TestUser" });
            }

        });

        it("should throw an error if the user or password doesn't match", async () => {
          
            try {
               await userService.changePassword({ username: "TestUser", password: "TestFailPassword", newPassword:"TestNewPassword" });

                
            } catch (e) {
                expect(e).to.be.an.instanceOf(Error);
            }
            
            
        });

    }) 

    describe("Add locations test", () => {
        let findOneStub;

        beforeEach(() => {
            findOneStub = sinon.stub(User, "findOne").resolves({ _id: "1", savedLocations: ["Test Location"] });
        });

        afterEach(() => {
            User.findOne.restore(); 
        });

        it("should call find one", async () => {
            try {
               await userService.addLocation({id: "1", location: "test"})
            } catch (e) {
                 sinon.assert.calledWith(findOneStub, { _id: "1" });
           }
        });

        it("should give an error when the user isn't found", async () => {
            
            try {
               await userService.addLocation({id: "1", location: "test"})
            } catch (e) {
                expect(e).to.be.instanceOf(Error);
           }
        })
    });

    describe("Get locations test", () => {
         let findOneStub;

        beforeEach(() => {
            findOneStub = sinon.stub(User, "findOne").resolves({ _id: "1", savedLocations: ["Test Location"] });
        });

        afterEach(() => {
            User.findOne.restore(); 
        });

        it("should call user find one and return saveLocations when successful", async () => {
            
            const res = await userService.getLocations({ id: "1" });

            sinon.assert.calledWith(findOneStub, { _id: "1" });
            expect(res).to.deep.equal(["Test Location"]);

        });

        it("should throw and error if it cant find the user", async () => {
            
            try {
                await userService.getLocations({ id: "fail" });
            } catch (e) {
                expect(e).to.be.instanceOf(Error);
            }
        });

    });

    describe("Delete locations test", () => {
         let findOneStub;

        beforeEach(() => {
            findOneStub = sinon.stub(User, "findOne").resolves("");
        });

        afterEach(() => {
            User.findOne.restore(); 
        });

        it("should call user find one", async () => {
            
            try {
                await userService.deleteLocation({ id: "2", location: "Test Location" });
                
            } catch (e) {
                
                sinon.assert.calledWith(findOneStub, { _id: "2" });
            }

        });

        it("should throw and error if it cant find the user", async () => {
            
            try {
                await userService.getLocations({ id: "fail" });
            } catch (e) {
                expect(e).to.be.instanceOf(Error);
            }
        });

    });

    

});