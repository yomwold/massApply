import { test } from '@playwright/test';

test('find job links', async ({ page }) => {
  await page.goto('https://google.com/');
  await page.waitForSelector('input')
  await page.fill('input', 'site:greenhouse.io (software enginner intern remote | software developer intern remote)')
  await page.keyboard.press('Enter'); 
  await page.waitForTimeout(500)

  const searchDiv = await page.$('#search');
  const links = await searchDiv?.$$('a');
  const hrefs = await Promise.all(links?.map(async (link) => await link.getAttribute('href')) || []);

  console.log({hrefs})
  
});


