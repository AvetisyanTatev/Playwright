import { Page } from "@playwright/test";

export class LanguageEng{

    readonly page: Page

    constructor(page: Page){

        this.page = page

    }

    async langEng(){

        await this.page.getByTitle('English').click()
    }
}