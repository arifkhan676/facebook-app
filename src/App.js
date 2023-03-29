import React from 'react'
import Input from './Input';
import Row from './Row1';
import Post from './Post';

import SecRow from './Row2';
import ThirdRow from './Row3';
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
						<Input
						type="text"  
						placeholder="Search Facebook"  
					
						/>          
						</NavItem>
						<NavItem>
					   <button className="dropdown-btn"> <SmsIcon/>  </button>
					   </NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div >


<section className='front-page'>
	<div className='containerPro'>
		  <div className='x'>
		    <Row head="Home"
		    	 profile="Profile"
		    	 saved="Saved"
		    	 group="Group"
		    	 friends = "Friedns"
		    	 mostRecent = "Most recent"
		    	 />
		    	 <Row head="Home"
		    	 profile="Profile"
		    	 saved="Saved"
		    	 group="Group"
		    	 friends = "Friedns"
		    	 mostRecent = "Most recent"
		    	 />
		   </div>
		   <div className='y'>
		    <Post  /> 

		   </div>
		     <div className='z'>
     
		     </div>
		</div>
</section>
</section>
);
}

export default App;
