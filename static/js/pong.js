const canvas = document.getElementById("pongCanvas");
const ctx = canvas.getContext("2d");

// Configuración de elementos
const paddleWidth = 10, paddleHeight = 80;
let userY = (canvas.height - paddleHeight) / 2;
let computerY = (canvas.height - paddleHeight) / 2;
let ballX = canvas.width / 2, ballY = canvas.height / 2;
let ballDX = 5, ballDY = 5;

// Control de la paleta del usuario (Teclas W y S)
let upPressed = false, downPressed = false;
document.addEventListener("keydown", (e) => {
    if(e.key === "w" || e.key === "W") upPressed = true;
    if(e.key === "s" || e.key === "S") downPressed = true;
});
document.addEventListener("keyup", (e) => {
    if(e.key === "w" || e.key === "W") upPressed = false;
    if(e.key === "s" || e.key === "S") downPressed = false;
});

function drawRect(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}

function update() {
    // Movimiento usuario
    if(upPressed && userY > 0) userY -= 7;
    if(downPressed && userY < canvas.height - paddleHeight) userY += 7;

    // Movimiento pelota
    ballX += ballDX;
    ballY += ballDY;

    // Rebote superior/inferior
    if(ballY < 0 || ballY > canvas.height) ballDY = -ballDY;

    // IA Computadora (sigue la pelota)
    let computerSpeed = 4;
    if(computerY + paddleHeight/2 < ballY) computerY += computerSpeed;
    else computerY -= computerSpeed;

    // Colisión con paleta usuario (izquierda)
    if(ballX < paddleWidth && ballY > userY && ballY < userY + paddleHeight) {
        ballDX = -ballDX;
    }

    // Colisión con paleta computadora (derecha)
    if(ballX > canvas.width - paddleWidth && ballY > computerY && ballY < computerY + paddleHeight) {
        ballDX = -ballDX;
    }

    // Reiniciar si alguien pierde
    if(ballX < 0 || ballX > canvas.width) {
        ballX = canvas.width / 2;
        ballY = canvas.height / 2;
        ballDX = -ballDX;
    }
}

function render() {
    drawRect(0, 0, canvas.width, canvas.height, "#000"); // Fondo
    drawRect(0, userY, paddleWidth, paddleHeight, "#FFF"); // Usuario
    drawRect(canvas.width - paddleWidth, computerY, paddleWidth, paddleHeight, "#FFF"); // PC
    
    // Pelota
    ctx.beginPath();
    ctx.arc(ballX, ballY, 8, 0, Math.PI*2);
    ctx.fillStyle = "#0F0";
    ctx.fill();
    ctx.closePath();
}

function gameLoop() {
    update();
    render();
}

setInterval(gameLoop, 1000/60);