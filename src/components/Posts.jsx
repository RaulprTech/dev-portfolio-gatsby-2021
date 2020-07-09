import React, {Fragment} from 'react';

export default ({data, title, Card}) => {
    return(
        <Fragment>
                <h2 className="text-3xl font-bold text-center">{title}</h2>
                <div className="flex mt-8">
                    {
                        data.map(el => (<Card element={el}/>))
                    }
                </div>
        </Fragment>
    )
}