import React from 'react'

const Paciente = ({paciente,setPaciente,eliminarPaciente}) => {
  return (
    <div className='p-3 rounded-md mt-3 bg-white shadow-md '>
    <p className='uppercase text-base'>Nombre:</p> <span className='text-indigo-500 text-base'>{paciente.nombre}</span>
    <p className='uppercase text-base'>Nombre del Propietario:</p> <span className='text-indigo-500 text-base'>{paciente.propietario}</span>
    <p className='uppercase text-base'>Email:</p> <span className='text-indigo-500 text-base'>{paciente.email}</span>
    <p className='uppercase text-base'>Alta:</p> <span className='text-indigo-500 text-base'>{paciente.alta}</span>
    <p className='uppercase text-base'>Sintomas:</p> <span className='text-indigo-500 text-base'>{paciente.sintomas}</span>
    <div className='flex gap-2'>
    <button type='button' onClick={() => setPaciente(paciente)} className='bg-blue-800 rounded-md p-1 hover:bg-blue-700 transition-all cursor-pointer text-white uppercase w-1/2'>Editar</button>
    <button type='button' onClick={() => eliminarPaciente(paciente.id)} className='bg-red-800 rounded-md p-1 hover:bg-red-700 transition-all cursor-pointer text-white uppercase w-1/2'>Eliminar</button>
    </div>
</div>
  )
}

export default Paciente