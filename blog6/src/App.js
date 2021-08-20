import Reac, {useState, useEffect} from 'react'; 

function App() {
  const [condition, setCondition] = useState(false);
  const toggle = () => setCondition(!condition);

  useEffect(() => {
    console.log(condition);
  }, [condition])

  const renderCondition = condition
    ? 'True'
    : 'False'
  //condition이 true면 true, false면 false
  

  return (
    <div className="App">
      <h1>Kossie Coder</h1>
      <div>
      {renderCondition}
      </div>
      <button onClick = {toggle}>toggle</button>
    </div>
  );
}

export default App;
