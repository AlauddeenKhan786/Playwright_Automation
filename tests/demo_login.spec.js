import{test,expect} from '@playwright/test'
//const {test, expect} = require('@playwright/test')

test('Demo Test Login', async({page})=>
{
 await page.goto('https://demo.applitools.com/')
 await page.pause()

})