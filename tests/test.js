/* 
* https://www.lambdatest.com/blog/automation-testing-with-selenium-javascript/
step:
1. Launch the browser
2. Go to www.google.com
3. Searches a string value
4. Verifies the result page title
5. Close the browser
*/

const {By, Key, Builder} = require("selenium-webdriver");
require("chromedriver");

async function example(){
    var searchString = "Hai Guies";

    // wait for browser launch and build properly
    let driver = await new Builder().forBrowser("chrome").build();

    //To fetch http://google.com from the browser with our code.
    await driver.get("http://google.com");
            
    //To send a search query by passing the value in searchString.
    await driver.findElement(By.name("q")).sendKeys(searchString,Key.RETURN);

    //Verify the page title and print it
    var title = await driver.getTitle();
    console.log('Title is:',title);

    //It is always a safe practice to quit the browser after execution
    await driver.quit();
}

example()