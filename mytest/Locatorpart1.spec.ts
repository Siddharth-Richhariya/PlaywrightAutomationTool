import {test, expect,Page, chromium, Browser, Locator} from '@playwright/test'

test ('login test', async() => {

    const browser:Browser = await  chromium.launch({headless: false});
    const page:Page = await browser.newPage();
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

    //Create a diffrent locator and wants to perform diffrent action on it 
    //1. id --
    const firstname:Locator = page.locator('id=input-firstname');
    const lastname:Locator = page.locator('id=input-lastname');

    await firstname.fill("Sid Test");
    await lastname.fill("Test123");

    // By Class --
    const logo:Locator = page.locator('.img-responsive'); // Class locator can not be like as id it should be in CssSelector State
    const logoExist = await logo.isEnabled();
    console.log(logoExist);

    //By Text --
    const text:Locator = page.locator('text=E-Mail');
    const textExist = await text.innerText();
    console.log(textExist);

    // By CssSelector --
    const emailField:Locator = page.locator('input#input-email');
    await emailField.fill("test1996@test.com");

    const telephoneField:Locator = page.locator('input[name="telephone"]');
    await telephoneField.fill("8784653776");

    //By Xpath --
    const passwordfield:Locator = page.locator("//input[@name='password']");
    const passwordConfirmField:Locator = page.locator("//input[@name='confirm']");
    const privacyCheckbox:Locator = page.locator("//input[@name='confirm']");
    const continueButton:Locator = page.locator("//input[@value='Continue']");

    const password = "test";

    await passwordfield.fill(password);
    await passwordConfirmField.fill(password);
    await privacyCheckbox.click();
    await continueButton.click();

});
