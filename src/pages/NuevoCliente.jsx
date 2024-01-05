function NuevoCliente() {
  return (
    <>
      <h1 className=" font-black text-4xl text-blue-900">Nuevo Cliente</h1>
      <p className=" mt-3">Llena todos los campos para registrar un nuevo cliente</p>

      <div className=" flex justify-end">
        <button
          className=" bg-blue-800 text-white px-3 py-1 font-bold uppercase"
        >
          Volver
        </button>
      </div>
    </>
  )
}

export default NuevoCliente