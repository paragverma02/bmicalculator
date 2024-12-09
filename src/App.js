import './App.css';

function App() {
  return (<>
  <div className='App'>
    <div className='container'>
      <h2>BMI Calculator</h2>
      <form>
        <div>
          <lable>Weight (LBS)</lable>
          <input type='text' placeholder='Enter weight value' value={weight} />
        </div>
        <div>
          <lable>Height (cms)</lable>
          <input type='text' placeholder='Enter height value' value={height} />
        </div>
        <div>
          <button className='btn' type='submit'>Submit</button>
          <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
        </div>
      </form>
    </div>
  </div>
  </>  );
}

export default App;