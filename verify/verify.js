//
// Generated from RAML specification
// <https://github.com/aisensiy/raml2test>
//

var request = require('request');
var chai = require('chai');
var assert = chai.assert;
var tv4 = require('tv4');
var endpoint = process.env.ENDPOINT;

console.log(endpoint);

var productionId, productionURI, userName, cartURI, cartId;

describe("Test", function () {
  this.timeout(60000);
  it("POST /productions -> 201", function (done) {
    var options = {
      url: endpoint + '/productions',
      method: 'POST',
      qs: {},
      json: {
        "name": "xxx",
        "categoryId": 1,
        "price": 1.2
      },
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 201, "Expect 201, got " + response.statusCode);
      productionURI = response.headers['location'];
      var splits = productionURI.split("/");
      productionId = splits[splits.length - 1];
      done();
    });
  });
  
  it("GET /productions -> 200", function (done) {
    var options = {
      url: endpoint + '/productions',
      method: 'GET',
      qs: {},
      body: '',
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 200, "Expect 200, got " + response.statusCode);
      var schema =
        {
          "$schema": "http://json-schema.org/draft-04/schema#",
          "type": "array",
          "productions": {
            "type": "object",
            "properties": {
              "price": {
                "type": "number"
              },
              "name": {
                "type": "string"
              },
              "categoryUri": {
                "type": "string"
              },
              "id": {
                "type": "integer"
              },
              "categoryId": {
                "type": "integer"
              }
            },
            "required": ["price", "name", "categoryUri", "id", "categoryId"]
          }
        };
      if (schema != '') {
        // verify response body
        body = (body == '' ? '[empty]' : body);
        assert.doesNotThrow(function () {
          JSON.parse(body);
        }, JSON.SyntaxError, "Invalid JSON: " + body);
        var json = JSON.parse(body);
        var result = tv4.validateResult(json, schema);
        assert.lengthOf(result.missing, 0, "Missing/unresolved JSON schema $refs (" + result.missing && result.missing.join(', ') + ") in schema: " + JSON.stringify(schema, null, 4) + " Error");
        assert.ok(result.valid, "Got unexpected response body: " + (result.error && result.error.message) + " " + JSON.stringify(schema, null, 4) + " Error");
      }
      done();
    });
  });
  
  it("GET /productions/{productionId} -> 200", function (done) {
    var options = {
      url: endpoint + '/productions/' + productionId,
      method: 'GET',
      qs: {},
      body: "",
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 200, "Expect 200, got " + response.statusCode);
      var schema = {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "price": {
            "type": "number"
          },
          "name": {
            "type": "string"
          },
          "categoryUri": {
            "type": "string"
          },
          "id": {
            "type": "integer"
          },
          "categoryId": {
            "type": "integer"
          }
        },
        "required": ["price", "name", "categoryUri", "id", "categoryId"]
      };
      if (schema != '') {
        // verify response body
        body = (body == '' ? '[empty]' : body);
        assert.doesNotThrow(function () {
          JSON.parse(body);
        }, JSON.SyntaxError, "Invalid JSON: " + body);
        var json = JSON.parse(body);
        var result = tv4.validateResult(json, schema);
        assert.lengthOf(result.missing, 0, "Missing/unresolved JSON schema $refs (" + result.missing && result.missing.join(', ') + ") in schema: " + JSON.stringify(schema, null, 4) + " Error");
        assert.ok(result.valid, "Got unexpected response body: " + (result.error && result.error.message) + " " + JSON.stringify(schema, null, 4) + " Error");
      }
      done();
    });
  });
  
  it("PUT /productions/{productionId} -> 204", function (done) {
    var options = {
      url: endpoint + '/productions/' + productionId,
      method: 'PUT',
      qs: {},
      json: {
        "name": "PUT",
        "categoryId": 2,
        "price": 1.2
      },
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 204, "Expect 204, got " + response.statusCode);
      done();
    });
  });
  
  it("DELETE /productions/{productionId} -> 204", function (done) {
    var options = {
      url: endpoint + '/productions/' + productionId,
      method: 'DELETE',
      qs: {},
      json: {},
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 204, "Expect 204, got " + response.statusCode);
      done();
    });
  });
  
  it("GET /productions/{productionId} -> 404", function (done) {
    var options = {
      url: endpoint + '/productions/' + productionId,
      method: 'GET',
      qs: {},
      json: {},
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 404, "Expect 404, got " + response.statusCode);
      done();
    });
  });
  
  
  it("POST /carts -> 201", function (done) {
    var options = {
      url: endpoint + '/carts',
      method: 'POST',
      qs: {},
      json: {
        "userId": "1",
        "productions": [{
          "productionId": 1,
          "amount": 2
        },
          {
            "productionId": 2,
            "amount": 3
          }]
      },
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 201, "Expect 201, got " + response.statusCode);
      cartURI = response.headers['location'];
      var splits = cartURI.split("/");
      cartId = splits[splits.length - 1];
      done();
    });
  });
  
  it("GET /carts -> 200", function (done) {
    var options = {
      url: endpoint + '/carts',
      method: 'GET',
      qs: {},
      json: "",
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 200, "Expect 200, got " + response.statusCode);
      var schema = {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "totalCount": {
            "type": "number"
          },
          "productions": {
            "type": "array",
            "properties": {
              "id": {
                "type": "number",
				"required": true
              },
              "userId": {
                "type": "number",
				"required": true
              },
              "productions": {
                "type": "array",
                "productions": {
                  "type": "object",
                  "properties": {
                    "productionId": {
                      "type": "integer",
                      "required": true
                    },
                    "amount": {
                      "type": "number",
                      "required": true
                    }
                  }
                }
              }
            }
          },
          "required": ["totalCount", "productions"]
        }
      };
      if (schema != '') {
        // verify response body
        body = (body == '' ? '[empty]' : body);
        assert.doesNotThrow(function () {
          JSON.parse(body);
        }, JSON.SyntaxError, "Invalid JSON: " + body);
        var json = JSON.parse(body);
        var result = tv4.validateResult(json, schema);
        assert.lengthOf(result.missing, 0, "Missing/unresolved JSON schema $refs (" + result.missing && result.missing.join(', ') + ") in schema: " + JSON.stringify(schema, null, 4) + " Error");
        assert.ok(result.valid, "Got unexpected response body: " + (result.error && result.error.message) + " " + JSON.stringify(schema, null, 4) + " Error");
      }
      done();
    });
  });
  
  it("GET /carts/{cartId} -> 200", function (done) {
    var options = {
      url: endpoint + '/carts/' + cartId,
      method: 'GET',
      qs: {},
      json: "",
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 200, "Expect 200, got " + response.statusCode);
      var schema = {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
			"required": true
          },
          "userId": {
            "type": "number",
			"required": true
          },
          "productions": {
            "type": "array",
            "productions": {
              "type": "object",
              "properties": {
                "productionId": {
                  "type": "integer",
                  "required": true
                },
                "amount": {
                  "type": "number",
                  "required": true
                }
              }
            }
          }
        }
      };
      if (schema != '') {
        // verify response body
        body = (body == '' ? '[empty]' : body);
        assert.doesNotThrow(function () {
          JSON.parse(body);
        }, JSON.SyntaxError, "Invalid JSON: " + body);
        var json = JSON.parse(body);
        var result = tv4.validateResult(json, schema);
        assert.lengthOf(result.missing, 0, "Missing/unresolved JSON schema $refs (" + result.missing && result.missing.join(', ') + ") in schema: " + JSON.stringify(schema, null, 4) + " Error");
        assert.ok(result.valid, "Got unexpected response body: " + (result.error && result.error.message) + " " + JSON.stringify(schema, null, 4) + " Error");
      }
      done();
    });
  });
  
  it("PUT /carts/{cartId} -> 204", function (done) {
    var options = {
      url: endpoint + '/carts/' + cartId,
      method: 'PUT',
      qs: {},
      json: {
        "userId": "1",
        "productions": [
          {
            "productionId": 1,
            "amount": 3
          },
          {
            "productionId": 2,
            "amount": 3
          }
        ]
      },
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 204, "Expect 204, got " + response.statusCode);
      done();
    });
  });
  
  it("DELETE /carts/{cartId} -> 204", function (done) {
    var options = {
      url: endpoint + '/carts/' + cartId,
      method: 'DELETE',
      qs: {},
      json: {},
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 204, "Expect 204, got " + response.statusCode);
      done();
    });
  });
  
  it("GET /carts/{cartId} -> 404", function (done) {
    var options = {
      url: endpoint + '/carts/' + cartId,
      method: 'GET',
      qs: {},
      json: {},
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 404, "Expect 404, got " + response.statusCode);
      done();
    });
  });
  
  
});
