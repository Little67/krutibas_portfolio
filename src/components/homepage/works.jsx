import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./rsp.png"
								alt="RSP(Rourkela steel plant)"
								className="work-image"
							/>
							<div className="work-title">Rourkela steel plant</div>
							<div className="work-subtitle">
								Electrical engineer
							</div>
							<div className="work-duration">2022 May - June</div>
						</div>

						<div className="work">
						<img
								src="./rsp.png"
								alt="RSP(Rourkela steel plant)"
								className="work-image"
							/>
							<div className="work-title">Rourkela steel plant</div>
							<div className="work-subtitle">
								Electrical engineer
							</div>
							<div className="work-duration">2023 June - July</div>
						</div>

					</div>
				}
			/>
		</div>
	);
};

export default Works;
