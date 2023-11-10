const { Builder, By, Key, until } = require('selenium-webdriver');

async function signInTest() {
    // Set up the WebDriver
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Load the website
        await driver.get('https://www.leadingdealsglobal.com/offer/sfs-13-sso-u-s3');

        // Wait for the next page to load
        await driver.wait(until.elementLocated(By.className('p-step-wrapper')), 60000);

        // Find the div element with class 'ow_user_name'
        const header = await driver.findElement(By.className('p-step-wrapper'));

        const stepIn = await header.findElement(By.className('p-step-variants'));
        const buttons = await stepIn.findElements(By.className('p-step-button'));


        // Choose a random button index
        const randomIndex = Math.floor(Math.random() * buttons.length);

        // Click the randomly chosen button
        await buttons[randomIndex].click();

        // new fragment
        async function fillOutAge(driver, ageValue) {
            // TODO Age
            await driver.wait(until.elementLocated(By.className('p-step s-age')), 60000);
        
            const elementAge = await driver.findElement(By.className('p-step s-age'));
        
            // Find the input element by its placeholder attribute
            const ageInput = await elementAge.findElement(By.css('input[placeholder="Age"]'));
            
            // Clear the input field before sending new value
            await ageInput.clear();
            
            // Send the age value
            await ageInput.sendKeys(ageValue);
        
            // Click the next step
            await driver.findElement(By.className('p-step-cta')).click();
        }
        
        // Вызов функции с указанием значения возраста (например, '24')
        await fillOutAge(driver, '24');
    
        // TODO body
        await driver.wait(until.elementLocated(By.className('p-step s-body_types')), 60000);
        const elementBody = await driver.findElement(By.className('p-step s-body_types'));
        const bodyButtons = await elementBody.findElements(By.className('p-step-button'));

        // Choose a random button index
        const bodyIndex = Math.floor(Math.random() * bodyButtons.length);

        // Click the randomly chosen button
        await bodyButtons[bodyIndex].click();



        // TODO ranges
        await driver.wait(until.elementLocated(By.className('p-step s-age_ranges')), 60000);

        const elementRanges = await driver.findElement(By.className('p-step s-age_ranges'));

        const rangesButtons = await elementRanges.findElements(By.className('p-step-button'));
        // Choose a random button index
        const rangesIndex = Math.floor(Math.random() * rangesButtons.length);

        // Click the randomly chosen button
        await rangesButtons[rangesIndex].click();



        // TODO location
        await driver.wait(until.elementLocated(By.className('p-step s-location')), 60000);

        const elementLocation = await driver.findElement(By.className('p-step s-location'));

        // Find the input element by its placeholder attribute
        await elementLocation.findElement(By.css('input[placeholder="Enter Zipcode"]')).sendKeys('12123');


        // Wait for the element with class 'p-step s-location'
        await driver.wait(until.elementLocated(By.className('p-step s-location')), 60000);
        await driver.wait(until.elementLocated(By.className('overlay-input-valid')), 60000);


        await elementLocation.findElement(By.className('p-step-cta')).click();

        // TODO Email
        await driver.wait(until.elementLocated(By.className('p-step s-email')), 60000);

        const elementEmail = await driver.findElement(By.className('p-step s-email'));

        // Find the input element by its placeholder attribute
        await elementEmail.findElement(By.css('input[placeholder="Email"]')).sendKeys('mqahoi@proton.me');

        await driver.wait(until.elementLocated(By.className('p-step s-email')), 60000);
        await driver.wait(until.elementLocated(By.className('p-step-input-valid')), 60000);

        console.log(1123)
        await elementEmail.findElement(By.className('p-step-cta')).click();



        // TODO Username
        await driver.wait(until.elementLocated(By.className('p-step s-username')), 60000);

        const elementUsername = await driver.findElement(By.className('p-step s-username'));

        // Find the input element by its placeholder attribute
        await elementUsername.findElement(By.css('input[placeholder="Username"]')).sendKeys('QA');

        await driver.findElement(By.className('p-step-cta')).click();



        // TODO password
        await driver.wait(until.elementLocated(By.className('p-step s-password')), 60000);

        const elementPassword = await driver.findElement(By.className('p-step s-password'));

        // Find the input element by its placeholder attribute
        await elementPassword.findElement(By.css('input[placeholder="Password"]')).sendKeys('1234');

        console.log('Test passed: Successfully registered on product');

        // await driver.close();

    } catch (error) {
        console.error('Test failed:', error);
    } finally {
        // Close the browser
        await driver.quit();
    }
}

// Run the test
signInTest();


