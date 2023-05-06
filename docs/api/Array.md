---
sidebar_position: 2
---
### Basic example

```javascript
import { number, array } from '@resourge/schema';

// Validate if array as at least 1 item
array(number()).min(1)

// Custom error message
array(<<Schema>>, 'Custom error message')
```

### Checks if array is empty

Checks if array is empty

```javascript
array(number()).empty()
```

Custom error message:

```javascript
array(number()).empty('Custom error message')
```

### min

Checks if array has a minimum number of items in array

```javascript
array(number()).min(1)
```

Custom error message:
```javascript
array(number()).min(1, 'Custom error message')
```

### max

Checks if array has a maximum number of elements

```javascript
array(number()).max(10)
```

Custom error message:
```javascript
array(number()).max(10, 'Custom error message')
```
### length

Checks if array has length number of elements

```javascript
array(number()).length(1, 10)
```

Custom error message:

```javascript
array(number()).length(1, 10, 'Custom error message')
```

### unique

Checks if array has only unique elements

```javascript
array(number()).unique()
// with custom message
array(number()).unique('Custom error message')
```

Custom error message:

```javascript
array(number()).unique('Custom error message')
```

### uniqueBy

Checks if array has only unique elements by key or function.

Using key:

```javascript
array(
 object({
  productId: number(),
  productName: string()
 })
).uniqueBy('productId')
```

Custom error message:

```javascript
array(
 object({
  productId: number(),
  productName: string()
 })
).uniqueBy('productId', 'Custom error message')
```

Using function:

```javascript
array(
 object({
  productId: number(),
  productName: string()
 })
).uniqueBy((obj) => obj.productName)
```