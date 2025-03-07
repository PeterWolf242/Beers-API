import { useEffect, useState } from "react";
import "./Allbears.css";
import { IBeerData } from "../../interfaces/beerData";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Allbears() {

	const [allbears, setAllbears] = useState<IBeerData[]>([]);

	useEffect(() => {
		try {

			const fetchAllbears = async () => {
				const resp = await axios.get("https://ih-beers-api2.herokuapp.com/beers");
				setAllbears(resp.data);
			}
			fetchAllbears();
		} catch (error) {
			console.error(error);
		}

	}, []);

	const formatContributedBy = (contributedBy: string): string => {
		return contributedBy.split(" <")[0];
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	};

	return (
		<>
			<div id="top" className="container_all">
				{allbears.map((beer: IBeerData) => {
					return (
						<Link to={`/${beer._id}`}>

							<div key={beer._id} className="beer-card">
								<div className="beer-img">
									<img src={beer.image_url} alt={beer.name} title={beer.name} aria-label={beer.name} />
								</div>
								<div className="beer-info">
									<h2>{beer.name}</h2>
									<div className="beer-description">
										<p>{beer.tagline}</p>
										<p>Created by: {formatContributedBy(beer.contributed_by)}</p>
									</div>
								</div>
								<button className="btnDetails" type="button">Details</button>
							</div>
						</Link>
					)
				})}
				<Link to="#top">
					<div className="btnTop" onClick={scrollToTop}>
						<img src="/back-button.png" alt="Back-Button" title="Back-Button" aria-label="Back-Button" />
					</div>
				</Link>
			</div>
		</>
	)
}
