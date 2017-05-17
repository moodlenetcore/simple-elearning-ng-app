import { MoodleAppPage } from './app.po';

describe('moodle-app App', () => {
  let page: MoodleAppPage;

  beforeEach(() => {
    page = new MoodleAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
