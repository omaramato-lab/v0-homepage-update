# Google Analytics 4 Setup Guide
## Omar Amato Portfolio Website

### Prerequisites

- Google account
- Access to omaramato.com deployment
- Google Search Console already set up (recommended)

### Step 1: Create GA4 Property

1. **Go to Google Analytics**
   - Navigate to: https://analytics.google.com
   - Sign in with your Google account

2. **Create Property**
   - Click "Admin" (gear icon, bottom left)
   - Click "Create Property"
   - Property name: `Omar Amato Portfolio`
   - Reporting time zone: `Italy`
   - Currency: `EUR (€)`
   - Click "Next"

3. **Business Details**
   - Industry: `Professional Services`
   - Business size: `Small (1-10 employees)`
   - Click "Next"

4. **Business Objectives**
   - Select: `Generate leads`
   - Click "Create"

5. **Accept Terms of Service**
   - Review and accept GA4 Terms
   - Accept Data Processing Amendment

### Step 2: Set Up Data Stream

1. **Create Web Data Stream**
   - Click "Web" platform
   - Website URL: `https://omaramato.com`
   - Stream name: `Omar Amato Web`
   - Click "Create stream"

2. **Copy Measurement ID**
   - You'll see: `G-XXXXXXXXXX`
   - **Important:** Save this ID - you'll need it

3. **Enhanced Measurement**
   - Verify these are enabled (default):
     - ✓ Page views
     - ✓ Scrolls
     - ✓ Outbound clicks
     - ✓ Site search
     - ✓ File downloads

### Step 3: Install GA4 Tracking Code

