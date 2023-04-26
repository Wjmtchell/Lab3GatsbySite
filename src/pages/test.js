import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import cn from 'classnames';

function renderSection1(props) {
  return (
    <section className={css(section1Styles.section1)}>
      <div className={css(section1Styles.flexCol)}>
        <div className={css(section1Styles.rect)} />
        <div className={css(section1Styles.flexCol__cell)}>
          <h1 className={css(section1Styles.hero_title2)}>Team 1 Portfolio</h1>
        </div>
      </div>
    </section>
  );
}

function renderSection2(props) {
  return (
    <section className={css(section2Styles.section2)}>
      <div className={css(section2Styles.flexCol)}>
        <div className={css(section2Styles.flexCol__cell)}>
          <div className={css(section2Styles.flexCol1)}>
            <div className={css(section2Styles.rect2)} />
            <div className={css(section2Styles.flexCol1__cell)}>
              <h1 className={css(section2Styles.hero_title1)}>About Us</h1>
            </div>
          </div>
        </div>
        <div className={css(section2Styles.flexCol__cell1)}>
          <div className={css(section2Styles.content_box)}>
            <h1 className={css(section2Styles.hero_title)}>Shay</h1>
          </div>
        </div>
        <div className={css(section2Styles.flexCol__cell2)}>
          <div className={css(section2Styles.content_box1)}>
            <h1 className={css(section2Styles.hero_title2)}>Mitchell</h1>
          </div>
        </div>
        <div className={css(section2Styles.flexCol__cell3)}>
          <div className={css(section2Styles.content_box11)}>
            <h1 className={css(section2Styles.hero_title3)}>William</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Lab03Home(props) {
  return (
    <React.Fragment>

      <main className={cn(css(styles.main), 'lab03home')}>
        <div className={css(styles.main__cell)}>{renderSection1(props)}</div>
        <div className={css(styles.main__cell)}>{renderSection2(props)}</div>
      </main>
    </React.Fragment>
  );
}

const section1Styles = StyleSheet.create({
  section1: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flexGrow: 1
  },
  flexCol: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flexGrow: 1
  },
  rect: {
    backgroundColor: 'rgb(79,236,161)',
    outline: '6px solid rgb(70,70,70)',
    outlineOffset: -6,
    position: 'relative',
    minHeight: 140
  },
  flexCol__cell: {
    marginTop: -140,
    display: 'flex',
    flexDirection: 'column',
    position: 'relative'
  },
  hero_title2: {
    '@media (max-width: 1199px)': {
      fontSize: '108px',
      textAlign: 'left'
    },
    '@media (max-width: 991px)': {
      fontSize: '92px'
    },
    '@media (max-width: 767px)': {
      fontSize: '72px'
    },
    '@media (max-width: 575px)': {
      fontSize: '64px'
    },
    '@media (max-width: 479px)': {
      fontSize: '56px'
    },
    '@media (max-width: 383px)': {
      fontSize: '52px'
    },
    font: '400 128px/1.36 "Nunito Sans", Helvetica, Arial, serif',
    color: 'rgb(70,70,70)',
    letterSpacing: '0px',
    width: 'fit-content',
    position: 'relative',
    flexGrow: 1,
    minWidth: 0,
    margin: '0px auto'
  }
});

