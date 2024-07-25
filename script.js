const equations = [
    'x = (-b ± √(b² - 4ac)) / 2a', // Quadratic Formula
    'y = mx + c',                   // Line Equation
    'E = mc²',                      // Einstein’s Equation
    'Φ = (1 + √5) / 2',            // Golden Ratio
    't = (p - s) / r',             // Time Prediction Formula
    'r = √(x² + y²)',             // Distance Formula
    'P = a² + b² = c²',            // Pythagorean Theorem
    'a = b / (1 + e^(-c(x - d)))', // Logistic Function
    'λ = h / p',                   // de Broglie Wavelength
    'Δy/Δx = f\'(x)',              // Derivative Formula
];

function getRandomEquation() {
    const randomIndex = Math.floor(Math.random() * equations.length);
    return equations[randomIndex];
}

document.getElementById('equation').innerText = getRandomEquation();
