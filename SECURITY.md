# Security Implementation Guide

This document details all security measures implemented in the SoftUpakaran application.

## Overview

The application has been hardened with the following security improvements:
- JWT-based authentication (removed legacy token system)
- Rate limiting on auth and admin endpoints
- Account lockout protection
- Secure cookie configuration
- Sensitive data removed from frontend
- Environment-based configuration

---

## 1. Authentication System

### JWT-Based Login

**Location**: `services/backend/src/server.js`

#### Endpoints

##### Register
```bash
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "user@example.com",
  "password": "securePassword123",
  "phone": "+977..." (optional),
  "whatsapp": "+977..." (optional)
}
```

**Response**:
```json
{
  "token": "eyJhbGc..."  // Access token (JWT)
}
```

##### Login
```bash
POST /api/auth/login
Content-Type: application/json

{
  "email": "admin@softupakaran.local",
  "password": "admin12345",
  "otp": "123456" // Required if 2FA (admin only)
}
```

**Response**:
```json
{
  "token": "eyJhbGc...",
  "totp_enabled": false,
  "needs_2fa_setup": true  // For admins without 2FA
}
```

##### Refresh Token
```bash
POST /api/auth/refresh
// Automatically sent via cookies
```

**Response**:
```json
{
  "ok": true,
  "token": "eyJhbGc..."  // New access token
}
```

##### Logout
```bash
POST /api/auth/logout
```

### Token Management

- **Access Token**: 15 minutes (short-lived)
- **Refresh Token**: 30 days (long-lived, stored securely)
- **Storage**: HttpOnly cookies (cannot be accessed by JavaScript)
- **Alternative**: Bearer token in Authorization header

### Admin Authorization

All `/api/admin/*` endpoints require:
1. Valid JWT token with `role: "admin"`
2. 2FA One-Time Password (if enabled)

```javascript
// Example: Admin-only route
app.post("/api/admin/users", adminRequired, adminOperationRateLimit, async (req, res) => {
  // Only authenticated admin can access
});
```

---

## 2. Rate Limiting & Brute Force Protection

### Authentication Rate Limits

Configured in `.env`:

| Endpoint | Default Limit | Window | Purpose |
|----------|--------------|--------|---------|
| `/api/auth/login` | 20 requests | 1 minute | Prevent login brute force |
| `/api/auth/register` | 8 requests | 1 minute | Prevent account enumeration |
| `/api/auth/refresh` | 40 requests | 1 minute | Prevent token abuse |
| `/api/auth/google` | 20 requests | 1 minute | Prevent OAuth spam |
| Admin operations | 30 requests | 1 minute | Prevent admin abuse |

### Account Lockout

After 6 failed login attempts within 15 minutes, account is locked for 30 minutes.

```env
AUTH_LOCKOUT_THRESHOLD=6        # Attempts before lockout
AUTH_LOCKOUT_WINDOW=15m          # Window to count attempts
AUTH_LOCKOUT_DURATION=30m        # How long account is locked
```

---

## 3. Removed Security Vulnerabilities

### ❌ X-Admin-Token Removed

**Before**: Legacy authentication header allowing simple token bypass
```http
X-Admin-Token: CHANGE_ME_ADMIN_TOKEN  # ❌ Removed
```

**After**: JWT-based authentication only
```http
Authorization: Bearer eyJhbGc...  # ✓ Secure
```

### ❌ X-Powered-By Header Disabled

```javascript
app.disable('x-powered-by');  // ✓ Prevents framework fingerprinting
```

### ❌ Sensitive Meta Tags Removed

**Before** (`index.html`):
```html
<meta name="api-base" content="https://softupakaran-backend.onrender.com">
<meta name="google-client-id" content="161160759250-...">
```

**After**:
```html
<!-- Config loaded from env.js at runtime from localStorage or defaults -->
<script src="js/env.js"></script>
```

---

## 4. Environment Variables

### Critical Secrets (⚠️ MUST Change in Production)

Create a `.env` file in `services/backend/`:

