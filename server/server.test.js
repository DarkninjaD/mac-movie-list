import request from "supertest";
import server from "./server.js";

// test ref
// describe("GET /users", () => {
//   it("should return a JSON object with a user name", (done) => {
//     request(server)
//       .get("/users")
//       .expect("Content-Type", /json/)
//       .expect(200, { name: "eric" })
//       .end((err, res) => {
//         if (err) throw err;
//         done();
//       });
//   });
// });
