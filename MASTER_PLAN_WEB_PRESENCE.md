# Kevin Hyde Web Presence Master Plan

## Executive Summary

This plan outlines a strategy to unify your web presence across multiple subdomains while preserving each site's distinct personality. The goal is to create subtle design cohesion, comprehensive interlinking, and a new tech showcase subdomain.

---

## 1. Current State Analysis

### www.kevinhyde.com (devkev-next)
| Aspect | Details |
|--------|---------|
| **Framework** | Next.js 15.1.2, TypeScript, React 18 |
| **Styling** | Tailwind CSS 3.3.3 + Sass + Styled Components |
| **CMS** | Sanity (blog posts, articles, books, artwork, work samples) |
| **Deployment** | Vercel |
| **Design Language** | Bold, vibrant, tech-forward |

**Color Palette:**
- Headers: `#fecc5b` / `#fde047` (golden yellow)
- Body text: `#dedede` (light gray)
- Content background: `#0c1a1f` (dark navy)
- Body background: `#330864` (deep purple)
- Accent: `#013b9c` (deep blue)
- Animated gradient: blue → cyan → green → yellow

**Typography:**
- Primary: Roboto Flex (variable)
- Monospace: Roboto Mono
- Style: Bold headers, generous tracking

**Navigation:**
- Home, Work Samples, Blog, Reading, Creative Catalog, Projects (coming soon)
- **Missing:** No links to blog.kevinhyde.com or music.kevinhyde.com

---

### blog.kevinhyde.com
| Aspect | Details |
|--------|---------|
| **Framework** | Astro |
| **Styling** | Custom CSS with CSS variables |
| **Deployment** | Vercel |
| **Design Language** | Scholarly, refined, warm |

**Color Palette:**
- Background: `#fdfcfa` (warm off-white)
- Text: `#2c2c2c` (dark charcoal)
- Muted text: `#666` (mid-gray)
- Accent: `#8b4513` (saddle brown)
- Borders: `#e0dcd4` (warm beige)
- Code blocks: `#f5f3ef` (light cream)

**Typography:**
- Primary: Georgia, Times New Roman (serif)
- Monospace: SF Mono, Menlo, Monaco
- Style: Normal weight, 18px base, 1.7 line-height

**Content Types:**
- Posts categorized as: reading, listening, thinking
- Markdown-based with frontmatter

---

### music.kevinhyde.com
| Aspect | Details |
|--------|---------|
| **Framework** | Static HTML/CSS |
| **Styling** | Custom CSS |
| **Deployment** | Cloudflare Pages |
| **Design Language** | Minimal, content-focused |

**Structure:**
- Article-based track listings
- Audio files (320kbps MP3)
- Artwork and JSON metadata catalog

**Planned Features:**
- Download format options
- FLAC support
- Stripe integration
- RSS feeds
- Email signup

---

## 2. Design Cohesion Strategy

The three sites serve different purposes and should maintain distinct personalities while sharing subtle connective tissue.

### 2.1 Shared Design Tokens

Create a minimal shared foundation that all sites can adopt:

```css
/* Shared root tokens (example) */
:root {
  /* Signature accent - choose ONE unifying element */
  --kh-accent-gold: #fde047;

  /* Consistent interactive states */
  --kh-focus-ring: 2px solid #fde047;

  /* Shared spacing rhythm */
  --kh-space-unit: 0.5rem;

  /* Subtle animation timing */
  --kh-transition: 200ms ease-out;
}
```

### 2.2 Unifying Elements

| Element | Implementation |
|---------|---------------|
| **Accent Color** | Use `#fde047` (golden yellow) as a subtle accent across all sites - not dominant, but present in interactive elements, focus states, or decorative touches |
| **Micro-interaction** | Consistent hover/focus states with the gold accent |
| **Footer Signature** | Shared footer pattern with "Kevin Hyde" wordmark and cross-site navigation |
| **Favicon Family** | Related but distinct favicons sharing the gold/yellow theme |

