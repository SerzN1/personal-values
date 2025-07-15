# Internationalization (i18n) System

This project includes a comprehensive internationalization system built with Svelte stores.

## Features

- **Reactive translations** that update automatically when language changes
- **String interpolation** for dynamic content (e.g., "Selected {count} of {total}")
- **Nested translation keys** (e.g., `header.title`, `values.achievement`)
- **Automatic language detection** from browser settings
- **Persistent language preference** saved in localStorage
- **Mobile-friendly language switcher** with cycling behavior

## Available Languages

- **English (en)** - Default
- **Español (es)** - Spanish
- **Français (fr)** - French
- **Deutsch (de)** - German
- **Italiano (it)** - Italian
- **Português (pt)** - Portuguese

## Usage

### Basic Usage in Components

```svelte
<script>
  import { t } from './i18n/index.js';
</script>

<!-- Simple translation -->
<h1>{$t('header.title')}</h1>

<!-- With interpolation -->
<p>{$t('header.selected', { count: 5, total: 10 })}</p>

<!-- For attributes -->
<button title={$t('header.start')}>
  {$t('header.start')}
</button>
```

### Changing Language Programmatically

```javascript
import { setLanguage } from './lib/i18n/index.js';

// Change to Spanish
setLanguage('es');
```

### Getting Current Language

```javascript
import { currentLanguage } from './lib/i18n/index.js';

// Subscribe to language changes
currentLanguage.subscribe(lang => {
  console.log('Current language:', lang);
});
```

## File Structure

```
src/lib/i18n/
├── index.js                    # Main i18n logic and stores
├── translations/
│   ├── en.json                # English translations
│   ├── es.json                # Spanish translations
│   ├── fr.json                # French translations
│   ├── de.json                # German translations
│   ├── it.json                # Italian translations
│   └── pt.json                # Portuguese translations
└── README.md                  # This file
```

## Translation File Format

Each translation file follows this structure:

```json
{
  "header": {
    "title": "Personal Values Assessment",
    "start": "Start Assessment",
    "selected": "Selected {count} of {total}"
  },
  "values": {
    "achievement": "Achievement",
    "benevolence": "Benevolence"
  },
  "common": {
    "loading": "Loading...",
    "error": "An error occurred"
  }
}
```

## Adding New Translations

1. **Add the key to all translation files** in the `translations/` folder
2. **Use the key in your component** with the `$t()` function
3. **Test in all languages** to ensure proper formatting

### Example: Adding a new section

1. Add to `en.json`:
```json
{
  "results": {
    "title": "Your Results",
    "description": "Based on your answers, here are your top values."
  }
}
```

2. Add the same structure to all other language files with appropriate translations.

3. Use in component:
```svelte
<h2>{$t('results.title')}</h2>
<p>{$t('results.description')}</p>
```

## Best Practices

1. **Use descriptive keys**: `header.start` instead of `start`
2. **Group related translations**: Keep all header texts under `header.*`
3. **Use interpolation for dynamic content**: `"Selected {count} of {total}"`
4. **Keep translations consistent** across all languages

## Browser Language Detection

The system automatically detects the user's browser language on first visit:

1. Checks localStorage for saved preference
2. Falls back to browser language (navigator.language)
3. Falls back to English if browser language not supported

## Technical Details

- Built with **Svelte stores** for reactivity
- Uses **derived stores** for automatic translation updates
- **No external dependencies** - lightweight and fast
- **TypeScript support** for better development experience
- **Server-side rendering** compatible
