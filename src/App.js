import React from 'react'
import SmsIcon from '@mui/icons-material/Sms';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	Navbar,
	NavItem,
	NavbarToggler,
	Collapse,
	Nav,
	NavbarBrand
} from 'reactstrap';

function App() {

	// Collapse isOpen State
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<div style={{
			display: 'block', padding: 30
		}}>
			<Navbar color="dark" dark expand="lg">
				<NavbarBrand href="/">Facebook</NavbarBrand>
				<NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="midNav" navbar>
						<NavItem>
                      <input className="head-search" type="search" placeholder="Search Facebook" aria-label="Search" />          
						</NavItem>
						<NavItem>
					   <button class="dropdown-btn"> <SmsIcon/>  </button>
					   </NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div >
	);
}

export default App;
