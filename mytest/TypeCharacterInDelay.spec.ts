import { Page, test, Browser, chromium } from "playwright/test";

test("Enter Character With Delay", async()=> {
    const browser:Browser = await chromium.launch({headless:false});
    const page:Page = await browser.newPage();

    await page.goto("https://www.flipkart.com/");
    await page.getByPlaceholder("Search for Products, Brands and More").pressSequentially("Macbook", {delay : 1000});
});