```env
# JWT Secrets - Use strong random values
JWT_SECRET=your_super_secret_jwt_key_change_in_production_12345
REFRESH_TOKEN_SECRET=your_refresh_token_secret_change_in_production_12345

# Backup Token - Use strong random value
BACKUP_TOKEN=your_backup_token_change_in_production_12345

# Admin Credentials - Change on deployment
ADMIN_EMAIL=admin@softupakaran.local
ADMIN_PASSWORD=your_secure_password_here

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id_from_console
```

### Generate Strong Secrets

```bash
# Generate JWT secrets (Linux/Mac)
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# Generate on Windows PowerShell
[System.Convert]::ToBase64String([System.Security.Cryptography.RandomNumberGenerator]::GetBytes(32))
```

### Security Best Practices

- ✓ Never commit `.env` to version control
- ✓ Add `.env` to `.gitignore`
- ✓ Use different secrets for each environment
- ✓ Rotate secrets periodically
- ✓ Use strong databases/vaults in production

---

## 5. Cookie Security

### HttpOnly Cookies

Prevents XSS attacks from stealing tokens:

```javascript
{
  httpOnly: true,      // Cannot be accessed by JavaScript
  secure: true,        // Only sent over HTTPS (production)
  sameSite: 'none',    // Cross-origin requests
  path: '/',
  maxAge: 900000       // 15 minutes for access token
}
```

### Configuration

```env
# Production settings
COOKIE_SECURE=true          # Only HTTPS
COOKIE_SAME_SITE=none       # Cross-origin
COOKIE_DOMAIN=yourdomain.com

# Development settings (default)
COOKIE_SECURE=false         # Allow HTTP
COOKIE_SAME_SITE=lax        # Same-site only
```

---

## 6. CORS Configuration

### Allowed Origins

```env
CORS_ALLOWED_ORIGINS=http://localhost:8080,https://yourdomain.com
FRONTEND_URL=https://yourdomain.com
GOOGLE_AUTHORIZED_ORIGINS=https://yourdomain.com
```

### Implementation

```javascript
const corsOptions = {
  origin: (origin, cb) => {
    if (!origin || CORS_ALLOW_ALL) return cb(null, true);
    if (CORS_ALLOWED_ORIGINS.includes(origin)) return cb(null, true);
    return cb(null, false);  // Block unauthorized origins
  },
  credentials: true,  // Allow cookies in cross-origin requests
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS']
};
```

---

## 7. Two-Factor Authentication (2FA)

### Setup for Admin Accounts

```bash
# Start 2FA setup
POST /api/admin/2fa/setup/start

# Response includes QR code
{
  "secret": "ABCD1234EFC9...",
  "qr_data_url": "data:image/png;base64,...",
  "otpauth_url": "otpauth://totp/..."
}
```

### Verify 2FA

```bash
POST /api/admin/2fa/setup/verify
{
  "token": "123456"  # 6-digit code from authenticator app
}
```

### Login with 2FA

```bash
POST /api/auth/login
{
  "email": "admin@softupakaran.local",
  "password": "admin12345",
  "otp": "123456"  # Required if 2FA enabled
}
```

---

## 8. Admin Login Events

All admin logins are logged with geolocation data:

```bash
GET /api/admin/logins
```

**Response**:
```json
[
  {
    "id": 123,
    "user_id": 1,
    "email": "admin@softupakaran.local",
    "ip": "192.168.1.1",
    "country_code": "US",
    "country_name": "United States",
    "location": "New York, NY",
    "user_agent": "Mozilla/5.0...",
    "created_at": "2026-03-20T10:30:00Z"
  }
]
```

---

## 9. Database Security

### Sensitive Data Handling

- Passwords: Hashed with bcrypt (cost factor: 10)
- Tokens: Stored as SHA-256 hashes (never plaintext)
- No sensitive data in logs

### SQL Injection Prevention

All queries use parameterized statements:

```javascript
// ✓ Safe
db.get("SELECT * FROM users WHERE email = ?", [email], callback);

// ❌ Unsafe (DO NOT USE)
db.get(`SELECT * FROM users WHERE email = '${email}'`, callback);
```

