import { Ng2HellowordPage } from './app.po';

describe('ng2-helloword App', () => {
  let page: Ng2HellowordPage;

  beforeEach(() => {
    page = new Ng2HellowordPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
