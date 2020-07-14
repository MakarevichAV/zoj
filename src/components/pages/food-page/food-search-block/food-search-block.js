import React, {Component} from 'react';

import './food-search-block.css';
import cn from 'classnames';

// Подключаем класс-сервис с хавчиком для работы с тестовыми данными
import FoodService from '../../../../services/food-service';

export default class FoodSearchBlock extends Component {

    state = {
        list: '',
        showList: false // включение и выключение 
    }

    showHelper = (e) => {
        // создаем новый класс-сервис
        const foodService = new FoodService();
        // берем массив всего хавчика из этого класса
        const allFood = foodService.getAllFood();

        // если при нажатии клавиш значение инпута не пустое
        if (e.target.value != '') {
            
            // Проходим по массиву хавки и сравниваем со значением из инпута
            // и помещаем в names 
            const names = allFood.map((val) => { 
                const regExp = new RegExp('^' + e.target.value, 'i'); // рег. выражение для сравнения
                if (regExp.test(val.name)) {
                    return <p id={val.id}>{val.name}</p>;
                } 
            }) // удаляем из массива значения undefined
            .filter(function(x) {
                return x !== undefined && x !== null; 
            });
            
            this.setState({ // разворачиваем список совпадений
                showList: true
            })
            if (names.length == 0) { // если совпадений нет
                this.setState({
                    list: 'Ничего не найдено'
                })
            } else { // если есть совпадения
                this.setState({
                    list: names
                })
            }
            
        } else {
            this.setState({
                list: '',
                showList: false
            })
        }
    }

    render () {

        const { showList } = this.state;
        const styles = cn(
            'food-list', 
            {'show-list': this.state.showList},
        );
        return (
            <div className="food-search-block">
                <input type="text" placeholder="Начни вводить продукт" onChange={this.showHelper} />
                <div className={styles}>
                    {this.state.list}
                </div>
            </div>
        )
    }
}