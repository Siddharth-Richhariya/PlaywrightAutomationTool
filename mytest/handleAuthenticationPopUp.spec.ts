import {test, Page, Browser, chromium, Locator} from '@playwright/test'

test ('Authentication Pop up handle', async()=>{
    const browser:Browser = await chromium.launch({headless:false});
    const page:Page = await browser.newPage();

    const username = "admin";
    const password = "admin";

    page.setExtraHTTPHeaders({Authorization : createAuthHeader(username , password)});

    await page.goto("https://the-internet.herokuapp.com/basic_auth");

    const aftermessage:Locator = await page.locator("//p");
    console.log(await aftermessage.innerText());


});

function createAuthHeader(username:any , password:any){
    return "Basic " + btoa(username + ":" + password);
}