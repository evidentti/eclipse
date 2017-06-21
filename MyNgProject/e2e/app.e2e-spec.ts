import { MyNgProjectPage } from './app.po';

describe('my-ng-project App', () => {
  let page: MyNgProjectPage;

  beforeEach(() => {
    page = new MyNgProjectPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
