require('chromedriver');
const {Builder, Key, By, until} = require('selenium-webdriver');
const assert = require("assert");

describe("Сценарии действий пользователя", () => {
    before(async function() {
        driver = await new Builder().forBrowser("chrome").build();    
    });

    it("Вход в аккаунт и переход на страницу питания", async () => {
        await driver.get('http://localhost:3000/login');
        await driver.findElement(By.css("[class*='login-form_input']")).sendKeys('dunkanm89@gmail.com');
        await driver.findElement(By.css("[class*='login-form_input'][type='password']")).sendKeys('123456', Key.RETURN);
        await driver.wait(until.elementLocated(By.css("[class*='header_menu']")), 10000);
        await driver.findElement(By.css("[class*='header_menu'] ul[class^='nav_nav'] [href='/food']")).click();
        let title = await driver.findElement(By.css("[class*='title_titleBlock'] p:nth-child(1)")).getText();
        assert(title, 'питание');
    });

    it("Выбор еды для записи в дневник произведен корректно", async () => {
        await driver.findElement(By.css("[class*='searchArea']")).sendKeys('котлета');
        let choice = await driver.findElement(By.css("[class*='list-item_item']:nth-child(1)"));
        let text1 = choice.getText();
        choice.click();
        let text2 = await driver.findElement(By.css("[class*='search-block_mainRow'] h2")).getText();
        assert(text1, text2);
    });

    it("Запись хавчика прозведена удачна", async () => {
        let text1 = await driver.findElement(By.css("[class*='search-block_mainRow'] h2")).getText();
        await driver.findElement(By.css("[class*='food-search-block_btnType1']")).click();
        let text2 = await driver.findElement(By.css("[class*='total-block_row']:nth-child(2) [class*='total-block_name']")).getText();
        assert(text1, text2);
    });

    // it("Удаление хавчика произведено удачно", async () => {
        
    // });

    // it("Добавление воды прощло успешно", async () => {

    // });

    after(() => {
        driver.quit();
    });
});