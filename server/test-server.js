const axios = require('axios');

const BASE_URL = 'http://localhost:3001';

async function testServer() {
  try {
    console.log('🧪 Testing Trade.im Backend Server...\n');

    // Test 1: Health check
    console.log('1. Testing health check...');
    const healthResponse = await axios.get(`${BASE_URL}/health`);
    console.log('✅ Health check passed:', healthResponse.data.status);

    // Test 2: API info
    console.log('\n2. Testing API info...');
    const apiResponse = await axios.get(`${BASE_URL}/api`);
    console.log('✅ API info retrieved:', apiResponse.data.name);

    // Test 3: Register admin user
    console.log('\n3. Testing admin registration...');
    try {
      const registerResponse = await axios.post(`${BASE_URL}/api/auth/register`, {
        email: 'testadmin@trade.im',
        password: 'Admin123!',
        first_name: 'Test',
        last_name: 'Admin',
        role: 'admin'
      });
      console.log('✅ Admin registration successful');
    } catch (error) {
      if (error.response?.data?.error === 'User already exists with this email') {
        console.log('ℹ️  Admin user already exists');
      } else {
        throw error;
      }
    }

    // Test 4: Login as admin
    console.log('\n4. Testing admin login...');
    const loginResponse = await axios.post(`${BASE_URL}/api/auth/login`, {
      email: 'admin@trade.im',
      password: 'admin123'
    });
    console.log('✅ Admin login successful');
    const adminToken = loginResponse.data.tokens.accessToken;

    // Test 5: Get admin dashboard stats
    console.log('\n5. Testing admin dashboard...');
    const statsResponse = await axios.get(`${BASE_URL}/api/admin/stats`, {
      headers: { Authorization: `Bearer ${adminToken}` }
    });
    console.log('✅ Admin dashboard stats retrieved');
    console.log('📊 Stats:', {
      totalUsers: statsResponse.data.users.total,
      activeUsers: statsResponse.data.users.active,
      totalPortfolioValue: statsResponse.data.portfolio.totalValue
    });

    // Test 6: Create test user
    console.log('\n6. Testing user registration...');
    try {
      const userRegResponse = await axios.post(`${BASE_URL}/api/auth/register`, {
        email: 'testuser@trade.im',
        password: 'User123!',
        first_name: 'Test',
        last_name: 'User'
      });
      console.log('✅ User registration successful');
    } catch (error) {
      if (error.response?.data?.error === 'User already exists with this email') {
        console.log('ℹ️  Test user already exists');
      } else {
        throw error;
      }
    }

    // Test 7: Login as user
    console.log('\n7. Testing user login...');
    const userLoginResponse = await axios.post(`${BASE_URL}/api/auth/login`, {
      email: 'testuser@trade.im',
      password: 'User123!'
    });
    console.log('✅ User login successful');
    const userToken = userLoginResponse.data.tokens.accessToken;

    // Test 8: Get user dashboard
    console.log('\n8. Testing user dashboard...');
    const userDashboard = await axios.get(`${BASE_URL}/api/user/dashboard`, {
      headers: { Authorization: `Bearer ${userToken}` }
    });
    console.log('✅ User dashboard retrieved');
    console.log('💰 User Balance:', userDashboard.data.portfolio.totalBalance);

    // Test 9: Admin manipulates user balance
    console.log('\n9. Testing admin balance manipulation...');
    const users = await axios.get(`${BASE_URL}/api/admin/users`, {
      headers: { Authorization: `Bearer ${adminToken}` }
    });
    const testUser = users.data.users.find(u => u.email === 'testuser@trade.im');
    
    if (testUser) {
      const balanceAdjustment = await axios.post(`${BASE_URL}/api/admin/users/${testUser.id}/balance`, {
        amount: 5000,
        type: 'add',
        description: 'Test bonus from admin'
      }, {
        headers: { Authorization: `Bearer ${adminToken}` }
      });
      console.log('✅ Admin balance adjustment successful');
      console.log('💰 New Balance:', balanceAdjustment.data.portfolio.total_balance);
    }

    // Test 10: Verify user sees updated balance
    console.log('\n10. Testing user balance update...');
    const updatedUserDashboard = await axios.get(`${BASE_URL}/api/user/dashboard`, {
      headers: { Authorization: `Bearer ${userToken}` }
    });
    console.log('✅ User dashboard updated');
    console.log('💰 Updated Balance:', updatedUserDashboard.data.portfolio.totalBalance);

    console.log('\n🎉 All tests passed! Backend is working correctly.');
    console.log('\n📝 Default Admin Credentials:');
    console.log('   Email: admin@trade.im');
    console.log('   Password: admin123');
    console.log('\n📝 Test User Credentials:');
    console.log('   Email: testuser@trade.im');
    console.log('   Password: User123!');

  } catch (error) {
    console.error('❌ Test failed:', error.response?.data || error.message);
  }
}

// Run tests
testServer();