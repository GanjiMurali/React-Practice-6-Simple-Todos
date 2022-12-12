// Write your code here
import './index.css'

const TodoItem = props => {
  const {eachItem, deleteTodo} = props
  const {title, id} = eachItem

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="list-item">
      <p className="paragraph">{title}</p>
      <button onClick={onDelete} className="btn" type="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
