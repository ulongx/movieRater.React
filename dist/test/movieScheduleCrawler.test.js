"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
const movieSchduleCrawler_1 = require("../crawler/movieSchduleCrawler");
const should = chai.should();
describe('movieSchduleCrawler', () => {
    describe('crawlMovieSchdule', () => {
        it('data should have timeStrings length > 0', function () {
            return __awaiter(this, void 0, void 0, function* () {
                this.timeout(60000);
                const movieSchedules = yield movieSchduleCrawler_1.default("/showtime/t02a06/a02/");
                movieSchedules[0].timesStrings.length.should.greaterThan(0);
            });
        });
    });
});
//# sourceMappingURL=movieScheduleCrawler.test.js.map