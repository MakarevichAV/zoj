import React, {useState, PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

import s from './chart.module.css';

export default class Chart extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';
    
    render() {
        return (
            <div className={s.container}>
                <BarChart
                    width={
                    this.props.barWidth < 180 ? 180 : this.props.barWidth
                    }
                    height={400}
                    data={this.props.data}
                    margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Потребленные кКал" fill="#85AD90" />
                    <Bar dataKey="Рекомендуемое значение" fill="#A64639" />
                </BarChart>
            </div>
        );
    }
}
