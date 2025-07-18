const canvas = document.getElementById("maze");
const ctx = canvas.getContext("2d");


const maze = [
    ['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1'],
  ['1','S','0','0','1','0','0','0','1','0','0','0','0','0','1'],
  ['1','1','1','0','1','0','1','0','1','0','1','1','1','0','1'],
  ['1','0','0','0','0','0','1','0','0','0','0','0','1','0','1'],
  ['1','0','1','1','1','0','1','1','1','1','1','0','1','0','1'],
  ['1','0','1','0','0','0','0','0','0','0','1','0','1','0','1'],
  ['1','0','1','0','1','1','1','1','1','0','1','0','1','0','1'],
  ['1','0','0','0','1','0','0','0','1','0','0','0','1','0','1'],
  ['1','1','1','0','1','0','1','0','1','1','1','0','1','0','1'],
  ['1','0','0','0','0','0','1','0','0','0','1','0','0','0','1'],
  ['1','0','1','1','1','0','1','1','1','0','1','1','1','0','1'],
  ['1','0','1','0','0','0','0','0','1','0','0','0','1','0','1'],
  ['1','0','1','0','1','1','1','0','1','1','1','0','1','0','1'],
  ['1','0','0','0','1','0','0','0','0','0','E','0','0','0','1'],
  ['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1'],
];

const cellSize = 32;
let player = { x: 1, y: 1 }; 

function drawMaze() {
  for (let y = 0; y < maze.length; y++) {
    for (let x = 0; x < maze[y].length; x++) {
      if (maze[y][x] === "1") {
        ctx.fillStyle = "#0f0";
        ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
      } else if (maze[y][x] === "E") {
        ctx.fillStyle = "red";
        ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
      } else {
        ctx.fillStyle = "#111";
        ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
      }
    }
  }
  
  ctx.fillStyle = "cyan";
  ctx.fillRect(player.x * cellSize, player.y * cellSize, cellSize, cellSize);
}

function move(dx, dy) {
  const newX = player.x + dx;
  const newY = player.y + dy;
  if (maze[newY][newX] !== "1") {
    player.x = newX;
    player.y = newY;
    if (maze[newY][newX] === "E") {
      document.getElementById("message").textContent = "Cliquez sur la flèche droite pour continuer";
      document.getElementById("message").style.color = "lime";
      setTimeout(() => {
        window.location.href = "fin.html";
      }, 2000);
    }
  }
  drawMaze();
}

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp": move(0, -1); break;
    case "ArrowDown": move(0, 1); break;
    case "ArrowLeft": move(-1, 0); break;
    case "ArrowRight": move(1, 0); break;
  }
});

drawMaze();
