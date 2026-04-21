# Accessibility Checklist

Comprehensive accessibility guidelines and checklist for maintaining WCAG 2.1 AA compliance.

## Semantic HTML

- [ ] Use `<main>` for main content area
- [ ] Use proper heading hierarchy (h1, h2, h3, etc.) without skipping levels
- [ ] Use `<nav>` for navigation sections
- [ ] Use `<section>` for logical content grouping
- [ ] Use `<article>` for self-contained content
- [ ] Use `<footer>` for footer content
- [ ] Use `<aside>` for supplementary content
- [ ] Avoid `<div>` and `<span>` when semantic elements are appropriate
- [ ] Use `<a>` for links, `<button>` for buttons

## ARIA & Labels

- [ ] Every form input has associated `<label>`
- [ ] All images have descriptive `alt` text
- [ ] Icon-only buttons have `aria-label`
- [ ] Links have clear, descriptive text (avoid "click here")
- [ ] `aria-live` regions for dynamic content updates
- [ ] `aria-describedby` for complex form fields
- [ ] `role` attributes used correctly and minimally
- [ ] `aria-expanded` for collapsible content
- [ ] `aria-current="page"` for active navigation

## Keyboard Navigation

- [ ] All interactive elements accessible via Tab key
- [ ] Tab order is logical and intuitive
- [ ] No keyboard traps (focus can always move to next element)
- [ ] Escape key closes modals, drawers, dropdowns
- [ ] Enter/Space activates buttons and links
- [ ] Arrow keys navigate lists and menus where appropriate

## Visual Accessibility

- [ ] Text has sufficient contrast (WCAG AA: 4.5:1 for normal, 3:1 for large)
- [ ] No information conveyed by color alone
- [ ] Focus indicators are visible and clear
- [ ] Interactive elements have minimum 44x44px touch target
- [ ] Text is resizable (no px-based fonts, use relative units)
- [ ] Responsive design works at all zoom levels (up to 200%)
- [ ] No parallax animations that cause motion sickness
- [ ] Animations respect `prefers-reduced-motion`

## Motion & Animation

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

- [ ] Auto-playing animations avoid sudden motion
- [ ] Video/audio has play controls
- [ ] No auto-playing audio
- [ ] GIFs/animations have pause controls

## Forms

- [ ] Required fields are marked (*) and announced
- [ ] Error messages are associated with fields
- [ ] Form controls have visible labels
- [ ] Fieldsets group related controls
- [ ] Form validation errors are clear and actionable
- [ ] Form helps users correct mistakes

## Content

- [ ] Page titles are descriptive and unique
- [ ] Language of page is specified (`lang="en"`)
- [ ] Lists use semantic markup (`<ul>`, `<ol>`, `<li>`)
- [ ] Abbreviations/acronyms are defined on first use
- [ ] Links clearly indicate their purpose
- [ ] Complex tables have proper headers and captions
- [ ] Content is organized with clear structure

## Mobile Accessibility

- [ ] Touch targets are at least 44x44px
- [ ] Responsive design includes mobile users
- [ ] Mobile drawer closes on Escape and overlay click
- [ ] Touch interactions don't require precision
- [ ] Alternative to hover interactions on touch devices

## Media

- [ ] Videos have captions
- [ ] Videos have audio descriptions
- [ ] Audio content has transcripts
- [ ] Images are not the only content delivery method
- [ ] Alternative text alternatives are provided

## Testing Tools

- [ ] WAVE (Web Accessibility Evaluation Tool)
- [ ] Axe DevTools
- [ ] Lighthouse in Chrome DevTools
- [ ] Screen reader testing (NVDA, JAWS, VoiceOver)
- [ ] Keyboard-only testing
- [ ] Color contrast analyzer

## Implementation Examples

### Form with Accessibility

```astro
<div class="form-group">
  <label for="email">
    Email <span aria-label="required">*</span>
  </label>
  <input
    id="email"
    type="email"
    required
    aria-required="true"
    aria-describedby="email-help"
  />
  <small id="email-help">We'll never share your email.</small>
</div>
```

### Icon Button

```astro
<button aria-label="Close menu" onClick={handleClose}>
  <svg><!-- close icon --></svg>
</button>
```

### Skippable Content

```astro
<a href="#main-content" class="skip-link">
  Skip to main content
</a>
<main id="main-content">
  <!-- Main content -->
</main>

<style>
  .skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    background: #000;
    color: white;
    padding: 8px;

    &:focus {
      top: 0;
    }
  }
</style>
```

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Web Docs - Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [WebAIM](https://webaim.org/)
- [Inclusive Components](https://inclusive-components.design/)
