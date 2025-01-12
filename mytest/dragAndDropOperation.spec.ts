import { Page, test, Browser, chromium } from "playwright/test";

test("Drag and Drop Operation", async()=> {
    const browser:Browser = await chromium.launch({headless:false});
    const page:Page = await browser.newPage();

    await page.goto("https://the-internet.herokuapp.com/drag_and_drop");

    const blockA = "#column-a";
    const blockB = "#column-b";

    //await page.dragAndDrop(blockA, blockB);

    //await page.locator(blockA).dragTo(page.locator(blockB));

    await page.locator(blockA).hover();
    await page.mouse.down();
    await page.locator(blockB).hover();
    await page.mouse.up();

    await page.waitForTimeout(2000);

});