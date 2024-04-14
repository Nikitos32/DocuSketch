import './App.module.css'
import classes from './App.module.css'
import MainComponent from "./components/Main/MainComponent";

function App() {

  return (
      <div className={classes.wrapper}>
          <MainComponent />
      </div>
  )
}

export default App
