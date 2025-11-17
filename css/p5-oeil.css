var y1 = 110, y2 = 190;
var canvasOeil;
var isStop = false, isCornee = false, isIris = false, isCristallin = false, isRetine = false, isFin = false;
var animationActive = false;
var trail1 = [];
var trail2 = [];

function setup() {
    canvasOeil = createCanvas(450, 300);
    canvasOeil.parent("#oeil");

    path1 = createVector(0, y1);
    path2 = createVector(0, y2);

    lentille = createVector(200, 200);
    lentille2 = createVector(400, 200);

    isStop = false;
    isCornee = false;
    isIris = false;
    isCristallin = false;
    isRetine = false;
    isFin = false;
    animationActive = false;
    trail1 = [];
    trail2 = [];
    updateStatus();
}

function draw() {
    fill('#F0F1EB');
    noStroke();
    rect(0, 0, width, height);

    // Cornée
    stroke('lightgreen');
    strokeWeight(3);
    noFill();
    for (let i = 0; i < 8; i++) {
        arc(150 + i, 150, 120, 220, PI / 2 + 0.2, -PI / 2 - 0.2);
    }

    // Iris
    stroke('black');
    strokeWeight(2);
    line(169, 50, 169, 120);
    line(170, 50, 170, 120);
    line(169, 180, 169, 250);
    line(170, 180, 170, 250);

    // Cristallin
    noStroke();
    fill('lightblue');
    ellipse(225, 150, 20, 200);

    // Rétine
    noFill();
    stroke('red');
    strokeWeight(2);
    arc(315, 150, 100, 200, -PI / 2 + 0.1, PI / 2 - 0.1);

    // Trajet lumineux (ligne reliant les points)
    stroke('rgba(255, 165, 0, 0.3)');
    strokeWeight(1);
    line(path1.x, path1.y, path2.x, path2.y);

    // Rayon lumineux
    fill('orange');
    noStroke();
    ellipse(path1.x, path1.y, 4, 4);
    ellipse(path2.x, path2.y, 4, 4);

    if (mouseIsPressed && !isStop) {
        animationActive = true;
        updateStatus();

        if (isFin) {
            resetAnimation();
            return;
        }

        path1.add(2, 0);
        path2.add(2, 0);
        
        // Ajouter à la traînée
        trail1.push(path1.copy());
        trail2.push(path2.copy());
        
        // Dessiner la traînée
        stroke('rgba(255, 165, 0, 0.6)');
        strokeWeight(2);
        for (let i = 0; i < trail1.length - 1; i++) {
            let alpha = map(i, 0, trail1.length, 0, 0.6);
            stroke(`rgba(255, 165, 0, ${alpha})`);
            line(trail1[i].x, trail1[i].y, trail1[i + 1].x, trail1[i + 1].y);
        }
        for (let i = 0; i < trail2.length - 1; i++) {
            let alpha = map(i, 0, trail2.length, 0, 0.6);
            stroke(`rgba(255, 165, 0, ${alpha})`);
            line(trail2[i].x, trail2[i].y, trail2[i + 1].x, trail2[i + 1].y);
        }

        if (path1.x > 95) {
            path1.add(-1, 0.2);
            path2.add(-1, -0.2);
            if (!isCornee) {
                isStop = true;
                isCornee = true;
                showAlert('cornee', '🔍 Cornée', 'La lumière traverse la cornée qui se comporte comme une lentille convergente.');
            }
        }

        if (path1.x > 165) {
            if (!isIris) {
                isStop = true;
                isIris = true;
                hideAlert('cornee');
                showAlert('iris', '👁️ Iris', 'La taille de l\'iris s\'adapte à la quantité de lumière. Plus il y a de lumière, plus il sera petit.');
            }
        }

        if (path1.x > 215) {
            path1.add(0, -0.1);
            path2.add(0, 0.1);
            if (!isCristallin) {
                isStop = true;
                isCristallin = true;
                hideAlert('iris');
                showAlert('cristallin', '🔬 Cristallin', 'Le cristallin fait office de seconde lentille biconvexe. Sa courbure peut être modifiée pour la mise au point.');
            }
        }

        if (path1.x > 365) {
            if (!isRetine) {
                isStop = true;
                isRetine = true;
                hideAlert('cristallin');
                showAlert('retine', '🎯 Rétine', 'La lumière se focalise sur la rétine dans une zone appelée fovéa où l\'acuité visuelle est maximale.');
            }
            path1.add(-1, -0.1);
            path2.add(-1, 0);
        }
    }

    if (!mouseIsPressed) {
        isStop = false;
        if (animationActive) {
            updateStatus();
            animationActive = false;
        }
        if (isCornee && isIris && isCristallin && isRetine) {
            isFin = true;
            updateStatus();
        }
    }
    
    // Dessiner la traînée même quand la souris n'est pas pressée
    stroke('rgba(255, 165, 0, 0.6)');
    strokeWeight(2);
    for (let i = 0; i < trail1.length - 1; i++) {
        let alpha = map(i, 0, trail1.length, 0, 0.6);
        stroke(`rgba(255, 165, 0, ${alpha})`);
        line(trail1[i].x, trail1[i].y, trail1[i + 1].x, trail1[i + 1].y);
    }
    for (let i = 0; i < trail2.length - 1; i++) {
        let alpha = map(i, 0, trail2.length, 0, 0.6);
        stroke(`rgba(255, 165, 0, ${alpha})`);
        line(trail2[i].x, trail2[i].y, trail2[i + 1].x, trail2[i + 1].y);
    }
}

function showAlert(id, title, message) {
    const alert = `<div class="alert alert-info alert-dismissible" role="alert">
        <strong>${title}</strong><br>${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    </div>`;
    document.getElementById(id).innerHTML = alert;
    
    // Highlight la section correspondante
    removeAllHighlights();
    const infoMap = {
        'cornee': 'info-cornee',
        'iris': 'info-iris',
        'cristallin': 'info-cristallin',
        'retine': 'info-retine'
    };
    if (infoMap[id]) {
        document.getElementById(infoMap[id]).classList.add('active');
    }
}

function hideAlert(id) {
    setTimeout(() => {
        document.getElementById(id).innerHTML = '';
    }, 1000);
}

function removeAllHighlights() {
    ['info-cornee', 'info-iris', 'info-cristallin', 'info-retine'].forEach(id => {
        document.getElementById(id).classList.remove('active');
    });
}

function resetAnimation() {
    if (canvasOeil) {
        canvasOeil.remove();
    }
    ['cornee', 'iris', 'cristallin', 'retine'].forEach(id => {
        document.getElementById(id).innerHTML = '';
    });
    removeAllHighlights();
    setup();
}

function updateStatus() {
    const status = document.getElementById('status');
    if (isFin) {
        status.textContent = '✅ Animation complète ! Cliquez sur "Recommencer" pour rejouer.';
    } else if (animationActive) {
        status.textContent = '▶️ Animation en cours... Maintenez la souris enfoncée.';
    } else {
        status.textContent = '⏸️ Cliquez et maintenez pour lancer l\'animation.';
    }
}

// Créer des div pour les alertes
['cornee', 'iris', 'cristallin', 'retine'].forEach(id => {
    const div = document.createElement('div');
    div.id = id;
    document.body.appendChild(div);
});

setup();
