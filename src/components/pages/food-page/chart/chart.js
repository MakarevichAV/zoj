import React, {useState, PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

import s from './chart.module.css';

const total = [
    {
        date: '01.08.20',
        gotEnergy: 2500
    },
    {
        date: '02.08.20',
        gotEnergy: 2400
    },
    {
        date: '03.08.20',
        gotEnergy: 2680
    },
    {
        date: '04.08.20',
        gotEnergy: 2500
    },
    {
        date: '05.08.20',
        gotEnergy: 2400
    },
    {
        date: '06.08.20',
        gotEnergy: 2680
    },
    {
        date: '07.08.20',
        gotEnergy: 2500
    }
];
const recommended = 2740;

const data = total.map((item) => {
    return {
        name: item.date,
        'Потребленные кКал': item.gotEnergy,
        'Рекомендуемое значение': recommended
    }
});

let barWidth = data.length * 120;
// [
//   {
//     name: '01.08.20', 'Потребленные кКал': 2500, "Рекомендуемое значение": 2740, amt: 2400,
//   },
//   {
//     name: '02.08.20', 'Потребленные кКал': 2480, "Рекомендуемое значение": 2740, amt: 2210,
//   },
//   {
//     name: '03.08.20', 'Потребленные кКал': 2140, "Рекомендуемое значение": 2740, amt: 2290,
//   },
//   {
//     name: '04.08.20', 'Потребленные кКал': 2640, "Рекомендуемое значение": 2740, amt: 2000,
//   },
//   {
//     name: '05.08.20', 'Потребленные кКал': 2400, "Рекомендуемое значение": 2740, amt: 2181,
//   },
//   {
//     name: '06.08.20', 'Потребленные кКал': 2320, "Рекомендуемое значение": 2740, amt: 2500,
//   },
//   {
//     name: '07.08.20', 'Потребленные кКал': 2800, "Рекомендуемое значение": 2740, amt: 10000,
//   },
// ];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

  render() {
    return (
        <div className={s.container}>
            <BarChart
                width={barWidth}
                height={400}
                data={data}
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
