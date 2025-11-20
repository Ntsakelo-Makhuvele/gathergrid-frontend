import {screen,render} from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { describe,it,expect,vi } from 'vitest'
import Profile from '../Layout/Components/Profile'
import { useSearchParams } from 'react-router-dom'


vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom') as any;
    return{
        ...actual,
        useSearchParams:vi.fn(),
        useLocation: () => ({search:'', pathname:'/service/provider/profile'})
    }
})

describe('Service Profile Component', () => {
    it('should render the correct profile',() => {
        const mockUseSearchParams = vi.mocked(useSearchParams)

        const mockSearchParams = new URLSearchParams('?id=1');
        mockUseSearchParams.mockReturnValue([mockSearchParams,vi.fn()]);

        render(<Profile />);

        const profileName = screen.getByText('Ntsakelo Makhuvele')
        expect(profileName).toBeInTheDocument();

    })
})