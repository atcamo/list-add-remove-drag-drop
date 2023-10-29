import { useState } from 'react'
import { type Item } from "../App"


export const useItems = () => {
    const [items, setItems] = useState<Item[]>([])

    const addItem = (text: string) => {
      const newItem: Item = {
        id:crypto.randomUUID(),
        text, 
        timestamp:Date.now()
      }
  
      setItems ((prevItems) => {
        return [...prevItems, newItem]
  
    })
    }

    const removeItem =(id: string) => {
      setItems(prevItems => {   // Cambia "prevItem" a "prevItems"
        return prevItems.filter(currentItem => currentItem.id !== id)
    })
    }

    const emptylist =  () => {
      setItems ([]);
    }

    return {
      items,
      addItem,
      removeItem,
      emptylist
    }


}
