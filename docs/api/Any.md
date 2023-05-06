---
sidebar_position: 7
---

## Example

This function checks for `any` value. It can be used to validate any type of value, including `objects`, `arrays`, `numbers`, `strings`, `booleans`, and `null` or `undefined` values.
The function takes an optional error message as a parameter, which can be used to customize the error message returned if the validation fails.
In other words, the any function can be used as a catch-all validator for any type of value.

```javascript
import { any } from '@resourge/schema';

any()
// or
any('Custom error message')
```