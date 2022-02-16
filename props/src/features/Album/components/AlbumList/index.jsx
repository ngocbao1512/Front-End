import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album/index';
import './styles.scss';

AlbumList.propTypes = {
    albumList: PropTypes.array
};

function AlbumList({albumList}) {
    return (
        <ul className="album-list">
            {albumList.map((album, index) => (
                <li key={index}>
                    <Album album={album}/>
                </li>
            ) )}
        </ul>
    );
}

export default AlbumList; 