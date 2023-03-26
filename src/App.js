import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	Navbar,
	NavItem,
	NavbarToggler,
	Collapse,
	NavLink,
	Nav,
	NavbarBrand
} from 'reactstrap';

function App() {

	// Collapse isOpen State
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<div style={{
			display: 'block', width: 550, padding: 30
		}}>
			<Navbar color="light" light expand="md">
				<NavbarBrand href="/">Facebook</NavbarBrand>
				<NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="mr-auto" navbar>
						<NavItem>
							<NavLink href="#">Home</NavLink>
						</NavItem>
						<NavItem>
             <input className="head-search" type="search" placeholder="Search Facebook" aria-label="Search" />          
						</NavItem>
						<NavItem>
							<NavLink href="#">Signup</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div >
	);
}

export default App;
