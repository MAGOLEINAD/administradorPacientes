import React from 'react'
import Paciente from './Paciente';
import {useEffect} from 'react'

const ListadoPacientes = ({ pacientes,setPaciente,eliminarPaciente }) => {
    useEffect (() => {
        if (pacientes.length > 0 ) {
        console.log('NuevoPaciente')    }
        },[pacientes]);

    return (
        <>
            {pacientes.length === 0 ?  <div className='sm:w-1/2 mt-10 text-xl font-bold overflow-y-scroll h-screen '>
                    <h2 className='text-center mb-3 text-4xl font-black '>Agrega un <span className='text-indigo-700'>Paciente</span></h2>
                    <p className='text-center'>Y aparecera <span className='text-indigo-700'>en este lugar</span></p></div> :

                <div className='sm:w-1/2 mt-10 text-xl font-bold overflow-y-scroll h-screen '>
                    <h2 className='text-center mb-3 text-4xl font-black '>Listado de <span className='text-indigo-700'>Pacientes</span></h2>
                    <p className='text-center'>Administra tus <span className='text-indigo-700'>pacientes y Citas</span></p>
                    {pacientes.map((paciente) =>
                        <Paciente
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}
                            eliminarPaciente={eliminarPaciente}
                        />)}


                </div>
            }



        </>
    )
}

export default ListadoPacientes