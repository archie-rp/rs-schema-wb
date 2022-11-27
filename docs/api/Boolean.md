---
sidebar_position: 6
---

## Example

```javascript
import { boolean } from '@resourge/schema';

boolean()
// or
boolean('Custom error message')
```

## Options

### mustBe

Checks if boolean is true or false

```javascript
date().mustBe(true)
// with custom message
date().mustBe(true, 'Custom error message')
```

## Contribution

In case you have different validations that you use, please tell us so we improve the library.
