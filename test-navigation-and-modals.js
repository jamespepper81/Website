const { chromium } = require('playwright');

async function testNavigationAndModals() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();

  console.log('=== Testing Navigation Dropdowns ===');
  
  try {
    // Navigate to homepage
    await page.goto('http://localhost:9002', { waitUntil: 'networkidle' });
    console.log('✓ Homepage loaded');

    // Wait for header to be visible
    await page.waitForSelector('header', { timeout: 5000 });

    // Test Products Dropdown
    console.log('\n--- Testing Products Dropdown ---');
    const productsButton = page.locator('button:has-text("Products")').first();
    await productsButton.click();
    await page.waitForTimeout(1000); // Wait for dropdown animation
    
    // Take screenshot of Products dropdown
    await page.screenshot({ path: '/tmp/products-dropdown.png', fullPage: false });
    console.log('✓ Screenshot saved: products-dropdown.png');

    // Check if dropdown items are visible
    const walletAnalyzerVisible = await page.locator('text=Wallet Analyzer').first().isVisible();
    const privacyWalletVisible = await page.locator('text=Privacy Wallet').first().isVisible();
    const learningHubVisible = await page.locator('text=Learning Hub').first().isVisible();
    const bitcoinHistoryVisible = await page.locator('text=Bitcoin History').first().isVisible();
    
    console.log('Wallet Analyzer visible:', walletAnalyzerVisible);
    console.log('Privacy Wallet visible:', privacyWalletVisible);
    console.log('Learning Hub visible:', learningHubVisible);
    console.log('Bitcoin History visible:', bitcoinHistoryVisible);

    // Close dropdown by clicking elsewhere
    await page.click('body', { position: { x: 10, y: 10 } });
    await page.waitForTimeout(500);

    // Test Launch App Dropdown
    console.log('\n--- Testing Launch App Dropdown ---');
    const launchButton = page.locator('button:has-text("Launch App")').first();
    await launchButton.click();
    await page.waitForTimeout(1000); // Wait for dropdown animation
    
    // Take screenshot of Launch App dropdown
    await page.screenshot({ path: '/tmp/launch-app-dropdown.png', fullPage: false });
    console.log('✓ Screenshot saved: launch-app-dropdown.png');

    // Check if dropdown items are visible
    const launchWalletAnalyzer = await page.locator('a[href*="app.bitsleuth.ai"]').isVisible();
    const launchPrivacyWallet = await page.locator('a[href="/wallet/download"]').isVisible();
    
    console.log('Launch Wallet Analyzer visible:', launchWalletAnalyzer);
    console.log('Launch Privacy Wallet visible:', launchPrivacyWallet);

    // Close dropdown
    await page.click('body', { position: { x: 10, y: 10 } });
    await page.waitForTimeout(500);

  } catch (error) {
    console.error('Error testing navigation dropdowns:', error.message);
    await page.screenshot({ path: '/tmp/navigation-error.png', fullPage: true });
  }

  console.log('\n=== Testing Modal Windows ===');
  
  try {
    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(1000);

    // Test Privacy Policy Modal
    console.log('\n--- Testing Privacy Policy Modal ---');
    const privacyButton = page.locator('button:has-text("Privacy Policy")');
    await privacyButton.click();
    await page.waitForTimeout(1500); // Wait for modal animation
    
    // Take screenshot of Privacy Policy modal
    await page.screenshot({ path: '/tmp/privacy-policy-modal.png', fullPage: false });
    console.log('✓ Screenshot saved: privacy-policy-modal.png');

    // Check if modal is visible
    const modalVisible = await page.locator('[role="dialog"]').isVisible();
    console.log('Privacy Policy modal visible:', modalVisible);

    // Close modal
    const closeButton = page.locator('button[aria-label="Close"]').or(page.locator('button:has-text("Close")'));
    if (await closeButton.count() > 0) {
      await closeButton.first().click();
      await page.waitForTimeout(500);
    }

    // Test Terms of Service Modal
    console.log('\n--- Testing Terms of Service Modal ---');
    const termsButton = page.locator('button:has-text("Terms of Service")');
    await termsButton.click();
    await page.waitForTimeout(1500); // Wait for modal animation
    
    // Take screenshot of Terms modal
    await page.screenshot({ path: '/tmp/terms-modal.png', fullPage: false });
    console.log('✓ Screenshot saved: terms-modal.png');

    // Check if modal is visible
    const termsModalVisible = await page.locator('[role="dialog"]').isVisible();
    console.log('Terms of Service modal visible:', termsModalVisible);

  } catch (error) {
    console.error('Error testing modals:', error.message);
    await page.screenshot({ path: '/tmp/modal-error.png', fullPage: true });
  }

  console.log('\n=== Testing Glossary Page ===');
  
  try {
    // Navigate to glossary
    await page.goto('http://localhost:9002/glossary', { waitUntil: 'networkidle' });
    console.log('✓ Glossary page loaded');
    await page.waitForTimeout(1000);

    // Take initial screenshot
    await page.screenshot({ path: '/tmp/glossary-initial.png', fullPage: true });
    console.log('✓ Screenshot saved: glossary-initial.png');

    // Test Search Filter
    console.log('\n--- Testing Search Filter ---');
    const searchInput = page.locator('input[placeholder*="Search"]');
    await searchInput.fill('bitcoin');
    await page.waitForTimeout(1000);
    
    // Take screenshot of search results
    await page.screenshot({ path: '/tmp/glossary-search.png', fullPage: true });
    console.log('✓ Screenshot saved: glossary-search.png');

    // Count visible results
    const visibleCards = await page.locator('a[href^="/glossary/"]').count();
    console.log('Visible results after search:', visibleCards);

    // Clear search
    await searchInput.fill('');
    await page.waitForTimeout(1000);

    // Test Category Filters
    console.log('\n--- Testing Category Filters ---');
    
    // Test Wallet Basics filter
    const walletBasicsButton = page.locator('button:has-text("Wallet Basics")');
    await walletBasicsButton.click();
    await page.waitForTimeout(1000);
    
    await page.screenshot({ path: '/tmp/glossary-wallet-basics.png', fullPage: true });
    console.log('✓ Screenshot saved: glossary-wallet-basics.png');
    
    const walletBasicsResults = await page.locator('a[href^="/glossary/"]').count();
    console.log('Results for Wallet Basics:', walletBasicsResults);

    // Test Privacy Features filter
    const privacyFeaturesButton = page.locator('button:has-text("Privacy Features")');
    await privacyFeaturesButton.click();
    await page.waitForTimeout(1000);
    
    await page.screenshot({ path: '/tmp/glossary-privacy-features.png', fullPage: true });
    console.log('✓ Screenshot saved: glossary-privacy-features.png');
    
    const privacyResults = await page.locator('a[href^="/glossary/"]').count();
    console.log('Results for Privacy Features:', privacyResults);

  } catch (error) {
    console.error('Error testing glossary:', error.message);
    await page.screenshot({ path: '/tmp/glossary-error.png', fullPage: true });
  }

  await browser.close();
  console.log('\n=== Testing Complete ===');
}

testNavigationAndModals().catch(console.error);
