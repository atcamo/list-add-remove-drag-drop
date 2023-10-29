import './Item.css'


export function Item (
  {text, handleClick}:
  {text:string, handleClick: () => void
}) {
  return (
    <li>
      <div className="item-container">
        {text}
        <button className="b-delete" onClick={handleClick}>X</button>
      </div>
    </li>
  )
}

