
const darkmatter = [
    {
        name: "암흑물질",
        description: "접근할 수 없는 위험한 곳",
        fuelUsage: 999,
        shipDamage: 999,
        x: 0,
        y: 0
    }
];

function createPlanetGrid() {
    const grid = [];
    for (let i = 0; i < 11; i++) {
        grid.push(new Array(11).fill(null));
    }

    planets.forEach(planet => {
        const { x, y } = planet;
        if (x >= 1 && x <= 9 && y >= 1 && y <= 9) {
            grid[x][y] = planet;
        }
    });

    for (let i = 0; i < 11; i++) {
        for (let j = 0; j < 11; j++) {
            if (grid[i][j] === null && (i === 0 || i === 10 || j === 0 || j === 10)) {
                grid[i][j] = darkmatter[0];
            }
        }
    }

    return grid;
}

const planetGrid = createPlanetGrid();

console.log(planetGrid);
