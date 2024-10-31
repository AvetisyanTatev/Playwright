import { expect, test } from "@playwright/test";
import { faker } from '@faker-js/faker';


test.beforeEach(async ({ page }) => {
   await page.goto('https://dev.academy.padcllc.com/home');
   console.log("PADC Academy");
  });

test("Checking 'Get Started' button", async ({page}) => {
    const getStartedButton = await page.getByRole('button', { name: "Get Started"});
    await getStartedButton.click();

    await expect(getStartedButton).toBeVisible();


})  

test.only("Register, positive case", async ({ page }) => {
    const getStartedButton = await page.getByRole('button', { name: "Get Started"});
    await getStartedButton.click();

    const fullNameField = await page.locator("#fullName");
    const fullNameFieldValue = faker.person.fullName();
    const emailField = await page.locator("#email");
    const emailFieldValue = faker.internet.email();
    const phoneNumberField = await page.locator("#phone");
    const phoneNumberFieldValue = faker.phone.number();
    const occupationField = await page.locator("#occupation");
    const clickOnOccupation = await page.locator('.ant-form-item-control-input-content', {hasText: 'Occupation'})
    const occupationFieldValue = faker.helpers.arrayElement(['Employee', 'Student', 'Other']);
    const occupationSelectValue = await page.locator('.ant-select-item-option-content', {hasText: occupationFieldValue})

    const universityField = await page.locator("#university");
    const universityFieldValue = "NPUA GB";
    const facultyField = await page.locator("#faculty");
    const facultyFieldValue = "Information Technologies";
    // const countryField = await page.locator("#countryId");
    // const randomCountry = await faker.location.country();
    
    const cityField = await page.locator("#city");
    const cityFieldValue = "Gyumri";
    const englishLevelField = await page.locator("#englishLevel");
    const englishLevelFieldValue = faker.helpers.arrayElement(['A1 (Elementary)', 'A2 (Pre Intermediate)', 'B1 (Intermediate)', 'B2 (Upper Intermediate)', 'C1 (Advanced)', 'C2 (Proficient)']);
    const englishLevelAllValueLocator = await page.locator('.ant-select-item-option-content', {hasText: englishLevelFieldValue});
    const agreementBox = await page.locator('#agreement')

    await fullNameField.fill(fullNameFieldValue);
    await emailField.fill(emailFieldValue);
    await phoneNumberField.click()
    await phoneNumberField.fill(phoneNumberFieldValue);
    
    // await occupationField.fill(occupationFieldValue);
    await universityField.fill(universityFieldValue);
    await facultyField.fill(facultyFieldValue);
    // await countryField.fill(countryFieldValue);
    // ####################################################
    const countryField = await page.locator('input#countryId'); // Adjust the selector if necessary
    await countryField.click();

  // Scroll to the end of the dropdown to load all options
    await page.evaluate(async () => {
    const dropdown = document.querySelector('.rc-virtual-list'); // Adjust selector if needed
    if (dropdown) {
      let lastScrollHeight = 0;
      let stableScrolls = 0;
      while (stableScrolls < 3) { // Wait for scroll height to be stable for 3 consecutive scrolls
        lastScrollHeight = dropdown.scrollHeight;
        dropdown.scrollTop = dropdown.scrollHeight;
        await new Promise(resolve => setTimeout(resolve, 200)); // Wait for new items to load

        if (dropdown.scrollHeight === lastScrollHeight) {
          stableScrolls += 1;
        } else {
          stableScrolls = 0;
        }
      }
    }
    });

  // Extract all country names from the dropdown, starting from the 3rd option
    const countries = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('.ant-select-item-option-content'))
        // Skip the first two elements to start from the 3rd
        .map(option => option.textContent.trim());
    });

    console.log('Extracted countries:', countries);

    await countryField.fill(randomCountry)
    await page.press('#countryId', 'Enter');



    await cityField.fill(cityFieldValue);
    await englishLevelField.click();
    await englishLevelAllValueLocator.click()

    await clickOnOccupation.click()
    await occupationSelectValue.click()

    await agreementBox.click()
    


    const nextButton = await page.getByRole('button', { name: 'Next' });
    nextButton.click();


    await expect(page).toHaveURL("https://dev.academy.padcllc.com/registration/course-format");

})




