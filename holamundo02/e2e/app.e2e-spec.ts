import { Holamundo02Page } from './app.po';

describe('holamundo02 App', function() {
  let page: Holamundo02Page;

  beforeEach(() => {
    page = new Holamundo02Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
