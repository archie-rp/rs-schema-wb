---
sidebar_position: 3
---

### Basic example

You can use `object` method to validate an `object`. Below is a basic example:

```javascript
import { object } from '@resourge/schema';

object({
  name: string().required(),
  age: number().min(18).required()
})
// with message
object({
  name: string().required(),
  age: number().min(18).required()
}, 'Custom error message')
```