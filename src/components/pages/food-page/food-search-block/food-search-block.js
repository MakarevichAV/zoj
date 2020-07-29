import React, {Component} from 'react';
import s from "./food-search-block.module.css";
import ListItem from './list-item/list-item';
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

    // Получение выбранного продукта, подтягивается из <ListItem />
    // и запись в стэйт всех необходимых данных
    getFood = (id) => {
        const foodService = new FoodService();
        // Из фудСервиса берем функцию, которая возвращает все данные продукта
        const foodItem = foodService.getSelectedFood(id);
        this.setState({
            inpValue: '', // чистим инпут
            inpNumValue: 100, // устанавливаем 100 грамм по умолчанию
            showList: false,  // скрываем выплывающий список
            // записываем название продукта и значения КБЖУ
            foodName: foodItem.name,
            energy: foodItem.energy,
            protein: foodItem.protein,
            fat: foodItem.fat,
            carbohydrate: foodItem.carbohydrate,
            foodId: id, // записываем id продукта для дальнейшего обращения 
            disabled: false // делаем все заблокированные элементы рабочими
        })
    }

    // функция расчета КБЖУ при изменении граммов
    calculateEPFC = (e) => {
        // Обращаемся к фудСервису 
        const foodService = new FoodService();
        // По id из стэйта получаем из фудСервиса значения КБЖУ для расчетов
        const foodItem = foodService.getSelectedFood(this.state.foodId);
        // Расчитываем
        const energy = Math.round(foodItem.energy * e.target.value / 100);
        const protein = Math.round(foodItem.protein * e.target.value / 100);
        const fat = Math.round(foodItem.fat * e.target.value / 100);
        const carbohydrate = Math.round(foodItem.carbohydrate * e.target.value / 100);
        // И записываем в Стэйт
        this.setState({
            inpNumValue: e.target.value,
            energy: energy,
            protein: protein,
            fat: fat,
            carbohydrate: carbohydrate
        });
    }

    // Функция-обработчик для показа списка совпадений при печатанье в инпуте
    showList = (e) => {
        // Делаем инпут контроллируемым
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

    // Функция отчистки всех данных при нажатии на кнопку Сбросить
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

    // Функция записи данных в БД при нажатии на ЗАПИСАТЬ В ДНЕВНИК
    write = () => {
        console.log('Записать в базу данных');
        // После записи в БД всё стираем, вызывая функцию для отчистки
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
                            value={this.state.inpValue}  // контроллируемый инпут
                            onChange={this.showList} />
                    <div className={listClasses}>
                        {this.state.list}
                    </div>
                </div>
                <div className={s.dataRows}>
                    <div className={cn(s.row, s.mainRow)}>
                        <h2>{mainRow}</h2>
                        <label className={s.numGramm}>
                            <input  className={cn(s.inputs, s.number)} 
                                    type="number" 
                                    step="50"
                                    min="50"
                                    value={this.state.inpNumValue}
                                    onChange={this.calculateEPFC}
                                    disabled={this.state.disabled}/>г
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