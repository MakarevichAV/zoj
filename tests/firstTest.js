require('chromedriver');
const {Builder, Key, By, until} = require('selenium-webdriver');

(async () => {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.get('http://localhost:3000/login');
    await driver.findElement(By.css("[class*='login-form_input']")).sendKeys('dunkanm89@gmail.com');
    await driver.findElement(By.css("[class*='login-form_input'][type='password']")).sendKeys('123456', Key.RETURN);
    await driver.wait(until.elementLocated(By.css("[class*='header_menu']")), 10000);
    await driver.quit();

})();