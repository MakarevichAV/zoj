import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ListItem from './list-item/list-item';
import {saveFoodItem, findFoodSuggestions, calculateEPFC, clearCurrentFoodItem} from '../../../../context/actions/foodActions';
import s from "./food-search-block.module.css";
import cn from 'classnames';

// Подключаем класс-сервис с хавчиком для работы с тестовыми данными
const FoodSearchBlock = () => {
    
    const dispatch = useDispatch();
    const searchSuggestions = useSelector(state => state.foodInfo.searchSuggestions);
    const currentFoodItem = useSelector(state => state.foodInfo.currentFoodItem);

    const [food, setFood] = useState({
        list: '',
        inpValue: '',
        inpNumValue: 100,
        showList: false,
        name: '',
        energy: 0,
        protein: 0,
        fat: 0,
        carbs: 0
    });
    const { list, inpVal, inpNumValue, showList, disabled, name, energy, protein, fat, carbs} = food;

    useEffect(() => {
        if (currentFoodItem)  {
            setFood({
                ...food,
                showList: false,
                name: currentFoodItem.name,
                energy: currentFoodItem.energy,
                protein: currentFoodItem.protein,
                fat: currentFoodItem.fat,
                carbs: currentFoodItem.carbs
            })
        }
    },currentFoodItem)

    const showDropList = e => {
        if (e.target.value != '' && e.target.value.length > 3) {
            dispatch(findFoodSuggestions(e.target.value));
            const suggestions =  searchSuggestions[0];
            const names = [];
            console.log( suggestions);
            if (suggestions && suggestions.length === 4) {
                suggestions.forEach(food => {
                    if (food && food.food) {
                        const item = food.food;
                        names.push(<ListItem key={item.foodId} id={item.foodId} listItemValue={item.label} item={item}/>);
                    } else {
                        return
                    }
                })
                setFood({
                    ...food,
                    inpVal: e.target.value,
                    showList: true,
                    list: names
                });
            }
        } else {
            setFood({
                ...food,
                list: '',
                inpVal: e.target.value,
                showList: false
            });
        }
    }

    const calcEPFC = e => {
        console.log(currentFoodItem);
        const foodItem = {
            weight : e.target.value,
            foodItem: currentFoodItem
        }
        dispatch(calculateEPFC(foodItem));
        setFood({
            ...food,
            inpNumValue: e.target.value,
            energy: currentFoodItem.energy,
            protein: currentFoodItem.protein,
            fat: currentFoodItem.fat,
            carbs: currentFoodItem.carbs
        });
    }

    // Функция отчистки при нажатии на СБРОСИТЬ
    const clear = () => {
        dispatch(clearCurrentFoodItem());
        setFood({
            ...food,
            inpVal: '',
            inpNumValue: 100,
            name: '',
            showList: false,
            foodName: null,
            energy: 0,
            protein: 0,
            fat: 0,
            carbs: 0,
        });
    }

    // Функция записи данных в дневник при нажатии на ЗАПИСАТЬ В ДНЕВНИК
    const write = () => {
        dispatch(saveFoodItem({
            inpNumValue,
            name, energy,
            protein, fat,
            carbs
        }));
        clear();
    }
    
    const listClasses = cn(
        s.list, 
        {[s.showList]: showList},
    );
    
    const mainRow = name ? name : 'Продукт не выбран';

    return (
        <div className={s.foodSearchBlock}>
            <div className={s.relative}>
                <input  className={cn(s.inputs, s.searchArea)} 
                        type="text" 
                        placeholder="Начни вводить продукт" 
                        value={inpVal}
                        onChange={showDropList}
                />
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
                                onChange={calcEPFC}
                                disabled={disabled}/>г
                    </label>
                </div>
                
                <p className={s.row}>Калорийность <span>{energy} кКал</span></p>
                <p className={s.row}>Белки <span>{protein} г</span></p>
                <p className={s.row}>Жиры <span>{fat} г</span></p>
                <p className={s.row}>Углеводы <span>{carbs} г</span></p>
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