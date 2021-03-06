import * as chai from 'chai';
import crawlMovieSchdule from '../crawler/movieSchduleCrawler';

const should = chai.should();

describe('movieSchduleCrawler', () => {
  describe('crawlMovieSchdule', () => {
    it('data should have timeStrings length > 0', async function () {
      this.timeout(60000);
      const movieSchedules = await crawlMovieSchdule("/showtime/t02a06/a02/")
      movieSchedules[0].timesStrings.length.should.greaterThan(0)
    });
  });
});