import { Page } from "@playwright/test";

export class LanguageRuss{

    readonly page: Page

    constructor(page: Page){

        this.page = page

    }

    async langRuss(){

        await this.page.getByTitle('Русский').click()
    }
}