const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:3000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });

  test("clicking draw button displays choices", async () => {
    await driver.get("http://localhost:3000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
    await driver.findElement(By.id("draw")).click();
  });

  test("Clicking the 'add to duo' button adds that bot to your duo", async () => {
    await driver.get("http://localhost:3000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
    await driver.findElement(By.id("draw")).click();
    await driver.findElement(By.xpath('//*[@id="choices"]/div[2]/button')).click();
  })
});