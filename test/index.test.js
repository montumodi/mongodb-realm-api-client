const {describe, it} = exports.lab = require("@hapi/lab").script();
const {expect} = require("@hapi/code");
const getClient = require("../src");

describe("Mongo Stitch Api Client - log", () => {

  const client = getClient({
    "publicKey": "dummuyPublicKey",
    "privateKey": "dummyPrivateKey",
    "baseUrl": "baseUrl",
    "projectId": "projectId",
    "appId": "appId"
  });

  describe("When index is required", () => {
    it("should export functions", async () => {
      expect(client.log).to.be.exist();
      expect(client.application).to.be.exist();
      expect(client.email).to.be.exist();
      expect(client.rule).to.be.exist();
      expect(client.service).to.be.exist();
      expect(client.security).to.be.exist();
      expect(client.stitchFunction).to.be.exist();
      expect(client.token).to.be.exist();
      expect(client.trigger).to.be.exist();
      expect(client.webhook).to.be.exist();
    });
  });
});
