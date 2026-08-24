const{test , expect} = require('@playwright/test')

//import{test , expect } from '@playwright/test'

test('Multiple Locators' , async({page})=>
{
    await page.goto('https://demoblaze.com/')

})