### 2.3 Site-Specific Preservation

| Site | Keep Distinct |
|------|---------------|
| **Main** | Bold gradients, Roboto fonts, dark theme, professional tone |
| **Blog** | Warm scholarly aesthetic, serif fonts, light theme, contemplative tone |
| **Music** | Minimal, let the music be the focus, album art-forward |

---

## 3. Interlinking Strategy

### 3.1 Main Site Navigation Enhancement

**Add to existing nav:**
```
Home | Work | Blog | Reading | Creative | Projects | Music | Writing
                                                      ↑        ↑
                                               music.kh.com  blog.kh.com
```

**Implementation approach:**
- Add subtle external link indicators for subdomain links
- Consider a dropdown or "More" menu to avoid crowding
- Alternative: Add a "Sites" or "Explore" section in footer

### 3.2 Cross-Site Header/Footer

**Minimal Header Banner (all subdomains):**
```
kevinhyde.com → Professional | Blog | Music | Tech
```

A thin, consistent navigation strip that appears on all subdomains, making it clear these are connected properties.

### 3.3 Contextual Cross-Links

| From | To | Context |
|------|-----|---------|
| Main site Creative Catalog | music.kevinhyde.com | "Listen to more music →" |
| Main site Blog section | blog.kevinhyde.com | "Read the full blog →" |
| Blog posts about music | music.kevinhyde.com | Inline links to tracks |
| Music site | Main site | "About Kevin" link |
| Music site | Blog | "Read about the creative process" |

---

## 4. tech.kevinhyde.com - App Showcase

### 4.1 Concept

A dedicated subdomain for showcasing small applications, tools, and experiments. This serves multiple purposes:
- Demonstrates hands-on development skills
- Provides shareable links for feedback
- Separates experimental work from the polished main site

### 4.2 Candidate Projects

| Project | Status | Showcase Readiness | Notes |
|---------|--------|-------------------|-------|
| **art-walk-app** | In development | Medium | Next.js 15 PWA for Seattle Art Walk navigation. Clean architecture, comprehensive docs. Needs deployment. |
| **Reading-pacer** | Early stage | Low-Medium | PWA for reading speed tracking. Needs polish and deployment. |
| **React-Tip-Calculator** | Stale | Low | 2019 project, Heroku likely dead. Could modernize. |
| **gas-getter** | Unknown | TBD | Gas price utility |
| **swiv-swirl** | Unknown | TBD | Background image generator - could be fun interactive demo |
| **Activity-environment-logger** | Unknown | TBD | Environment tracking tool |

### 4.3 Recommended tech.kevinhyde.com Structure

```
tech.kevinhyde.com/
├── index.html          # Landing page with project cards
├── /art-walk           # Art Walk PWA
├── /reading-pacer      # Reading speed tracker
├── /swirl-generator    # Interactive background generator
└── /experiments        # Smaller demos and prototypes
```

### 4.4 Tech Stack Recommendation

- **Framework:** Astro (matches blog, good for multi-page apps)
- **Deployment:** Vercel or Cloudflare Pages
- **Design:** Dark theme to match main site aesthetic
- **Structure:** Each app as a separate route or embedded iframe

---

## 5. Main Site (kevinhyde.com) Improvements

### 5.1 Navigation Enhancements

**Current:** Home | Work | Blog | Reading | Creative | Projects

**Proposed Options:**

**Option A - Expanded Nav:**
```
Home | Work | Blog | Reading | Creative | Projects | Music | Writing
```

**Option B - Grouped Nav:**
```
Home | Work | Projects | Creative ▾
                         ├── Art
                         ├── Music
                         └── Writing
```

**Option C - Primary/Secondary:**
```
Primary:   Home | Work | Projects
Secondary: Blog | Music | Art | Reading
```

### 5.2 Polyglot Positioning

The current site emphasizes "Design Engineer" but could better showcase your range:

**Recommended additions to homepage:**

