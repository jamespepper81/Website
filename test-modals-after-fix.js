const { chromium } = require('playwright');

async function testModalsAfterFix() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();

  console.log('=== Testing Modal Windows After Fix ===');
  
  try {
    // Navigate to homepage
    await page.goto('http://localhost:9002', { waitUntil: 'networkidle' });
    console.log('✓ Homepage loaded');
    await page.waitForTimeout(2000);

    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(1000);

    // Test Privacy Policy Modal
    console.log('\n--- Testing Privacy Policy Modal ---');
    const privacyButton = page.locator('button:has-text("Privacy Policy")');
    
    // Try click with force option to bypass checks
    await privacyButton.click({ force: true });
    await page.waitForTimeout(1500);
    
    // Take screenshot of Privacy Policy modal
    await page.screenshot({ path: '/tmp/privacy-policy-modal-fixed.png', fullPage: false });
    console.log('✓ Screenshot saved: privacy-policy-modal-fixed.png');

    // Check if modal is visible
    const modalVisible = await page.locator('[role="dialog"]').isVisible();
    console.log('Privacy Policy modal visible:', modalVisible);

    if (modalVisible) {
      const modalTitle = await page.locator('[role="dialog"] h2').first().textContent();
      console.log('Modal title:', modalTitle);
    }

    // Close modal by pressing Escape or clicking close button
    await page.keyboard.press('Escape');
    await page.waitForTimeout(500);

    // Test Terms of Service Modal
    console.log('\n--- Testing Terms of Service Modal ---');
    const termsButton = page.locator('button:has-text("Terms of Service")');
    await termsButton.click({ force: true });
    await page.waitForTimeout(1500);
    
    // Take screenshot of Terms modal
    await page.screenshot({ path: '/tmp/terms-modal-fixed.png', fullPage: false });
    console.log('✓ Screenshot saved: terms-modal-fixed.png');

    // Check if modal is visible
    const termsModalVisible = await page.locator('[role="dialog"]').isVisible();
    console.log('Terms of Service modal visible:', termsModalVisible);

    if (termsModalVisible) {
      const termsModalTitle = await page.locator('[role="dialog"] h2').first().textContent();
      console.log('Modal title:', termsModalTitle);
    }

  } catch (error) {
    console.error('Error testing modals:', error.message);
    await page.screenshot({ path: '/tmp/modal-error-fixed.png', fullPage: true });
  }

  await browser.close();
  console.log('\n=== Testing Complete ===');
}

testModalsAfterFix().catch(console.error);
