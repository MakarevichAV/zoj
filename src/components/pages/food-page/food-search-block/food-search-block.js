import React, {Component} from 'react';

// import './food-search-block.css';
import s from "./food-search-block.module.css";
import ListItem from './list-item';
import cn from 'classnames';

// Подключаем класс-сервис с хавчиком для работы с тестовыми данными
import FoodService from '../../../../services/food-service';

export default class FoodSearchBlock extends Component {

    state = {
        list: '',
        inpValue: '',
        inpNumValue: 100,
        showList: false,
        foodName: null,
        energy: null,
        protein: null,
        fat: null,
        carbohydrate: null,
        foodId: null,
        disabled: true
    }

    getFood = (id) => {
        const foodService = new FoodService();
        const foodItem = foodService.getSelectedFood(id);
        this.setState({
            inpValue: '',
            inpNumValue: 100,
            showList: false,
            foodName: foodItem.name,
            energy: foodItem.energy,
            protein: foodItem.protein,
            fat: foodItem.fat,
            carbohydrate: foodItem.carbohydrate,
            foodId: id,
            disabled: false
        })
    }

    calculateEPFC = (e) => {  // функция расчета КБЖУ при изменении граммов
        const foodService = new FoodService();
        const foodItem = foodService.getSelectedFood(this.state.foodId);
        const energy = Math.round(foodItem.energy * e.target.value / 100);
        const protein = Math.round(foodItem.protein * e.target.value / 100);
        const fat = Math.round(foodItem.fat * e.target.value / 100);
        const carbohydrate = Math.round(foodItem.carbohydrate * e.target.value / 100);
        this.setState({
            inpNumValue: e.target.value,
            energy: energy,
            protein: protein,
            fat: fat,
            carbohydrate: carbohydrate
        });
    }

    showHelper = (e) => {
        this.setState({
            inpValue: e.target.value
        });

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
                    return <ListItem id={val.id} listItemValue={val.name} getFood={() => this.getFood(val.id)}/>;
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
            
        } else { // если значение инпута пустое
            this.setState({
                list: '',  // отчищаем список
                showList: false // скрываем блок списка
            })
        }
    }

    clear = () => {
        console.log('Сбросить');
        this.setState({
            inpNumValue: 100,
            showList: false,
            foodName: null,
            energy: null,
            protein: null,
            fat: null,
            carbohydrate: null,
            foodId: null,
            disabled: true
        })
    }

    write = () => {
        console.log('Записать в базу данных');
        // После записи в БД всё стираем
        this.clear();
    }

    render () {
        const { showList } = this.state;
        const listClasses = cn(
            s.list, 
            {[s.showList]: this.state.showList},
        );

        const mainRow = this.state.foodName ? this.state.foodName : 'Продукт не выбран';

        return (
            <div className={s.foodSearchBlock}>
                <div className={s.relative}>
                    <input  className={cn(s.inputs, s.searchArea)} 
                            type="text" 
                            placeholder="Начни вводить продукт" 
                            value={this.state.inpValue}
                            onChange={this.showHelper} />
                    <div className={listClasses}>
                        {this.state.list}
                    </div>
                </div>
                <div className={s.dataRows}>
                    <div className={cn(s.row, s.mainRow)}>
                        <h2>{mainRow}</h2>
                        <label>
                            <input  className={cn(s.inputs, s.number)} 
                                    type="number" 
                                    step="50"
                                    min="100"
                                    value={this.state.inpNumValue}
                                    onChange={this.calculateEPFC}
                                    disabled={this.state.disabled}/>
                                г
                        </label>
                    </div>
                    
                    <p className={s.row}>Калорийность <span>{this.state.energy} кКал</span></p>
                    <p className={s.row}>Белки <span>{this.state.protein} г</span></p>
                    <p className={s.row}>Жиры <span>{this.state.fat} г</span></p>
                    <p className={s.row}>Углеводы <span>{this.state.carbohydrate} г</span></p>
                </div>
                <div className={s.buttons}>
                    <button disabled={this.state.disabled} 
                            className={cn(s.btn, s.btnType2)}
                            onClick={this.clear}>
                            Сбросить
                    </button>
                    <button disabled={this.state.disabled} 
                            className={cn(s.btn, s.btnType1)}
                            onClick={this.write}> 
                            Записать в дневник
                    </button>
                </div>
            </div>
        )
    }
}