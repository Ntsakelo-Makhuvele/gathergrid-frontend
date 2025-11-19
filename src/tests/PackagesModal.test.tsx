import {screen,render,cleanup} from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import userEvent from '@testing-library/user-event';
import { describe,it,expect,afterEach } from 'vitest'
import PackagesModal from '../Components/PackagesModal'
import { services } from '../data/services'
import { BrowserRouter } from 'react-router-dom'

afterEach(() => {
  cleanup();
});

describe('Service PackageModal',() => {
    const service = services[1];
    it('should open the dialog when the "open dialog button" is clicked',async () => {
        const user = userEvent.setup();
        render(
        <BrowserRouter>    
        <PackagesModal packages={service.service_details.packages}/>
        </BrowserRouter>
        )

        const openButton = screen.getByTestId('open-package-dialog');
        await user.click(openButton);
        const dialogTitle = screen.getByText(/Choose Package/i);
        const packageName = screen.getByText(/Bronze/i)
        
        expect(dialogTitle).toBeInTheDocument();
        expect(packageName).toBeInTheDocument();
    });
    it('Should close the dialog when the "close dialog button" is clicked', async () => {
        const user = userEvent.setup();
        render(
            <BrowserRouter>
              <PackagesModal packages={service.service_details.packages} />
            </BrowserRouter>
        )

        const openButton = screen.getByTestId('open-package-dialog');
        await user.click(openButton);


         expect(screen.getByText(/Choose Package/i)).toBeInTheDocument();

        const closeButton = screen.getByRole('button',{name:'Close'});
        await user.click(closeButton);

       const dialogTitle = screen.queryByText(/Choose Package/i);
       expect(dialogTitle).not.toBeVisible();
    })
})