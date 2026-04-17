import { login } from '../../utils/login';
import { test, expect } from '@playwright/test';

test('Update Company Settings', async ({ page }) => {

    await login(page);

    await page.getByText('Setup').click();
    await page.getByRole('button', { name: 'Company', exact: true }).click();

    await page.locator('#company_name').fill('Automation Company');
    await page.locator('#website').fill('https://testcompany.com');

    await page.getByRole('button', { name: /save/i }).click();

    await expect(page.locator('#website')).toHaveValue('https://testcompany.com');
});
