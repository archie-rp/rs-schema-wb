import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Extremely fast and versatile',
    Svg: require('@site/static/img/fast.svg').default,
    description: (
      <>
        One of the fastest validations.
      </>
    ),
  },
  {
    title: 'Build in Typescript',
    Svg: require('@site/static/img/build.svg').default,
    description: (
      <>
        Get all the features with autocomplete, error messages, typesafety and more.
      </>
    ),
  },
  {
    title: 'Offers a complete collection',
    Svg: require('@site/static/img/collection.svg').default,
    description: (
      <>
        Complete collection of validations <b>(email, postalCode, etc...).</b>
      </>
    ),
  },
  {
    title: 'Support for Async and Sync validations',
    Svg: require('@site/static/img/async_sync.svg').default,
    description: (
      <>
        Custom methods <b>(test and asyncTest)</b> easy to implement and use.
      </>
    ),
  },
  {
    title: 'Validation for Postal Codes',
    Svg: require('@site/static/img/postal_codes.svg').default,
    description: (
      <>
        Includes validation for countries postal codes.
      </>
    ),
  },
  {
    title: 'Support for Web and Mobile',
    Svg: require('@site/static/img/web_mobile.svg').default,
    description: (
      <>
        Same library for multiple platforms (ReactJS and React Native).
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
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