---

## 10. Best Practices for Deployment

### Pre-Production Checklist

- [ ] Generate strong secrets for all env variables
- [ ] Set `NODE_ENV=production`
- [ ] Enable `COOKIE_SECURE=true` and `COOKIE_SAME_SITE=none`
- [ ] Configure HTTPS on your domain
- [ ] Set proper CORS origins
- [ ] Enable 2FA for admin accounts
- [ ] Review and update rate limiting settings
- [ ] Set up monitoring for failed login attempts
- [ ] Configure backups and disaster recovery
- [ ] Enable security headers (if behind proxy like nginx)

### Runtime Security

```bash
# Start backend
NODE_ENV=production npm start

# Verify secrets are loaded
npm run check-env  # (if available)
```

### Monitoring

Monitor these endpoints for attacks:
- `/api/auth/login` - Brute force attempts
- `/api/admin/*` - Unauthorized access attempts
- Logs for repeated 429 (rate limit) responses

---

## 11. Frontend Security

### Environment Configuration

The frontend loads configuration from `js/env.js`:

```javascript
// Priority order (highest to lowest):
1. Values from localStorage (can be set at runtime)
2. Meta tags (if present in HTML - removed now)
3. Hardcoded defaults in env.js

// Never store secrets in localStorage in production
window.API_BASE            // API endpoint
window.GOOGLE_CLIENT_ID    // Google OAuth client ID
```

### Secure Storage

```javascript
// ✓ Safe: Stored in secure HttpOnly cookies by server
localStorage.token;  // Won't work - cookies are HttpOnly

// ✓ Safe: Can read from Authorization header (received from login)
fetch(API_BASE + '/api/me', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
});
```

---

## 12. Security Headers (Recommended for Production)

If using nginx or Apache reverse proxy, add:

```nginx
# nginx example
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Content-Security-Policy "default-src 'self'" always;
```

---

## 13. Incident Response

### If a Secret is Compromised

1. **Immediately** generate new secret values
2. Update `.env` file
3. Restart all services
4. Review logs for unauthorized access
5. Consider revoking all active tokens:
   ```javascript
   // Admin endpoint to revoke all tokens for a user
   await revokeAllRefreshTokensForUser(userId, 'security_breach');
   ```

### If Backup Token is Compromised

```env
# Generate new token
BACKUP_TOKEN=<new_strong_random_token>

# Restart services
npm restart
```

---

## 14. Testing Security

### Manual Testing

```bash
# Test 1: Try login without credentials
curl -X POST http://localhost:4000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{}'
# Expected: 400 or 401

# Test 2: Test rate limiting (make 21 login attempts in 1 minute)
for i in {1..21}; do
  curl -X POST http://localhost:4000/api/auth/login \
    -H "Content-Type: application/json" \
    -d '{"email":"test@test.com","password":"test"}'
done
# Expected: Last request returns 429 Too Many Requests

# Test 3: Admin endpoint without token
curl -X GET http://localhost:4000/api/admin/users
# Expected: 401 Unauthorized

# Test 4: Admin endpoint with invalid token
curl -X GET http://localhost:4000/api/admin/users \
  -H "Authorization: Bearer invalid.token.here"
# Expected: 401 Unauthorized
```

---

## 15. Compliance & Standards

- **OWASP Top 10**: Addresses authentication, injection, XSS, access control
- **JWT Best Practices**: Short-lived tokens, secure storage
- **GDPR Ready**: Can implement user data deletion workflows
- **PCI DSS**: Suitable for payment processing with additional measures

---

## Additional Resources

- [OWASP Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)
- [JWT Best Current Practices](https://tools.ietf.org/html/rfc8725)
- [Express Security Best Practices](https://expressjs.com/en/advanced/best-practice-security.html)

---

## Support

For security issues, create an issue with the `security` label or contact the maintainers privately.

**Do NOT publicly disclose security vulnerabilities.** Instead, follow responsible disclosure practices.
