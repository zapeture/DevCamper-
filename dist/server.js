"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_safe_1 = __importDefault(require("dotenv-safe"));
const chalk_1 = __importDefault(require("chalk"));
dotenv_safe_1.default.config();
const app = express_1.default();
const person = {
    name: 'Fortune',
    surname: 'Zviregei',
};
app.get('/', (req, res) => res.send(person));
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(chalk_1.default.black.bgYellow(`⚡️[mode:${chalk_1.default.red(process.env.NODE_ENV)}]: Server is running at https://localhost:${PORT}`));
});
