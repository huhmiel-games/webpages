import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';

/**
 * Our new book component
 */
const Card = ({ links }) => (
    <div className="d-flex flex-column flex-shrink-0 justify-content-center align-items-center mt-5 mx-2">
        {links.map((link, i) =>
            <div key={i} className="card mb-3 bg-dark text-light no-border neon-shadow" style={{ maxWidth: '540px' }}>
                <div className="row col-xs">
                    <div className="col-md-4 p-3 m-0">
                        <img className="mx-3" src={link.imgSrc} alt={link.title} width="180px" height="143px" />
                    </div>
                    <div className="col-md-8 p-3">
                        <div className="card-body pe-0">
                            <h5 className="card-title mb-0">{link.title}</h5>
                            <p className="card-text fs-6">
                                <small className="text-muted">by </small>
                                {link.author}
                            </p>
                            <p className="card-text"><small className="text-muted">{link.desc}</small></p>

                            {link.href.length > 0 && <a href={link.href} target="_blank" rel="noreferrer noopener" type="button" className="btn btn-danger btn-sm mt-3 no-border neon-btn">Play on itch.io </a>}
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
);

export default Card;
