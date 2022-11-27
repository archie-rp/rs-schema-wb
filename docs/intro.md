---
sidebar_position: 1
---

# Quick Start

Quick Start validating forms with schema.
## Compatible

- [ReactJS](https://reactjs.com/) - ReactJS
- [React Native](https://react-native.org/) - React Native (Mobile)

## Benchmarks

Benchmarks to compare with other schemas validators (the performance can variate slightly depending on the machine).

### Normal

```sh
@resourge/schema x 18,634,802 ops/sec ±1.30%  (93 runs sampled)
Fast Validator   x  1,632,544 ops/sec ±0.50%  (92 runs sampled)
joi              x    182,179 ops/sec ±1.15%  (93 runs sampled)
zod              x     52,358 ops/sec ±0.86%  (89 runs sampled)
Yup              x      8,573 ops/sec ±4.42%  (81 runs sampled)
Fastest is  [ '@resourge/schema' ]
```

### Heavy (done with an array with 10 000 items)

```sh
@resourge/schema x    2,594 ops/sec ±0.80% (86 runs sampled)
Fast Validator   x      227 ops/sec ±0.96% (82 runs sampled)
joi              x    32.28 ops/sec ±2.86% (55 runs sampled)
zod              x    21.99 ops/sec ±1.58% (40 runs sampled)
Yup              x    15.65 ops/sec ±2.47% (43 runs sampled)
Fastest is  [ '@resourge/schema' ]
```

Would you like to try?

```sh
git clone https://github.com/resourge/schema.git
cd schema
npm install
npm run bench
```

## Installation

- Using Yarn

```bash
yarn add @resourge/schema
```

- Using npm

```bash
npm install @resourge/schema --save
```

## Usage

```javascript
import { array, object, string, min, number } from '@resourge/schemas';

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

### Example

Demonstration of a example of a simple validation on form.

```javascript
import { array, object, string } from '@resourge/schemas';

type User = {
  name: string
  age: number
  location: {
    city: string
    address: string,
    postalCode: string,
    country: string
  },
  hobbies: string[]
}

const user: User = {
  name: 'Rimuru',
  age: 39,
  location: {
    city: 'Tempest',
    address: 'Tempest',
    postalCode: '4000-000',
    country: 'Tempest'
  },
  hobbies: [
 'Read',
 'Nothing'
  ] 
}

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

const schemaErrors = schema.validate(user)
const isValidUser = schema.isValid(user)
```

## Known Bugs

- Let's us know if any <a href="https://github.com/resourge/schema/issues">here</a>.
