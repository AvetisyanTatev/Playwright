import {test, expect} from '@playwright/test'
import { PageManager } from '../page-objects/pageManager'


test.beforeEach(async({page}) => {
    await page.goto(' http://localhost:4200/ ')
   
})

test('Navigate to Form page', async ({page}) => {
    const pm = new PageManager(page)
    await pm.navigateTo().formLayoutsPage()
    await pm.navigateTo().datepickerPage()
    await pm.navigateTo().smartTablePage()
    await pm.navigateTo().toastrPage()
    await pm.navigateTo().tooltipPage() 

})

test('Parametrized Methods', async ({page}) => {
    const pm = new PageManager(page)

    await pm.navigateTo().formLayoutsPage()
    await pm.onFormLayoutsPage().submitUsingTheGridFormWithCredAndSelectOption('avetisyant125@gmail.com', 'Test123*', 'Option 1')
    await pm.onFormLayoutsPage().submitInlineFormWithManeEmailCheckbox('Tatevik Avetisyan', 'avetisyant125@gmail.com', true)
    await pm.navigateTo().datepickerPage()
    await pm.onDatepickerPage().selectCommonDatePickerDateFromToday(10)
    await pm.onDatepickerPage().selectDatepickerWithRangeFromToday(6, 10)


})