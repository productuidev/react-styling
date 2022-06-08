import React from 'react';
import styles from "./Button.module.css";

class Button extends React.Component {
  state = {loading: false}

  render() {

    return <button
      onClick = {this.stateLoading}
      className = {
        this.state.loading
          ? `${styles["button"]} ${styles["loading"]}`
          : styles["button"]
      }
      {...this.props}
    />;
  }

  stateLoading = () => {
    this.setState({loading: true})
    setTimeout(() => {
      this.setState({loading: false})
    }, 1000)
  }
}
// const Button = props =>
//   <button className={styles["button"]} {...props}></button>;

export default Button