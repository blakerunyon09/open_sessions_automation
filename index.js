const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    // Open Active
    await driver.get('https://activeworks.active.com/');
    const activeWindow = await driver.getWindowHandle();

    // Enter Active Credentials
    await driver.wait(until.elementLocated(By.name('accountname')), 10000);
    await driver.findElement(By.name('accountname')).sendKeys('blake@avid4.com');
    await driver.findElement(By.name('pawd')).sendKeys('Gigglys5');
    await driver.findElement(By.css("#passport > div > div.passport-ui-app__main.passport__signin__main > div:nth-child(1) > div > form > button")).click();
    
    // Open GMail
    await driver.switchTo().newWindow('tab');
    await driver.get('https://mail.google.com/');

    // Login to GMail
    await driver.findElement(By.name("identifier")).sendKeys('blake@avid4.com', Key.RETURN);
    await driver.wait(until.elementLocated(By.name('password')), 10000);
    await driver.findElement(By.name('password')).sendKeys('Gigglys5', Key.RETURN);

  } finally {
    // await driver.quit();
  }
})();