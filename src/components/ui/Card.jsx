import React from 'react';
import '../../assets/_test_/card.css';
import { Button } from 'react-bootstrap';

function Card() {
  return (
    <>
			<div id="card-grid" className='card-collection'>
				<div className="card-item">
					<div className="card">
						<div className="card-toolbox">
							<button type='button' className='btn add-to-favorite'>
								<i className='em em-fav em-fav-bold'></i>
							</button>
							<button type='button' className='btn add-to-favorite'>
								<i className='em em-fav em-fav-bold'></i>
							</button>
						</div>
					</div>
				</div>
			</div>
    </>
  );
}

export default Card;
