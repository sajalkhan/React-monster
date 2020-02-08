import React, { useState, useEffect } from "react";
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

function App() {
  const [state, setState] = useState({
    monsters:[]
  });

  const [data, setData] = useState({
    monsters:[]
  });
  
  const fetchData = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/");
    let responseData = await response.json();
    setState({monsters:responseData});
    setData({monsters:responseData});
  };

  useEffect(() => {                                                              // fourth, we create another useEffect Hook for only initially fetching data
    fetchData();
  }, []);


  const filterMonster = (e)=>{

    const {monsters} = state;
    const filterMonster = monsters.filter(monster=>
      monster.name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setData({monsters: filterMonster});

  }

  return (
    <div className='App'>
      
      <h1>Monsters Rolodex</h1>
      <SearchBox change={filterMonster}/>
      <CardList monsters={data.monsters}/>

    </div>
  );
}

export default App;