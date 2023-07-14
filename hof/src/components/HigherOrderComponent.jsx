import React from 'react';
import "./HigherOrderComponent.css"

const HigherOrderComponent = () => {
  const userData = [
    { id: '1', name: 'Joe', user_type: 'Developer', age: 31, years: 11 },
    { id: '2', name: 'Hill', user_type: 'Designer', age: 26, years: 4 },
    { id: '3', name: 'John', user_type: 'Teacher', age: 24, years: 2 },
    { id: '4', name: 'Sam', user_type: 'Entrepreneur', age: 58, years: 25 },
    { id: '5', name: 'Jack', user_type: 'Designer', age: 43, years: 18 }
  ];

  const renderItems = () => {
    return userData.map((item) => (
      <React.Fragment key={item.id}>
        <ul className="list-elements">
          <span>Id: {item.id}</span>
          <span>Name: {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </ul>
      </React.Fragment>
    ));
  };

  const filteredUsers = userData.filter((user) => user.user_type === 'Designer');

  const renderItems2 = () => {
    return filteredUsers.map((item) => (
      <React.Fragment key={item.id}>
        <ul className="list-elements">
          <span>Id: {item.id}</span>
          <span>Name: {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </ul>
      </React.Fragment>
    ));
  };

  const filteredUsers2 = userData.filter((user) => user.name.startsWith('J')); 

  const renderItem3 =() =>{
    return filteredUsers2.map((item) => (
        <React.Fragment key={item.id}>
            <ul className="list-elements">
            <span>Id: {item.id}</span>
            <span>Name: {item.name}</span>
            <span>User Type: {item.user_type}</span>
            </ul>
        </React.Fragment>
    ))
  }

  const filteredUsers3 = userData.filter((user) => user.age > 30); 

  const renderItem4 =() =>{
    return filteredUsers3.map((item) => (
        <React.Fragment key={item.id}>
            <ul className="list-elements">
            <span>Id: {item.id}</span>
            <span>Name: {item.name}</span>
            <span>User Type: {item.user_type}</span>
            </ul>
        </React.Fragment>
    ))
  }
  const designers = userData.filter((user) => user.user_type === 'Designer');
  const filteredUsers4 = designers.reduce((sum, designer) => sum + designer.years, 0);


  return (
    <div>
        <h>Display all itmes</h>
        <div className='table-1' >
      <ul>{renderItems()}</ul>
    </div>

        <h>Display based on data type</h>
    <div className='table-2'>
      <ul>{renderItems2()}</ul>
    </div>

    <h>Filter all data starting with J</h>
    <div className='table-3'>
        
        <ul>{renderItem3()}</ul>
    </div>

    <h> Filter the data based on age</h>
    <div className='table-4'>
        <ul>{renderItem4()}</ul>
    </div>

    
    <h>Total Years of Experience of Designers</h>
    <div className='table-5'>
      <ul>{filteredUsers4}</ul>
    </div>

    </div>
  );
};

export default HigherOrderComponent;
