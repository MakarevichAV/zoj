import waterReducer from '../reducers/waterReducer';
import {addGlass, delGlass} from '../actions/waterActions';

// Тест на увеличение значения sum (объема выпитой воды) на передаваемое в action значение
it('value of sum should be incremented by received value', () => {
    let state = {
        sum: 0.5,
        num: [300, 200]
    }
    let data = {
        sum: state.sum,
        val: 500,
        num: state.num
    };
    let action = addGlass(data);
    let newState = waterReducer(state, action);
    expect(newState.sum - state.sum).toBe(data.val / 1000);
});

// Тест на добавление в массив num (массив объемов стаканчиков) переданного в action значения
it('the last element of the num array should become the received value', () => {
    let state = {
        sum: 0.5,
        num: [300, 200]
    }
    let data = {
        sum: state.sum,
        val: 500,
        num: state.num
    };
    let action = addGlass(data);
    let newState = waterReducer(state, action);
    expect(newState.num[newState.num.length - 1]).toBe(data.val);
});

// Тест на уменьшение значения sum (объема выпитой воды) на передаваемое в action значение
it('value of sum should be decremented by received value', () => {
    let state = {
        sum: 0.5,
        num: [300, 200, 500]
    }
    let data = {
        sum: state.sum,
        val: 500,
        ind: 2,
        num: state.num
    };
    let action = delGlass(data);
    let newState = waterReducer(state, action);
    expect(state.sum - newState.sum).toBe(data.val / 1000);
});

 // Тест на удаление из массива элемента с индексом , переданным в action 
it('the last element of the num array should be deleted', () => {
    let state = {
        sum: 0.5,
        num: [300, 200, 500]
    }
    let data = {
        sum: state.sum,
        val: 500,
        ind: 2,
        num: state.num
    };
    let action = delGlass(data);
    let newState = waterReducer(state, action);
    expect(newState.num[newState.num.length - 1]).toBe(state.num[state.num.length - 2]);
});