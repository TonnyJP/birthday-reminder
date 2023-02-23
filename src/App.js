import React from 'react';
import data from './data';
import List from './List';
function App() {
  const [ allBirthday, setAllBirthday ] = React.useState(data)
 
  const clearAll = () => {
    setAllBirthday([])
  }
  const deleteOneBirthday = (id) => {
    const newBirthdayList = allBirthday.filter((birthday) => birthday.id !== id);
    setAllBirthday(newBirthdayList);
  }
  return (<main>
    <section className="container">
    <h3>{`${allBirthday.length} birthdays today`}</h3>
      {allBirthday.map((birthday) => {
        const { id, name, image, age } = birthday;
        return (
        <div key={id}>
           < List id={id} name={name} image= {image} onDelete ={deleteOneBirthday} age={age} />
        </div>
        )
         })
      }
      <button onClick={clearAll} className="btn">clear All</button>
    </section>
  </main>)
}

export default App;
