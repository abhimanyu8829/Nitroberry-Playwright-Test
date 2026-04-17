const { test, expect } = require('@playwright/test');

test('Login → Create Company Location', async ({ page }) => {

  await page.goto('https://app.nitroberry.com/login');

  await page.fill('input[type="email"]', 'Test@automation-nb.com');
  await page.fill('input[type="password"]', '73mwQM6£vWf_');

  await page.keyboard.press('Enter');

  // ✅ FIX: don't block on URL
  await page.waitForTimeout(3000);

  // ✅ CLICK SETUP (reliable)
  await page.locator('[href*="setup"]').first().click();

  // Click Company Locations
  await page.getByText('Company Locations').click();

  await page.waitForLoadState('networkidle');

  // Add Location
  await page.getByRole('button', { name: /add location/i }).first().click();

  await page.getByPlaceholder('Head Office').fill('Test Location');
  await page.getByPlaceholder('Street').fill('Test Street');
  await page.getByPlaceholder('City').fill('Ahmedabad');

  await page.getByRole('button', { name: /^add location$/i }).last().click();

  await page.waitForTimeout(3000);
});