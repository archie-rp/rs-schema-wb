---
sidebar_position: 5
---

## Example

```javascript
import { date } from '@resourge/schema';

date()
// or
date('Custom error message')
```

## Options

### today

Checks if date is today

```javascript
date().today()
// with custom message
date().today('Custom error message')
```