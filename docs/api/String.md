---
sidebar_position: 4
---

### Basic example

You can use the `string` method to validate a `string`. Below is a basic example:

```javascript
import { string } from '@resourge/schema';

string();
// or
string('Custom error message');
```

### required

This function checks if a `string` is not `null`, `undefined`, or an `empty string`. This method is used to check if a string is `required`.

```javascript
string().required();
// with custom message
string().required('Custom error message');
```

### min

This function checks if a `string` has a size bigger than `minValue`.

```javascript
string().min(1);
// with custom message
string().min(1, 'Custom error message');
```

### max

This function checks if a `string` has a size smaller than `maxValue`.

```javascript

string().max(10);
// with custom message
string().max(10, 'Custom error message');
```

### between

This function checks if a `string` is between `minValue` and `maxValue`.

```javascript
string().between(1, 10);
// with custom message
string().between(1, 10, 'Custom error message');
```

### length

This function checks if a `string` has length number of `characters`.

```javascript
string().length(10);
// with custom message
string().length(10, 'Custom error message');
```

### equals

This function checks if a `string` equals `value`.

```javascript
string().equals('name');
// with custom message
string().equals('name', 'Custom error message');

// or for multiple values
string().equals(['name', 'id']); // Checks if string is 'name' or 'id'
// with custom message
string().equals(['name', 'id'], 'Custom error message');
```

### pattern

Matches a regular expression.

```javascript
string().pattern(/\d{4}([-]\d{3})?/);
// with custom message
string().pattern(/\d{4}([-]\d{3})?/, 'Custom error message');
```

### empty

This function checks if a string is empty.

```javascript
string().empty();
// with custom message
string().empty('Custom error message');
```

### contains

This function checks if a `string` contains `value`.

```javascript
string().contains('name');
// with custom message
string().contains('name', 'Custom error message');
```

### numeric

This function checks if a string contains only numeric characters.

```javascript
string().numeric();
// with custom message
string().numeric('Custom error message');
```

### alpha

This function checks if a string contains only alpha characters.

```javascript
string().alpha();
// with custom message
string().alpha('Custom error message');
```

### alphanum

This function checks if a string contains only alpha-numeric characters.

```javascript
string().alphanum();
// with custom message
string().alphanum('Custom error message');
```

### alphadash

This function checks if a `string` contains only `alpha-numeric` characters, as well as `dashes` and `underscores`.

```javascript
string().alphadash();
// with custom message
string().alphadash('Custom error message');
```

### hex

This function checks if a `string` is `hexadecimal`.

```javascript
string().hex();
// with custom message
string().hex('Custom error message');
```

### base64

This function checks if string is hexadecimal.

```javascript
string().hex()
// with custom message
string().hex('Custom error message')
```

### uuid

This function checks whether a given string is in UUID format.

```javascript
string().uuid()
// with custom message
string().uuid('Custom error message')
```

### url

This function checks whether a given `string` is a valid `URL`.

```javascript
string().url()
// with custom message
string().url('Custom error message')
```

### cuid

This function checks whether a given `string` is in `CUID` format.

```javascript
string().cuid()
// with custom message
string().cuid('Custom error message')
```

### email

This function checks whether a given `string` is a valid `email address`. It can be used with the `basic` or `precise` modes.

```javascript
string().email()
// or
string().email('basic', 'Custom error message') // 'basic' | 'precise'
// with custom message
string().email('Custom error message')
```

### postalCode

This function checks whether a given `string` is a valid `postal code` for a given country. Postal codes regex validations are included.

```javascript
import { PostalCodes } from '@resourge/schemas/postalCodes';

object({
  country: string(),
  postalCode: string().postalCode(PostalCodes.PT
})
// with custom message
object({
  country: string(),
  postalCode: string().postalCode(PostalCodes.PT, 'Custom error message'))
})
// or
object({
  country: string(),
  postalCode: string().postalCode(
    (_, form) => {
      if(form.country === 'Espanha') {
        return PostalCodes.ES
      }
      return PostalCodes.PT
    }
  )
})
// with custom message
object({
  country: string(),
  postalCode: string().postalCode(
    (_, form) => {
      if(form.country === 'Espanha') {
        return PostalCodes.ES
      }
      return PostalCodes.PT
    }, 
    'Custom error message'
  )
})
```

### phoneNumbers

This function checks whether a given `string` is a valid `phone number` for a given country. Phone numbers `regex` validations are included.

```javascript
import { phoneNumbers } from '@resourge/schemas/phoneNumbers';

object({
  phoneNumber: string().phoneNumber(PhoneNumbers.pt_PT).required()
// with custom message
object({
  phoneNumber: string().phoneNumber(PhoneNumbers.pt_PT) 'Custom error message'))
})
// or
object({
  phoneNumber: string().phoneNumber(
    (_, form) => {
      if(form.country === 'Spain') {
        return PhoneNumbers.es_ES
      }
      return PhoneNumbers.pt_PT
    }
  )
})
// with custom message
object({
  country: string(),
  postalCode: string().postalCode(
    (_, form) => {
      if(form.country === 'Spain') {
        return PhoneNumbers.es_ES
      }
      return PhoneNumbers.pt_PT
    }, 
    'Custom error message'
  )
})
```

### enum

This function checks whether a given string is a value of an enum.

```javascript
enum FieldTypeEnum {
  FREE_TEXT = 'FREE_TEXT',
  EXISTING_FIELD = 'EXISTING_FIELD',
  SQL_EXPRESSION = 'SQL_EXPRESSION',
  SOURCE_FIELD = 'SOURCE_FIELD'
}
string().enum(FieldTypeEnum)
// with custom message
string().enum(FieldTypeEnum, 'Custom error message')
```
