import {test, expect,Page, chromium, Browser, Locator, BrowserContext} from '@playwright/test'

test ('login test', async() => {

    const browser:Browser = await  chromium.launch({headless: false});

    //Browser Context 1
    const browserContext1:BrowserContext = await browser.newContext();
    const page1:Page = await browserContext1.newPage();

    //Browser Context 2
    const browserContext2:BrowserContext = await browser.newContext();
    const page2:Page = await browserContext2.newPage();

    //login with Browser Context1
    await page1.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");

    const username:Locator = page1.locator("#input-email");
    const password:Locator = page1.locator("#input-password");
    const loginButton:Locator = page1.locator("[value='Login']");

    await username.fill("test1997@test.com");
    await password.fill("test");
    await loginButton.click();

    //login with Browser Context2
    await page2.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");

    const username2:Locator = page2.locator("#input-email");
    const password2:Locator = page2.locator("#input-password");
    const loginButton2:Locator = page2.locator("[value='Login']");

    await username2.fill("test1998@test.com");
    await password2.fill("test1");
    await loginButton2.click();

    await browserContext1.close();
    await browserContext2.close();


});