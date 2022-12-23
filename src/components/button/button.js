
const ButtonAlert = ({label}) => {
  return (
    <button onClick={()=> alert("Mostrando texto da label "+ label)}>{label}</button>
  )
}

ButtonAlert.defaultProps = {
  label: 'Clique aqui'
}

export {ButtonAlert}