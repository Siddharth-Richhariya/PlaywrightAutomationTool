import {Page, test, Browser, chromium} from '@playwright/test';

test('Drop Down Handle using Selector', async()=>{
    const browser:Browser = await chromium.launch({headless: false});
    const page:Page = await browser.newPage();

    page.goto("https://www.magupdate.co.uk/reader-enquiry/PATI/221");
    const countrySelector = "select#Contact_CountryCode";
    await page.selectOption(countrySelector, {value: "IN"});

    await page.waitForTimeout(2000);
})
