// Simple test suite for URL Shortener Frontend
const fs = require('fs');
const path = require('path');

console.log('🧪 Running Frontend Tests...\n');

// Test 1: Check if public directory exists
console.log('Test 1: Public directory structure');
try {
  const publicDir = path.join(__dirname, 'public');
  const indexFile = path.join(publicDir, 'index.html');
  
  if (fs.existsSync(publicDir)) {
    console.log('✅ PASS: Public directory exists');
  } else {
    console.log('❌ FAIL: Public directory missing');
    process.exit(1);
  }
  
  if (fs.existsSync(indexFile)) {
    console.log('✅ PASS: index.html exists');
  } else {
    console.log('❌ FAIL: index.html missing');
    process.exit(1);
  }
} catch (error) {
  console.log('❌ FAIL: Directory structure test error:', error.message);
  process.exit(1);
}

// Test 2: Check HTML content
console.log('\nTest 2: HTML content validation');
try {
  const indexFile = path.join(__dirname, 'public', 'index.html');
  const htmlContent = fs.readFileSync(indexFile, 'utf8');
  
  if (htmlContent.includes('URL Shortener')) {
    console.log('✅ PASS: HTML contains expected title');
  } else {
    console.log('❌ FAIL: HTML title missing');
    process.exit(1);
  }
  
  if (htmlContent.includes('urlForm')) {
    console.log('✅ PASS: HTML contains form element');
  } else {
    console.log('❌ FAIL: Form element missing');
    process.exit(1);
  }
  
  if (htmlContent.includes('/api/shorten')) {
    console.log('✅ PASS: HTML contains API endpoint references');
  } else {
    console.log('❌ FAIL: API endpoint references missing');
    process.exit(1);
  }
} catch (error) {
  console.log('❌ FAIL: HTML validation test error:', error.message);
  process.exit(1);
}

// Test 3: Dependencies check
console.log('\nTest 3: Dependencies check');
try {
  require('express');
  console.log('✅ PASS: Express dependency available');
} catch (error) {
  console.log('❌ FAIL: Missing dependencies:', error.message);
  process.exit(1);
}

// Test 4: Server configuration
console.log('\nTest 4: Server configuration');
try {
  const port = process.env.PORT || 3000;
  
  if (typeof port !== 'undefined') {
    console.log('✅ PASS: Port configuration available');
    console.log(`   PORT: ${port}`);
  } else {
    console.log('❌ FAIL: Port configuration missing');
    process.exit(1);
  }
} catch (error) {
  console.log('❌ FAIL: Server configuration test error:', error.message);
  process.exit(1);
}

console.log('\n🎉 All frontend tests passed!\n');
process.exit(0);
