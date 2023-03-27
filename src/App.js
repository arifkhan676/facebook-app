import React from 'react'
import Input from './Input';
import Row from './Row';
import SmsIcon from '@mui/icons-material/Sms';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	Navbar,
	NavItem,
	NavbarToggler,
	Collapse,
	Nav,
	NavbarBrand,
	
} from 'reactstrap';




function App() {

	// Collapse isOpen State
	const [isOpen, setIsOpen] = React.useState(false);

	return (  
		<section>
		<div style={{
			display: 'block', padding: 30
		}}>
			<Navbar color="dark" dark expand="lg">
				<NavbarBrand className='navBrand' href="/">Facebook</NavbarBrand>
				<NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="midNav" navbar>
						<NavItem>
						<Input />          
						</NavItem>
						<NavItem>
					   <button className="dropdown-btn"> <SmsIcon/>  </button>
					   </NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div >


		<section className='front-page'>
			<div className='threeDiv'>
               <Row />
		        <div className='row'>
			   <Input />          

			   </div>
               <div className='row'>
			   <h1>Hello</h1>

			   </div>

			</div>
	     </section>

		</section>
		
	

	);
}

export default App;
