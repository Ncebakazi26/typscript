"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const greet_1 = __importDefault(require("../greet"));
describe('My function', function () {
    it('should test', function () {
        assert_1.default.equal("Hello,Bob Crow we will be in touch at:bob@crow.com", (0, greet_1.default)({
            firstName: "Bob",
            lastName: "Crow",
            email: "bob@crow.com"
        }));
    });
});
