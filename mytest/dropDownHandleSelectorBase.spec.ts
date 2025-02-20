import {Page, test, Browser, chromium} from '@playwright/test';

test('Drop Down Handle using Selector', async()=>{
    const browser:Browser = await chromium.launch({headless: false});
    const page:Page = await browser.newPage();

    page.goto("https://www.magupdate.co.uk/reader-enquiry/PATI/221");
    const countrySelector = "select#Contact_CountryCode";
    await page.selectOption(countrySelector, {value: "IN"});

    await page.waitForTimeout(3000);

    await page.selectOption(countrySelector, {label:"Greenland"});

    await page.waitForTimeout(3000);

    await page.selectOption(countrySelector, {index : 10});

    await page.waitForTimeout(3000);

    const alloptions = await page.$$(countrySelector + "> option");
    await console.log(alloptions.length);

    for (const e of alloptions){
        const text = await e.textContent();
        console.log(text);
        if (text === "India"){
            await page.selectOption(countrySelector, {label : text});
            break;
        }
    }


    

});
