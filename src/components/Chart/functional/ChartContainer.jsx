import React, { useEffect, useMemo, useState } from 'react';
import { randomArray } from '../../../functions/columnChartHeights';
import ChartUI from '../ui/ChartUI';
import style from './Chart.module.css';
import ColumnChartContainer from './ColumnChart/functional/ColumnChartContainer';

const ChartContainer = () => {
    
    const [arrayOfColumnHeights, setArrayOfColumnHeights] = useState(null);

    useEffect(()=>{
        let arr = randomArray();
        setArrayOfColumnHeights(arr);
    }, []);

    const mapColumns = useMemo(() => () => {
        return arrayOfColumnHeights.map((el, i) => (
            <ColumnChartContainer height={el} key={i} />
        ))
    }, [arrayOfColumnHeights]);

    const columns = arrayOfColumnHeights ? mapColumns() : [];

    return (
        <ChartUI classes={style} columns={columns} />
    )
}

export default ChartContainer
