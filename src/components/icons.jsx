import React from "react";
import styled from "styled-components";

const Icons = ({ data , handleRender}) => {
	
//console.log(data)
	return (
		<Container>
			{data.map((item) => (
				<div className="div" key={item.id} onClick={() => handleRender(item.id)}>
					<div className="num red"></div>
					<div className="gray">
						
						<img
							src={`https://${new URL(item.pendingUrl).hostname}/favicon.ico`}
							width="auto" style={{maxWidth: "50px"}}
							alt=""
						/>
					</div>
					<div className="name">
						<p>
							{item.title.length > 21
								? item.title.substring(0, 18) + "..."
								: item.title}
						</p>
					</div>
				</div>
			))}
		</Container>
	);
};

const Container = styled.div`
	width: 650px;
	height: 150px;
	padding: 20px 10px;
	background: var(--black);
	border-radius: 0 0 10px 10px;
	display: flex;
	flex-direction: row;
	align-items: center;
	box-shadow: var(--shadow) 0px 10px 50px;

	.div {
		width: 140px;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		margin: 0 10px;
		cursor: pointer;

		.num {
			color: #ffffff;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 50%;
			position: absolute;
			top: -12px;
			right: -12px;

			p {
				padding: 5px;
			}
		}

		.red {
			background: var(--red);
		}

		.blue {
			background: var(--blue);
		}

		.gray {
			width: 100%;
			height: 80%;
			background: var(--gray);
			border-radius: 5px;
			display: flex;
			align-items: center;
			justify-content: center;

			.icon {
				padding: 10px;
				background: var(--black);
				border-radius: 5px;
				overflow: hidden;

				img {
					width: 100%;
					object-position: center;
				}
			}
		}

		.name {
			width: 100%;
			height: 20%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: flex-end;
			color: var(--white);
		}
	}
`;

export default Icons;
