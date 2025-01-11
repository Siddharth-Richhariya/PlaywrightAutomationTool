import { Page, Browser, test, chromium } from "playwright/test";

test("Chaning locator test", async()=>{
    const browser:Browser = await chromium.launch({headless:false});
    const page = await browser.newPage();

    await page.goto("https://www.orangehrm.com/en/30-day-free-trial");
    //const firstname = page.locator("#Form_getForm >> #Form_getForm_subdomain");
    //const submitButton = page.locator("#Form_getForm >> text=Get Your Free Trial");

    const form = page.locator("#Form_getForm");
    const firstname = page.locator("#Form_getForm_subdomain");
    const getYourFreeTrialButton = page.getByRole('button', {name: 'Get Your Free Trial'});

    //await firstname.fill("Siddharth");
    //await submitButton.click();

    await form.locator(firstname).fill("firstname");
    await form.locator(getYourFreeTrialButton).click();
    
});