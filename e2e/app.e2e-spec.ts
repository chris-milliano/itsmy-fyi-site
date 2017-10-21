import { ItsmyFyiSitePage } from './app.po';

describe('itsmy-fyi-site App', () => {
  let page: ItsmyFyiSitePage;

  beforeEach(() => {
    page = new ItsmyFyiSitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
