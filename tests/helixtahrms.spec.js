const{test,expect} = require('@playwright/test');

test('Book A Demo Form', async({page})=>
{
   await page.goto('https://www.helixtahr.com/');
   
   await expect(page).toHaveTitle('HRMS - HR Management Software | Employee Management System | HelixtaHR');
   await page.locator("//button[@class='btn btn-orange home-banner-button-1-home-page']").click();
});