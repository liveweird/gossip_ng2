import { GossipNg2Page } from './app.po';

describe('gossip-ng2 App', function() {
  let page: GossipNg2Page;

  beforeEach(() => {
    page = new GossipNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
