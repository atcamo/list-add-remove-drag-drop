import './Item.css';

export function Item({ text, handleClick, onDragStart, onDragOver, onDrop }: {
  text: string;
  handleClick: () => void;
  onDragStart?: (event: React.DragEvent) => void;
  onDragOver?: (event: React.DragEvent) => void;
  onDrop?: (event: React.DragEvent) => void;
}) {
  return (
    <li
      draggable
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <div className="item-container">
        {text}
        <button className="b-delete" onClick={handleClick}>X</button>
      </div>
    </li>
  )
}
