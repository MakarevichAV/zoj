export default class FoodService {

    _food = [
		{
			id: 1,
			name: 'Каша овсянная на молоке [TEST DATA]',
			energy: 150,
			protein: 15,
			fat: 8,
			carbohydrate: 14
		},
		{
            id: 2,
			name: 'Гречка отварная [TEST DATA]',
			energy: 140,
			protein: 10,
			fat: 8,
			carbohydrate: 18
        },
        {
            id: 3,
			name: 'Творог 5% [TEST DATA]',
			energy: 130,
			protein: 20,
			fat: 5,
			carbohydrate: 12
        },
        {
            id: 4,
			name: 'Суп куриный [TEST DATA]',
			energy: 120,
			protein: 16,
			fat: 7,
			carbohydrate: 13
        },
        {
            id: 5,
			name: 'Хлеб ржанной [TEST DATA]',
			energy: 120,
			protein: 4,
			fat: 2,
			carbohydrate: 18
        },
        {
            id: 6,
			name: 'Мороженое [TEST DATA]',
			energy: 200,
			protein: 25,
			fat: 15,
			carbohydrate: 15
        },
        {
            id: 7,
			name: 'Котлета рыбная [TEST DATA]',
			energy: 145,
			protein: 23,
			fat: 15,
			carbohydrate: 17
        },
        {
            id: 8,
			name: 'Котлета свинина+говядина [TEST DATA]',
			energy: 160,
			protein: 26,
			fat: 17,
			carbohydrate: 16
        },
        {
            id: 9,
			name: 'Салат овощной с оливковым маслом [TEST DATA]',
			energy: 100,
			protein: 5,
			fat: 4,
			carbohydrate: 10
        },
        {
            id: 10,
			name: 'Пироженое наполеон [TEST DATA]',
			energy: 190,
			protein: 20,
			fat: 18,
			carbohydrate: 10
        }
	];

	getAllFood = () => {
		return this._food;
	};

	
	getSelectedFood = (id) => {
		let farther = true;
		let foodItem;
		for (let i = 0; farther && i < this._food.length; i++) {
			if (this._food[i].id == id) {
				farther = false;
				foodItem = this._food[i];
			}
		}
		return foodItem;
	}

}