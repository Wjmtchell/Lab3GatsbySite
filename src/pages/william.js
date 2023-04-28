import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import cn from 'classnames';
import { navigate } from 'gatsby';
import home from '../images/home.png';
import Disqus from 'gatsby-plugin-disqus';
import d2cf_logo from '../images/d2cf_logo.jpg'
function renderSection1(props) {
  return (
    <section className={css(section1Styles.section1)}>
      <h1 className={css(section1Styles.hero_title)}>William Mitchell</h1>
    </section>
  );
}

function renderSection2(props) {
  return (
    <section className={css(section2Styles.section2)}>
      <div className={css(section2Styles.content_box)}>
        <div className={css(section2Styles.foreground)}>
          <div
            style={{ '--src': `url(${home})` }}
            className={css(section2Styles.content_box1)}
            onClick={() => {navigate("/index")}}
          />

          <button className={css(section2Styles.btn)} onClick={() => {navigate("/about")}}>
            <span className={css(section2Styles.btn__text)}>About Us</span>
          </button>

          <button className={css(section2Styles.btn1)} onClick={() => {navigate("/mitchell")}}>
            <span className={css(section2Styles.btn__text1)}>Mitchell's Page</span>
          </button>

          <button className={css(section2Styles.btn2)} onClick={() => {navigate("/shay")}}>
            <span className={css(section2Styles.btn__text2)}>Shay's Page</span>
          </button>
        </div>
      </div>

      <div className={css(section2Styles.main__text)}>
        My name is William Mitchell, I am a Senior at the University of Iowa. I am a Computer Science Engineering major with a focus on software engineering and machine learning. 
        <br></br> 
        My journey with computer science began with Engineering Problem Solving 2 where we learned to code for the first time. 
        <br></br>
        Currently I work for the Doorway to College Foundation developing softwa
        <img src={d2cf_logo} alt='d2cf_logo' style={{width: '100%'}}></img>
      </div>
      <div className={css(section2Styles.comment_styling)}>
      <Disqus
        identifier="williamPage"
        title="William"
        />
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
    font: '600 128px/1.36 "Nunito Sans", Helvetica, Arial, serif',
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
    flexGrow: 1,
    minHeight: 824
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
    background: 'var(--src) center center / contain no-repeat',
    backgroundColor: 'rgb(70,70,70)',
    width: 180,
    height: 130,
    cursor: 'pointer',
    boxShadow: '0px 4px 4px 0px rgba(0,0,0,0.247)',
    transitionDuration: '0.3s',
    transitionProperty: 'background-color',
    ':hover': {
      backgroundColor: '#4feca1ff'
    },
    position: 'relative',
    minWidth: 180
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
    maxHeight: 80,
    margin: '69px 10px 0px'
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
      width: '100%',
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
    maxHeight: 80,
    margin: '69px 10px 0px'
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
    letterSpacing: '0px',
    width: '100%',
    height: 80,
    position: 'relative'
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
    flex: '1 0 auto',
    minHeight: 0,
    minWidth: 160,
    maxHeight: 80,
    margin: '68px auto 0px'
  },
  btn__text2: {
    '@media (max-width: 1199px)': {
      fontSize: '20px'
    },
    '@media (max-width: 767px)': {
      fontSize: '16px'
    },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    font: '24px/1.37 "Nunito Sans", Helvetica, Arial, serif',
    color: 'rgb(255,255,255)',
    textAlign: 'center',
    textShadow: '0px 4px 4px rgba(0,0,0,0.24705882352941178)',
    letterSpacing: '0px',
    width: '100%',
    height: 66,
    position: 'relative',
    margin: '7px 0px'
  },
  main__text: {
    display: 'flex',
    justifyContent: 'center',
    font: '400 30px/1 "Nunito Sans", Helvetica, Arial, serif',
    color: 'rgb(58,58,58)',
    textAlign: 'center',
    letterSpacing: '0px',
    position: 'relative',
    flexGrow: 1,
    margin: '2px 2px 2px 182px'
  },
  comment_styling: {
    marginLeft: '20%',
  },
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
