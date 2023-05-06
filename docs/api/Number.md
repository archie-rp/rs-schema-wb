---
sidebar_position: 6
---

## Example

```javascript
import { number } from '@resourge/schema';

number()
// or
number('Custom error message')

// Validate if number is bigger than 1
number().min(1)
```

## Options

### min

This function checks if `number` is bigger than `minValue`.

```javascript
number().min(1)
// with custom message
number().min(1, 'Custom error message')
```

### max

This function checks if `number` is smaller than `maxValue`.

```javascript

number().max(10)
// with custom message
number().max(10, 'Custom error message')
```

### between

This function checks if `number` is between `minValue` and `maxValue`.

```javascript
number().between(1, 10)
// with custom message
number().between(1, 10, 'Custom error message')
```

### equals

This function checks if `number` equal to `value`.

```javascript
number().equals(1)
// with custom message
number().equals(1, 'Custom error message')

// or for multiple values
number().equals([1, 10]) // Checks if number is 1 or 10
// with custom message
number().equals([1, 10], 'Custom error message')
```

### integer

This function checks if `number` is `integer`.

```javascript
number().integer()
// with custom message
number().integer('Custom error message')
```

### decimal

This function checks if `number` is `decimal`.

```javascript
number().decimal()
// with custom message
number().decimal('Custom error message')
```

### positive

This function checks if `number` is a `positive value`.

```javascript
number().positive()
// with custom message
number().positive('Custom error message')
```

### negative

This function checks if `number` is a `negative value`.

```javascript
number().negative()
// with custom message
number().negative('Custom error message')
```

### enum

This function checks if `number` is a value of an `enum`.

```javascript
enum FieldTypeEnum {
  FREE_TEXT = 1,
  EXISTING_FIELD = 2,
  SQL_EXPRESSION = 3,
  SOURCE_FIELD = 4,
}
number().enum(FieldTypeEnum)
// with custom message
number().enum(FieldTypeEnum, 'Custom error message')
```