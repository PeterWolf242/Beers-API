import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
	return (
		<footer>
			<Link to="/">
				<img src="/logo-beer.png" alt="Logo Beer" title="Logo Beer" aria-label="Logo Beer" />
			</Link>
		</footer>

	)
}