const section2Styles = StyleSheet.create({
  section2: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flexGrow: 1
  },
  flexCol: {
    '@media (max-width: 767px)': {
      width: '56.59%'
    },
    '@media (max-width: 575px)': {
      width: '63.47%'
    },
    '@media (max-width: 479px)': {
      width: '69.86%'
    },
    '@media (max-width: 383px)': {
      width: '75.55%'
    },
    display: 'flex',
    flexDirection: 'column',
    width: '49.44%',
    position: 'relative',
    flexGrow: 1,
    margin: '166px auto 203px'
  },
  flexCol__cell: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    zIndex: 1
  },
  flexCol1: {
    '@media (max-width: 767px)': {
      width: '88.85%'
    },
    '@media (max-width: 575px)': {
      width: '91.4%'
    },
    '@media (max-width: 479px)': {
      width: '93.41%'
    },
    '@media (max-width: 383px)': {
      width: '94.97%'
    },
    display: 'flex',
    flexDirection: 'column',
    width: '85.67%',
    position: 'relative',
    flexGrow: 1,
    margin: '0px auto'
  },
  rect2: {
    backgroundColor: 'rgb(79,236,161)',
    borderRadius: '10px 10px 10px 10px',
    outline: '3px solid rgb(70,70,70)',
    position: 'relative',
    minHeight: 72
  },
  flexCol1__cell: {
    marginTop: -72,
    display: 'flex',
    flexDirection: 'column',
    position: 'relative'
  },
  hero_title1: {
    '@media (max-width: 1199px)': {
      fontSize: '56px',
      textAlign: 'left'
    },
    '@media (max-width: 991px)': {
      fontSize: '48px'
    },
    '@media (max-width: 767px)': {
      fontSize: '40px'
    },
    '@media (max-width: 575px)': {
      fontSize: '36px'
    },
    '@media (max-width: 479px)': {
      fontSize: '32px'
    },
    '@media (max-width: 383px)': {
      fontSize: '28px'
    },
    font: '400 64px/1.35 "Nunito Sans", Helvetica, Arial, serif',
    color: 'rgb(255,255,255)',
    letterSpacing: '0px',
    width: 272,
    position: 'relative',
    flexGrow: 1,
    minWidth: 272,
    margin: '0px auto'
  },
  flexCol__cell1: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    zIndex: 3
  },
  content_box: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(79,236,161)',
    borderRadius: '10px 10px 10px 10px',
    outline: '2px solid rgb(70,70,70)',
    outlineOffset: -2,
    width: '30.9%',
    position: 'relative',
    flexGrow: 1,
    margin: '93px 0% 0px 69.1%'
  },
  hero_title: {
    '@media (max-width: 1199px)': {
      fontSize: '40px',
      textAlign: 'left'
    },
    '@media (max-width: 991px)': {
      fontSize: '36px'
    },
    '@media (max-width: 767px)': {
      fontSize: '32px'
    },
    '@media (max-width: 575px)': {
      fontSize: '28px'
    },
    '@media (max-width: 479px)': {
      fontSize: '24px'
    },
    font: '400 48px/1.16 "Roboto", Helvetica, Arial, serif',
    color: 'rgb(70,70,70)',
    letterSpacing: '0px',
    width: 104,
    position: 'relative',
    flexGrow: 1,
    minWidth: 104,
    margin: '22px auto'
  },
  flexCol__cell2: {
    marginTop: -100,
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    zIndex: 0
  },
  content_box1: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(79,236,161)',
    borderRadius: '10px 10px 10px 10px',
    outline: '3px solid rgb(70,70,70)',
    outlineOffset: -3,
    width: '30.9%',
    position: 'relative',
    flexGrow: 1,
    margin: '0px 69.1% 0px 0%'
  },
  hero_title2: {
    '@media (max-width: 1199px)': {
      fontSize: '40px',
      textAlign: 'left'
    },
    '@media (max-width: 991px)': {
      fontSize: '36px'
    },
    '@media (max-width: 767px)': {
      fontSize: '32px'
    },
    '@media (max-width: 575px)': {
      fontSize: '28px'
    },
    '@media (max-width: 479px)': {
      fontSize: '24px'
    },
    font: '400 48px/1.16 "Roboto", Helvetica, Arial, serif',
    color: 'rgb(70,70,70)',
    letterSpacing: '0px',
    width: 170,
    position: 'relative',
    flexGrow: 1,
    minWidth: 170,
    margin: '22px auto'
  },
  flexCol__cell3: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    zIndex: 2
  },
  content_box11: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(79,236,161)',
    borderRadius: '10px 10px 10px 10px',
    outline: '3px solid rgb(70,70,70)',
    outlineOffset: -3,
    width: '30.9%',
    position: 'relative',
    flexGrow: 1,
    margin: '100px auto 0px'
  },
  hero_title3: {
    '@media (max-width: 1199px)': {
      fontSize: '40px',
      textAlign: 'left'
    },
    '@media (max-width: 991px)': {
      fontSize: '36px'
    },
    '@media (max-width: 767px)': {
      fontSize: '32px'
    },
    '@media (max-width: 575px)': {
      fontSize: '28px'
    },
    '@media (max-width: 479px)': {
      fontSize: '24px'
    },
    font: '400 48px/1.16 "Roboto", Helvetica, Arial, serif',
    color: 'rgb(70,70,70)',
    letterSpacing: '0px',
    width: 158,
    height: 56,
    position: 'relative',
    minWidth: 158,
    margin: '22px auto'
  }
});

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(255,255,255)',
    padding: 'undefinedpx undefinedpx undefinedpx undefinedpx',
    position: 'relative',
    overflow: 'hidden'
  },
  main__cell: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative'
  }
});