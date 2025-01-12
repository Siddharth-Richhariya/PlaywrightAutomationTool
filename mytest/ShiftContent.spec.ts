import { Page, test, Browser, chromium } from "playwright/test";

test("Shift +mouse Click Handle ", async()=>{
    const browser:Browser = await chromium.launch({headless:false});
    const page:Page = await browser.newPage();

    await page.goto("https://the-internet.herokuapp.com/shifting_content");

    // Shift + Mouse click 
    await page.getByText("Example 1: Menu Element").click({modifiers :["Shift"]});

    await page.waitForTimeout(2000);
})