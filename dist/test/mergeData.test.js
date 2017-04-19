"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mergeData_1 = require("../crawler/mergeData");
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();
chai.should();
chai.use(chaiAsPromised);
describe('mergeData', () => {
    describe('mergeData', () => {
        it('should not merge if chineseTitle match but article date not in range', function () {
            let yahooMovies = [{ yahooId: 1, chineseTitle: '測試資料1', releaseDate: '2016-11-07' }];
            let pttArticles = [
                {
                    "title": "[好雷] 測試資料1",
                    "url": "https://www.ptt.cc/bbs/movie/M.1472305062.A.807.html",
                    "date": "2016/06/06"
                }
            ];
            let actual = mergeData_1.mergeData(yahooMovies, pttArticles);
            assert.equal(JSON.stringify(actual[0].relatedArticles), JSON.stringify([]));
        });
        it('should merge if chineseTitle match and article date in range', function () {
            let yahooMovies = [{ yahooId: 1, chineseTitle: '測試', releaseDate: '2016-09-07' }];
            let pttArticles = [
                {
                    "title": "[好雷] 測試資料",
                    "url": "https://www.ptt.cc/bbs/movie/M.1472305062.A.807.html",
                    "date": "2016/08/07"
                }
            ];
            let actual = mergeData_1.mergeData(yahooMovies, pttArticles);
            assert.equal(JSON.stringify(actual[0].relatedArticles), JSON.stringify(pttArticles));
        });
    });
});
//# sourceMappingURL=mergeData.test.js.map