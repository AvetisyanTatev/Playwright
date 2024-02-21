import {expect, test} from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('https://staging.office-management.padcllc.com/auth/register');
  
  });

  //1. To create new user

  test('Registration', async ({ page }) => {

  await page.locator('#register_username').fill('te_st_userr')
  await page.locator('#register_firstName').fill('Playwright')
  await page.locator('#register_lastName').fill('Playwright-User')
  await page.locator('#register_email').fill('doges655862@fahih.com')
  await page.locator('[class="form-control "]').fill('+37496173023')
  await page.locator('#register_professionId').click()
  await page.getByText('QA Engineer').click()
  await page.locator('#register_password').fill('Test123*')
  await page.locator('#register_confirm').fill('Test123*')
  await page.locator('[class="ant-btn css-1fwaatc ant-btn-primary _submitButton_3g91m_229"]').click()

  //To check existing users

  const errorMessage = page.locator('[class="error"]')  
  await expect(errorMessage).toHaveText('User already exists')
 
  })

  //2. To click on the logo(redirect to login page)

  test('Click logo', async ({ page }) => {

  await page.locator('[class="_logo_15vbi_7"]').click()

  //Assertion

  const loginPageUrl = 'https://staging.office-management.padcllc.com/'

  await expect(loginPageUrl).toEqual('https://staging.office-management.padcllc.com/')

  })

  //3. Language dropdown menu

  test('Registration Language dropdown menu', async ({ page }) => {

    const languageMenu = page.locator('.ant-select-selector').first()
    await languageMenu.click()

  // Select Armenian

   await page.getByTitle('Հայերեն').click()
   
   const titleTextArm = page.locator('[class="_texts_3g91m_114"]')
   const secondText = page.locator('._aboutText_3g91m_154')


   //Assertion Title in Armenian

   await expect(titleTextArm).toHaveText('Այստեղ դուք կարող եք ներկայացնել մեկ այլ հակիրճ վերնագիր մեկ այլ բաժնի համար:')
   await expect(secondText).toHaveText('Այս բաժինը կկենտրոնանա թեմայի առանձին ասպեկտի վրա: Օգտագործեք այն՝ առաջարկելու լրացուցիչ պատկերացումներ, օրինակներ կամ բացատրություններ՝ ընթերցողի հասկացողությունը բարձրացնելու համար')

  
    })

  //4. Select English

  test('Language Dropdown English', async ({ page }) => {

    const languageMenu = page.locator('.ant-select-selector').first()
    await languageMenu.click()

    await page.getByTitle('English').click()

    const titleTextEng = page.locator('[class="_texts_3g91m_114"]')
    const secondText = page.locator('._aboutText_3g91m_154')

    //Assertion Title in English

    await expect(titleTextEng).toHaveText('Here you can provide another concise title for a different section.')
    await expect(secondText).toHaveText("This section will focus on a separate aspect of the topic. Use it to offer additional insights, examples, or explanations to enhance the reader's understandin")


  })

  //5. Select Russian

  test('Language Dropdown Russian', async ({ page }) => {

    const languageMenu = page.locator('.ant-select-selector').first()
    await languageMenu.click()

    await page.getByTitle('Русский').click()

  //Assertion Title in Russian

    const titleTextRus = page.locator('[class="_texts_3g91m_114"]')
    const secondText = page.locator('._aboutText_3g91m_154')


    await expect(titleTextRus).toHaveText('Здесь вы можете указать другое краткое название для другого раздела.')
    await expect(secondText).toHaveText('В этом разделе речь пойдет об отдельном аспекте темы. Используйте его, чтобы предложить дополнительную информацию, примеры или объяснения, чтобы улучшить понимание читателем.')


  })

  //6. The "Sign In" button of the Registration page

  test('Sign In Button of the Reg Page', async ({ page }) => {

    await page.locator('#rc-tabs-0-tab-1').click()

    //Assertion URL of the Login page

    const loginPageUrl = 'https://staging.office-management.padcllc.com/'

    await expect(loginPageUrl).toEqual('https://staging.office-management.padcllc.com/')


  })

  //7. The "Sign Up" button under the registration form

  test('Sign Up under Reg form', async ({ page }) => {

  //Click on the Sign Up button without filling in the fields

    await page.getByRole('button', { name: 'Sign Up' }).click()

  //Assertion error message texts in all fields

  const errorMessUserName = await page.locator('#register_username_help')
  const errorMessFirstName = await page.locator('#register_firstName_help')
  const errorMessLastName = await page.locator('#register_lastName_help')
  const errorMessEmail = await page.locator('#register_email_help')
  const errorMessPhone = await page.locator('#register_phone_help')
  const errorMessProf = await page.locator('#register_professionId_help')
  const errorMessPassword = await page.locator('#register_password_help')
  const errorMessConfirmPass = await page.locator('#register_confirm_help')

  const selectProfField = await page.locator('#register_professionId')
  const proffList = ['QA Engineer', 'Front-end developer','Back-end developer', 
                     'Graphic Designer', 'Project Manager', 'HR Manager',
                     'asdasasdas123123', '11', 'Mobile Developer', 'CTO',
                     'CEO', 'DevOps Engineer', 'ege hn']

  await expect(proffList).toContain('Front-end developer')

  await expect(errorMessUserName).toHaveText('Please input your User Name! ')
  await expect(errorMessFirstName).toHaveText('Please input your First Name!')
  await expect(errorMessLastName).toHaveText('Please input your Last Name!')
  await expect(errorMessEmail).toHaveText('Please input your E-mail!')
  await expect(errorMessPhone).toHaveText('Please input your phone number!')
  await expect(errorMessProf).toHaveText('Please select your profession!')
  await expect(errorMessPassword).toHaveText('Please input your password!')
  await expect(errorMessConfirmPass).toHaveText('The two passwords that you entered do not match!')


  })

  //8. Assertion error message texts in all fields in Armenian

  test('Sign Up without filling in the form in Armenian', async ({ page }) => {

    await page.getByRole('button', { name: 'Sign Up' }).click()

    const languageMenu = page.locator('.ant-select-selector').first()
    await languageMenu.click()

    await page.getByTitle('Հայերեն').click()

    const errorMessUserName = await page.locator('#register_username_help')
    const errorMessFirstName = await page.locator('#register_firstName_help')
    const errorMessLastName = await page.locator('#register_lastName_help')
    const errorMessEmail = await page.locator('#register_email_help')
    const errorMessPhone = await page.locator('#register_phone_help')
    const errorMessProf = await page.locator('#register_professionId_help')
    const errorMessPassword = await page.locator('#register_password_help')
    const errorMessConfirmPass = await page.locator('#register_confirm_help')

    await expect(errorMessUserName).toHaveText('Խնդրում ենք մուտքագրել ձեր մուտքանունը!')
    await expect(errorMessFirstName).toHaveText('Խնդրում ենք մուտքագրել Ձեր Անունը!')
    await expect(errorMessLastName).toHaveText('Խնդրում ենք մուտքագրել ձեր ազգանունը!')
    await expect(errorMessEmail).toHaveText('Խնդրում ենք մուտքագրել ձեր էլ. հասցեն!')
    await expect(errorMessPhone).toHaveText('Խնդրում ենք մուտքագրել ձեր հեռախոսահամարը!')
    await expect(errorMessProf).toHaveText('Խնդրում ենք ընտրել ձեր մասնագիտությունը')
    await expect(errorMessPassword).toHaveText('Խնդրում ենք մուտքագրել ձեր գաղտնաբառը!')
    await expect(errorMessConfirmPass).toHaveText('Ձեր մուտքագրած երկու գաղտնաբառերը չեն համընկնում!')




  })

  //9. Assertion error message texts in all fields in Russian

  test('Sign Up without filling in the form in Russian', async ({ page }) => {

    await page.getByRole('button', { name: 'Sign Up' }).click()

    const languageMenu = page.locator('.ant-select-selector').first()
    await languageMenu.click()

    await page.getByTitle('Русский').click()

    const errorMessUserName = await page.locator('#register_username_help')
    const errorMessFirstName = await page.locator('#register_firstName_help')
    const errorMessLastName = await page.locator('#register_lastName_help')
    const errorMessEmail = await page.locator('#register_email_help')
    const errorMessPhone = await page.locator('#register_phone_help')
    const errorMessProf = await page.locator('#register_professionId_help')
    const errorMessPassword = await page.locator('#register_password_help')
    const errorMessConfirmPass = await page.locator('#register_confirm_help')

    await expect(errorMessUserName).toHaveText('Пожалуйста, введите ваше имя пользователя!')
    await expect(errorMessFirstName).toHaveText('Пожалуйста, введите ваше имя!')
    await expect(errorMessLastName).toHaveText('Пожалуйста, введите вашу фамилию!')
    await expect(errorMessEmail).toHaveText('Пожалуйста, введите свой E-mail!')
    await expect(errorMessPhone).toHaveText('Пожалуйста, введите номер телефона!')
    await expect(errorMessProf).toHaveText('Пожалуйста, выберите вашу профессию')
    await expect(errorMessPassword).toHaveText('Пожалуйста, введите ваш пароль!')
    await expect(errorMessConfirmPass).toHaveText('Два введенных вами пароля не совпадают!')



  })

   //10. Filling  the Reg form with spaces only

   test('Fillig in the form with spaces', async ({ page }) => {

    await page.locator('#register_username').fill('     ')
    await page.locator('#register_firstName').fill('     ')
    await page.locator('#register_lastName').fill('     ')
    await page.locator('#register_email').fill('     ')
    await page.locator('[class="form-control "]').fill('     ')
    await page.locator('#register_password').fill('     ')
    await page.locator('#register_confirm').fill('     ')
    await page.locator('[class="ant-btn css-1fwaatc ant-btn-primary _submitButton_3g91m_229"]').click()

    //Assertion error messages texts

    const errorMessUserName = await page.locator('#register_username_help')
    const errorMessFirstName = await page.locator('#register_firstName_help')
    const errorMessLastName = await page.locator('#register_lastName_help')
    const errorMessEmail = await page.locator('#register_email_help')
    const errorMessPhone = await page.locator('#register_phone_help')
    const errorMessPassword = await page.locator('#register_password_help')
    const errorMessConfirmPass = await page.locator('#register_confirm')
    const selectProfFieeld = await page.locator('#register_professionId')


    await expect(errorMessUserName).toHaveText('Only numbers, English alphabet letters  and underscore inside text are allowed.')
    await expect(errorMessFirstName).toHaveText('Please input your First Name!')
    await expect(errorMessLastName).toHaveText('Please input your Last Name!')
    await expect(errorMessEmail).toHaveText('Please input your E-mail!')
    await expect(errorMessPhone).toHaveText('Please input your phone number!')
    await expect(errorMessPassword).toHaveText('Minimum length: 8 , English alphabet uppercase letters and lowercase letters, number, one special character (-_=+@$!%*#?&,.)')
    await expect(errorMessConfirmPass).toHaveText('')

   })

    //11. Filling  the Reg form with spaces only in Armenian

    test('Fillig in the form with spaces in Armenian', async ({ page }) => {

      await page.locator('#register_username').fill('     ')
      await page.locator('#register_firstName').fill('     ')
      await page.locator('#register_lastName').fill('     ')
      await page.locator('#register_email').fill('     ')
      await page.locator('[class="form-control "]').fill('     ')
      await page.locator('#register_password').fill('     ')
      await page.locator('#register_confirm').fill('     ')
      await page.locator('[class="ant-btn css-1fwaatc ant-btn-primary _submitButton_3g91m_229"]').click()

      const languageMenu = page.locator('.ant-select-selector').first()
      await languageMenu.click()

      await page.getByTitle('Հայերեն').click()


  
      //Assertion error messages texts in Armenian
  
      const errorMessUserName = await page.locator('#register_username_help')
      const errorMessFirstName = await page.locator('#register_firstName_help')
      const errorMessLastName = await page.locator('#register_lastName_help')
      const errorMessEmail = await page.locator('#register_email_help')
      const errorMessPhone = await page.locator('#register_phone_help')
      const errorMessPassword = await page.locator('#register_password_help')
      const errorMessConfirmPass = await page.locator('#register_confirm')
      const selectProfFieeld = await page.locator('#register_professionId')
  
  
      await expect(errorMessUserName).toHaveText('Տեքստի ներսում թույլատրվում են միայն թվեր, անգլերեն տառեր և ընդգծումներ')
      await expect(errorMessFirstName).toHaveText('Խնդրում ենք մուտքագրել Ձեր Անունը!')
      await expect(errorMessLastName).toHaveText('Խնդրում ենք մուտքագրել ձեր ազգանունը!')
      await expect(errorMessEmail).toHaveText('Խնդրում ենք մուտքագրել ձեր էլ. հասցեն!')
      await expect(errorMessPhone).toHaveText('Խնդրում ենք մուտքագրել ձեր հեռախոսահամարը!')
      await expect(errorMessPassword).toHaveText('Նվազագույն երկարությունը՝ 8, անգլերեն այբուբենի մեծատառ և փոքրատառ, թիվ, մեկ հատուկ նիշ (-_=+@$!%*#?&,.)')
      await expect(errorMessConfirmPass).toHaveText('')
  
     })

     //12. Filling  the Reg form with spaces only in Russian

     test('Fillig in the form with spaces in Russian', async ({ page }) => {

      await page.locator('#register_username').fill('     ')
      await page.locator('#register_firstName').fill('     ')
      await page.locator('#register_lastName').fill('     ')
      await page.locator('#register_email').fill('     ')
      await page.locator('[class="form-control "]').fill('     ')
      await page.locator('#register_password').fill('     ')
      await page.locator('#register_confirm').fill('     ')
      await page.locator('[class="ant-btn css-1fwaatc ant-btn-primary _submitButton_3g91m_229"]').click()

      const languageMenu = page.locator('.ant-select-selector').first()
      await languageMenu.click()
      await page.getByTitle('Русский').click()

      //Assertion error messages texts in Armenian
  
      const errorMessUserName = await page.locator('#register_username_help')
      const errorMessFirstName = await page.locator('#register_firstName_help')
      const errorMessLastName = await page.locator('#register_lastName_help')
      const errorMessEmail = await page.locator('#register_email_help')
      const errorMessPhone = await page.locator('#register_phone_help')
      const errorMessPassword = await page.locator('#register_password_help')
      const errorMessConfirmPass = await page.locator('#register_confirm')
      const selectProfFieeld = await page.locator('#register_professionId')
  
  
      await expect(errorMessUserName).toHaveText('Допускаются только цифры, английские буквы и подчеркивание внутри текста')
      await expect(errorMessFirstName).toHaveText('Пожалуйста, введите ваше имя!')
      await expect(errorMessLastName).toHaveText('Пожалуйста, введите вашу фамилию!')
      await expect(errorMessEmail).toHaveText('Пожалуйста, введите свой E-mail!')
      await expect(errorMessPhone).toHaveText('Пожалуйста, введите номер телефона!')
      await expect(errorMessPassword).toHaveText('Минимальная длина: 8 , прописные и строчные буквы английского алфавита, цифра, один специальный символ (-_=+@$!%*#?&,.)')
      await expect(errorMessConfirmPass).toHaveText('')
  
     })

     //13. "Eye" icons of the Password/Confirm password fields

     test('Visible icons of the Password/Confirm password fields', async ({ page }) => {

      await page.locator('#register_password').fill('Abcd123*')

      //for show password
      const eyeIcon = await page.locator('[class="ant-input-suffix"]').first().click() 

      //for hidden password
      await page.locator('[class="ant-input-suffix"]').first().click() 

      //"Eye" icon of the Coonfirm password 

      await page.locator('#register_confirm').fill('Abcd123*')

      //for show password
      const eyeIcon2 = await page.locator('div:nth-child(8)').click() 

      //for hidden password
      await page.locator('div:nth-child(8)').click() 

        })
    

    //14. Assertion for Logo

    test('Logo', async ({ page }) => {

      const logo =  await page.locator('[class="_logo_15vbi_7"]')  

      await expect(logo).toHaveAttribute('src', "https://api-staging.office-management.padcllc.com/uploads/logo/1/file_1708072227428_ac061572-d9f4-49bf-85a2-894416832c7a.png?authorization=")
      
    })

    
     
    

    

