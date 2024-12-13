
const AddButton = ({Button, FaPaperPlane}) => {
  const addTask = () => {
    console.log(localStorage.getItem("Tarea"))
 }
  return (
      <Button colorScheme="purple" gap="4" size="lg" onClick={addTask}>
        Agregar tarea
        <FaPaperPlane />
      </Button>
  )
}

export default AddButton
