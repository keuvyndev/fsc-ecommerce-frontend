import * as firestore from 'firebase/firestore'
import { renderWithRedux } from '../../helpers/test.helpers'
import Categories from './categories.component'
import { waitFor } from '@testing-library/react'

jest.mock('firebase/firestore')

describe('Categories', () => {
   it('should fetch and show categories', async () => {

      const mockedFirestore = firestore as any

      mockedFirestore.getDocs.mockImplementation( async () => [
         {
            data(){
               return {
                  id: '1',
                  displayName: 'Lorem Ipsum'
               }
            }
         }
      ])

      mockedFirestore.collection.mockImplementation(() =>({
         withConverter: () => {}
      }))

      const {getByText, findByText} = renderWithRedux(<Categories />, {})

      
      await waitFor(() => {
         getByText('Lorem Ipsum')
      })

      // Mesma coisa de waitFor
      await findByText('Lorem Ipsum')

      getByText(/explorar/i)
   })
})