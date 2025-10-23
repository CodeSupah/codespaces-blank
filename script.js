const exercises = {
    beginner: {
        endurance: [
            { name: "Basic Bounce", duration: "30 seconds", intensity: "Low", description: "Jump with both feet, keeping jumps low and land softly." },
            { name: "Rest", duration: "30 seconds", intensity: "Recovery" },
            { name: "Boxer Step", duration: "30 seconds", intensity: "Low", description: "Shift weight from one foot to another, stay light." },
            { name: "Rest", duration: "30 seconds", intensity: "Recovery" },
            { name: "Alternate Foot Step", duration: "30 seconds", intensity: "Medium", description: "Jump from foot to foot, like running in place." },
            { name: "Rest", duration: "30 seconds", intensity: "Recovery" },
            { name: "Side Swing", duration: "30 seconds", intensity: "Low", description: "Swing the rope side-to-side, no jumping." },
            { name: "Rest", duration: "30 seconds", intensity: "Recovery" },
            { name: "Heel-Toe Step", duration: "30 seconds", intensity: "Medium", description: "Tap heel forward, toe back, alternate feet." },
            { name: "Rest", duration: "30 seconds", intensity: "Recovery" },
            { name: "Shadow Jump", duration: "30 seconds", intensity: "Low", description: "No rope, mimic jump rope motion." }
        ],
        speed: [
            { name: "Basic Intervals", duration: "30 seconds", intensity: "Low", description: "30s jump, 30s rest. Repeat for 5 rounds." },
            { name: "Rest", duration: "30 seconds", intensity: "Recovery" }
        ],
        mixed: [
            { name: "Basic Bounce", duration: "30 seconds", intensity: "Low" },
            { name: "Boxer Step", duration: "30 seconds", intensity: "Low" },
            { name: "Alternate Foot Step", duration: "30 seconds", intensity: "Medium" },
            { name: "Heel-Toe Step", duration: "30 seconds", intensity: "Medium" },
            { name: "Shadow Jump", duration: "30 seconds", intensity: "Low" }
        ]
    },
    intermediate: {
        endurance: [
            { name: "High Knees Jump Rope", duration: "30 seconds", intensity: "High", description: "Knees up toward waist each jump." },
            { name: "Rest", duration: "20 seconds", intensity: "Recovery" },
            { name: "Double Unders (Intro)", duration: "30 seconds", intensity: "High", description: "Spin rope twice per jump, as able." },
            { name: "Rest", duration: "20 seconds", intensity: "Recovery" },
            { name: "Criss-Cross", duration: "30 seconds", intensity: "Medium", description: "Cross/uncross arms in front during jump." },
            { name: "Rest", duration: "20 seconds", intensity: "Recovery" },
            { name: "Side-to-Side Hops", duration: "30 seconds", intensity: "High", description: "Jump left/right laterally each swing." },
            { name: "Rest", duration: "20 seconds", intensity: "Recovery" },
            { name: "Forward-Backward Jumps", duration: "30 seconds", intensity: "Medium", description: "Jump forward then back per swing." },
            { name: "Rest", duration: "20 seconds", intensity: "Recovery" },
            { name: "Running Step", duration: "30 seconds", intensity: "High", description: "Alternate feet quickly, like sprinting in place." }
        ],
        speed: [
            { name: "Tabata Jump Rope", duration: "20 seconds", intensity: "High", description: "Jump fast 20s, rest 10s (repeat 8x)." },
            { name: "Rest", duration: "10 seconds", intensity: "Recovery" }
        ],
        mixed: [
            { name: "Running Step", duration: "30 seconds", intensity: "High" },
            { name: "Side-to-Side Hops", duration: "30 seconds", intensity: "High" },
            { name: "Double Unders (Intro)", duration: "30 seconds", intensity: "High" },
            { name: "Criss-Cross", duration: "30 seconds", intensity: "Medium" }
        ]
    },
    advanced: {
        endurance: [
            { name: "Continuous Double Unders", duration: "40 seconds", intensity: "Very High", description: "Multiple double unders in a row." },
            { name: "Rest", duration: "20 seconds", intensity: "Recovery" },
            { name: "Triple Unders", duration: "20 seconds", intensity: "Extreme", description: "Three rope passes per jump." },
            { name: "Rest", duration: "20 seconds", intensity: "Recovery" },
            { name: "Side Swing Cross Combo", duration: "30 seconds", intensity: "High", description: "2 side swings, 1 criss-cross, repeat." },
            { name: "Rest", duration: "15 seconds", intensity: "Recovery" },
            { name: "EB Cross (Arm Behind Back)", duration: "20 seconds", intensity: "High", description: "Cross one arm behind back, jump, switch." },
            { name: "Rest", duration: "20 seconds", intensity: "Recovery" },
            { name: "Double Side Swing into Jump", duration: "30 seconds", intensity: "High", description: "2 swings on one side, then jump through." },
            { name: "Rest", duration: "20 seconds", intensity: "Recovery" },
            { name: "Boxer Shuffle with Double Unders", duration: "40 seconds", intensity: "Very High", description: "Boxer step mixed with double unders." }
        ],
        speed: [
            { name: "Weighted Rope HIIT", duration: "40 seconds", intensity: "Extreme", description: "Use heavy rope, 40s jump, 20s rest, repeat." },
            { name: "Rest", duration: "20 seconds", intensity: "Recovery" }
        ],
        mixed: [
            { name: "Freestyle Trick Flow", duration: "40 seconds", intensity: "Hard", description: "Combine crosses, swings, direction changes." },
            { name: "Triple Unders", duration: "20 seconds", intensity: "Extreme" },
            { name: "EB Cross (Arm Behind Back)", duration: "20 seconds", intensity: "High" }
        ]
    }
};

