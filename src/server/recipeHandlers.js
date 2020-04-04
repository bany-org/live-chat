const recipes = [
    {
        id: 1,
        generalData: {
            author: 'Magda Gessler',
            name: 'Domowa pizza',
            time: '1h',
            people: '4',
            type: 'fastfood',
        },
        recipeMain: {
            ingredients: [
                {
                    name: 'świeże drożdże',
                    quantity: '25',
                    unit: 'g',
                },
                {
                    name: 'ciepła woda',
                    quantity: '150',
                    unit: 'ml',
                },
                {
                    name: 'cukier',
                    quantity: '5',
                    unit: 'g',
                },
                {
                    name: 'mąka pszenna',
                    quantity: '250',
                    unit: 'g',
                },
                {
                    name: 'sól',
                    quantity: '5',
                    unit: 'g',
                },
                {
                    name: 'oliwa',
                    quantity: '5',
                    unit: 'ml',
                },
            ],
            preparation: {
                1: 'Świeże drożdże ocieplić w temperaturze pokojowej. Przygotować rozczyn: drożdże rozpuścić w ciepłej wodzie, dodać 2 łyżki mąki oraz cukier, dokładnie wymieszać i odstawić na ok. 10 minut do wyrośnięcia (rozczyn ze świeżych drożdży zwiększa objętość o ok. 3 razy - jeśli tak się nie stanie proces przygotowania rozczynu trzeba powtórzyć od nowa, natomiast rozczyn z drożdży instant może się tylko trochę spienić).',
                2: 'Mąkę przesiać do miski, wymieszać z solą, zrobić wgłębienie w środku i wlać w nie rozczyn. Sukcesywnie zagarniać łyżką mąkę do środka i przez 2 - 3 minuty mieszać składniki, pod koniec dodając jeszcze oliwę.',
                3: 'Połączone składniki wyłożyć na stolnicę oprószoną mąką. Wyrabiać przez ok. 15 minut aż ciasto będzie elastyczne i gładkie (ciasto można też zagnieść mikserem planetarnym)',
                4: 'Wyrobione ciasto włożyć do dużej miski, przykryć ściereczką i odstawić na ok. 1 godzinę do wyrośnięcia',
                5: 'Wyrośnięte ciasto wyjąć na stolnicę i chwilę pozagniatać. Podzielić na 2 części, uformować z nich kulki i odłożyć na ok. 7 minut pod ściereczką.',
                6: 'Blaszki (tortownice) posmarować oliwą. Włożyć na środek kulkę ciasta, delikatnie spłaszczyć i rozciągać, rozprowadzając palcami po całej powierzchni dna, zaczynając od środka i zostawiając niewielki "wałeczek" na brzegu (zob. zdjęcia poniżej). UWAGA: najlepiej robić to kilkoma etapami, ciasto na początku sprężynuje i "cofa się" ale jeśli odczekamy chwilę będziemy mogli je dalej rozciągać.',
                7: 'Wyłożyć cienką warstwę SOSU POMIDOROWEGO, ser* oraz ulubione dodatki. Odczekać ok. 15 minut aż ciasto podrośnie, następnie piec w maksymalnie nagrzanym piekarniku (min. 250 st. C) przez ok. 10 minut.',
            },
        },
    },
    {
        id: 2,
        generalData: {
            author: 'Jakub Banasiak',
            name: 'Jabłecznik z bezą',
            time: '1,5h',
            people: '8',
            type: 'ciasto',
        },
        recipeMain: {
            ingredients: [
                {
                    name: 'świeże drożdże',
                    quantity: '25',
                    unit: 'g',
                },
                {
                    name: 'ciepła woda',
                    quantity: '150',
                    unit: 'ml',
                },
                {
                    name: 'cukier',
                    quantity: '5',
                    unit: 'g',
                },
            ],
            preparation: {
                1: 'Świeże drożdże ocieplić w temperaturze pokojowej. Przygotować rozczyn: drożdże rozpuścić w ciepłej wodzie, dodać 2 łyżki mąki oraz cukier, dokładnie wymieszać i odstawić na ok. 10 minut do wyrośnięcia (rozczyn ze świeżych drożdży zwiększa objętość o ok. 3 razy - jeśli tak się nie stanie proces przygotowania rozczynu trzeba powtórzyć od nowa, natomiast rozczyn z drożdży instant może się tylko trochę spienić).',
                2: 'Mąkę przesiać do miski, wymieszać z solą, zrobić wgłębienie w środku i wlać w nie rozczyn. Sukcesywnie zagarniać łyżką mąkę do środka i przez 2 - 3 minuty mieszać składniki, pod koniec dodając jeszcze oliwę.',
                3: 'Połączone składniki wyłożyć na stolnicę oprószoną mąką. Wyrabiać przez ok. 15 minut aż ciasto będzie elastyczne i gładkie (ciasto można też zagnieść mikserem planetarnym)',
                4: 'Wyrobione ciasto włożyć do dużej miski, przykryć ściereczką i odstawić na ok. 1 godzinę do wyrośnięcia',
            },
        },
    },
];

module.export.lookForRecipe = function (id) {
    // We access the ID param on the request object
    // var recipeId = req.params.id;

    return recipes[id];
};
