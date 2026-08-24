import{test,expect} from '@playwright/test'

//const {test,expect} = require('@playwright/test');

test('Locators' , async({page})=>
{
  await page.goto('https://demoblaze.com/');

  //click on login button    --property
 // await page.locator(id="login2").click();
  await page.click('id=login2');
  
  //provide username  --CSS
  //await page.locator('#loginusername').fill('pavanol');
  await page.fill('#loginusername', 'pavanol');
  //await page.type('#loginusername', 'pavanol');
  //await page.locator('#loginusername).type('pavanol');
  
  //provide password  --CSS
  await page.fill("input[id='loginpassword']", 'test@123');
  //await page.locator('input[@id="loginpassword"]').fill('test@123');

  //click on login button  --Xpath
  await page.click('//button[@onclick="logIn()"]');

  //verify logout button presence  --xpath
  const logoutlink=await page.locator('//a[@id="logout2"]');
  await expect(logoutlink).toBeVisible();
  
  await page.close();
  

})