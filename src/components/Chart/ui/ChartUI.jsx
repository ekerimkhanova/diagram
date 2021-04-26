import React from 'react';

const ChartUI = ({classes, columns}) => {
    return (
        <div className={classes['chart-container']}>
            {columns}
        </div>
    )
}

export default ChartUI
