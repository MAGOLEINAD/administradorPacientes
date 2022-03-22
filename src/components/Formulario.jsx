import React from 'react'
import {useState, useEffect} from 'react'
import Error from './Error'

const Formulario = ({setPacientes,pacientes,paciente,setPaciente}) => {
    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [alta, setAlta] = useState('')
    const [sintomas, setSintomas] = useState('')
    const [error, setError] = useState(false)

 
    useEffect(()=> {
        if (Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setAlta(paciente.alta)
            setSintomas(paciente.sintomas)
        }

    },[paciente])

    //Handles
    // const handleInputChange = (e) => {
    //     setNombre(e.target.value)
    //     console.log(e.target.value);
    // }
    const generarId = () => {
       const random = Math.random().toString(36).substring(2)
       const fecha = Date.now().toString(36)
       return random + fecha
    }
    const resetForm = () => {
        setNombre('')
        setPropietario('')
        setEmail('')
        setAlta('')
        setSintomas('')
        setError (false)
    }
    const handleSubmit = (e) => {
            e.preventDefault()
            //Validacion

            if ([nombre,propietario,email,alta,sintomas].includes('')) {
                setError (true)
                console.log('Complete todos los campos') 
                return
            } else {
                setError(false)
                    console.log('Todos llenos')
                     //Es lo mismo llave y valor cuando son identicos no es necesario colocarlo como en el primer caso funciona igual

                    
                const objetoPacientes = {
                    nombre: nombre,
                    propietario,
                    email,
                    alta,
                    sintomas,
                   
                }
                if (paciente.id) {

                    //Editando el Registro
                    objetoPacientes.id=paciente.id
                    const pacientesActualizados = pacientes.map((pacienteState => pacienteState.id === paciente.id? objetoPacientes: pacienteState))
                    setPacientes(pacientesActualizados)
                    setPaciente({})

                }
                else {
                    //nuevoRegistro
                    objetoPacientes.id = generarId()
                    setPacientes([...pacientes, objetoPacientes])
                }
           
            resetForm()
                }
               
            }
    



    return (
        <div className='sm:w-1/2 mt-10 text-xl font-bold '>
            <h2 className='text-center mb-3 text-4xl font-black '>Seguimiento de <span className='text-indigo-700'>Pacientes</span></h2>
            <p className='text-center'>Añade Pacientes y <span className='text-indigo-700'>Administralos</span> </p>

            <form 
            onSubmit={handleSubmit}
            className='bg-white rounded-lg shadow-md mx-2 mt-3 py-5 px-4 '>
            {error && <Error><p>Todos los campos son Obligatorios</p> </Error>}

                <div className='mb-2'>
                    <label htmlFor='mascota' className='block mb-2'>Nombre</label>
                    <input
                        id='mascota'
                        type='text'
                        className='border-solid border-[1px] border-gray-300 rounded-md w-full p-1 px-3 text-lg'
                        placeholder='Nombre de Mascota'
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className='mb-2'>
                    <label htmlFor='propietario' className='block mb-2 '>Propietario</label>
                    <input
                        id='propietario'
                        type='text'
                        className='border-solid border-[1px] border-gray-300 rounded-md w-full p-1 px-3 text-lg'
                        placeholder='Nombre de Mascota'
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>
                <div className='mb-2'>
                    <label htmlFor='email' className='block mb-2'>Email</label>
                    <input
                        id='email'
                        type='email'
                        className='border-solid border-[1px] border-gray-300 rounded-md w-full p-1 px-3 text-lg'
                        placeholder='Email del Propietario'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='mb-2'>
                    <label htmlFor='alta' className='block mb-2'>Alta</label>
                    <input
                        id='alta'
                        type='date'
                        className='border-solid border-[1px] border-gray-300 rounded-md w-full p-1 px-3 text-lg'
                        placeholder='Alta del Propietario'
                        value={alta}
                        onChange={(e) => setAlta(e.target.value)}
                    />
                </div>
                <div className='mb-2'>
                    <label htmlFor='alta' className='block mb-2'>Sintomas</label>
                    <textarea
                        id='alta'
                        type='text'
                        className='border-solid border-[1px] border-gray-300 rounded-md w-full p-1 px-3 text-lg'
                        placeholder='Sintomas'
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    />
                </div>
                <div className='mb-2'>
                   
                    <input
                        id='enviar'
                        type='submit'
                        className='border-solid border-[1px] border-gray-300 rounded-md w-full p-2 px-3 bg-indigo-800 transition-all mt-2 text-white uppercase font-semibold text-lg  cursor-pointer hover:bg-indigo-700'
                        value={paciente.id?'Editar Paciente': 'Agregar Paciente'}
                    />
                </div>
              
            </form>
        </div>
    )
}

export default Formulario