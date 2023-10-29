import React from 'react'
import userEvent from '@testing-library/user-event'
import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../src/App'

describe ('<App/>', () => {

  test('should add a new item and remove the item', async() => {
      const user = userEvent.setup()

      render (<App/>)

      //buscar el input
      const input = screen.getByRole('textbox')
      expect(input).toBeDefined()

      //buscar el form
      const form =screen.getByRole('form')
      expect(form).toBeDefined()

      const button = form.querySelector('button')
      if (!button) {
        throw new Error('Button not found');
      }
      expect(button).toBeDefined()

      //generar una palabra aleatoria
      const randomText = crypto.randomUUID()
      await user.type(input, 'randomText')
      await user.click(button)

      //asegurar que el elemento se agrego
      const list = screen.getByRole('list')
      expect(list).toBeDefined()
      expect(list.childNodes.length).toBe(1)

      //asegurarnos que lo podemos borrar
      const item = screen.getByText('randomText')
      const removeButton = item.querySelector('button')
      if (!removeButton) {
        throw new Error('Remove button not found');
    }
      expect(removeButton).toBeDefined()

      await user.click(removeButton)

      const noResult = screen.getByText('No hay elementos en la lista')
      expect(noResult).toBeDefined()
      


  })

})