import { useEffect } from 'react';
import GithubSearch from './components/GithubSearch';


function App() {

  // useEffect(() => {
  //   fetch('https://api.github.com/users/sahiladhikari39')
  //   .then(res => res.json())
  //   .then(result => console.log(result))
  //   }, [])

  return (
    <div className="App">
      <GithubSearch />
    </div>
  );
}

export default App;
