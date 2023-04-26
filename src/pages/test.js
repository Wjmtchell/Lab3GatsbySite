import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import cn from 'classnames';
import { Link } from 'gatsby'

function renderSection1(props) {
  return (
    <section className={css(section1Styles.section1)}>
      <h1 className={css(section1Styles.hero_title2)}>Team 1 Portfolio</h1>
    </section>
  );
}

function renderSection2(props) {
  return (
    <section className={css(section2Styles.section2)}>
      <div className={css(section2Styles.flexCol)}>
        <div className={css(section2Styles.flexCol__cell)}>
          <div className={css(section2Styles.rect2)} />
        </div>
        <div className={css(section2Styles.flexCol__cell1)}>
          <h1 className={css(section2Styles.hero_title1)}>About Us</h1>
          <Link to="/">Home</Link>
        </div>
        <div className={css(section2Styles.flexCol__cell2)}>
          <div className={css(section2Styles.rect3)} />
        </div>
        <div className={css(section2Styles.flexCol__cell3)}>
          <div className={css(section2Styles.rect1)} />
        </div>
        <div className={css(section2Styles.flexCol__cell4)}>
          <h1 className={css(section2Styles.hero_title)}>Mitchell</h1>
        </div>
        <div className={css(section2Styles.flexCol__cell5)}>
          <h1 className={css(section2Styles.hero_title2)}>Shay</h1>
        </div>
        <div className={css(section2Styles.rect11)} />
        <div className={css(section2Styles.flexCol__cell6)}>
          <h1 className={css(section2Styles.hero_title3)}>William</h1>
        </div>
      </div>
    </section>
  );
}

export default function Lab3(props) {
  return (
    <React.Fragment>
      <main className={cn(css(styles.main), 'lab3')}>
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
    backgroundColor: 'rgb(79,236,161)',
    outline: '6px solid rgb(70,70,70)',
    outlineOffset: -6,
    position: 'relative',
    flexGrow: 1,
    minHeight: 140
  },
  hero_title2: {
    font: '400 128px/1.36 "Nunito Sans", Helvetica, Arial, serif',
    color: 'rgb(70,70,70)',
    letterSpacing: '0px',
    width: 950,
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 245
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
    display: 'flex',
    flexDirection: 'column',
    width: '49.44%',
    position: 'relative',
    flexGrow: 1,
    margin: '201px auto 203px'
  },
  flexCol__cell: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    zIndex: 1
  },
  rect2: {
    backgroundColor: 'rgb(79,236,161)',
    borderRadius: '10px 10px 10px 10px',
    outline: '3px solid rgb(70,70,70)',
    width: '85.67%',
    position: 'relative',
    flexGrow: 1,
    minHeight: 72,
    margin: '0px auto'
  },
  flexCol__cell1: {
    marginTop: -72,
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    zIndex: 5
  },
  hero_title1: {
    font: '400 64px/1.35 "Nunito Sans", Helvetica, Arial, serif',
    color: 'rgb(255,255,255)',
    letterSpacing: '0px',
    width: '38.2%',
    position: 'relative',
    flexGrow: 1,
    margin: '0px auto'
  },
  flexCol__cell2: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    zIndex: 2
  },
  rect3: {
    backgroundColor: 'rgb(79,236,161)',
    borderRadius: '10px 10px 10px 10px',
    outline: '2px solid rgb(70,70,70)',
    outlineOffset: -2,
    width: '30.9%',
    position: 'relative',
    flexGrow: 1,
    minHeight: 100,
    margin: '93px 0% 0px 69.1%'
  },
  flexCol__cell3: {
    marginTop: -100,
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    zIndex: 3
  },
  rect1: {
    backgroundColor: 'rgb(79,236,161)',
    borderRadius: '10px 10px 10px 10px',
    outline: '3px solid rgb(70,70,70)',
    outlineOffset: -3,
    width: '30.9%',
    position: 'relative',
    flexGrow: 1,
    minHeight: 100,
    margin: '0px 69.1% 0px 0%'
  },
  flexCol__cell4: {
    marginTop: -78,
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    zIndex: 4
  },
  hero_title: {
    font: '400 48px/1.16 "Roboto", Helvetica, Arial, serif',
    color: 'rgb(70,70,70)',
    letterSpacing: '0px',
    position: 'relative',
    flexGrow: 1,
    margin: '0px 25px'
  },
  flexCol__cell5: {
    marginTop: -56,
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    zIndex: 7
  },
  hero_title2: {
    display: 'flex',
    justifyContent: 'flex-end',
    font: '400 48px/1.16 "Roboto", Helvetica, Arial, serif',
    color: 'rgb(70,70,70)',
    textAlign: 'right',
    letterSpacing: '0px',
    width: '83.71%',
    position: 'relative',
    flexGrow: 1,
    margin: '0px auto'
  },
  rect11: {
    backgroundColor: 'rgb(79,236,161)',
    borderRadius: '10px 10px 10px 10px',
    outline: '3px solid rgb(70,70,70)',
    outlineOffset: -3,
    width: '30.9%',
    position: 'relative',
    minHeight: 100,
    margin: '122px auto 0px'
  },
  flexCol__cell6: {
    marginTop: -78,
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    zIndex: 6
  },
  hero_title3: {
    font: '400 48px/1.16 "Roboto", Helvetica, Arial, serif',
    color: 'rgb(70,70,70)',
    letterSpacing: '0px',
    width: '22.19%',
    position: 'relative',
    flexGrow: 1,
    margin: '0px auto'
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
