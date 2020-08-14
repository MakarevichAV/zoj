require('chromedriver');
const {Builder, Key, By, until} = require('selenium-webdriver');
const assert = require("assert");

describe("Сценарии действий пользователя", () => {
    before(async function() {
        driver = await new Builder().forBrowser("chrome").build(); 
        driver.manage().window().maximize();   
    });

    it("Вход в аккаунт", async () => {
        await driver.get('http://localhost:3000/login'); // страница входа
        await driver.findElement(By.css("[class*='login-form_input']")).sendKeys('dunkanm89@gmail.com'); // Вводим логин
        
        await driver.findElement(By.css("[class*='login-form_input'][type='password']")).sendKeys('123456', Key.RETURN); // Вводим пароль и нажимаем Enter
        await driver.wait(until.elementLocated(By.css("[class*='header_menu']")), 10000); // Ждем пока загрузится шапка сайта
        
        let url = await driver.getCurrentUrl();
        assert.equal(url === 'http://localhost:3000/home', true);
    });

    it("Переход на страницу питания", async () => {
        do {
            var menuItem = await driver.findElement(By.css("[class*='header_menu'] ul[class^='nav_nav'] [href='/food']"));
        } 
        while (!menuItem);
        // console.log('Пункт меню ПИТАНИЕ загружен');
        menuItem.click();
        // console.log('Кликнули по пункту ПИТАНИЕ');
        await driver.wait(until.elementLocated(By.css("[class*='title_titleBlock']")), 10000);
        // console.log('Тайтл Блок загружен');
        let title = await driver.findElement(By.css("[class*='title_titleBlock'] p:nth-child(1)")).getText(); // Получаем текст из Тайтл Блока 
        // console.log('Взяди текст тайтл блока ' + title);
        assert.equal(title === 'ПИТАНИЕ', true);
    });

    it("Выбор еды для записи в дневник произведен корректно", async () => {
        await driver.findElement(By.css("[class*='searchArea']")).sendKeys('vodka', Key.RETURN);
        // console.log('Поиск');
        await driver.wait(until.elementLocated(By.css("[class*='list-item_item']:nth-child(1)")), 10000);
        let choice = await driver.findElement(By.css("[class*='list-item_item']:nth-child(1)")).getText();
        // console.log('Получен текст ' + choice);
        await driver.findElement(By.css("[class*='list-item_item']:nth-child(1)")).click();
        // console.log('Сделали выбор кликнули');
        let text = await driver.findElement(By.css("[class*='search-block_mainRow'] h2")).getText();
        // console.log('Получили текст 2');
        assert.equal(choice === text, true);
    });

    it("Запись хавчика произведена успешно", async () => {
        await driver.wait(until.elementLocated(By.css("[class='recharts-layer recharts-bar-rectangle']:nth-last-child(1)")), 10000);
        // console.log('График загружен');
        let rows = await driver.findElements(By.css("[class*='total-block_row']"));
        // console.log('Загружены строки');
        let txt1 = await driver.findElement(By.css("[class*='search-block_mainRow'] h2")).getText();
        // console.log('Взяли название хавучика - ' + txt1);
        await driver.findElement(By.css("[class*='food-search-block_btnType1']:nth-last-child(1)")).click();
        // console.log('Кликнули по кнопке ЗАПИСАТЬ');
        await driver.wait(until.elementLocated(By.xpath(`//div[contains(@class, 'total-block_row')][position()=${rows.length + 1}]`)), 30000);
        // console.log('Хавчик записан в таблицу');
        let txt2 = await driver.findElement(By.xpath(`//div[contains(@class, 'total-block_row')][position()=${rows.length + 1}] //div[text()='${txt1}']`)).getText();
        // console.log('Взяли текст добавленного хавчика для сравнения');
        assert.equal(txt1 === txt2, true);
    });

    it("Удаление хавчика произведено успешно", async () => {
        let numBefore = await driver.findElements(By.css("[class*='total-block_row']"));
        await driver.findElement(By.css(`[class*='total-block_row']:nth-last-child(${numBefore.length - 1}) [class*='btnDel']`)).click();
        await driver.switchTo().alert().accept();
        do {
            var numAfter = await driver.findElements(By.css("[class*='total-block_row']"));
        } 
        while (numAfter.length == numBefore.length);
        assert.equal(numBefore.length - numAfter.length == 1, true);
    });

    after(() => {
        driver.quit();
    });
});