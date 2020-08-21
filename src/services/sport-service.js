const TrainingService = () => {

    _trainings = [
		{
			id: 1,
			name: 'Бег 6-7 мин/км',
			energy: 620
		},
		{
            id: 2,
			name: 'Бег 5-6 мин/км',
			energy: 780
        },
        {
            id: 3,
			name: 'Аэробика',
			energy: 350
        },
        {
            id: 4,
			name: 'Ходьба 4км/ч',
			energy: 200
        },
        {
            id: 5,
			name: 'Ходьба 5км/ч',
			energy: 260
        },
        {
            id: 6,
			name: 'Ходьба 6км/ч',
			energy: 320
        },
        {
            id: 7,
			name: 'Умственная деятельность',
			energy: 70
        },
        {
            id: 8,
			name: 'Сон',
			energy: 35
        },
        {
            id: 9,
			name: '',
			energy: 320
        },
	];

	// getAllTraining = () => {
	// 	return this._food;
    // };
    
    getMatchList = (phrase) => {
         
    }

	
	getSelectedTraining = (id) => {
		let farther = true;
		let foodItem;
		for (let i = 0; farther && i < this._food.length; i++) {
			if (this._food[i].id === id) {
				farther = false;
				foodItem = this._food[i];
			}
		}
		return foodItem;
	}

}

export default TrainingService;