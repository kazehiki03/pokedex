// expressモジュールを読み込む
const express = require('express');

// expressアプリを生成する
const app = express();

app.get('/', (req, res) => res.send('Hello Pokemon Trainer!'));

app.get('/pokemons', (req, res) => {
    const pokemons = {
        "pokemons": [{
                "number": 1,
                "name": "フシギダネ"
            },
            {
                "number": 2,
                "name": "フシギソウ"
            },
            {
                "number": 150,
                "name": "ミュウツー"
            },
            {
                "number": 151,
                "name": "ミュウ"
            }
        ]

    };

    // JSONを送信する
    res.json(pokemons);
});


// ポート3000でサーバを立てる
app.listen(3000, () => console.log('Listening on port 3000'));
