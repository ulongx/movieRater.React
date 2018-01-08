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
const FormData = require("form-data");
const util_1 = require("../helper/util");
const theaterListUrl = 'https://movies.yahoo.com.tw/theater_list.html';
function getTheaterList() {
    return __awaiter(this, void 0, void 0, function* () {
        console.time('getTheaterList');
        const regionList = yield getRegionList();
        const promises = regionList.map(getTheaterListByRegion);
        const theaterList = [].concat(...(yield Promise.all(promises)));
        console.timeEnd('getTheaterList');
        return theaterList;
    });
}
exports.getTheaterList = getTheaterList;
function getRegionList() {
    return __awaiter(this, void 0, void 0, function* () {
        const $ = yield util_1.getCheerio$(theaterListUrl);
        const regionList = Array.from($('#area>option')).map((option) => {
            const $option = $(option);
            return {
                name: $option.text(),
                yahooRegionId: $option.val(),
            };
        });
        //remove first option "選擇地區"
        regionList.shift();
        return regionList;
    });
}
exports.getRegionList = getRegionList;
function getTheaterListByRegion({ name: regionName, yahooRegionId }, index) {
    return __awaiter(this, void 0, void 0, function* () {
        var form = new FormData();
        form.append('area', yahooRegionId);
        const request = new Request(theaterListUrl, {
            method: 'POST',
            body: form
        });
        const $ = yield util_1.getCheerio$(request);
        let theaterList = [];
        Array.from($('#ymvthl .group')).forEach(theaterGroup => {
            const $theaterGroup = $(theaterGroup);
            const subRegion = $theaterGroup.find('.hd').text();
            theaterList = theaterList.concat(Array.from($theaterGroup.find('tbody>tr')).map(theaterRow => {
                const $theaterRow = $(theaterRow);
                const theater = {
                    name: $theaterRow.find('a').text(),
                    url: $theaterRow.find('a').attr('href').split('*')[1],
                    address: $theaterRow.find('td:nth-child(2)').contents()[0].nodeValue,
                    phone: $theaterRow.find('em').text(),
                    region: regionName,
                    regionIndex: index,
                    subRegion
                };
                return theater;
            }));
        });
        return theaterList;
    });
}
exports.getTheaterListByRegion = getTheaterListByRegion;
//# sourceMappingURL=theaterCrawler.js.map