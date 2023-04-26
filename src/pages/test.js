import React from 'react';

import section1Styles from './test_section1.module.scss';
import section2Styles from './test_section2.module.scss';
import styles from './test.module.scss';

function renderSection1(props) {
  return (
    <section className={section1Styles.section1}>
      <div className={section1Styles.flexCol}>
        <div className={section1Styles.rect} />
        <div className={section1Styles.flexCol__cell}>
          <h1 className={section1Styles.hero_title2}>Team 1 Portfolio</h1>
        </div>
      </div>
    </section>
  );
}

function renderSection2(props) {
  return (
    <section className={section2Styles.section2}>
      <div className={section2Styles.flexCol}>
        <div className={section2Styles.flexCol__cell}>
          <div className={section2Styles.rect2} />
        </div>
        <div className={section2Styles.flexCol__cell1}>
          <h1 className={section2Styles.hero_title1}>About Us</h1>
        </div>
        <div className={section2Styles.flexCol__cell2}>
          <div className={section2Styles.rect3} />
        </div>
        <div className={section2Styles.flexCol__cell3}>
          <div className={section2Styles.rect1} />
        </div>
        <div className={section2Styles.flexCol__cell4}>
          <h1 className={section2Styles.hero_title}>Mitchell</h1>
        </div>
        <div className={section2Styles.flexCol__cell5}>
          <h1 className={section2Styles.hero_title2}>Shay</h1>
        </div>
        <div className={section2Styles.rect11} />
        <div className={section2Styles.flexCol__cell6}>
          <h1 className={section2Styles.hero_title3}>William</h1>
        </div>
      </div>
    </section>
  );
}

export default function test(props) {
  return (
    <React.Fragment>

      <main className={cn(styles.main, 'test')}>
        <div className={styles.main__cell}>{renderSection1(props)}</div>
        <div className={styles.main__cell}>{renderSection2(props)}</div>
      </main>
    </React.Fragment>
  );
}