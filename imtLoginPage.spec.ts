import {expect, test} from '@playwright/test'
import { LanguageMenu } from '../page_object/assertionRegPage'


test.beforeEach(async ({ page }) => {
    await page.goto('https://staging.devstride.padcllc.com/');
  
  });

  //1. Redirection to the registration page

  test('Sign Up button', async ({ page }) => {

    await page.getByRole('tab', { name: 'Sign Up' }).click()
  
    //Assertion
  
    const regPageUrl = 'https://staging.devstride.padcllc.com/register'
  
    await expect(regPageUrl).toContain('register')
  
    })

    //2. Language Menu

    test('Language Menu', async ({ page }) => {

      const languageMenu = new LanguageMenu(page)
      await languageMenu.langMenu()


    })

    //3.Change language Armenian

    test('Select Armenian', async ({ page }) => {

      const languageMenu = new LanguageMenu(page)
      await languageMenu.langMenu()

      await languageMenu.langArm()


    })

    //4.Change language English

    test('Select English', async ({ page }) => {

      const languageMenu = new LanguageMenu(page)
      await languageMenu.langMenu()

      await languageMenu.langEng()


    })

    //5.Change language Russian

    test('Select Russian', async ({ page }) => {

      const languageMenu = new LanguageMenu(page)
      await languageMenu.langMenu()

      await languageMenu.langRuss()


    })

    //6.Logo is visible

    test('Logo is visible', async ({ page }) => {

      await expect (page.locator('[class="_logo_15vbi_7"]')).toBeVisible()


    })

   // 7.Email field contain text "Email"

    test('Email placeholder', async ({ page }) => {

      const emailfield = await page.locator('.ant-form-item-control-input-content .ant-input-affix-wrapper #login_login')
      const placeholderText = await emailfield.getAttribute('placeholder')
      await expect (placeholderText).toEqual('Email')


  
    })



