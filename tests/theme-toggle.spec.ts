import { test, expect } from '@playwright/test';
import type { Page } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

const SCREENSHOTS_DIR = path.join(process.cwd(), 'tests', 'screenshots');

function ensureScreenshotsDirExists() {
  if (!fs.existsSync(SCREENSHOTS_DIR)) {
    fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
  }
}

async function selectThemeOption(
  page: import('@playwright/test').Page,
  theme: 'dark' | 'light' | 'system',
) {
  const themeButton = page.getByRole('button', { name: /toggle theme/i }).first();
  await themeButton.click();

  const option = page.getByRole('menuitem', { name: new RegExp(`^${theme}$`, 'i') });
  await option.waitFor({ state: 'visible' });
  await option.click();
}

async function takeScreenshot(page: import('@playwright/test').Page, fileName: string) {
  ensureScreenshotsDirExists();
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, fileName), fullPage: true });
}

async function getMobileThemeToggleButton(page: Page) {
  let themeButton = page.getByRole('button', { name: /toggle theme/i }).first();

  if (!(await themeButton.isVisible())) {
    const menuButton = page.getByRole('button', { name: /toggle navigation menu/i });
    await menuButton.tap();

    themeButton = page.getByRole('button', { name: /toggle theme/i }).first();
    await expect(themeButton).toBeVisible();
  }

  return themeButton;
}

test.describe('Theme Toggle', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('Theme toggle switches to dark mode', async ({ page }) => {
    // Select dark theme
    await selectThemeOption(page, 'dark');
    
    // Verify dark theme is applied
    const html = page.locator('html');
    await expect(html).toHaveAttribute('data-theme', 'dark');
    await expect(html).toHaveClass(/dark/);
    
    // Take screenshot
    await takeScreenshot(page, 'theme-dark.png');
  });

  test('Theme toggle switches to light mode', async ({ page }) => {
    // First set to dark
    await selectThemeOption(page, 'dark');
    
    // Wait for dark theme to be applied before switching back
    const html = page.locator('html');
    await expect(html).toHaveAttribute('data-theme', 'dark');
    
    // Now switch to light
    await selectThemeOption(page, 'light');
    
    // Verify light theme is applied
    await expect(html).toHaveAttribute('data-theme', 'light');
    await expect(html).not.toHaveClass(/dark/);
    
    // Take screenshot
    await takeScreenshot(page, 'theme-light.png');
  });

  test('Theme toggle switches to system mode', async ({ page }) => {
    // Emulate a specific system color scheme
    await page.emulateMedia({ colorScheme: 'dark' });

    const themeButton = page.getByRole('button', { name: /toggle theme/i }).first();
    await themeButton.click();
    
    const systemOption = page.getByRole('menuitem', { name: /^system$/i });
    await systemOption.waitFor({ state: 'visible' });
    await systemOption.click();
    
    // Verify theme matches the emulated system preference
    const html = page.locator('html');
    const dataTheme = await html.getAttribute('data-theme');
    expect(dataTheme).toBe('dark');
    
    // Take screenshot
    await takeScreenshot(page, 'theme-system.png');
  });

  test('Theme preference persists after page reload', async ({ page }) => {
    // Set to dark mode
    const themeButton = page.getByRole('button', { name: /toggle theme/i }).first();
    await themeButton.click();
    
    const darkOption = page.getByRole('menuitem', { name: /^dark$/i });
    await darkOption.waitFor({ state: 'visible' });
    await darkOption.click();
    
    // Wait for dark theme to be applied before reload
    const html = page.locator('html');
    await expect(html).toHaveAttribute('data-theme', 'dark');
    
    // Reload page
    await page.reload();
    await page.waitForLoadState('networkidle');
    
    // Verify dark theme persisted
    await expect(html).toHaveAttribute('data-theme', 'dark');
    await expect(html).toHaveClass(/dark/);
  });
});

test.describe('Theme Toggle - Mobile', () => {
  test.use({ 
    viewport: { width: 375, height: 667 },
    hasTouch: true,
  });

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('Theme toggle works on mobile tap', async ({ page }) => {
    // Get the theme toggle button, opening the mobile menu if necessary
    const themeButton = await getMobileThemeToggleButton(page);
    
    // Tap theme button
    await themeButton.tap();
    
    // Tap dark option
    const darkOption = page.getByRole('menuitem', { name: /^dark$/i });
    await darkOption.waitFor({ state: 'visible' });
    await darkOption.tap();
    
    // Verify dark theme is applied
    const html = page.locator('html');
    await expect(html).toHaveAttribute('data-theme', 'dark');
    
    // Take screenshot
    await takeScreenshot(page, 'theme-toggle-mobile.png');
  });
});
