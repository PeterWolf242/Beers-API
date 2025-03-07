import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../components/footer/Footer'
export default function Layout() {

	//* Get the current location
	const location = useLocation();
	//* Hide the footer on the home page
	const footerHide = location.pathname === '/';

	return (
		<>
			<Outlet />
			{!footerHide && <Footer />}
		</>
	)
}
