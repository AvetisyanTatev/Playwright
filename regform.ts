import { Locator, Page } from "@playwright/test";

export class RegistrationForm {

    private readonly page: Page

    constructor(page: Page){
        this.page = page

    }
    /**
     * 
     * @param username - should be unique
     * @param firstname - should contain letters and dash
     * @param lastname - should contain letters and dash
     * @param email - should be unique
     * @param phone - should be unique
     * @param password - should contain letters, numbers, symbols
     * @param confirmpassword - should contain letters, numbers, symbols
     */
    async fillRegistrationFormWithValidData(username: string, firstname: string, lastname: string, email: string, phone: string, password: string, confirmpassword: string, ){
        await this.page.locator('#register_username').fill(username)
        await this.page.locator('#register_firstName').fill(firstname)
        await this.page.locator('#register_lastName').fill(lastname)
        await this.page.locator('#register_email').fill(email)
        await this.page.locator('[class="form-control "]').fill(phone)
        await this.page.locator('#register_professionId').click()
        await this.page.locator('[class="ant-select-item-option-content"]').nth(0).click()
        await this.page.locator('#register_password').fill(password)
        await this.page.locator('#register_confirm').fill(confirmpassword)
        await this.page. getByRole('button', { name: 'Sign Up' }).click()

    }

}