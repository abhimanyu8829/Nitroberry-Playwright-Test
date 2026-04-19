// tests/setup/workflow-template-create.spec.js
import { test, expect } from '@playwright/test';

test('Create workflow template - Step by step', async ({ page }) => {
    // Login
    await page.goto('https://app.nitroberry.com');
    await page.getByPlaceholder('Email').fill('Test@automation-nb.com');
    await page.getByPlaceholder('Password').fill('73mwQM6£vWf_');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await expect(page).toHaveURL(/dashboard/, { timeout: 10000 });

    // Navigate to Workflow Templates
    await page.getByRole('link', { name: 'Workflow' }).first().click();
    await page.getByRole('link', { name: 'Workflow Templates' }).click();

    // Click Create Template button
    await page.getByRole('link', { name: 'Create Template' }).click();

    // Wait for form to load
    await page.waitForSelector('input[placeholder="Write name"]', { timeout: 10000 });

    // Fill basic information
    const templateName = `Test Workflow ${Date.now()}`;
    await page.getByPlaceholder('Write name').fill(templateName);
    await page.getByPlaceholder('Write description').fill('Test template');

    // Select timezone
    await page.locator('button[role="combobox"]').nth(1).click();
    await page.getByRole('option', { name: 'Eastern Time (EST)' }).click();

    // Click Next Step
    await page.getByRole('button', { name: 'Next Step' }).last().click();

    // Wait and take screenshot to see what appears
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'after-next-click.png' });

    console.log('Current URL:', page.url());
    console.log('Page title:', await page.title());

    // Check if we moved to next step
    const hasFormBuilder = await page.getByText('Enhanced Request Form Builder').count();
    console.log('Has Enhanced Request Form Builder:', hasFormBuilder > 0);

    // If we're on form builder page, select first user from dropdown
    if (hasFormBuilder > 0) {
        console.log('On Form Builder page - selecting first available user');

        // Try to select first user from any dropdown
        const userDropdowns = await page.getByRole('combobox').all();
        console.log(`Found ${userDropdowns.length} dropdowns`);

        if (userDropdowns.length > 0) {
            await userDropdowns[0].click();
            await page.waitForTimeout(1000);

            // Get all options and select the first one
            const options = await page.getByRole('option').all();
            if (options.length > 0) {
                console.log(`Found ${options.length} options, selecting first`);
                await options[0].click();
            }
        }

        // Take screenshot after user selection
        await page.screenshot({ path: 'after-user-selection.png' });

        // Look for Next button again
        const nextButtons = await page.getByRole('button', { name: 'Next' }).all();
        if (nextButtons.length > 0) {
            console.log('Found Next button, ready to click when you tell me');
            await page.screenshot({ path: 'ready-for-next.png' });
        }
    }

    // Stop here - wait for manual inspection
    console.log('Test paused - check screenshots and tell me what to do next');
    await page.waitForTimeout(5000);
});