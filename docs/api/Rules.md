---
sidebar_position: 1
---

Exists 3 types of rules:

- <a href="Rules#normal-rules">Normal Rule</a>
- <a href="Rules#mandatory-rules">Mandatory Rule</a>
- <a href="Rules#when-rules">When Rule</a>

## Normal Rules

`Normal rule` consist of 2 types of rules:

- <a href="Rules#test">test</a>
- <a href="Rules#asynctest">asyncTest</a>

Also exists some predefined normal rules:

- <a href="/docs/api/Any">Any</a>
- <a href="/docs/api/Array">Array</a>
- <a href="/docs/api/Boolean">Boolean</a>
- <a href="/docs/api/Date">Date</a>
- <a href="/docs/api/Number">Number</a>
- <a href="/docs/api/Object">Object</a>
- <a href="/docs/api/String">String</a>

{{< alert icon="💡" text="If you have rules that you normally use, please tell us so we can improve the package." />}}

### test

`test` is a normal sync validation.

```javascript
string()
// value is the string value
// form is the original value
// In this case, test is expected to return either true or an array of errors
.test((value, form) => [{
  // key can be a empty string or a key
  // In the case key is a empty string the system will replace it with original key
  key: '', 
  error: 'Custom error Message'
}])
// or
.test({
  // In this case, test is a mandatory a boolean
  test: (value, form) => true,
  message: 'Custom error Message'
})
```

### asyncTest

`asyncTest` is a normal async validation.

```javascript
string()
// value is the string value
// form is the original value
// In this case, test is expected to return a promise containing either true or an array of errors
.asyncTest(
  (value, form) => Promise.resolve([{
    // key can be a empty string or a key
    // In the case key is a empty string the system will replace it with original key
    // NOTE: It does not handle the catch, it expect to always resolve the promise
    key: '', 
    error: 'Custom error Message'
  }])
)
// or
.asyncTest({
  // In this case, test is a mandatory a boolean
  // NOTE: It does not handle the catch, it expect to always resolve the promise
  test: (value, form) => Promise.resolve(true),
  message: 'Custom error Message'
})
```

### Compile

`compile` is a method to generate the schema (it's recommended to use in every schema, otherwise `isValid` and `validate` will still call it).

```javascript
import { array, object, string } from '@resourge/schemas';

const schema = number().min(20).compile(); // calling compile
const isValid = schema.isValid();
```

Compile Options

| Name | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
| **debug** | `boolean` | false | false | Shows validation structure in a log. (only works in dev) |
| **onlyOnTouch** | `boolean` | false | false | Set's default onlyOnTouch in every schema. (default false) |
| **defaultOptional** | `boolean` | false | undefined | Set's default optional in every schema. (default undefined, meaning it will not validate if is optional or not) |
| **defaultNullable** | `boolean` | false | undefined | Set's default nullable in every schema. (default undefined, meaning it will not validate if is nullable or not) |
| **messages** | `object` | false | false | Object containing all default messages (expect the specific message for the schema). |

### validate

`validate` is a method to validate the data. Returns the errors.

```javascript
import { array, object, string } from '@resourge/schemas';

const schema = object({
  age: number().min(20)
}).compile();

const errors = schema.validate({ age: 10 }) 
```

Errors format:

```javascript
[
  { 
    key: 'age',
    error: 'Requires to have at least minimum size of 20'}
  }
]
```

### isValid

`isValid` is a method to validate the data. Returns true or false.

```javascript
import { array, object, string } from '@resourge/schemas';

const schema = object({
  age: number().min(20)
}).compile();

schema.isValid({ age: 10 }) // false
schema.isValid({ age: 25 }) // true

```

### S as shortname

Example using `S` shortname from schema.

```javascript
import { PostalCodes } from '@resourge/schema/postalCodes';

import { S } from '@resourge/schema';

const user = {
  name: 'Himaru',
  age: 18,
  postalCode: '1000-100'
}

const schema = S.object({
  name: S.string().required(),
  age: S.number().min(16).required(),
  postalCode: S.string().postalCode(PostalCodes.PT)
}).compile();

schema.isValid(user)

```

## Mandatory Rules

`Mandatory rule` are rules that come before `Normal Rule` and in case they fail `Normal Rule` will not be called.

### onlyOnTouch

Makes validation only if values were `touched`. By default, all validation will work regardless of `touches`.

```javascript
string().onlyOnTouch()
```

Requires an array of strings `keys` to validate camp. Only keys present will validate.

```javascript
object({
  name: string().required().onlyOnTouch(),
  age: number().min(18).required().onlyOnTouch(),
  address: object({
 city: string().onlyOnTouch(),
 street: string().onlyOnTouch()
  })
}).validate(objectVariable, [
 'name',
 'age',
 'address.city',
 'address.street'
])
```

### notOnlyOnTouch

Makes validation validate regardless of `touch`.

```javascript
string().notOnlyOnTouch()
```

### required

Makes validation check if value is null or undefined. By default schemas only validate type.

```javascript
string().required()
```

### notRequired

Makes validation required (meaning it can be null and undefined)

```javascript
string().notRequired()
```

### optional

Makes validation check if value is undefined. By default schemas only validate type.

```javascript
string().optional()
```

### notOptional

Makes validation optional (meaning it can not be undefined)

```javascript
string().notOptional()
```

## nullable

Makes validation check if value is null. By default schemas only validate type.

```javascript
string().nullable()
```

### notNullable

Makes validation nullable (meaning it can not be null)

```javascript
string().notNullable()
```
