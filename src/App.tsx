import './App.css'
import { Item } from './components/Item'
import { useItems } from './hooks/useItems'
import { useSEO } from './hooks/useSEO'

export type ItemId = `${string}-${string}-${string}-${string}-${string}`

export interface Item {
  id: ItemId
  timestamp: number
  text: string
}

function App() {
  const { items, addItem, removeItem, reorderItems } = useItems();
  
  useSEO({
    title: `[${items.length}] Proyecto to do list`,
    description: 'Añadir y eliminar elementos de una lista'
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const { elements } = event.currentTarget
    const input = elements.namedItem('item') as HTMLInputElement
    if (!input) return

    addItem(input.value)
    input.value = ''
  }

  const handleDragStart = (index: number) => (event: React.DragEvent) => {
    event.dataTransfer.setData('text/plain', index.toString())
  }

  const handleDrop = (targetIndex: number) => (event: React.DragEvent) => {
    event.preventDefault();

    const draggedIndex = Number(event.dataTransfer.getData('text/plain'));
    if (draggedIndex !== targetIndex) {
      reorderItems(draggedIndex, targetIndex); // Aquí estamos usando la nueva función
    }
}


  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault()
  }

  const createHandleRemoveItem = (id: ItemId) => () => {
    removeItem(id)
  }

  return (
    <main>
      <aside>
        <h1>Organiza tus ideas</h1>
        <h2>Añadir lista de elementos</h2>
        <form onSubmit={handleSubmit} aria-label='Añadir elemento'>
          <label>Elemento a introducir:
            <input
              name="item"
              required
              type="text"
              placeholder="Escriba acá"
            />
          </label>
          <button>Añadir elemento a la lista</button>
        </form>
      </aside>
      <section>
        <h2>Lista de elementos</h2>
        {items.length === 0 ? (
          <p><strong>No hay elementos en la lista</strong></p>
        ) : (
          <ul>
            {items.map((item, index) => (
              <Item
              {...item}
              key={item.id}
              handleClick={createHandleRemoveItem(item.id)}
              onDragStart={handleDragStart(index)}
              onDrop={handleDrop(index)}
              onDragOver={handleDragOver}
            />
            ))}
          </ul>
        )}
      </section>
    </main>
  )
}

export default App