1. **Add Measurement ID to Environment**
   
   Create or edit `.env.local` file:
   \`\`\`bash
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   NEXT_PUBLIC_GSC_VERIFICATION=your-verification-code
   \`\`\`

2. **Tracking Code Already Integrated**
   
   The tracking code is already added to your Next.js site via:
   - `app/layout.tsx` - GA4 script injection
   - `lib/analytics.ts` - Tracking functions
   - `hooks/useAnalytics.ts` - React hook

3. **Deploy Changes**
   \`\`\`bash
   # If running locally
   npm run build
   npm start
   
   # Or deploy to Vercel
   git push origin main
   \`\`\`

### Step 4: Verify Installation

1. **Real-Time Report**
   - In GA4, go to "Reports" → "Real-time"
   - Open your website in another tab: https://omaramato.com
   - You should see 1 active user within 30 seconds

2. **Google Tag Assistant**
   - Install Chrome extension: "Tag Assistant Legacy"
   - Visit your site
   - Click extension icon
   - Verify GA4 tag is firing

3. **DebugView**
   - In GA4, go to "Admin" → "DebugView"
   - Add `?debug_mode=true` to your URL
   - See events in real-time

### Step 5: Set Up Conversions

1. **Navigate to Conversions**
   - Admin → Data display → Conversions
   - Click "New conversion event"

2. **Add Conversion Events**
   
   Create these conversion events:
   
   **Book a Call (Calendly)**
   - Event name: `calendly_click`
   - Value: 100
   
   **Email Contact**
   - Event name: `email_click`
   - Value: 50
   
   **Service Page Visit**
   - Event name: `service_page_visit`
   - Value: 25
   
   **Portfolio View**
   - Event name: `portfolio_view`
   - Value: 10

### Step 6: Configure Custom Dimensions

1. **Go to Custom Definitions**
   - Admin → Data display → Custom definitions
   - Click "Create custom dimension"

2. **Add Custom Dimensions**
   
   **Language**
   - Dimension name: `language`
   - Scope: `Event`
   - Event parameter: `language`
   
   **Service Type**
   - Dimension name: `service_type`
   - Scope: `Event`
   - Event parameter: `service_type`
   
   **Project Name**
   - Dimension name: `project_name`
   - Scope: `Event`
   - Event parameter: `project_name`

### Step 7: Link Google Search Console

1. **In GA4 Admin**
   - Property Settings → Product links
   - Click "Link" under Search Console

2. **Select Property**
   - Choose: `sc-domain:omaramato.com`
   - Click "Next"

3. **Configure Link**
   - Select data stream: `Omar Amato Web`
   - Click "Next" → "Submit"

4. **Verify Link**
   - Go to Reports → Acquisition → Traffic acquisition
   - You should see "Organic Search" data

### Step 8: Create Custom Reports

1. **Landing Page Performance by Language**
   - Go to "Explore"
   - Create new exploration
   - Dimensions: Landing page, Language
   - Metrics: Sessions, Conversions, Avg session duration

2. **Service Pages Funnel**
   - Create funnel exploration
   - Steps:
     1. Homepage view
     2. Service page visit
     3. CTA click (Email or Calendly)

### Step 9: Set Up Alerts

1. **In GA4 Admin**
   - Data display → Custom alerts
   - Click "Create alert"

2. **Create Alerts**
   
   **Traffic Drop Alert**
   - Name: `Organic Traffic Drop`
   - Metric: Sessions
   - Condition: Decreases by more than 30%
   - Period: Week over week
   
   **Conversion Drop Alert**
   - Name: `Conversion Drop`
   - Metric: Conversions
   - Condition: Decreases by more than 50%
   - Period: Week over week

### Verification Checklist

- ✓ GA4 property created
- ✓ Measurement ID added to .env.local
- ✓ Real-time report showing data
- ✓ Conversion events configured
- ✓ Custom dimensions created
- ✓ Search Console linked
- ✓ Alerts set up
- ✓ Testing complete

### Events Being Tracked

The following events are automatically tracked:

**Automatic Events:**
- `page_view` - Every page view
- `scroll` - 90% scroll depth
- `click` - Outbound link clicks

**Custom Events:**
- `language_switch` - User changes language (IT ↔ EN)
- `calendly_click` - User clicks book a call button
- `email_click` - User clicks email button
- `portfolio_view` - User views portfolio case study
- `service_page_visit` - User visits service detail page
- `scroll_depth` - User scrolls to 25%, 50%, 75%, 100%
- `section_view` - User views specific section

### Key Metrics to Monitor Daily

1. **Users** - Total unique visitors
2. **Sessions** - Total sessions
3. **Conversions** - Total conversion events
4. **Engagement rate** - Engaged sessions percentage
5. **Average engagement time** - Time on site
6. **Top pages** - Most visited pages
7. **Traffic source** - Where users come from
8. **Language split** - IT vs EN users

### Monthly Review Tasks

1. Review top-performing content
2. Identify high-bounce pages → improve
3. Check conversion funnel drop-offs
4. Analyze language preference trends
5. Review organic keyword performance (via GSC)
6. Compare month-over-month growth
7. Identify seasonal patterns
8. Update goals based on data

### Troubleshooting

**No data showing:**
- Check Measurement ID in .env.local
- Verify site is deployed with new code
- Check browser console for errors
- Test with ?debug_mode=true

**Events not firing:**
- Open browser console
- Check for gtag script loaded
- Verify no ad blockers active
- Test in incognito mode

**Real-time shows users but no reports:**
- Wait 24-48 hours for reports to populate
- Historical data takes time to process

### Advanced Features

**User-ID Tracking** (Future enhancement)
- Track logged-in users across devices
- Requires user authentication system

**E-commerce Tracking** (If selling products)
- Track purchases
- Revenue attribution

**Cross-Domain Tracking** (If needed)
- Track users across multiple domains
- Configure in GA4 data stream settings

### Support Resources

- GA4 Help Center: https://support.google.com/analytics
- GA4 Community: https://support.google.com/analytics/community
- YouTube Channel: Google Analytics official

---

**Setup completed?** Start monitoring your dashboard!
