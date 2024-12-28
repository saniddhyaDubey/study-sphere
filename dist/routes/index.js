"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/health-check", (req, res) => {
    res.send("200 Health check!");
});
router.get("/resource", (req, res) => {
    res.send("200 Health check!");
});
exports.default = router;