1. **Skills Constellation** - Visual representation showing:
   - Frontend Development (React, Next.js, TypeScript)
   - Design (UX, Visual, Systems)
   - Creative (Music, Art, Writing)

2. **Recent Activity Feed** - Aggregate recent items from:
   - Blog posts from blog.kevinhyde.com
   - Music releases from music.kevinhyde.com
   - Work samples
   - Reading list updates

3. **"Currently" Section:**
   ```
   🎵 Listening to: [Latest track from music site]
   📖 Reading: [Current book]
   💻 Building: [Current project]
   ✍️  Writing: [Latest blog post]
   ```

### 5.3 Projects Section Activation

The current "Projects" page is a placeholder. Options:

**Option A:** Direct integration with Notion (already configured)
**Option B:** Redirect to tech.kevinhyde.com
**Option C:** Curated list pulling from tech.kevinhyde.com highlights

### 5.4 Content Consolidation Decision

**Current State:**
- Main site has its own blog section (via Sanity)
- Separate blog exists at blog.kevinhyde.com

**Recommendation:**
- Keep blog.kevinhyde.com as the primary long-form writing destination
- Main site blog section → becomes a "Featured Writing" preview that links out
- Reduces content maintenance overhead

---

## 6. Implementation Phases

### Phase 1: Foundation (Quick Wins)
- [ ] Add subdomain links to main site footer
- [ ] Create shared favicon family
- [ ] Document shared design tokens
- [ ] Add cross-site navigation to music and blog sites

### Phase 2: Main Site Enhancements
- [ ] Redesign navigation to accommodate subdomains
- [ ] Add "Currently" or activity section to homepage
- [ ] Improve polyglot positioning with skills visualization
- [ ] Decide on Projects section strategy

### Phase 3: tech.kevinhyde.com Launch
- [ ] Set up tech.kevinhyde.com infrastructure
- [ ] Deploy art-walk-app as first showcase
- [ ] Deploy or modernize 1-2 additional apps
- [ ] Create landing page with project cards

### Phase 4: Design Cohesion
- [ ] Implement gold accent across all sites
- [ ] Standardize focus states and micro-interactions
- [ ] Add subtle unified header/footer navigation
- [ ] Create consistent 404 and loading states

### Phase 5: Content Strategy
- [ ] Determine main site blog vs blog.kevinhyde.com relationship
- [ ] Set up cross-posting or excerpt system
- [ ] Add contextual cross-links between sites
- [ ] Consider RSS aggregation for unified feed

---

## 7. Technical Considerations

### Deployment Strategy
| Site | Current | Notes |
|------|---------|-------|
| www | Vercel | Keep as-is |
| blog | Vercel | Keep as-is |
| music | Cloudflare Pages | Keep as-is, or migrate to Vercel for consistency |
| tech | TBD | Recommend Vercel for consistency with main ecosystem |

### Shared Components Library (Future)
Consider extracting common UI elements into a shared package:
- Cross-site navigation component
- Footer component
- Focus/hover state utilities
- Icon set

### Analytics
Consider unified analytics across all subdomains for holistic view of visitor patterns.

---

## 8. Open Questions

1. **Blog consolidation:** Keep two blogs or merge into one?
2. **Music site design:** What aesthetic direction? Match main site or stay minimal?
3. **tech.kevinhyde.com priority:** Which apps to deploy first?
4. **Navigation complexity:** How many items is too many?
5. **Creative catalog:** Should digital art move to its own subdomain (art.kevinhyde.com)?

---

## Summary

Your web presence has strong individual pieces but lacks connection between them. The plan prioritizes:

1. **Immediate:** Add interlinking between existing sites
2. **Short-term:** Enhance main site to better position your polyglot approach
3. **Medium-term:** Launch tech.kevinhyde.com as app showcase
4. **Ongoing:** Gradually introduce subtle design cohesion

The golden yellow accent (`#fde047`) from your main site is the natural choice for a unifying thread - distinctive without being overwhelming, and already part of your visual identity.
