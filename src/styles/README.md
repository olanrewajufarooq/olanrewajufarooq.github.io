# Styles

Global styling, design tokens, and theme configuration.

## Files

- **tokens.css**: Design tokens (colors, spacing, fonts, breakpoints)
- **globals.css**: Global element styles
- **theme.css**: Theme variables (light/dark mode)
- **typography.css**: Font and text styling
- **utilities.css**: Utility classes
- **animations.css**: Animation definitions
- **style.css**: Main compiled stylesheet
- **layout-design5.css**: Layout-specific styles

## Design Tokens

All design tokens are CSS custom properties in `tokens.css`:

```css
--space-1: 0.25rem;    /* 4px */
--space-2: 0.5rem;     /* 8px */
--space-3: 0.75rem;    /* 12px */
--space-4: 1rem;       /* 16px */
/* ... */

--color-primary: #007acc;
--color-text: #000;
/* ... */

--font-size-sm: 0.875rem;
--font-size-base: 1rem;
/* ... */

--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
/* ... */
```

## Using Tokens

```astro
<style>
  .element {
    padding: var(--space-4);
    color: var(--color-text);
    font-size: var(--font-size-lg);
    border-radius: var(--radius-md);
    
    @media (max-width: var(--breakpoint-md)) {
      font-size: var(--font-size-base);
    }
  }
</style>
```

## Theme System

- **theme.css**: Theme variable definitions
- **themes.css**: Theme switching logic
- Supports light and dark modes

## CSS Modules

Feature-specific styles use CSS modules:
- Located in `src/features/*/styles/`
- Named `*.module.css`
- Scoped to components automatically

## Adding New Styles

1. Add global styles to `globals.css`
2. Add new tokens to `tokens.css`
3. Create feature-specific CSS modules
4. Never use inline styles (prefer classes)
5. Always use design tokens
