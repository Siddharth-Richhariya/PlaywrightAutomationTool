import { Page, test, chromium, Browser } from "playwright/test";

test("Mouse Actions handle", async()=>{

    const browser:Browser = await chromium.launch({headless:false});
    const page:Page = await browser.newPage();

    await page.goto("https://demo.guru99.com/test/simple_context_menu.html");
    
    // Double Click
    await page.getByText("Double-Click Me To See Alert").dblclick();
    // Context Click - Right Click 
    await page.getByText("right click me").click({button: "right"});

    await page.waitForTimeout(2000);
})