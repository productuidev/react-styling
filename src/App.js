//import './App.css';
//import './App.scss';
import styled, { css } from 'styled-components'
import styles from "./App.module.css";
import Button from "./components/Button";
import StyledButton from "./components/StyledButton";
import "antd/dist/antd.css";
import { Calendar } from 'antd';
import { DatePicker, Space } from 'antd';
import { GithubOutlined } from "@ant-design/icons";


console.log(styles);
// {
//   App: "App_App__UTpb9"
//   App-logo-spin: "App_App-logo-spin__ZfEiT"
//   header: "App_header__PAvLg"
//   link: "App_link__9uJpd"
//   logo: "App_logo__eZSaV"  
// }

const PrimaryStyledButton = styled(StyledButton)`
  background: #f00;
  color: #fff;
  border-color: #f00;
`;

const UppercaseButton = (props) => <button {...props} children={props.children.toUpperCase()} />;
const MyButton = (props) => <button className={props.className} children={`My ${props.children}`} />;
const StyledMyButton = styled(MyButton)`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #FFF;
  color:#FFF;
  margin: 1.5em 1em;
  padding: 1em 2.5em;
  font-size:1em; 
  display:block;
`;

const onPanelChange = (value, mode) => {
  console.log(value.format('YYYY-MM-DD'), mode);
};

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

function App() {
  return (
    <div className={styles["App"]}>
      <header className={styles["header"]}>
        {/* <p className={styles["logo"]}>React Component Styling</p> */}
        <Button>Button</Button>
        <StyledButton>Button</StyledButton>
        <StyledButton primary>Button</StyledButton>
        <PrimaryStyledButton>Button</PrimaryStyledButton>
        <StyledButton as="a" href="#none">Button</StyledButton>
        <StyledButton as={UppercaseButton}>Button</StyledButton>
        <StyledMyButton>Button</StyledMyButton>
      </header>
      <article>
        <div>
          <GithubOutlined/>
        </div>
        <Space direction="vertical">
          <DatePicker onChange={onChange} />
        </Space>
        <Calendar onPanpnelChange={onPanelChange} />
      </article>
    </div>
  );
}

export default App;
