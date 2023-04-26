import * as React from "react"
import { Link } from 'gatsby'
import {StyleSheet, css} from 'aphrodite'
const pageStyles = {
color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
// Aphrodite CSS
const styles = StyleSheet.create({
  message : {color : 'red'},
  message2 : {color: 'blue'}
}
);
const IndexPage = () => {
  return (
    <main className={css(styles.message)}>
        Hello World
        {/* <br><Link to="/test">Test</Link></br> */}<br></br>
        <span className={css(styles.message2)}>Hello There</span>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
