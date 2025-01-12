import { Page, test, chromium, Browser } from "playwright/test";

test("Mouse hover action on SpiceJet Web Application", async()=>{
    const browser:Browser = await chromium.launch({headless:false});
    const page:Page = await browser.newPage();

    await page.goto("https://www.spicejet.com/");

    await page.getByText("Add-ons").first().hover();

    await page.waitForTimeout(2000);

    await page.getByText("Taxi").first().click();

    await page.waitForTimeout(2000);

});