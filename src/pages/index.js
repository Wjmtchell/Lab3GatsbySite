import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import cn from 'classnames';
import { navigate } from 'gatsby';

function renderSection1(props) {
  return (
    <section className={css(section1Styles.section1)}>
      <px-grid track-style="flex-grow: 1;" x="0px 1440fr 0px" y="0px 175fr 0fr">
        <div className={css(section1Styles.flexCol)}>
          <article className={css(section1Styles.content_box)} />
          <div className={css(section1Styles.flexCol__cell)}>
            <h1 className={css(section1Styles.hero_title2)}>Student Record and Accounting System</h1>
          </div>
        </div>
      </px-grid>
    </section>
  );
}

function renderSection2(props) {
  return (
    <section className={css(section2Styles.section2)}>
      <div className={css(section2Styles.flexCol)}>
        <button id={'abtn'} className={css(section2Styles.btn)} onClick={() => {navigate("/about")}}>
          <span className={css(section2Styles.btn__text)}>About Us</span>
        </button>

        <button id={'mbtn'} className={css(section2Styles.btn1)} onClick={() => {navigate("/mitchell")}}>
          <span className={css(section2Styles.btn__text1)}>Mitchell</span>
        </button>

        <button id={'mbtn'} className={css(section2Styles.btn2)} onClick={() => {navigate("/william")}}>
          <span className={css(section2Styles.btn__text2)}>William</span>
        </button>

        <button className={css(section2Styles.btn3)} onClick={() => {navigate("/shay")}}>
          {/* wbtn */}
          <span className={css(section2Styles.btn__text3)}>Shay</span>
        </button>
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
    width: '100%',
    height: '100%'
  },
  content_box: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(79,236,161)',
    borderStyle: 'none',
    borderWidth: '0px',
    outline: '6px solid rgb(0,0,0)',
    outlineOffset: -6,
    width: '100%',
    height: 175,
    position: 'relative',
    margin: '0px 0px'
  },
  flexCol__cell: {
    marginTop: -135,
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flex: '1 1 auto'
  },
  hero_title2: {
    '@media (min-width: 1920px) and (max-width: 2999px)': {
      textAlign: 'center',
      justifyContent: 'center'
    },
    '@media (max-width: 1919px)': {
      textAlign: 'center',
      justifyContent: 'center'
    },
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
    font: '600 72px/1.36 "Nunito Sans", Helvetica, Arial, serif',
    color: 'rgb(70,70,70)',
    letterSpacing: '0px',
    position: 'relative',
    minWidth: 950,
    margin: 'auto auto'
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
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'relative',
    flexGrow: 1,
    margin: '166px 364px 203px'
  },
  btn: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(79,236,161)',
    borderRadius: '10px 10px 10px 10px',
    outline: '3px solid rgb(70,70,70)',
    outlineOffset: -3,
    width: 600,
    height: 100,
    cursor: 'pointer',
    transitionDuration: '0.3s',
    transitionProperty: 'transform',
    ':hover': {
      transform: 'scale(1.1)'
    },
    position: 'relative',
    flex: '1 0 auto',
    minHeight: 0,
    minWidth: 600,
    margin: '0px 0px'
  },
  btn__text: {
    '@media (max-width: 1199px)': {
      fontSize: '40px'
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    font: '400 64px/1.16 "Nunito Sans", Helvetica, Arial, serif',
    color: 'rgb(255,255,255)',
    textAlign: 'center',
    letterSpacing: '0px',
    width: '100%',
    position: 'relative',
    flexGrow: 1,
    margin: '22px 0px'
  },
  btn1: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(79,236,161)',
    borderRadius: '10px 10px 10px 10px',
    outline: '3px solid rgb(70,70,70)',
    outlineOffset: -3,
    width: 220,
    height: 100,
    cursor: 'pointer',
    transitionDuration: '0.3s',
    transitionProperty: 'transform',
    ':hover': {
      transform: 'scale(1.1)'
    },
    position: 'relative',
    flex: '1 0 auto',
    minHeight: 0,
    minWidth: 220,
    margin: '50px auto'
  },
  btn__text1: {
    '@media (max-width: 1199px)': {
      fontSize: '40px'
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    font: '400 48px/1.16 "Roboto", Helvetica, Arial, serif',
    color: 'rgb(70,70,70)',
    textAlign: 'center',
    letterSpacing: '0px',
    width: '100%',
    height: 'auto',
    aspectRatio: '1.86',
    position: 'relative',
    margin: '22px 0px'
  },
  btn2: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(79,236,161)',
    borderRadius: '10px 10px 10px 10px',
    outline: '3px solid rgb(70,70,70)',
    outlineOffset: -3,
    width: 220,
    height: 100,
    cursor: 'pointer',
    transitionDuration: '0.3s',
    transitionProperty: 'transform',
    ':hover': {
      transform: 'scale(1.1)'
    },
    position: 'relative',
    flex: '1 0 auto',
    minHeight: 0,
    minWidth: 220,
    margin: '0px auto'
  },
  btn__text2: {
    '@media (max-width: 1199px)': {
      fontSize: '40px'
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    font: '48px/1.16 "Roboto", Helvetica, Arial, serif',
    color: 'rgb(70,70,70)',
    textAlign: 'center',
    letterSpacing: '0px',
    width: '100%',
    height: 'auto',
    aspectRatio: '1.86',
    position: 'relative',
    margin: '22px 0px'
  },
  btn3: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(79,236,161)',
    borderRadius: '10px 10px 10px 10px',
    outline: '3px solid rgb(70,70,70)',
    outlineOffset: -3,
    width: 220,
    height: 100,
    cursor: 'pointer',
    transitionDuration: '0.3s',
    transitionProperty: 'transform',
    ':hover': {
      transform: 'scale(1.1)'
    },
    position: 'relative',
    flex: '1 0 auto',
    minHeight: 0,
    minWidth: 220,
    margin: '50px auto 0px'
  },
  btn__text3: {
    '@media (max-width: 1199px)': {
      fontSize: '40px'
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    font: '400 48px/1.16 "Roboto", Helvetica, Arial, serif',
    color: 'rgb(70,70,70)',
    textAlign: 'center',
    letterSpacing: '0px',
    width: '100%',
    height: 'auto',
    aspectRatio: '2.82',
    position: 'relative',
    margin: '22px 0px'
  }
});

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(255,255,255)',
    position: 'relative',
    overflow: 'hidden'
  },
  main__cell: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative'
  }
});
