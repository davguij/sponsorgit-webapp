import { SponsorgitWebappPage } from './app.po';

describe('sponsorgit-webapp App', function() {
  let page: SponsorgitWebappPage;

  beforeEach(() => {
    page = new SponsorgitWebappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
