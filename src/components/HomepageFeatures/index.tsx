import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Extremely fast and versatile',
    description: (
      <>
        Performant and powerful validation library that supports a wide range of use cases.
      </>
    ),
  },
  {
    title: 'Build in Typescript',
    description: (
      <>
        Developed entirely in TypeScript, giving you all the features with autocomplete, error messages, and type safety.
      </>
    ),
  },
  {
    title: 'Complete collection of validations',
    description: (
      <>
        Contains a comprehensive set of built-in validation rules, such as email, postal code, and more.
      </>
    ),
  },
  {
    title: 'Support for Async and Sync validations',
    description: (
      <>
        Provides custom methods, such as test and asyncTest, for easy implementation and usage of both synchronous and asynchronous validations.
      </>
    ),
  },
  {
    title: 'Postal code validation',
    description: (
      <>
        Includes validation rules for postal codes of various countries, helping you ensure that your user input is accurate and valid.
      </>
    ),
  },
  {
    title: 'Cross-platform support',
    description: (
      <>
        The same validation library can be used for both web and mobile platforms, supporting both ReactJS and React Native.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
