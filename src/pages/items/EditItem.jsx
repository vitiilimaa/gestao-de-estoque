import { useParams } from "react-router-dom"
import { Form } from "../../components"
import useStock from "../../hooks/useStock"

const EditItem = () => {
  const { getItem } = useStock()
  const { itemId } = useParams()

  const item = getItem(itemId)

  return (
    <Form itemToBeUpdated={item} />
  )
}

export default EditItem