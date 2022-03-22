import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"
import { useState, useEffect } from 'react'


function App() {
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

  useEffect(() => {
   const obtenerLS = () => {
     const pacientesLS = JSON.parse(localStorage.getItem('pacientes'))??[]
    setPacientes (pacientesLS)
   }
   obtenerLS()
  }, [])


  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
    console.log('Componente Listo o cambio pacientes')
  }, [pacientes])

  const eliminarPaciente = (id) => {
    console.log('eliminando paciente', id);
    const pacientesActualizados = pacientes.filter((paciente => paciente.id !== id))
    setPacientes(pacientesActualizados)
  }

  return (
    <div className="App">

      <Header />
      <div className="sm:flex container">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}

        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />

      </div>
    </div>
  )
}

export default App
