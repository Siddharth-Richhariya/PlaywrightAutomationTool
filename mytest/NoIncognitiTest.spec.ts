import{test, Page, chromium, BrowserContext} from '@playwright/test';

test("No Incognito test", async()=> {
    const browser:BrowserContext = await chromium.launchPersistentContext('', {headless:false});
    const page:Page = await browser.newPage();

    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");


    await page.waitForTimeout(2000);
});