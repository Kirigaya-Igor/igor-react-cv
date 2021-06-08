const initialState = {
    items: {
        personalData: [
            {
                title: 'Name',
                content: 'Igor',
                id: 1
            },
            {
                title: 'Name',
                content: 'Igor',
                id: 2
            },
            {
                title: 'Name',
                content: 'Igor',
                id: 3
            },
            {
                title: 'Name',
                content: 'Igor',
                id: 4
            }
        ],
        education: [
            {
                title: 'Name',
                content: 'Lola',
                id: 3
            },
            {
                title: 'Name',
                content: 'Lola',
                id: 4
            }
        ]
    }
}

const res = Object.values(initialState.items).map(item => item.filter(item1 => item1.id !== 4));

// console.log(typeof(initialState.items.personalData));
// console.log(initialState.items.personalData);
// console.log(Object.keys(initialState.items));
console.log(res);