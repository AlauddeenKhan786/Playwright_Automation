import{test,expect} from '@playwright/test'

test('All Locators', async({page})=>
{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //getByAltText()
    //const logo= await page.getByAltText('company-branding');
    //await expect(logo).toBeVisible();
    await expect(await page.getByAltText('company-branding')).toBeVisible();

    //getByrole() use heading
    //const login=await page.getByRole('heading',{name:'Login'});
    //await expect(login).toBeVisible();
    await expect(await page.getByRole('heading',{name:'Login'})).toBeVisible();
    //getByLabel()
    /*await page.getByLabel('Username');
    await page.getByLabel('Password');*/
    //getByPlaceholder()
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    //getbyrole()
    //await page.getByRole('button', {name:'Login'}).click();
    await page.getByRole('button',{type:'submit'}).click();
    //getbytext()
    await expect(page.getByText('Alauddeen  Khan ')).toBeVisible();

    //getbylabel()
    //await page.getByLabel('Employee Full Name').fill('Alauddeen');

    


})