import React, { Component } from 'react';
import Home from './Containers/Home';
import Loading from './Containers/Loading';

function App(props){
let data=
[{

        id: 101,

        name: 'Amit',

        joining_date: "01-06-2021",

        salary: 50000

    },

    {

        id: 102,

        name: 'Piyush',

        joining_date: "01-01-2019",

        salary: 60000

    },

    {

        id: 103,

        name: 'Meet',

        joining_date: "01-03-2020",

        salary: 25000

    },

    {

        id: 104,

        name: 'Lalit',

        joining_date: "01-12-2021",

        salary: 30000

    }
]
  let fdata=data.filter((d,i) =>d.salary >= 25000);
  console.log(fdata);
  data.map((d)=> console.log(d.id, d.name, d.joining_date, d.salary));
  return (
   <div>
      <Home />
      <Loading />
   </div>
  );
}
 
class App extends Component{
  render() {
    return{
      
    }
  }
}
export default App;