import React, {Fragment} from 'react';

export default ({data, title, Card, img}) => {
    return(
        <Fragment>
                <h2 className="text-3xl font-bold text-center">{title}</h2>
                <div className="flex mt-8 scroll">
                    {
                        data.map((el, i) => (<Card key={i} element={el} img={img}/>))
                    }
                </div>
        </Fragment>
    )
}