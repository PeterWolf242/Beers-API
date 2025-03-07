import "../bier-item/BierItem.css"
import "axios";
import { IBeerData } from "../../interfaces/beerData";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function BierItem() {

	//* Get the id from the URL

	//* Create a state for the beer item
	const [bierItem, setBierItem] = useState<IBeerData>();

	//* Fetch the beer item
	useEffect(() => {
		try {

			const fetchBierItem = async () => {
				const resp = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`);
				setBierItem(resp.data);

			}
			//* Call the fetch-function
			fetchBierItem();


		} catch (error) {
			console.error(error);
		}
	}, [])

	const formatContributedBy = (contributedBy: string): string => {
		return contributedBy.split(" <")[0];
	};


	return (
		<div className="container">
			<div className="bier-item">
				<div className="item-img">
					<img src={bierItem?.image_url} alt={bierItem?.name} />
				</div>
				<div className="bier-item-info">
					<h2>{bierItem?.name}</h2>
					<p>{bierItem?.tagline}</p>
					<p>{bierItem?.first_brewed}</p>
					<p>{bierItem?.description}</p>
					<p>Created by: {bierItem?.contributed_by ? formatContributedBy(bierItem.contributed_by) : ""}</p>
					<Link to="/">
						<img className="btnBack" src="/back-button.png" alt="Back-Button" title="Back-Button" aria-label="Back-Button" />
					</Link>
				</div>
			</div>
		</div>
	)
}
