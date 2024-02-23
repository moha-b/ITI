import {render , screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'


describe("App component",()=>{
 
    beforeEach(()=>{
        render(<App/>)
    })

    it("inputs should be intially empty",()=>{
        
      let emailInput=screen.getByRole('textbox')
      expect(emailInput.value).toEqual('')

      let passwordInp=screen.getByLabelText("Password")
      expect(passwordInp.value).toEqual('')
    })


    it("should show email error message on invalid email",async()=>{
   await  userEvent.type(screen.getByRole('textbox'),"testgmail.com")
   await  userEvent.click(screen.getByRole('button'))
     expect(screen.queryByText(/The email you input is invalid/)).toBeInTheDocument()
    })

    it("email error message should be hidden with valid email",async()=>{
        await  userEvent.type(screen.getByRole('textbox'),"test@gmail.com")
        await  userEvent.click(screen.getByRole('button'))
      expect(screen.queryByText(/The email you input is invalid/)).not.toBeInTheDocument()
    })

})