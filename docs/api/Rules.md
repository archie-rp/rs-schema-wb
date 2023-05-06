---
sidebar_position: 1
---

# Rules

## Normal Rules

A `normal rule` consists of two types of rules:

- <a href="Rules#test">test (normal sync validation)</a>
- <a href="Rules#asynctest">asyncTest (normal async validation)</a>

Additionally, there are some predefined normal rules:

- <a href="/docs/api/Any">Any</a>
- <a href="/docs/api/Array">Array</a>
- <a href="/docs/api/Boolean">Boolean</a>
- <a href="/docs/api/Date">Date</a>
- <a href="/docs/api/Number">Number</a>
- <a href="/docs/api/Object">Object</a>
- <a href="/docs/api/String">String</a>

If you have any rules that you use regularly, please let us know so that we can improve the package.

### test

A `test` function is a normal sync validation that takes two arguments: `value` and `form`. In this case, `test` is expected to return either `true` or an `array of errors`.

```javascript
string().test((value, form) => [{
  key: '',
  error: 'Custom error Message'
}])
```

Alternatively, you can pass an object with a `test` property that is a mandatory `boolean` and a `message` property.

```javascript
string().test({
  test: (value, form) => true,
  message: 'Custom error Message'
})
```

### asyncTest

An `asyncTest` function is a normal async validation that takes two arguments: `value` and `form`. In this case, `asyncTest` is expected to return a promise containing either `true` or an `array of errors`.

```javascript
string().asyncTest(
  (value, form) => Promise.resolve([{
    key: '',
    error: 'Custom error Message'
  }])
)
```

Alternatively, you can pass an object with a `test` property that is a mandatory `boolean` and a `message` property.

```javascript
string().asyncTest({
  test: (value, form) => Promise.resolve(true),
  message: 'Custom error Message'
})
```

### Compile

The `compile` method generates the schema and is recommended to be used in every schema. Otherwise, `isValid` and `validate` will still call it.

```javascript
import { array, object, string } from '@resourge/schemas';

const schema = number().min(20).compile();
const isValid = schema.isValid();
```

Compile Options

| Name | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
| **debug** | `boolean` | false | false | Shows validation structure in a log (only works in development mode). |
| **onlyOnTouch** | `boolean` | false | false | Sets default `onlyOnTouch` in every schema. (default `false`) |
| **defaultOptional** | `boolean` | false | undefined | Sets default `optional` in every schema (default `undefined`, meaning it will not validate if it is optional or not). |
| **defaultNullable** | `boolean` | false | undefined | Sets default `nullable` in every schema (default `undefined`, meaning it will not validate if it is nullable or not). |
| **messages** | `object` | false | false | Object containing all default messages (expect the specific message for the schema). |

### validate

The `validate` method is used to validate the data and returns the errors.

```javascript
const schema = object({
  age: number().min(20)
}).compile();

const errors = schema.validate({ age: 10 }) 
```

The errors are returned in the following format:

```javascript
[
  { 
    key: 'age',
    error: 'Requires to have at least minimum size of 20'
  }
]
```

### isValid

The `isValid` method is used to validate data and returns a boolean value indicating whether the data is valid or not. In the example below, the `isValid` method is called on a compiled schema object to check the validity of two sets of data.

```javascript
import { array, object, string } from '@resourge/schemas';

const schema = object({
  age: number().min(20)
}).compile();

// Checking validity of two sets of data
schema.isValid({ age: 10 }); // returns false
schema.isValid({ age: 25 }); // returns true

```

### Short Name `S`

The `S` short name can be used as an alias for the `schema` module. In the example below, the `S` short name is used to define a schema for a user object.

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

// Checking validity of user object using the defined schema
schema.isValid(user);

```

## Mandatory Rules

`Mandatory Rules` are validation rules that are applied before `Normal Rules`. If a mandatory rule fails, then the normal rules will not be applied.

### onlyOnTouch

The `onlyOnTouch` method is used to make a validation rule apply only when the value has been "touched". By default, all validation rules are applied regardless of whether the value has been touched or not. In the example below, only the `name` and `age` properties of the object are validated, as they are the only ones that have been specified in the `keys` array.

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

The `notOnlyOnTouch` method is used to make a validation rule apply regardless of whether the value has been touched or not.

```javascript
string().notOnlyOnTouch()
```

### required

The `required` method is used to make a validation rule check if a value is null or undefined. By default, schemas only validate type.

```javascript
string().required()
```

### notRequired

The `notRequired` method is used to make a validation rule required, meaning it can be null or undefined.

```javascript
string().notRequired()
```

### optional

The `optional` method is used to make a validation rule check if a value is undefined. By default, schemas only validate type.

```javascript
string().optional()
```

### notOptional

The `notOptional` method is used to make a validation rule optional, meaning it cannot be undefined.

```javascript
string().notOptional()
```

## nullable

The `nullable` method is used to make a validation rule check if a value is null. By default, schemas only validate type.

```javascript
import { string } from '@resourge/schemas';

const schema = string().nullable().compile();

schema.validate(null) // returns undefined
schema.isValid(null) // returns true
```

### notNullable

The `notNullable` method makes the validation non-nullable, meaning that the value cannot be null. Here's an example:

```javascript
import { S } from '@resourge/schema';

const schema = S.string().notNullable().compile();

schema.validate('hello'); // passes validation
schema.validate(null); // fails validation
```
