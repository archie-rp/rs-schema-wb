---
sidebar_position: 1
---

# Quick Start

To quickly start validating forms with Schema Validator, follow these steps:

1. Clone the library from the GitHub repository:
```bash
  git clone https://github.com/resourge/schema.git
```
2. Install the library using either `npm` or `yarn`:
```bash
  npm install @resourge/schema --save
  # OR
  yarn add @resourge/schema
```
3. Import the desired validation functions from the library:
```javascript
  import { object, string, number, array } from '@resourge/schemas';
```
4. Create a schema object that defines the structure of the form and its validation rules:
```javascript
  const schema = object<User>({
    name: string().min(5).required(),
    age: number().min(18).required(),
    location: object({
      city: string().required(),
      address: string().required(),
      postalCode: string().postalCode(PostalCodes.PT).required(),
      country: string().min(3).required(),
    }).required(),
    hobbies: array(string()).min(1).required(),
  }).compile();
```
5. Validate the form data using the schema:
```javascript
  const schemaErrors = schema.validate(user)
  const isValidUser = schema.isValid(user)
```

## Compatibility

Schema Validator is compatible with:
- [ReactJS](https://reactjs.com/) - ReactJS
- [React Native](https://react-native.org/) - React Native (Mobile)

## Performance

The following benchmark results compare Schema Validator with other schema validators:
### Normal

```bash
@resourge/schema x 18,634,802 ops/sec ±1.30%  (93 runs sampled)
Fast Validator   x  1,632,544 ops/sec ±0.50%  (92 runs sampled)
joi              x    182,179 ops/sec ±1.15%  (93 runs sampled)
zod              x     52,358 ops/sec ±0.86%  (89 runs sampled)
Yup              x      8,573 ops/sec ±4.42%  (81 runs sampled)
Fastest is  [ '@resourge/schema' ]
```

### Heavy (done with an array with 10,000 items)

```bash
@resourge/schema x    2,594 ops/sec ±0.80% (86 runs sampled)
Fast Validator   x      227 ops/sec ±0.96% (82 runs sampled)
joi              x    32.28 ops/sec ±2.86% (55 runs sampled)
zod              x    21.99 ops/sec ±1.58% (40 runs sampled)
Yup              x    15.65 ops/sec ±2.47% (43 runs sampled)
Fastest is  [ '@resourge/schema' ]
```

Note: The performance may vary depending on the machine.

## Known Bugs

- Let's us know if any <a href="https://github.com/resourge/schema/issues">here</a>.
