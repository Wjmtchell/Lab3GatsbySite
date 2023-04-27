import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import cn from 'classnames';

function renderSection1(props) {
  return (
    <section className={css(section1Styles.section1)}>
      <h1 className={css(section1Styles.hero_title)}>About Team 1</h1>
    </section>
  );
}

function renderSection2(props) {
  return (
    <section className={css(section2Styles.section2)}>
      <h1 className={css(section2Styles.title)}>
        We’re a collection of two CSEs and an EE that met in this class. Our Senior Design Project is about creating a
        database to manage a school with the help of an English class from Taiwan!
      </h1>

      <div className={css(section2Styles.content_box)}>
        <div className={css(section2Styles.foreground)}>
          <div className={css(section2Styles.content_box1)} onClick={props.hButtonPressed}>
            <img
              src={require('../images/home.png')}
              alt="Home Button"
              className={css(section2Styles.icon)}
            />
          </div>

          <button className={css(section2Styles.btn)} onClick={props.mButtonPressed}>
            <span className={css(section2Styles.btn__text)}>Mitchell’s Page</span>
          </button>

          <button className={css(section2Styles.btn1)} onClick={props.wButtonPressed}>
            <span className={css(section2Styles.btn__text)}>William’s Page</span>
          </button>

          <div className={css(section2Styles.foreground__cell)}>
            <button className={css(section2Styles.btn2)} onClick={props.sButtonPressed}>
              <px-grid track-style="flex-grow: 1;" x="auto auto auto" y="7px 66px 7px">
                <span className={css(section2Styles.btn__text1)}>Shay’s Page</span>
              </px-grid>
            </button>
          </div>
        </div>
      </div>

      <div className={css(section2Styles.flexRow)}>
        <div className={css(section2Styles.flexRow__cell)}>
          <div className={css(section2Styles.rect3)} />
        </div>
        <div className={css(section2Styles.flexRow__spacer)} />
        <div className={css(section2Styles.flexRow__cell)}>
          <div className={css(section2Styles.rect3)} />
        </div>
        <div className={css(section2Styles.flexRow__spacer)} />
        <div className={css(section2Styles.flexRow__cell)}>
          <div className={css(section2Styles.rect3)} />
        </div>
      </div>
    </section>
  );
}