const bodyweightExercises = [
    { name: "Push Ups", duration: "30 seconds", intensity: "High" },
    { name: "Sit Ups", duration: "30 seconds", intensity: "Medium" },
    { name: "Plank", duration: "45 seconds", intensity: "Medium" },
    { name: "Squats", duration: "30 seconds", intensity: "Medium" },
    { name: "Lunges", duration: "30 seconds", intensity: "Medium" },
    { name: "Mountain Climbers", duration: "30 seconds", intensity: "High" },
    { name: "Burpees", duration: "20 seconds", intensity: "High" }
];

const gymExercises = [
    { name: "Dumbbell Press", duration: "30 seconds", intensity: "High" },
    { name: "Pull Ups", duration: "30 seconds", intensity: "High" },
    { name: "Barbell Rows", duration: "30 seconds", intensity: "Medium" },
    { name: "Kettlebell Swings", duration: "30 seconds", intensity: "High" },
    { name: "Cable Flys", duration: "30 seconds", intensity: "Medium" },
    { name: "Leg Press", duration: "40 seconds", intensity: "High" }
];

// Global variables
let currentWorkout = null;
let timerInterval = null;
let currentExerciseIndex = 0;
let remainingTime = 0;
let isPaused = false;
let pendingReplaceIndex = null;

function generateWorkout() {
    const fitnessLevel = document.getElementById('fitness-level').value;
    const duration = parseInt(document.getElementById('duration').value);
    const focus = document.getElementById('focus').value;
    const workoutType = document.getElementById('workout-type').value;
    const rounds = parseInt(document.getElementById('rounds').value);
    const restTime = parseInt(document.getElementById('rest-time').value);
    const ropeType = document.getElementById('rope-type').value;

    const exerciseSet = exercises[fitnessLevel][focus];

    let workout = [];
    for (let round = 1; round <= rounds; round++) {
        if (workoutType === "jump-rope-only") {
            exerciseSet.forEach(exercise => {
                let ex = { round, ...exercise };
                if (ex.name === "Rest") ex.duration = restTime + " seconds";
                workout.push(ex);
            });
        } else {
            exerciseSet.forEach(exercise => {
                let ex = { round, ...exercise };
                if (ex.name === "Rest") ex.duration = restTime + " seconds";
                workout.push(ex);
                if (exercise.name !== "Rest") {
                    let crossExercise = null;
                    if (workoutType === "bodyweight") {
                        crossExercise = bodyweightExercises[Math.floor(Math.random() * bodyweightExercises.length)];
                    } else if (workoutType === "gym") {
                        crossExercise = gymExercises[Math.floor(Math.random() * gymExercises.length)];
                    }
                    if (crossExercise) workout.push({ round, ...crossExercise });
                }
            });
        }
    }

    currentWorkout = {
        exercises: workout,
        level: fitnessLevel,
        duration: duration,
        focus: focus,
        workoutType: workoutType,
        rounds: rounds,
        restTime: restTime,
        ropeType: ropeType,
        date: new Date().toISOString()
    };
    displayWorkout(workout, fitnessLevel, duration, focus, workoutType, rounds, ropeType);
    loadSavedWorkouts();
    loadHistory();
}

