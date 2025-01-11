import { Browser, Page, test, chromium, expect } from "playwright/test"

test("Test GetByRole Locator" , async()=>{

    const browser:Browser = await chromium.launch({headless:true});
    const page:Page = await browser.newPage();

    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
    await expect(page.getByRole('heading', {name: 'Register Account'})).toBeVisible;
    
})



