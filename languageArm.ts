import { Page } from "@playwright/test";

export class LanguageArm{

    readonly page: Page

    constructor(page: Page){

        this.page = page

    }

    async langArm(){

        await this.page.getByTitle('Հայերեն').click()
    }
}