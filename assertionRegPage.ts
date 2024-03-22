import { Locator, Page } from "@playwright/test";

export class LanguageMenu {

    readonly page: Page
    readonly langMenuItem: Locator

    constructor(page: Page){
        this.page = page
        this.langMenuItem = page.locator('.ant-select-selector').first()

    }

    async langMenu(){

        await this.langMenuItem.click()
    }

    async langArm(){

        await this.page.getByTitle('Հայերեն').click()
    }

    async langRuss(){

        await this.page.getByTitle('Русский').click()
    }

    async langEng(){

        await this.page.getByTitle('English').click()
    }

}
