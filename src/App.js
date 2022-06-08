//import './App.css';
//import './App.scss';
import styles from "./App.module.css";
import Button from "./components/Button";
import StyledButton from "./components/StyledButton";

console.log(styles);
// {
//   App: "App_App__UTpb9"
//   App-logo-spin: "App_App-logo-spin__ZfEiT"
//   header: "App_header__PAvLg"
//   link: "App_link__9uJpd"
//   logo: "App_logo__eZSaV"  
// }

function App() {
  return (
    <div className={styles["App"]}>
      <header className={styles["header"]}>
        <p className={styles["logo"]}>React Component Styling</p>
        <Button>Button</Button>
        <StyledButton>StyledButton</StyledButton>
      </header>
    </div>
  );
}

export default App;
