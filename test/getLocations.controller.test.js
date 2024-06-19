// import { expect } from "chai";
// import sinon from "sinon";
// import { getLocationsController } from "../src/controllers/getLocations.controller.js";
// // import { ExpressValidator, validationResult } from "express-validator";
// import * as expressVal from "express-validator";


// jest.mock()

// describe("Get Locations controller test", () => {

    
//     it("should return 422 when request is invalid", async () => {
//         const req = {};
//         const sendStub = sinon.stub();
//         const res = { status: sinon.stub() }
//         res.status.returns({ send: sendStub });
//         const valResult = sinon.stub();
//         sinon.stub(expressVal, "validationResult", valResult);

//         const locationsRes = await getLocationsController(req, res);
//         sinon.assert.calledWith(res.status, 422);
//         // expect(res.status).toHaveBeenCalledWith(422);
//         // expect(sendStub).toHaveBeenCalledWith(`Unable to get Locations`);
//     });

//     // it("should call getLocations when there are no errors", async () => {
//     //     const req = {};
//     //     const sendStub = sinon.stub();
//     //     const res = { status: sinon.stub() }
//     //     res.status.returns({ send: sendStub });

//     //     expect()
//     // });

// });