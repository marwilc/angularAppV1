import { MyAppAngular1Page } from './app.po';

describe('my-app-angular1 App', function() {
  let page: MyAppAngular1Page;

  beforeEach(() => {
    page = new MyAppAngular1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
