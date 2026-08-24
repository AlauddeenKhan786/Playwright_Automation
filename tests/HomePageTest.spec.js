import {test,expect} from '@playwright/test'
//const {test,expect} = require('@playwright/test')

test('Home Page' , async({page})=>
{
    await page.goto('https://demoblaze.com/');
    const pageTitle = await page.title();
    console.log('Page title is:', pageTitle);
    // validation apply on title
   await expect(page).toHaveTitle('STORE');
   
    const pageURL=page.url();
    console.log('Page Url is :', pageURL);
    //validation for Url
    await expect(page).toHaveURL('https://demoblaze.com/')
    await page.close();

}
)