export default function AboutPage(props) {
  return (
    <React.Fragment>

      <main className={cn(css(styles.main), 'about-page')}>
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
  hero_title: {
    '@media (max-width: 1199px)': {
      fontSize: '108px'
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
    display: 'flex',
    justifyContent: 'center',
    font: '128px/1.36 "Nunito Sans", Helvetica, Arial, serif',
    color: 'rgb(70,70,70)',
    textAlign: 'center',
    letterSpacing: '0px',
    width: '87.5%',
    height: 175,
    position: 'relative',
    margin: '0px 0% 25px 12.5%'
  }
});

const section2Styles = StyleSheet.create({
  section2: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flexGrow: 1
  },
  title: {
    '@media (max-width: 1199px)': {
      fontSize: '28px'
    },
    '@media (max-width: 991px)': {
      fontSize: '24px'
    },
    '@media (max-width: 767px)': {
      fontSize: '20px'
    },
    '@media (max-width: 383px)': {
      fontSize: '16px'
    },
    display: 'flex',
    justifyContent: 'center',
    font: '32px/1.37 "Nunito Sans", Helvetica, Arial, serif',
    color: 'rgb(70,70,70)',
    textAlign: 'center',
    letterSpacing: '0px',
    height: 129,
    position: 'absolute',
    top: -25,
    left: 180,
    right: 0
  },
  content_box: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(79,236,161)',
    width: 180,
    position: 'absolute',
    top: -200,
    bottom: 0,
    left: 0
  },
  foreground: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flexGrow: 1,
    margin: '0px 0px 472px'
  },
  content_box1: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(70,70,70)',
    width: 180,
    height: 130,
    cursor: 'pointer',
    boxShadow: '0px 4px 4px 0px rgba(0,0,0,0.247)',
    transitionDuration: '0.3s',
    transitionProperty: 'color',
    ':hover': {
      color: '#50e3c2ff'
    },
    position: 'relative',
    minWidth: 180
  },
  icon: {
    '@media (max-width: 1199px)': {
      margin: '5px 24px 5px 27px'
    },
    '@media (max-width: 991px)': {
      margin: '5px 20px'
    },
    '@media (max-width: 767px)': {
      margin: '5px 16px'
    },
    '@media (max-width: 575px)': {
      margin: '5px 16px 5px 12px'
    },
    '@media (max-width: 479px)': {
      margin: '5px 12px'
    },
    width: 124,
    height: 'auto',
    aspectRatio: '1.03',
    verticalAlign: 'top',
    objectFit: 'cover',
    objectPosition: 'center center',
    position: 'relative',
    minWidth: 124,
    margin: '5px 29px 5px 27px'
  },
  btn: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(70,70,70)',
    borderRadius: '10px 10px 10px 10px',
    width: 160,
    height: 80,
    cursor: 'pointer',
    boxShadow: '0px 4px 4px 0px rgba(0,0,0,0.247)',
    position: 'relative',
    flex: '1 0 auto',
    minHeight: 0,
    minWidth: 160,
    margin: '45px 10px 0px'
  },
  btn__text: {
    '@media (max-width: 1199px)': {
      fontSize: '20px'
    },
    '@media (max-width: 767px)': {
      fontSize: '16px'
    },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    font: '400 24px/1.37 "Nunito Sans", Helvetica, Arial, serif',
    color: 'rgb(255,255,255)',
    textAlign: 'center',
    letterSpacing: '0px',
    width: 'auto',
    height: 80,
    position: 'relative'
  },
  btn1: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(70,70,70)',
    borderRadius: '10px 10px 10px 10px',
    width: 160,
    height: 80,
    cursor: 'pointer',
    boxShadow: '0px 4px 4px 0px rgba(0,0,0,0.247)',
    position: 'relative',
    flex: '1 0 auto',
    minHeight: 0,
    minWidth: 160,
    margin: '69px 10px 0px'
  },
  foreground__cell: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flex: '1 0 auto'
  },
  btn2: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(70,70,70)',
    borderRadius: '10px 10px 10px 10px',
    width: 160,
    height: 80,
    cursor: 'pointer',
    position: 'relative',
    minWidth: 160,
    margin: '68px 11px 0px 9px'
  },
  btn__text1: {
    '@media (max-width: 1199px)': {
      fontSize: '20px'
    },
    '@media (max-width: 767px)': {
      fontSize: '16px'
    },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    font: '400 24px/1.37 "Nunito Sans", Helvetica, Arial, serif',
    color: 'rgb(255,255,255)',
    textAlign: 'center',
    textShadow: '0px 4px 4px rgba(0,0,0,0.24705882352941178)',
    letterSpacing: '0px',
    width: '100%',
    height: '100%'
  },
  flexRow: {
    '@media (max-width: 1199px)': {
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      alignContent: 'flex-start',
      rowGap: 16
    },
    display: 'flex',
    alignItems: 'center',
    width: '83.33%',
    position: 'relative',
    flexGrow: 1,
    margin: '124px 2.36% 12px 14.31%'
  },
  flexRow__cell: {
    '@media (max-width: 1199px)': {
      flex: '0 0 calc(1/1 * 100% - 0px / 1)',
      minWidth: 'unset'
    },
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flex: '1 1 370px'
  },
  rect3: {
    borderRadius: '10px 10px 10px 10px',
    outline: '2px solid rgb(70,70,70)',
    outlineOffset: -2,
    position: 'relative',
    flexGrow: 1,
    minHeight: 688
  },
  flexRow__spacer: {
    '@media (max-width: 1199px)': {
      display: 'none'
    },
    flex: '0 1 45px'
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
