import './App.css'
import { useState } from 'react'
import UserTable from './components/UserTable'
import FormInput from './components/FormInput'

function App() {

  const [showForm, setShowForm] = useState(false);
  const [showTable, setShowTable] = useState(false);

  return (
    <>
      <div className='container'>
        <button onClick={() => setShowForm(!showForm)} className='btn'>
          {showForm ? "Ẩn Form" : "Hiện Form"}
        </button>
        <button onClick={() => setShowTable(!showTable)} className='btn'>
          {showTable ? "Ẩn User Table" : "Hiện User Table"}
        </button>
      </div>
      {showForm && <FormInput />}

      {showTable && <UserTable />}
    </>
  )
}

export default App