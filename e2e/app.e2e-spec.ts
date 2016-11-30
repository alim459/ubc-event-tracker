import { UbcEventTrackerPage } from './app.po';

describe('ubc-event-tracker App', function() {
  let page: UbcEventTrackerPage;

  beforeEach(() => {
    page = new UbcEventTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
