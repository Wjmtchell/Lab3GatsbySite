import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import cn from 'classnames';
import { navigate } from 'gatsby';
import home from '../images/home.png';
import shay from '../images/shay.jpg';

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
        Test We’re a collection of two CSEs and an EE that met in this class. Our senior design project is implementing a database system to streamline the management of a school in Taiwan. The system will provide a centralized platform for storing and organizing important information about students, teachers, and even classes and resources. This will make it easy to track and manage the operations.
      </h1>

      <div className={css(section2Styles.content_box)}>
        <div className={css(section2Styles.foreground)}>
          <div
            style={{ '--src': `url(${home})` }}
            className={css(section2Styles.content_box1)}
            onClick={() => {navigate("/index")}}
          />

          <button className={css(section2Styles.btn2)} onClick={() => {navigate("/mitchell")}}>
            <span className={css(section2Styles.btn__text)}>Mitchell’s Page</span>
          </button>

          <button className={css(section2Styles.btn2)} onClick={() => {navigate("/william")}}>
            <span className={css(section2Styles.btn__text)}>William’s Page</span>
          </button>

          <button className={css(section2Styles.btn2)} onClick={() => {navigate("/shay")}}>
            <span className={css(section2Styles.btn__text)}>Shay’s Page</span>
          </button>
        </div>
      </div>

      <div className={css(section2Styles.flexRow)}>
        <div className={css(section2Styles.rect3)}>
          <div className={css(section2Styles.txt)}>
            <div style={{textAlign: 'center', fontSize: '30px', textDecoration: 'underline', textUnderlinePosition: 'under', fontWeight: 'bold'}}> Shay </div>
            I'm a Computer Science and Engineering student from Waukee, IA. I was originally a Biomedical Engineer, but decided to switch to CSE at the end of my freshman year. My hobbies include watching/playing basketball, video games, and hanging out with my partner's cat. Her name is Teddy!
            <br></br>
            <br></br>
            <b>Email:</b> shay-london@uiowa.edu
            <br></br>
            <img src={shay} alt='Shay' style={{width: '100%'}}></img>
          </div>
        </div>

        <div className={css(section2Styles.flexRow__spacer)} />

        <div className={css(section2Styles.rect3)}>
          <div className={css(section2Styles.txt1)}>
          <div style={{textAlign: 'center', fontSize: '30px', textDecoration: 'underline', textUnderlinePosition: 'under', fontWeight: 'bold'}}> Shay </div>
            I'm an Electrical Engineering student from Iowa City, IA. My hobbies include dirt biking and playing fetch with my two dogs every morning and evening. I spend almost all of my free time machining. Click my page to learn more!
            <br></br>
            <br></br>
            <b>Email:</b> mitchell-kurt@uiowa.edu
            <br></br>
            <img src={mitch} alt='Mitch' style={{width: '100%'}}></img>
          </div>
        </div>

        <div className={css(section2Styles.flexRow__spacer)} />

        <div className={css(section2Styles.rect3)}>
          <div className={css(section2Styles.txt)}>
          <div style={{textAlign: 'center', fontSize: '30px', textDecoration: 'underline', textUnderlinePosition: 'under', fontWeight: 'bold'}}> William </div>
            I'm a Computer Science and Engineering student from Waterloo, IA. I was originally a Mechanical Engineer, but I enjoyed my experience with the Computer Science Engineering Faculty so much that I changed. I spend most of my time at my computer working on software projects. Check out <a href="/william">my page</a> to learn more.
            <br></br>
            <br></br>
            <b>Email:</b> william-j-mitchell@uiowa.edu
            <br></br>
            <img src={william} alt='William' style={{width: '100%'}}></img>
          </div>
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
    margin: '68px 11px 0px 9px',
    maxHeight: 80
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
    margin: '25% 2.36% 12px 14.31%'
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
  txt: {
    font: '20px/1.4 Arial, Helvetica, Arial, serif',
    color: 'rgb(0,0,0)',
    letterSpacing: '0px',
    position: 'relative',
    flexGrow: 1,
    margin: 7
  },
  flexRow__spacer: {
    flex: '1 0 auto'
  },
  rect3: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '10px 10px 10px 10px',
    outline: '2px solid rgb(70,70,70)',
    outlineOffset: -2,
    position: 'relative',
    flex: '0 1 500px',
    minHeight: 688
  },
  txt1: {
    font: '20px/1.4 Arial, Helvetica, Arial, serif',
    color: 'rgb(0,0,0)',
    letterSpacing: '0px',
    position: 'absolute',
    top: 7,
    bottom: 7,
    left: 7,
    right: 7
  },
  rect31: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flex: '0 1 500px'
  },
  rect32: {
    borderRadius: '10px 10px 10px 10px',
    outline: '2px solid rgb(70,70,70)',
    outlineOffset: -2,
    position: 'relative',
    flexGrow: 1,
    minHeight: 688
  },
  txt2: {
    font: '20px/1.39 Arial, Helvetica, Arial, serif',
    color: 'rgb(0,0,0)',
    letterSpacing: '0px',
    position: 'absolute',
    top: 7,
    bottom: 7,
    left: 7,
    right: 7
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
