require('chromedriver');
const {Builder, Key, By, until} = require('selenium-webdriver');
const assert = require("assert");

describe("Сценарии действий пользователя", () => {
    before(async function() {
        driver = await new Builder().forBrowser("chrome").build(); 
        driver.manage().window().maximize();   
    });

    it("Вход в аккаунт и переход на страницу питания", async () => {
        await driver.get('http://localhost:3000/login');
        await driver.findElement(By.css("[class*='login-form_input']")).sendKeys('dunkanm89@gmail.com');
        await driver.findElement(By.css("[class*='login-form_input'][type='password']")).sendKeys('123456', Key.RETURN);
        await driver.wait(until.elementLocated(By.css("[class*='header_menu']")), 10000);
        await driver.findElement(By.css("[class*='header_menu'] ul[class^='nav_nav'] [href='/food']")).click();
        let title = await driver.findElement(By.css("[class*='title_titleBlock'] p:nth-child(1)")).getText();
        assert.equal(title === 'ПИТАНИЕ', true);
    });

    it("Выбор еды для записи в дневник произведен корректно", async () => {
        await driver.findElement(By.css("[class*='searchArea']")).sendKeys('котлета');
        let choice = await driver.findElement(By.css("[class*='list-item_item']:nth-child(1)")).getText();
        await driver.findElement(By.css("[class*='list-item_item']:nth-child(1)")).click();
        let text = await driver.findElement(By.css("[class*='search-block_mainRow'] h2")).getText();
        assert.equal(choice === text, true);
    });

    it("Запись хавчика произведена успешно", async () => {
        await driver.wait(until.elementLocated(By.css("[class='recharts-layer recharts-bar-rectangle']:nth-last-child(1)")), 10000);
        let rows = await driver.findElements(By.css("[class*='total-block_row']"));
        let txt1 = await driver.findElement(By.css("[class*='search-block_mainRow'] h2")).getText();
        await driver.findElement(By.css("[class*='food-search-block_btnType1']")).click();
        let txt2 = await driver.findElement(By.css(`[class*='total-block_row']:nth-child(${rows.length}) [class*='total-block_name']`)).getText();
        assert.equal(txt1 === txt2, true);
    });

    it("Удаление хавчика произведено успешно", async () => {
        let numBefore = await driver.findElements(By.css("[class*='total-block_row']"));
console.log(numBefore.length);
        await driver.findElements(By.css(`[class*='total-block_row']:nth-child(${numBefore.length - 1}) [class*='btnDel']`)).click();
        // btn.click();
        await driver.switchTo().alert().accept();
        // let numAfter;
        // do {
            let numAfter = await driver.findElements(By.css("[class*='total-block_row']"));
        // } 
        // while (numAfter.length == numBefore.length);

        console.log(numBefore.length + ' : ' + numAfter.length);
        assert.equal(numBefore.length - numAfter.length == 1, true);
    });

    after(() => {
        driver.quit();
    });
});