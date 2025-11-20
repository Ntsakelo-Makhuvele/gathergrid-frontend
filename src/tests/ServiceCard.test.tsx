import {screen,render} from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { describe,it,expect } from 'vitest'
import ServiceCard from '../Components/ServiceCard'
import { services } from '../data/services'
import { BrowserRouter } from 'react-router-dom'

describe("Service Card Component", () => {
    const service = services[0]
    it("renders the service details",() => {
        render(
        <BrowserRouter>    
        <ServiceCard  id={service.id} provider={service.provider} service_details={service.service_details}/>
        </BrowserRouter>
       )
       expect(screen.getByText(service.provider.firstName)).toBeInTheDocument();
       expect(screen.getByText(service.service_details.description)).toBeInTheDocument();
       expect(screen.getByText(/4\.5/)).toBeInTheDocument();
       expect(screen.getByText(/\(241\)/)).toBeInTheDocument();
       expect(screen.getByText(`From ZAR ${service.service_details.starting_price}`)).toBeInTheDocument()
       
    });
    it("renders the link to the provider details page", () => {
        render(
         <BrowserRouter>    
        <ServiceCard  id={service.id} provider={service.provider} service_details={service.service_details}/>
        </BrowserRouter>
        )
       const expectedPath = `/service/provider/profile?id=${service.id}`
       
       const linkElement = screen.getByText(service.provider.firstName).closest('a');

       expect(linkElement).toBeInTheDocument();
       expect(linkElement).toHaveAttribute('href', expectedPath)
    })
})