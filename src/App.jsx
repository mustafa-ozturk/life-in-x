import styles from "./App.module.css";
const DAYS_IN_YEAR = 365;
const WEEKS_IN_YEAR = 52;
const MONTHS_IN_YEAR = 12;
const YEARS = 90;

function App() {
  return (
    <>
      hello world
      <div className={styles.grid}>
        <Square />
        <Square filled={true} />
      </div>
    </>
  );
}

function Square({ filled }) {
  return (
    <div
      className={styles.square}
      style={filled && { backgroundColor: "red" }}
    ></div>
  );
}

export default App;