function formatWorkoutType(type) {
    if (type === "jump-rope-only") return "Jump Rope Only";
    if (type === "bodyweight") return "Jump Rope + No Equipment";
    if (type === "gym") return "Jump Rope + Equipment (Gym)";
    return "";
}

function parseDuration(duration) {
    const seconds = parseInt(duration.split(' ')[0]);
    return seconds;
}

function displayWorkout(workout, level, duration, focus, type, rounds, ropeType) {
    const workoutDisplay = document.getElementById('workout-display');
    const workoutContent = document.getElementById('workout-content');
    const totalExercises = workout.filter(ex => ex.name !== "Rest").length;
    let typeString = formatWorkoutType(type);

    let summaryHTML = `
        <div class="workout-summary">
            <h3>Workout Overview</h3>
            <p><strong>Level:</strong> ${capitalize(level)} | <strong>Focus:</strong> ${capitalize(focus)}</p>
            <p><strong>Type:</strong> ${typeString}</p>
            <p><strong>Rounds:</strong> ${rounds}</p>
            <p><strong>Rope:</strong> ${ropeType}</p>
            <p><strong>Total Exercises:</strong> ${totalExercises}</p>
        </div>
    `;
    let workoutHTML = '';
    let currentRound = 1;

    workout.forEach((exercise, index) => {
        if (exercise.round > currentRound) {
            currentRound = exercise.round;
            workoutHTML += `<div style="margin: 20px 0; text-align: center; font-weight: 600; color: #764ba2;">--- Round ${currentRound} ---</div>`;
        }
        const itemClass = exercise.name === "Rest" ? "workout-item rest-item" : "workout-item";
        workoutHTML += `
            <div class="${itemClass}" id="exercise-${index}">
                <h3>${index + 1}. ${exercise.name}</h3>
                <p><strong>Duration:</strong> ${exercise.duration}</p>
                <p><strong>Intensity:</strong> ${exercise.intensity}</p>
                ${exercise.description ? `<p><em>${exercise.description}</em></p>` : ""}
                ${exercise.name !== "Rest" ? `
                <div style="margin-top: 8px;">
                    <button onclick="removeExercise(${index})" style="margin-right:8px;">🗑️ Remove</button>
                    <button onclick="openReplaceModal(${index}, '${type}')" style="margin-right:8px;">🔄 Replace</button>
                </div>
                ` : ""}
            </div>
        `;
    });

    workoutContent.innerHTML = summaryHTML + workoutHTML;
    workoutDisplay.style.display = 'block';
    workoutDisplay.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// --- Replace Modal Logic ---
function openReplaceModal(index, type) {
    pendingReplaceIndex = index;
    const original = currentWorkout.exercises[index];
    let pool;
    if (original.name === "Rest") {
        pool = [{ name: "Rest", duration: currentWorkout.restTime + " seconds", intensity: "Recovery" }];
    } else if (isJumpRopeExercise(original.name)) {
        pool = exercises[currentWorkout.level][currentWorkout.focus].filter(e => e.name !== "Rest");
    } else {
        pool = type === "bodyweight" ? bodyweightExercises : gymExercises;
    }
    const select = document.getElementById("replacement-select");
    select.innerHTML = "";
    pool.forEach((ex, i) => {
        let opt = document.createElement("option");
        opt.value = i;
        opt.textContent = `${ex.name} (${ex.duration})`;
        select.appendChild(opt);
    });
    document.getElementById('replace-modal').style.display = "flex";
}
function closeReplaceModal() {
    document.getElementById('replace-modal').style.display = "none";
    pendingReplaceIndex = null;
}
function confirmReplaceExercise() {
    const sel = document.getElementById("replacement-select");
    const choiceIdx = parseInt(sel.value);
    let original = currentWorkout.exercises[pendingReplaceIndex];
    let pool;
    if (original.name === "Rest") {
        pool = [{ name: "Rest", duration: currentWorkout.restTime + " seconds", intensity: "Recovery" }];
    } else if (isJumpRopeExercise(original.name)) {
        pool = exercises[currentWorkout.level][currentWorkout.focus].filter(e => e.name !== "Rest");
    } else {
        pool = currentWorkout.workoutType === "bodyweight" ? bodyweightExercises : gymExercises;
    }
    let replacement = { ...pool[choiceIdx], round: original.round };
    currentWorkout.exercises[pendingReplaceIndex] = replacement;
    closeReplaceModal();
    displayWorkout(
        currentWorkout.exercises,
        currentWorkout.level,
        currentWorkout.duration,
        currentWorkout.focus,
        currentWorkout.workoutType,
        currentWorkout.rounds,
        currentWorkout.ropeType
    );
}

// Remove exercise by index
function removeExercise(index) {
    if (!currentWorkout) return;
    currentWorkout.exercises.splice(index, 1);
    displayWorkout(
        currentWorkout.exercises,
        currentWorkout.level,
        currentWorkout.duration,
        currentWorkout.focus,
        currentWorkout.workoutType,
        currentWorkout.rounds,
        currentWorkout.ropeType
    );
}

function isJumpRopeExercise(name) {
    return [
        "Basic Bounce","Boxer Step","Alternate Foot Step","Side Swing","Heel-Toe Step","Shadow Jump",
        "Basic Intervals","High Knees Jump Rope","Double Unders (Intro)","Criss-Cross","Side-to-Side Hops",
        "Forward-Backward Jumps","Running Step","Tabata Jump Rope","Continuous Double Unders",
        "Triple Unders","Side Swing Cross Combo","EB Cross (Arm Behind Back)",
        "Double Side Swing into Jump","Boxer Shuffle with Double Unders","Weighted Rope HIIT",
        "Freestyle Trick Flow"
    ].includes(name);
}
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// --- Timer Functions ---
function startTimer() {
    if (!currentWorkout) return;
    document.getElementById('timer-modal').style.display = 'flex';
    currentExerciseIndex = 0;
    isPaused = false;
    document.getElementById('total-exercises').textContent = currentWorkout.exercises.length;
    document.getElementById('timer-title').textContent =
        `${capitalize(currentWorkout.level)} ${capitalize(currentWorkout.focus)} - ${formatWorkoutType(currentWorkout.workoutType)} (${currentWorkout.ropeType})`;
    startExercise();
}
function startExercise() {
    if (currentExerciseIndex >= currentWorkout.exercises.length) {
        completeWorkout();
        return;
    }
    const exercise = currentWorkout.exercises[currentExerciseIndex];
    remainingTime = parseDuration(exercise.duration);
    document.getElementById('timer-exercise-name').textContent = exercise.name;
    document.getElementById('timer-exercise-intensity').textContent = `Intensity: ${exercise.intensity}` + (exercise.description ? ` | ${exercise.description}` : "");
    document.getElementById('current-exercise-num').textContent = currentExerciseIndex + 1;
    updateProgressBar();
    updateTimerDisplay();
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (!isPaused) {
            remainingTime--;
            updateTimerDisplay();
            if (remainingTime <= 0) {
                clearInterval(timerInterval);
                currentExerciseIndex++;
                setTimeout(startExercise, 1000);
            }
        }
    }, 1000);
}
function updateTimerDisplay() {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    document.getElementById('timer-countdown').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
function updateProgressBar() {
    const progress = ((currentExerciseIndex) / currentWorkout.exercises.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
}
function pauseTimer() { isPaused = true; }
function resumeTimer() { isPaused = false; }
function skipExercise() {
    clearInterval(timerInterval);
    currentExerciseIndex++;
    startExercise();
}
function stopTimer() {
    clearInterval(timerInterval);
    closeTimer();
}
function closeTimer() {
    document.getElementById('timer-modal').style.display = 'none';
    clearInterval(timerInterval);
    currentExerciseIndex = 0;
    isPaused = false;
}
function completeWorkout() {
    clearInterval(timerInterval);
    document.getElementById('timer-exercise-name').textContent = "Workout Complete! 🎉";
    document.getElementById('timer-exercise-intensity').textContent = "Great job!";
    document.getElementById('timer-countdown').textContent = "00:00";
    updateProgressBar();
    saveToHistory();
    setTimeout(() => {
        closeTimer();
    }, 3000);
}

// --- Save/History/Print functions unchanged as before ---
window.addEventListener('load', () => {
    loadSavedWorkouts();
    loadHistory();
});
