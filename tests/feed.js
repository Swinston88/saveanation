import { signUpAndSignIn, getBrowser, cleanDatabase, addPost, getText, makeSaving, makeSavingBlank } from './testHelpers';

let mainBrowser;

describe('Saving Feed', function () {

  beforeEach(function () {
    mainBrowser = getBrowser(0);
    cleanDatabase();
    signUpAndSignIn(mainBrowser, "Barron", "barron@trump.usa", "456789", "Barron", "Trump");
  });

  describe('Displaying activity', function() {

    it('displays saving activity with custom message', function() {
      makeSaving(mainBrowser, 10, "Because");
      mainBrowser.click("a#feed-link");
      expect(getText(mainBrowser,'div.post','p.post-text')).to.equal('Just saved £10.00: Because');
    });

    it('displays saving activity without default message', function() {
      makeSavingBlank(mainBrowser, 10);
      mainBrowser.click("a#feed-link");
      expect(getText(mainBrowser,'div.post','p.post-text')).to.equal("Just saved £10.00: They didn't say why?!");
    });

    it('displays post', function(){
      addPost(mainBrowser, 'I have saved loads of money');
      expect(getText(mainBrowser,'div.post','p.post-text')).to.equal('I have saved loads of money');
    });

    it('displays username', function(){
      addPost(mainBrowser, 'I have saved loads of money');
      expect(getText(mainBrowser,'div.post','.post-author')).to.contain('Barron');
    });
  });
});
