import { SundayPage } from './app.po';

describe('sunday App', () => {
  let page: SundayPage;

  beforeEach(() => {
    page = new SundayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
