# My Fitness Plan — May 2027

A personal fitness tracking website with workout plans and nutrition breakdown.

## Pages

- **Overview** (`index.html`) — 11-month phase plan and weekly schedule
- **Push** (`push.html`) — Monday: Chest, Shoulders, Triceps
- **Pull** (`pull.html`) — Tuesday: Back, Biceps, Rear Delts
- **Legs** (`legs.html`) — Wednesday: Quads, Hamstrings, Glutes, Calves
- **Nutrition** (`nutrition.html`) — Daily targets, meal plan, and key rules

## Features

- Weight and reps tracker on every exercise — saves automatically to your browser
- Fully responsive — works on phone, tablet, and desktop
- No dependencies or build tools needed

## How to deploy on GitHub Pages

1. Create a new repository on GitHub (e.g. `fitness-plan`)
2. Upload all files in this folder to the repository
3. Go to **Settings → Pages**
4. Under **Source**, select `main` branch and `/ (root)` folder
5. Click **Save**
6. Your site will be live at `https://yourusername.github.io/fitness-plan`

## Tracking your lifts

On each workout page, enter the weight and reps you're currently using for each exercise and hit **Save**. The values are stored in your browser's local storage — they'll still be there next time you open the page on the same device.

To clear all saved data: open your browser's developer tools (F12), go to **Application → Local Storage**, and delete the entries starting with `fitness_`.
