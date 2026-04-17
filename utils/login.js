export async function login(page) {
    await page.goto('https://app.nitroberry.com');

    const isLoginVisible = await page.locator('input[placeholder="Email"]').isVisible().catch(() => false);

    if (isLoginVisible) {
        await page.getByPlaceholder('Email').fill('Test@automation-nb.com');
        await page.getByPlaceholder('Password').fill('73mwQM6£vWf_');
        await page.getByRole('button', { name: 'Sign in' }).click();
    }

    await page.waitForURL('**/dashboard**');
}