import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';
// OUR MAIN TEST PAGE
describe('angular-YNAD App', () => {
  let page: AppPage;
  beforeEach(() => {
    page = new AppPage();
  });
  it('Should display the frontPage', () => {
    page.navigateTo();
    // browser.pause();
    expect(page.getParagraphText()).toEqual('Buy or rent art & design');
  });
  it('Should display the LogIn button', () => {
    page.navigateTo();
    expect(page.getLogInButton().getText()).toEqual('LOG IN');
  });
  it('Should route to logIn page', () => {
    page.navigateTo();
    page.getLogInButton().click();
    // browser.pause();
    expect(page.getLogInText()).toEqual('Sign up to Young Nordic Artists & Designers');
  });
  it('Try to go to page that needs to logIn to, should route to logIn page', () => {
    page.navigateToAdmin();
    // browser.pause();
    expect(page.getLogInText()).toEqual('Sign up to Young Nordic Artists & Designers');
  });
});