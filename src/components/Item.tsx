import './Item.css';

export function Item({ text, handleClick, timestamp, onDragStart, onDragOver, onDrop }: {
  text: string;
  handleClick: () => void;
  timestamp: number; // Asegúrate de que timestamp sea un prop
  onDragStart?: (event: React.DragEvent) => void;
  onDragOver?: (event: React.DragEvent) => void;
  onDrop?: (event: React.DragEvent) => void;
}) {
  const date = new Date(timestamp);
  const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}`;

  return (
      <li
          draggable
          onDragStart={onDragStart}
          onDragOver={onDragOver}
          onDrop={onDrop}
      >
          <div className="item-container">
              {text}
              <div className="item-info">
                  <button className="b-delete" onClick={handleClick}>X</button>
                  <span className="item-date">{formattedDate}</span>
              </div>
          </div>
      </li>
  )
}