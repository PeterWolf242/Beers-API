import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
	return (
		<>
			<div className="container">
				<Link to="allbears">
					<div className="item">
						<img src="/all-beers.webp" alt="Picture All Beers" title="Picture All Beers" aria-label="Picture All Beers" />
						<p>All Beers</p>
					</div>
				</Link>
				<Link to="randombears">
					<div className="item">
						<img src="/random-beer.webp" alt="Picture Random Beers" title="Picture Random Beers" aria-label="Picture Random Beers" />
						<p>Random Beer</p>
					</div>
				</Link>
			</div>
		</>
	)
}
