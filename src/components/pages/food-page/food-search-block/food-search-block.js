import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ListItem from './list-item/list-item';
import {saveFoodItem} from '../../../../context/actions/foodActions';
import s from "./food-search-block.module.css";
import cn from 'classnames';
import axios from 'axios';

// Подключаем класс-сервис с хавчиком для работы с тестовыми данными
import FoodService from '../../../../services/food-service';
import Axios from 'axios';
const foodService = new FoodService();
const FoodSearchBlock = () => {
    
    const dispatch = useDispatch();
    const foodArr = useSelector(state => state.foodInfo.food);
    const [food, setFood] = useState({
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
    });
    const { list, inpVal,
            inpNumValue, showList,
            foodName, energy,
            protein, fat,
            carbohydrate, foodId,
            disabled
            } = food;

    // Получение выбранного продукта, подтягивается из <ListItem />
    // и запись в стэйт всех необходимых данных
    const getFood = (id) => {
        // Из фудСервиса берем функцию, которая возвращает все данные продукта
        const foodItem = foodService.getSelectedFood(id);
        setFood({
            ...food,
            inpVal: '',
            inpNumValue: 100,
            showList: false,
            foodName: foodItem.name,
            energy: foodItem.energy,
            protein: foodItem.protein,
            fat: foodItem.fat,
            carbohydrate: foodItem.carbohydrate,
            foodId: id,
            disabled: false
        });
    }

    // функция расчета КБЖУ при изменении граммов
    const calculateEPFC = (e) => {
        // По id из стэйта получаем из фудСервиса значения КБЖУ для расчетов
        const foodItem = foodService.getSelectedFood(foodId);
        // Расчитываем
        const energy = Math.round(foodItem.energy * e.target.value / 100);
        const protein = Math.round(foodItem.protein * e.target.value / 100);
        const fat = Math.round(foodItem.fat * e.target.value / 100);
        const carbohydrate = Math.round(foodItem.carbohydrate * e.target.value / 100);
        // И записываем в Стэйт
        setFood({
            ...food,
            inpNumValue: e.target.value,
            energy: energy,
            protein: protein,
            fat: fat,
            carbohydrate: carbohydrate
        });
    }

    // Функция-обработчик для показа списка совпадений при печатанье в инпуте
    const showDropList = async (e) => {
       
        const allFood = foodService.getAllFood();
        // Если введено не пустое значение
        if (e.target.value != '') {

            let foodItemData = await axios.get(`https://api.edamam.com/api/food-database/v2/parser?ingr=${e.target.value}&app_id=7795af92&app_key=1b2e03b9161e10e10516d5aa0e77a675`);
            foodItemData = foodItemData.data;
            console.log(foodItemData);
            console.log(food);
            setFood({
                ...food,
                inpValue: e.target.value,
                showList: false,
                foodName:  e.target.value,
                // energy: foo
            })
        } else { // а если значение пустое
            setFood({ // то отчищаем список и скрываем его
                ...food,
                list: '',  
                inpVal: e.target.value,
                showList: false 
            });
        }
    }

    // Функция отчистки при нажатии на СБРОСИТЬ
    const clear = () => {
        setFood({
            ...food,
            inpVal: '',
            inpNumValue: 100,
            showList: false,
            foodName: null,
            energy: null,
            protein: null,
            fat: null,
            carbohydrate: null,
            foodId: null,
            disabled: true
        });
    }

    // Функция записи данных в дневник при нажатии на ЗАПИСАТЬ В ДНЕВНИК
    const write = () => {
        dispatch(saveFoodItem({
            foodArr,
            inpNumValue,
            foodName, energy,
            protein, fat,
            carbohydrate
        }));
        clear();
    }


    
    const listClasses = cn(
        s.list, 
        {[s.showList]: showList},
    );
    
    const mainRow = foodName ? foodName : 'Продукт не выбран';
    

    return (
        <div className={s.foodSearchBlock}>
            <div className={s.relative}>
                <input  className={cn(s.inputs, s.searchArea)} 
                        type="text" 
                        placeholder="Начни вводить продукт" 
                        value={inpVal}
                        onChange={showDropList} />
                <div className={listClasses}>
                    {list}
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
                                value={inpNumValue}
                                onChange={calculateEPFC}
                                disabled={disabled}/>г
                    </label>
                </div>
                
                <p className={s.row}>Калорийность <span>{energy} кКал</span></p>
                <p className={s.row}>Белки <span>{protein} г</span></p>
                <p className={s.row}>Жиры <span>{fat} г</span></p>
                <p className={s.row}>Углеводы <span>{carbohydrate} г</span></p>
            </div>
            <div className={s.buttons}>
                <button disabled={disabled} 
                        className={cn(s.btn, s.btnType2)}
                        onClick={clear}>
                        Сбросить
                </button>
                <button disabled={disabled} 
                        className={cn(s.btn, s.btnType1)}
                        onClick={write}> 
                        Записать в дневник
                </button>
            </div>
        </div>
    )
    
}

export default FoodSearchBlock;