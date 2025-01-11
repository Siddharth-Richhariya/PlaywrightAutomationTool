import {test, expect,Page, chromium, Browser, Locator} from '@playwright/test'

test ('login test', async() => {

    const browser:Browser = await  chromium.launch({headless: false});
    const page:Page = await browser.newPage();
    await page.goto("https://www.saucedemo.com/v1/");

    const username:Locator = page.locator("#user-name");
    const password:Locator = page.locator("#password");
    const loginButton:Locator = page.locator("#login-button");

    await username.fill("standard_user");
    await password.fill("secret_sauce");
    await loginButton.click();

    const title = await page.title();
    const expectedTitle: string = "Swag Labs";

    await page.screenshot({path: "HomepageDashboard.png"});

    expect(title).toBe(expectedTitle);

    browser.close();
});