import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList/index'

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {

    const albumList = [
        {
            id : 1,
            name : 'Nhac hoa thinh hanh',
            thumbnailUrl : 'https://westernnews.media.clients.ellingtoncms.com/img/photos/2020/12/29/OneRepublic_t715.jpg?529764a1de2bdd0f74a9fb4f856b01a9d617b3e9'
        },
        
        {
            id : 2,
            name : 'Rap Viet nghe la nghien',
            thumbnailUrl : 'https://westernnews.media.clients.ellingtoncms.com/img/photos/2020/12/29/OneRepublic_t715.jpg?529764a1de2bdd0f74a9fb4f856b01a9d617b3e9'
        },

        {
            id : 3,
            name : 'nhac hot thang 2 ',
            thumbnailUrl : 'https://westernnews.media.clients.ellingtoncms.com/img/photos/2020/12/29/OneRepublic_t715.jpg?529764a1de2bdd0f74a9fb4f856b01a9d617b3e9'
        },
        
      
        
    ];

    return (
        <div>
            <h2>Can You Like this</h2>
            <AlbumList albumList={albumList}/>
        </div>
    );
}

export default AlbumFeature;