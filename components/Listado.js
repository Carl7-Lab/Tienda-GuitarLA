import Guitarra from "./Guitarra"

function Listado({guitarras}) {
  return (
    <div>
      {guitarras.map( guitarra => (
        <Guitarra
          key={guitarra.id}
          guitarra={guitarra}
        />
      ))}
    </div>
  )
}

export default Listado
