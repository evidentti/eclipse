import { TuesdayPage } from './app.po';

describe('tuesday App', () => {
  let page: TuesdayPage;

  beforeEach(() => {
    page = new TuesdayPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
