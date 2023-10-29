import { useState } from 'react'
import { Item } from "../App"


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

    const reorderItems = (startIndex: number, endIndex: number) => {
      const result = Array.from(items);
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);
  
      setItems(result);
  };


    return {
      items,
      addItem,
      removeItem,
      emptylist,
      reorderItems 
    }
    


}
