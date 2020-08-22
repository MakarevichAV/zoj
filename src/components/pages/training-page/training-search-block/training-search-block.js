import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ListItem from './list-item/list-item';
import {saveFoodItem, findFoodSuggestions, calculateEPFC, clearCurrentFoodItem} from '../../../../context/actions/foodActions';
import {setCurrentFoodItem} from "../../../../context/actions/foodActions";
import s from "./training-search-block.module.css";
import cn from 'classnames';

// Подключаем класс-сервис с хавчиком для работы с тестовыми данными
const TrainingSearchBlock = () => {
    
    const dispatch = useDispatch();
    // const searchSuggestions = useSelector(state => state.foodInfo.searchSuggestions);
    // const currentFoodItem = useSelector(state => state.foodInfo.currentFoodItem);

    const [training, setTraining] = useState({
        list: '',
        inpVal: '',
        inpNumValue: 100,
        showList: false,
        name: '',
        energy: 0,
        protein: 0,
        fat: 0,
        carbs: 0,
        disabled: true
    });
    const { list, inpVal, inpNumValue, showList, disabled, name, energy, protein, fat, carbs} = training;
    
    // const setCurrent = (item) => {
    //     dispatch(setCurrentFoodItem(item));
    //     setFood({
    //         ...food,
    //         disabled: false
    //     });
    // }

    // useEffect(() => {
    //     if (currentFoodItem)  {
    //         setFood({
    //             ...food,
    //             inpVal: '',
    //             showList: false,
    //             name: currentFoodItem.name,
    //             energy: currentFoodItem.energy,
    //             protein: currentFoodItem.protein,
    //             fat: currentFoodItem.fat,
    //             carbs: currentFoodItem.carbs
    //         })
    //     }

    //     if (searchSuggestions && !currentFoodItem) {
    //         const suggestions =  searchSuggestions[0];
    //         const names = [];
    //         if (suggestions) {
    //             suggestions.forEach((food, index) => {
    //                 if (food && food.food) {
    //                     const item = food.food;
    //                     names.push(<ListItem key={index} id={item.foodId} listItemValue={item.label} item={item} brand={item.brand} onSetCurrent={setCurrent}/>);
    //                 }
    //             });
    //             setFood({
    //                 ...food,
    //                 showList: true,
    //                 list: names
    //             });
    //         }
    //     }
    // }, [currentFoodItem, searchSuggestions]);

    // Функция отчистки при нажатии на СБРОСИТЬ
    const clear = () => {
        // dispatch(clearCurrentFoodItem());
        setTraining({
            ...training,
            inpVal: '',
            inpNumValue: 100,
            name: '',
            showList: false,
            foodName: null,
            energy: 0,
            protein: 0,
            fat: 0,
            carbs: 0,
            disabled: true
        });
    }

    const showDropList = (e) => {
        e.preventDefault();
        clear();
        if (training.inpVal !== '') {
            // dispatch(findFoodSuggestions(food.inpVal));
            setTraining({
                ...training,
                showList: true,
            });
        } else {
            setTraining({
                ...training,
                list: '',
                showList: false,
            });
        }
    }

    // const calcEPFC = e => {
    //     const tariningItem = {
    //         weight : e.target.value,
    //         trainingItem: currentTrainingItem
    //     }
    //     dispatch(calculateEPFC(foodItem));
    //     setFood({
    //         ...training,
    //         inpNumValue: e.target.value,
    //         energy: currentTrainingItem.energy,
    //     });
    // }

    const typeSearchValue = (e) => {
        if (e.target.value === '') {
            setTraining({
                ...training,
                inpVal: '',
                list: '',
                showList: false,
            });
        } else {
            setTraining({...training, inpVal: e.target.value})
        }
    }

    // // Функция записи данных в дневник при нажатии на ЗАПИСАТЬ В ДНЕВНИК
    // const write = () => {
    //     dispatch(saveFoodItem({
    //         inpNumValue,
    //         name, energy,
    //         protein, fat,
    //         carbs
    //     }));
    //     clear();
    // }
    
    const listClasses = cn(
        s.list, 
        {[s.showList]: showList},
    );
    
    const mainRow = name ? name : 'Ничего не выбрано';
    
    let resList;
    if (list) {
        if (list.length === 0) {
            resList = <p className={s.emptyList}>Ничего не найдено</p>;    
        } else {
            resList = list;
        }
    } else {
        resList = <div className={s.preloader}></div>
    }

    return (
        <div className={s.trainingSearchBlock}>
            <form className={s.relative}>
                <input  className={cn(s.inputs, s.searchArea)} 
                        type="text" 
                        placeholder="Вид деятельности" 
                        value={inpVal}
                        onChange={typeSearchValue}
                        onKeyPress={e => e.key === 'Enter' ? showDropList : 0 }
                />
                <button type="submit" onClick={showDropList} className={cn(s.btnType1,s.searchBtn)}>Поиск</button>
                <div className={listClasses}>
                    { resList }
                </div>
            </form>
            <div className={s.dataRows}>
                <div className={cn(s.row, s.mainRow)}>
                    <h2>{mainRow}</h2>
                    <label className={s.numGramm}>
                        <input  className={cn(s.inputs, s.number)} 
                                type="number" 
                                step="5"
                                min="10"
                                value={inpNumValue}
                                // onChange={calcEPFC}
                                disabled={disabled}/>мин
                    </label>
                </div>
                
                <p className={s.row}>Калорийность <span>{energy} кКал</span></p>

            </div>
            <div className={s.buttons}>
                <button disabled={disabled} 
                        className={cn(s.btn, s.btnType2)}
                        onClick={clear}>
                        Сбросить
                </button>
                <button disabled={disabled} 
                        className={cn(s.btn, s.btnType1)}
                        // onClick={write}
                        >
                        Записать в дневник
                </button>
            </div>
        </div>
    )
}

export default TrainingSearchBlock;