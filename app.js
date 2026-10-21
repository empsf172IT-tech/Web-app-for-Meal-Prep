/**
 * Nourishly — Premium Meal Prep & Nutrition Planner
 * Client-Side Application Logic & State Management
 */

// ==========================================
// 1. DATA REPOSITORY & INITIAL STATE
// ==========================================

const RECIPES_DATABASE = [
  {
    id: "rec-1",
    name: "Wild Salmon & Quinoa Power Bowl",
    category: "High-Protein",
    mealType: "Dinner",
    calories: 580,
    protein: 44,
    carbs: 52,
    fat: 22,
    prepTime: "25 min",
    difficulty: "Easy",
    image: "assets/images/recipe_salmon.jpg",
    tags: ["High-Protein", "Omega-3", "Gluten-Free"],
    description: "Pan-seared Alaskan salmon over warm fluffy tricolor quinoa, edamame, roasted spiced sweet potato cubes, creamy avocado fan, and toasted sesame citrus drizzle.",
    ingredients: [
      "180g Wild caught salmon fillet",
      "1/2 cup Cooked tricolor quinoa",
      "1/2 ripe Haas avocado, sliced",
      "1/2 cup Edamame beans, steamed",
      "1 small Sweet potato, cubed and roasted",
      "1 tbsp Olive oil & sesame seeds",
      "1 tbsp Tamari citrus dressing"
    ],
    steps: [
      "Season salmon fillet with sea salt, cracked black pepper, and sweet paprika.",
      "Sear salmon in a hot skillet with olive oil for 3-4 minutes per side until caramelized and flaky.",
      "In meal containers, create a base of warm fluffy quinoa.",
      "Arrange roasted sweet potatoes, steamed edamame, and sliced avocado alongside salmon.",
      "Garnish with sesame seeds, micro-cilantro, and drizzle with tamari citrus dressing."
    ]
  },
  {
    id: "rec-2",
    name: "Golden Turmeric Tofu & Chickpea Curry",
    category: "Vegetarian",
    mealType: "Dinner",
    calories: 490,
    protein: 26,
    carbs: 64,
    fat: 16,
    prepTime: "30 min",
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    tags: ["Vegetarian", "Vegan", "Anti-Inflammatory"],
    description: "Crispy turmeric-crusted tofu simmered with tender chickpeas, baby spinach, and coconut ginger broth, paired with aromatic jasmine brown rice.",
    ingredients: [
      "200g Organic firm tofu, pressed and cubed",
      "1 cup Cooked chickpeas",
      "1 cup Light coconut milk",
      "1 cup Fresh baby spinach",
      "1/2 tsp Ground turmeric & ginger",
      "1/2 cup Cooked brown basmati rice",
      "1 tbsp Fresh lime juice & chopped cilantro"
    ],
    steps: [
      "Toss cubed tofu with turmeric, garlic powder, and a touch of cornstarch.",
      "Pan-fry tofu in olive oil until golden and crisp on all sides (approx 8 minutes).",
      "Simmer coconut milk, yellow curry paste, grated ginger, and chickpeas for 10 minutes.",
      "Fold in fresh baby spinach until just wilted, then add crispy tofu.",
      "Serve over fragrant brown basmati rice with a squeeze of fresh lime juice."
    ]
  },
  {
    id: "rec-3",
    name: "Artisan Avocado Sourdough with Poached Egg",
    category: "Breakfast",
    mealType: "Breakfast",
    calories: 420,
    protein: 19,
    carbs: 38,
    fat: 22,
    prepTime: "15 min",
    difficulty: "Quick",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
    tags: ["Breakfast", "Vegetarian", "Quick Prep"],
    description: "Toasted country sourdough layered with smashed Haas avocado, Meyer lemon zest, pasture-raised soft poached egg, radishes, and toasted hemp hearts.",
    ingredients: [
      "1 thick slice Artisanal whole grain sourdough",
      "1/2 ripe Haas avocado, mashed with lemon",
      "1 Pasture-raised egg (soft poached)",
      "2 Radishes, finely shaved",
      "1 tsp Hemp hearts and chili flakes",
      "A drizzle of cold-pressed extra virgin olive oil",
      "Flaky sea salt & microgreens"
    ],
    steps: [
      "Toast the artisan sourdough bread until deeply golden and crunchy.",
      "Mash avocado with fresh lemon juice, sea salt, and cracked pepper.",
      "Gently poach the egg in simmering water with a drop of vinegar for 3 minutes.",
      "Spread avocado generously over toast, top with warm poached egg and shaved radishes.",
      "Sprinkle hemp seeds, Aleppo chili flakes, microgreens, and finishing oil."
    ]
  },
  {
    id: "rec-4",
    name: "Mediterranean Grilled Lemon Herb Chicken",
    category: "Lunch",
    mealType: "Lunch",
    calories: 460,
    protein: 46,
    carbs: 28,
    fat: 18,
    prepTime: "20 min",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    tags: ["High-Protein", "Low-Carb", "Meal-Prep Friendly"],
    description: "Herb-marinated chicken breast grilled to juicy perfection, tossed with kalamata olives, crisp Persian cucumbers, heirloom cherry tomatoes, and crumbled sheep feta.",
    ingredients: [
      "180g Free-range chicken breast",
      "1 cup Persian cucumbers & cherry tomatoes",
      "2 tbsp Kalamata olives, pitted",
      "30g Crumbled authentic Greek feta",
      "1 tbsp Extra virgin olive oil & dried oregano",
      "Fresh lemon wedges",
      "1 cup Crisp romaine hearts"
    ],
    steps: [
      "Marinate chicken breast in olive oil, lemon zest, oregano, and minced garlic for 15 min.",
      "Grill over medium-high heat for 6-7 minutes each side until internal temp is 165°F.",
      "Chop cucumbers, tomatoes, and kalamata olives into bite-sized medley.",
      "Slice chicken breast on the bias.",
      "Assemble over romaine greens, top with crumbled feta and herb vinaigrette."
    ]
  },
  {
    id: "rec-5",
    name: "Slow-Roasted Harissa Cauliflower Steak",
    category: "Vegetarian",
    mealType: "Dinner",
    calories: 380,
    protein: 16,
    carbs: 45,
    fat: 17,
    prepTime: "35 min",
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    tags: ["Vegetarian", "Vegan", "High-Fiber"],
    description: "Caramelized thick cauliflower steak roasted in mild North African harissa, served over silky herbed white bean hummus and pomegranate arils.",
    ingredients: [
      "1 thick center-cut Cauliflower steak",
      "1 tbsp Mild rose harissa paste",
      "3/4 cup Cannellini bean & garlic puree",
      "2 tbsp Ruby pomegranate seeds",
      "1 tbsp Toasted pine nuts",
      "Fresh mint and parsley leaves",
      "1 tbsp Extra virgin olive oil"
    ],
    steps: [
      "Brush cauliflower steak generously on both sides with harissa and olive oil.",
      "Roast at 400°F (200°C) for 25-30 minutes until tender with charred edges.",
      "Spoon silky warm white bean puree across the base of the meal dish.",
      "Place roasted cauliflower steak atop the puree.",
      "Garnish with ruby pomegranate seeds, toasted pine nuts, and torn mint."
    ]
  },
  {
    id: "rec-6",
    name: "Greek Yogurt & Blackberry Chia Parfait",
    category: "Snack",
    mealType: "Snack",
    calories: 290,
    protein: 22,
    carbs: 32,
    fat: 9,
    prepTime: "10 min",
    difficulty: "Quick",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80",
    tags: ["Snack", "High-Protein", "Gut-Health"],
    description: "Layered probiotic Greek yogurt with plump wild blackberries, vanilla chia gel, toasted almonds, and a ribbon of raw wildflower honey.",
    ingredients: [
      "1 cup Whole-milk plain Greek yogurt",
      "2 tbsp Chia seeds soaked in almond milk",
      "1/2 cup Fresh plump blackberries",
      "1 tbsp Sliced toasted almonds",
      "1 tsp Pure vanilla extract",
      "1 tsp Raw wildflower honey",
      "Pinch of ground cinnamon"
    ],
    steps: [
      "Stir vanilla extract and ground cinnamon into thick Greek yogurt.",
      "In a glass prep jar, spoon half of the Greek yogurt.",
      "Add a layer of soaked vanilla chia seed pudding and fresh blackberries.",
      "Top with remaining yogurt, fresh berries, and toasted sliced almonds.",
      "Finish with a delicate drizzle of wildflower honey."
    ]
  }
];

// Initial 7-Day Plan
const INITIAL_MEAL_PLAN = {
  Monday: {
    Breakfast: RECIPES_DATABASE[2], // Avocado Sourdough
    Lunch: RECIPES_DATABASE[3],     // Lemon Chicken Salad
    Dinner: RECIPES_DATABASE[0],    // Wild Salmon Bowl
    Snack: RECIPES_DATABASE[5]      // Chia Parfait
  },
  Tuesday: {
    Breakfast: RECIPES_DATABASE[2],
    Lunch: RECIPES_DATABASE[1],     // Turmeric Tofu Curry
    Dinner: RECIPES_DATABASE[3],
    Snack: RECIPES_DATABASE[5]
  },
  Wednesday: {
    Breakfast: RECIPES_DATABASE[2],
    Lunch: RECIPES_DATABASE[0],
    Dinner: RECIPES_DATABASE[4],    // Harissa Cauliflower
    Snack: RECIPES_DATABASE[5]
  },
  Thursday: {
    Breakfast: RECIPES_DATABASE[2],
    Lunch: RECIPES_DATABASE[3],
    Dinner: RECIPES_DATABASE[1],
    Snack: RECIPES_DATABASE[5]
  },
  Friday: {
    Breakfast: RECIPES_DATABASE[2],
    Lunch: RECIPES_DATABASE[0],
    Dinner: RECIPES_DATABASE[4],
    Snack: RECIPES_DATABASE[5]
  },
  Saturday: {
    Breakfast: RECIPES_DATABASE[2],
    Lunch: RECIPES_DATABASE[1],
    Dinner: RECIPES_DATABASE[0],
    Snack: RECIPES_DATABASE[5]
  },
  Sunday: {
    Breakfast: RECIPES_DATABASE[2],
    Lunch: RECIPES_DATABASE[3],
    Dinner: RECIPES_DATABASE[1],
    Snack: RECIPES_DATABASE[5]
  }
};

// Initial Grocery Items
const INITIAL_GROCERY_ITEMS = [
  { id: "g1", name: "Wild Salmon Fillets", quantity: "4 fillets (720g)", category: "Proteins", checked: true },
  { id: "g2", name: "Free-range Chicken Breasts", quantity: "3 breasts (540g)", category: "Proteins", checked: true },
  { id: "g3", name: "Organic Firm Tofu", quantity: "2 blocks", category: "Proteins", checked: false },
  { id: "g4", name: "Greek Yogurt (Plain)", quantity: "1 large tub (900g)", category: "Proteins", checked: true },
  { id: "g5", name: "Haas Avocados", quantity: "5 ripe avocados", category: "Fresh Produce", checked: false },
  { id: "g6", name: "Tricolor Quinoa", quantity: "1 bag (500g)", category: "Grains & Pantry", checked: true },
  { id: "g7", name: "Sweet Potatoes", quantity: "4 medium tubers", category: "Fresh Produce", checked: true },
  { id: "g8", name: "Baby Spinach & Romaine", quantity: "2 family clamshells", category: "Fresh Produce", checked: false },
  { id: "g9", name: "Persian Cucumbers", quantity: "1 pack (6 count)", category: "Fresh Produce", checked: false },
  { id: "g10", name: "Fresh Blackberries", quantity: "2 pints", category: "Fresh Produce", checked: false },
  { id: "g11", name: "Artisan Sourdough Loaf", quantity: "1 fresh bakery loaf", category: "Grains & Pantry", checked: true },
  { id: "g12", name: "Kalamata Olives & Feta", quantity: "1 jar & 1 block", category: "Grains & Pantry", checked: false },
  { id: "g13", name: "Chia Seeds & Hemp Hearts", quantity: "1 pouch each", category: "Grains & Pantry", checked: false },
  { id: "g14", name: "Cold-Pressed Olive Oil", quantity: "500ml pantry bottle", category: "Grains & Pantry", checked: true }
];

// Initial Prep Checklist Items
const INITIAL_PREP_CHECKLIST = [
  { id: "p1", task: "Wash, spin-dry, and portion leafy greens & crisp salad herbs", done: true },
  { id: "p2", task: "Roast seasoned sweet potato cubes and cauliflower florets with olive oil", done: true },
  { id: "p3", task: "Batch-simmer 4 cups of tricolor quinoa and jasmine brown basmati", done: true },
  { id: "p4", task: "Marinate chicken breasts and firm tofu in lemon-herb garlic vinaigrette", done: false },
  { id: "p5", task: "Whisk signature citrus-tahini dressing and store in mini glass jars", done: true },
  { id: "p6", task: "Assemble overnight chia berry parfait jars for quick grab-and-go mornings", done: false },
  { id: "p7", task: "Portion cooked proteins and roasted veggies into 10 glass bento boxes", done: false }
];

// App State
const AppState = {
  theme: localStorage.getItem("nourishly_theme") || "light",
  currentDay: "Monday",
  mealPlan: JSON.parse(JSON.stringify(INITIAL_MEAL_PLAN)),
  groceryList: JSON.parse(JSON.stringify(INITIAL_GROCERY_ITEMS)),
  prepChecklist: JSON.parse(JSON.stringify(INITIAL_PREP_CHECKLIST)),
  recipeFilter: "All",
  recipeSearch: "",
  waterLoggedMl: 1750,
  waterTargetMl: 2500,
  dailyNutritionOverviewMode: "today",
  insightsRange: "this-week",
  user: JSON.parse(localStorage.getItem("nourishly_user")) || null,
  profile: {
    diet: "Balanced",
    allergies: ["Shellfish"],
    mealType: "Batch Cooking",
    activity: "Moderately Active",
    goal: "Maintain Health",
    calorieTarget: 2150,
    proteinTarget: 140,
    carbsTarget: 210,
    fatTarget: 65
  }
};

// ==========================================
// 2. INITIALIZATION & CORE SETUP
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initNavigation();
  initNutritionOverview();
  initMealPlanner();
  initRecipesGallery();
  initGroceryList();
  initProfileBuilder();
  initMealPrepWorkflow();
  initNutritionInsights();
  initMobileAppPreview();
  initAppWaitlist();
  initFaq();
  initAuthAndWorkspace();
  initBackToTop();
  updateHeaderAuthState();
});

// ==========================================
// 3. THEME TOGGLE (LIGHT / DARK)
// ==========================================

function initTheme() {
  const root = document.documentElement;
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  const themeToggleMobile = document.getElementById("theme-toggle-mobile");

  function applyTheme(theme) {
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("nourishly_theme", theme);
    AppState.theme = theme;
  }

  // Apply stored theme
  applyTheme(AppState.theme);

  function toggle() {
    const nextTheme = AppState.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    showToast(`Switched to ${nextTheme === "dark" ? "Dark Plum" : "Warm Ivory"} mode`);
  }

  if (themeToggleBtn) themeToggleBtn.addEventListener("click", toggle);
  if (themeToggleMobile) themeToggleMobile.addEventListener("click", toggle);
}

// ==========================================
// 4. NAVIGATION, SCROLLSPY, & MOBILE MENU
// ==========================================

function initNavigation() {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenuDrawer = document.getElementById("mobile-menu-drawer");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");
  const desktopLinks = document.querySelectorAll(".desktop-nav-link");
  const sections = document.querySelectorAll("section[id]");

  // Mobile menu toggle
  if (mobileMenuBtn && mobileMenuDrawer) {
    mobileMenuBtn.addEventListener("click", () => {
      const isExpanded = mobileMenuBtn.getAttribute("aria-expanded") === "true";
      mobileMenuBtn.setAttribute("aria-expanded", !isExpanded);
      mobileMenuDrawer.classList.toggle("hidden");
    });

    mobileLinks.forEach(link => {
      link.addEventListener("click", () => {
        mobileMenuDrawer.classList.add("hidden");
        mobileMenuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Active Section Scrollspy
  function updateScrollspy() {
    let currentId = "";
    const scrollPos = window.scrollY + 140;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        currentId = section.getAttribute("id");
      }
    });

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
      const lastSection = sections[sections.length - 1];
      if (lastSection) currentId = lastSection.getAttribute("id");
    }

    desktopLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentId}`) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", updateScrollspy, { passive: true });
  updateScrollspy();
}

// ==========================================
// 5. SECTION 2: PERSONALIZED NUTRITION OVERVIEW
// ==========================================

function initNutritionOverview() {
  const sampleData = {
    today: {
      label: "Today (Target vs Actual)",
      calories: 1980,
      targetCalories: AppState.profile.calorieTarget,
      protein: 132,
      targetProtein: AppState.profile.proteinTarget,
      carbs: 195,
      targetCarbs: AppState.profile.carbsTarget,
      fat: 58,
      targetFat: AppState.profile.fatTarget,
      water: AppState.waterLoggedMl
    },
    yesterday: {
      label: "Yesterday (Completed)",
      calories: 2110,
      targetCalories: AppState.profile.calorieTarget,
      protein: 145,
      targetProtein: AppState.profile.proteinTarget,
      carbs: 215,
      targetCarbs: AppState.profile.carbsTarget,
      fat: 62,
      targetFat: AppState.profile.fatTarget,
      water: 2500
    },
    average: {
      label: "7-Day Rolling Average",
      calories: 2060,
      targetCalories: AppState.profile.calorieTarget,
      protein: 138,
      targetProtein: AppState.profile.proteinTarget,
      carbs: 202,
      targetCarbs: AppState.profile.carbsTarget,
      fat: 60,
      targetFat: AppState.profile.fatTarget,
      water: 2350
    },
    training: {
      label: "High Activity Workout Day",
      calories: 2350,
      targetCalories: AppState.profile.calorieTarget + 250,
      protein: 165,
      targetProtein: AppState.profile.proteinTarget + 25,
      carbs: 240,
      targetCarbs: AppState.profile.carbsTarget + 30,
      fat: 66,
      targetFat: AppState.profile.fatTarget,
      water: 3000
    }
  };

  const overviewModeSelect = document.getElementById("nutrition-overview-mode");
  const waterAddBtn = document.getElementById("water-add-btn");
  const waterResetBtn = document.getElementById("water-reset-btn");

  function renderOverview(mode) {
    const data = sampleData[mode] || sampleData.today;

    document.getElementById("stat-calories-val").textContent = data.calories.toLocaleString();
    document.getElementById("stat-calories-target").textContent = `/ ${data.targetCalories.toLocaleString()} kcal`;
    
    // Percentages
    const calPct = Math.min(100, Math.round((data.calories / data.targetCalories) * 100));
    document.getElementById("stat-calories-bar").style.width = `${calPct}%`;
    const calPctEl = document.getElementById("stat-calories-pct");
    if (calPctEl) calPctEl.textContent = `${calPct}% of daily goal`;
    const calRemEl = document.getElementById("stat-calories-remaining");
    if (calRemEl) {
      const calRem = data.targetCalories - data.calories;
      calRemEl.textContent = calRem > 0 ? `${calRem.toLocaleString()} kcal left` : 'Goal reached';
    }

    // Protein
    document.getElementById("stat-protein-val").textContent = `${data.protein}g`;
    document.getElementById("stat-protein-target").textContent = `/ ${data.targetProtein}g`;
    const proteinPct = Math.min(100, Math.round((data.protein / data.targetProtein) * 100));
    document.getElementById("stat-protein-bar").style.width = `${proteinPct}%`;
    const protPctEl = document.getElementById("stat-protein-pct");
    if (protPctEl) protPctEl.textContent = `${proteinPct}%`;
    const protRemEl = document.getElementById("stat-protein-remaining");
    if (protRemEl) {
      const protRem = data.targetProtein - data.protein;
      protRemEl.textContent = protRem > 0 ? `${protRem}g to optimal` : 'Optimal met';
    }

    // Carbs
    document.getElementById("stat-carbs-val").textContent = `${data.carbs}g`;
    document.getElementById("stat-carbs-target").textContent = `/ ${data.targetCarbs}g`;
    const carbsPct = Math.min(100, Math.round((data.carbs / data.targetCarbs) * 100));
    document.getElementById("stat-carbs-bar").style.width = `${carbsPct}%`;
    const carbsPctEl = document.getElementById("stat-carbs-pct");
    if (carbsPctEl) carbsPctEl.textContent = `${carbsPct}%`;

    // Fat
    document.getElementById("stat-fat-val").textContent = `${data.fat}g`;
    document.getElementById("stat-fat-target").textContent = `/ ${data.targetFat}g`;
    const fatPct = Math.min(100, Math.round((data.fat / data.targetFat) * 100));
    document.getElementById("stat-fat-bar").style.width = `${fatPct}%`;
    const fatPctEl = document.getElementById("stat-fat-pct");
    if (fatPctEl) fatPctEl.textContent = `${fatPct}%`;

    // Water
    renderWater(data.water);
  }

  function renderWater(ml) {
    const target = AppState.waterTargetMl;
    const pct = Math.min(100, Math.round((ml / target) * 100));
    document.getElementById("water-current-val").textContent = `${(ml / 1000).toFixed(2)} L`;
    document.getElementById("water-target-val").textContent = `${(target / 1000).toFixed(1)} L`;
    document.getElementById("water-progress-bar").style.width = `${pct}%`;
    document.getElementById("water-pct-label").textContent = `${pct}% logged`;
    const waterRemEl = document.getElementById("water-remaining-label");
    if (waterRemEl) {
      const remMl = Math.max(0, target - ml);
      waterRemEl.textContent = remMl > 0 ? `${(remMl / 1000).toFixed(2)} L left` : 'Goal reached';
    }
    if (window.renderPhonePreview) window.renderPhonePreview();
  }

  // Lets other features (e.g. the mobile preview) push water changes into this dashboard
  window.syncWaterFromState = function() {
    sampleData.today.water = AppState.waterLoggedMl;
    if (AppState.dailyNutritionOverviewMode === "today") renderWater(AppState.waterLoggedMl);
  };

  if (overviewModeSelect) {
    overviewModeSelect.addEventListener("change", (e) => {
      AppState.dailyNutritionOverviewMode = e.target.value;
      renderOverview(e.target.value);
    });
  }

  if (waterAddBtn) {
    waterAddBtn.addEventListener("click", () => {
      AppState.waterLoggedMl = Math.min(AppState.waterLoggedMl + 250, 4000);
      sampleData.today.water = AppState.waterLoggedMl;
      renderWater(AppState.waterLoggedMl);
      showToast("+250 ml pure water logged! Keep hydrating.");
    });
  }

  if (waterResetBtn) {
    waterResetBtn.addEventListener("click", () => {
      AppState.waterLoggedMl = 0;
      sampleData.today.water = 0;
      renderWater(0);
      showToast("Hydration tracker reset for the day.");
    });
  }

  renderOverview("today");
}

// ==========================================
// 6. SECTION 3: WEEKLY MEAL PLANNER
// ==========================================

function initMealPlanner() {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const dayTabsContainer = document.getElementById("planner-day-tabs");
  const mealSlotsContainer = document.getElementById("planner-slots-grid");
  const weeklyCompletionMeter = document.getElementById("weekly-completion-meter");
  const weeklyCompletionText = document.getElementById("weekly-completion-text");
  const dailyCaloriesBadge = document.getElementById("planner-daily-calories");
  const dailyProteinBadge = document.getElementById("planner-daily-protein");

  // Render Day Tabs
  function renderDayTabs() {
    if (!dayTabsContainer) return;
    dayTabsContainer.innerHTML = days.map(day => `
      <button 
        data-day="${day}"
        class="day-tab-btn px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
          day === AppState.currentDay
            ? 'bg-plum-600 dark:bg-terracotta-400 text-ivory-100 shadow-md font-bold'
            : 'bg-ivory-200 dark:bg-plum-900/50 text-plum-600 dark:text-ivory-200 hover:bg-terracotta-100 dark:hover:bg-plum-800'
        }"
      >
        ${day.slice(0, 3)}
      </button>
    `).join("");

    dayTabsContainer.querySelectorAll(".day-tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        AppState.currentDay = btn.getAttribute("data-day");
        renderDayTabs();
        renderActiveDayMeals();
      });
    });
  }

  // Render Current Day Meals
  function renderActiveDayMeals() {
    if (!mealSlotsContainer) return;
    const currentMeals = AppState.mealPlan[AppState.currentDay];
    const slots = ["Breakfast", "Lunch", "Dinner", "Snack"];

    let totalCals = 0;
    let totalProt = 0;

    mealSlotsContainer.innerHTML = slots.map(slot => {
      const meal = currentMeals[slot];
      if (meal) {
        totalCals += meal.calories;
        totalProt += meal.protein;
      }

      return `
        <div class="glass-card rounded-2xl p-5 flex flex-col justify-between border border-plum-600/10 dark:border-terracotta-400/20 bg-white/90 dark:bg-plum-900/60 shadow-sm transition hover:shadow-md">
          <div>
            <div class="flex items-center justify-between mb-3">
              <span class="inline-flex items-center text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-terracotta-100 dark:bg-plum-800 text-plum-600 dark:text-terracotta-300">
                ${slot}
              </span>
              ${meal ? `
                <span class="text-xs font-medium text-plum-500 dark:text-ivory-300">
                  ${meal.prepTime}
                </span>
              ` : `
                <span class="text-xs text-rose-500 font-medium">Empty</span>
              `}
            </div>

            ${meal ? `
              <div class="flex gap-3 sm:gap-4 items-center">
                <img 
                  src="${meal.image}" 
                  alt="${meal.name}" 
                  class="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover shadow-sm border border-plum-600/10 dark:border-plum-700 shrink-0"
                  loading="lazy"
                  onerror="this.src='assets/images/recipe_salmon.jpg'"
                />
                <div class="flex-1 min-w-0">
                  <h4 class="font-bold text-plum-600 dark:text-ivory-100 text-sm sm:text-base leading-snug line-clamp-2">
                    ${meal.name}
                  </h4>
                  <div class="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs text-plum-500 dark:text-ivory-300 mt-1.5">
                    <span class="font-semibold text-terracotta-600 dark:text-terracotta-400 whitespace-nowrap">${meal.calories} kcal</span>
                    <span>•</span>
                    <span class="whitespace-nowrap">P: ${meal.protein}g</span>
                    <span class="whitespace-nowrap">C: ${meal.carbs}g</span>
                    <span class="whitespace-nowrap">F: ${meal.fat}g</span>
                  </div>
                </div>
              </div>
            ` : `
              <div class="py-6 text-center text-plum-400 dark:text-ivory-400">
                <p class="text-sm">No meal scheduled yet for ${slot}</p>
              </div>
            `}
          </div>

          <div class="mt-4 pt-3 border-t border-plum-600/10 dark:border-plum-800 flex items-center justify-between">
            <button 
              onclick="openMealPicker('${AppState.currentDay}', '${slot}')"
              class="text-xs font-bold text-plum-600 dark:text-terracotta-300 hover:text-terracotta-500 dark:hover:text-terracotta-200 transition flex items-center gap-1"
            >
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
              </svg>
              ${meal ? "Replace Meal" : "+ Add Meal"}
            </button>

            ${meal ? `
              <button 
                onclick="removeMeal('${AppState.currentDay}', '${slot}')"
                class="text-xs text-plum-400 hover:text-rose-500 dark:text-ivory-400 dark:hover:text-rose-400 transition"
                title="Remove meal"
              >
                Clear
              </button>
            ` : ''}
          </div>
        </div>
      `;
    }).join("");

    if (dailyCaloriesBadge) dailyCaloriesBadge.textContent = `${totalCals.toLocaleString()} kcal planned`;
    if (dailyProteinBadge) dailyProteinBadge.textContent = `${totalProt}g protein`;

    updateWeeklyCompletion();
    if (window.renderPhonePreview) window.renderPhonePreview();
  }

  function updateWeeklyCompletion() {
    let filled = 0;
    const totalSlots = 7 * 4; // 28 meals
    days.forEach(d => {
      ["Breakfast", "Lunch", "Dinner", "Snack"].forEach(s => {
        if (AppState.mealPlan[d] && AppState.mealPlan[d][s]) filled++;
      });
    });

    const pct = Math.round((filled / totalSlots) * 100);
    if (weeklyCompletionMeter) weeklyCompletionMeter.style.width = `${pct}%`;
    if (weeklyCompletionText) weeklyCompletionText.textContent = `${filled}/${totalSlots} Meals Planned (${pct}%)`;
  }

  // Expose global helpers
  window.renderActiveDayMeals = renderActiveDayMeals;
  window.updateWeeklyCompletion = updateWeeklyCompletion;

  renderDayTabs();
  renderActiveDayMeals();
}

// Meal picker modal
window.openMealPicker = function(day, slot) {
  const modal = document.getElementById("meal-picker-modal");
  const modalSlotTitle = document.getElementById("meal-picker-slot-title");
  const listContainer = document.getElementById("meal-picker-recipes-list");

  if (!modal || !listContainer) return;

  modalSlotTitle.textContent = `Choose ${slot} for ${day}`;
  
  listContainer.innerHTML = RECIPES_DATABASE.map(recipe => `
    <div 
      onclick="selectRecipeForPlan('${day}', '${slot}', '${recipe.id}')"
      class="group p-3 rounded-xl border border-plum-600/10 dark:border-plum-700 bg-ivory-50 dark:bg-plum-900/80 hover:border-terracotta-400 hover:bg-terracotta-50/50 dark:hover:bg-plum-800 cursor-pointer flex gap-3 items-center transition"
    >
      <img 
        src="${recipe.image}" 
        alt="${recipe.name}" 
        class="w-14 h-14 rounded-lg object-cover shadow-sm border border-plum-600/10"
        onerror="this.src='assets/images/recipe_salmon.jpg'"
      />
      <div class="flex-1 min-w-0">
        <h5 class="text-sm font-bold text-plum-600 dark:text-ivory-100 truncate group-hover:text-terracotta-600 dark:group-hover:text-terracotta-300">
          ${recipe.name}
        </h5>
        <div class="text-xs text-plum-400 dark:text-ivory-300 flex items-center gap-2 mt-0.5">
          <span class="font-semibold text-terracotta-500">${recipe.calories} kcal</span>
          <span>•</span>
          <span>${recipe.category}</span>
          <span>•</span>
          <span>${recipe.prepTime}</span>
        </div>
      </div>
      <button class="px-3 py-1.5 text-xs font-bold rounded-lg bg-plum-600 text-ivory-100 dark:bg-terracotta-400 dark:text-plum-900 group-hover:bg-terracotta-500 group-hover:text-white transition">
        Select
      </button>
    </div>
  `).join("");

  modal.classList.remove("hidden");
};

window.closeMealPicker = function() {
  const modal = document.getElementById("meal-picker-modal");
  if (modal) modal.classList.add("hidden");
};

window.selectRecipeForPlan = function(day, slot, recipeId) {
  const recipe = RECIPES_DATABASE.find(r => r.id === recipeId);
  if (!recipe) return;

  AppState.mealPlan[day][slot] = recipe;
  window.renderActiveDayMeals();
  window.closeMealPicker();
  showToast(`Updated ${slot} on ${day} to ${recipe.name}`);
};

window.removeMeal = function(day, slot) {
  AppState.mealPlan[day][slot] = null;
  window.renderActiveDayMeals();
  showToast(`Cleared ${slot} for ${day}`);
};

// ==========================================
// 7. SECTION 4: DISCOVER HEALTHY RECIPES
// ==========================================

function initRecipesGallery() {
  const gridContainer = document.getElementById("recipes-grid");
  const searchInput = document.getElementById("recipes-search");
  const filterButtons = document.querySelectorAll(".recipe-filter-btn");

  function renderGallery() {
    if (!gridContainer) return;

    const query = AppState.recipeSearch.toLowerCase().trim();
    const filter = AppState.recipeFilter;

    const filtered = RECIPES_DATABASE.filter(recipe => {
      const matchesFilter = (filter === "All") || 
                            (recipe.category.toLowerCase() === filter.toLowerCase()) || 
                            (recipe.mealType.toLowerCase() === filter.toLowerCase());
      const matchesSearch = recipe.name.toLowerCase().includes(query) || 
                            recipe.description.toLowerCase().includes(query) ||
                            recipe.tags.some(t => t.toLowerCase().includes(query));
      return matchesFilter && matchesSearch;
    });

    if (filtered.length === 0) {
      gridContainer.innerHTML = `
        <div class="col-span-full py-12 text-center text-plum-400 dark:text-ivory-400">
          <p class="text-base font-semibold">No recipes found matching "${AppState.recipeSearch}" in ${filter}.</p>
          <button onclick="resetRecipeFilters()" class="mt-3 px-4 py-2 text-xs font-bold rounded-full bg-terracotta-400 text-white">Reset Filters</button>
        </div>
      `;
      return;
    }

    gridContainer.innerHTML = filtered.map(recipe => `
      <div class="glass-card rounded-2xl overflow-hidden flex flex-col group border border-plum-600/10 dark:border-terracotta-400/20 bg-white/90 dark:bg-plum-900/60 shadow-sm transition hover:shadow-xl">
        <div class="relative h-48 overflow-hidden">
          <img 
            src="${recipe.image}" 
            alt="${recipe.name}" 
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            onerror="this.src='assets/images/recipe_salmon.jpg'"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-plum-950/70 via-transparent to-transparent"></div>
          
          <span class="absolute top-3 left-3 px-3 py-1 text-xs font-bold rounded-full bg-ivory-100/90 dark:bg-plum-900/90 text-plum-600 dark:text-ivory-100 backdrop-blur-md shadow-sm">
            ${recipe.category}
          </span>

          <span class="absolute bottom-3 right-3 text-xs font-bold text-ivory-100 bg-plum-950/80 px-2.5 py-1 rounded-md backdrop-blur-sm">
            ⏱ ${recipe.prepTime}
          </span>
        </div>

        <div class="p-5 flex-1 flex flex-col justify-between">
          <div>
            <h4 class="font-bold text-plum-600 dark:text-ivory-100 text-base sm:text-lg group-hover:text-terracotta-500 transition line-clamp-2 min-h-[2.75rem] flex items-start leading-snug">
              ${recipe.name}
            </h4>
            <p class="text-xs text-plum-500 dark:text-ivory-300 mt-2 line-clamp-2 leading-relaxed min-h-[2rem]">
              ${recipe.description}
            </p>
          </div>

          <div class="mt-4 pt-3 border-t border-plum-600/10 dark:border-plum-800">
            <div class="flex items-center justify-between flex-wrap gap-1 text-xs text-plum-500 dark:text-ivory-300 mb-3">
              <span class="font-bold text-terracotta-600 dark:text-terracotta-400 whitespace-nowrap">${recipe.calories} kcal</span>
              <span class="font-medium whitespace-nowrap">P: ${recipe.protein}g | C: ${recipe.carbs}g | F: ${recipe.fat}g</span>
            </div>

            <div class="flex gap-2">
              <button 
                onclick="openRecipeDetailsModal('${recipe.id}')"
                class="flex-1 py-2 text-xs font-bold text-center rounded-xl bg-ivory-200 dark:bg-plum-800 text-plum-600 dark:text-ivory-200 hover:bg-terracotta-100 dark:hover:bg-plum-700 transition"
              >
                View Recipe & Macros
              </button>
              <button 
                onclick="quickAddRecipeToDay('${recipe.id}')"
                title="Add to current day plan"
                class="px-3 py-2 text-xs font-bold rounded-xl bg-plum-600 text-ivory-100 dark:bg-terracotta-400 dark:text-plum-900 hover:bg-terracotta-500 hover:text-white transition flex items-center justify-center"
              >
                + Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    `).join("");
  }

  // Filter click handlers
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active-filter", "bg-plum-600", "text-ivory-100", "dark:bg-terracotta-400", "dark:text-plum-900"));
      filterButtons.forEach(b => b.classList.add("bg-ivory-200", "dark:bg-plum-900/50", "text-plum-600", "dark:text-ivory-200"));
      
      btn.classList.add("active-filter", "bg-plum-600", "text-ivory-100", "dark:bg-terracotta-400", "dark:text-plum-900");
      btn.classList.remove("bg-ivory-200", "dark:bg-plum-900/50", "text-plum-600", "dark:text-ivory-200");

      AppState.recipeFilter = btn.getAttribute("data-category");
      renderGallery();
    });
  });

  // Search input handler
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      AppState.recipeSearch = e.target.value;
      renderGallery();
    });
  }

  window.resetRecipeFilters = function() {
    AppState.recipeSearch = "";
    AppState.recipeFilter = "All";
    if (searchInput) searchInput.value = "";
    filterButtons.forEach(b => {
      if (b.getAttribute("data-category") === "All") {
        b.click();
      }
    });
  };

  renderGallery();
}

// Recipe Detail Modal
window.openRecipeDetailsModal = function(recipeId) {
  const recipe = RECIPES_DATABASE.find(r => r.id === recipeId);
  if (!recipe) return;

  const modal = document.getElementById("recipe-detail-modal");
  if (!modal) return;

  document.getElementById("detail-recipe-title").textContent = recipe.name;
  document.getElementById("detail-recipe-img").src = recipe.image;
  document.getElementById("detail-recipe-category").textContent = recipe.category;
  document.getElementById("detail-recipe-time").textContent = `Prep Time: ${recipe.prepTime}`;
  document.getElementById("detail-recipe-desc").textContent = recipe.description;
  document.getElementById("detail-recipe-calories").textContent = `${recipe.calories} kcal`;
  document.getElementById("detail-recipe-protein").textContent = `${recipe.protein}g`;
  document.getElementById("detail-recipe-carbs").textContent = `${recipe.carbs}g`;
  document.getElementById("detail-recipe-fat").textContent = `${recipe.fat}g`;

  // Ingredients checklist
  const ingredientsContainer = document.getElementById("detail-recipe-ingredients");
  ingredientsContainer.innerHTML = recipe.ingredients.map((ing, i) => `
    <li class="flex items-center gap-2.5 text-xs text-plum-600 dark:text-ivory-200">
      <input type="checkbox" id="ing-${i}" class="w-3.5 h-3.5 rounded border-plum-300">
      <label for="ing-${i}" class="cursor-pointer select-none">${ing}</label>
    </li>
  `).join("");

  // Steps
  const stepsContainer = document.getElementById("detail-recipe-steps");
  stepsContainer.innerHTML = recipe.steps.map((step, idx) => `
    <li class="flex gap-3 text-xs text-plum-600 dark:text-ivory-200 leading-relaxed">
      <span class="flex-shrink-0 w-5 h-5 rounded-full bg-terracotta-100 dark:bg-plum-800 text-terracotta-600 dark:text-terracotta-300 font-bold flex items-center justify-center text-[10px]">
        ${idx + 1}
      </span>
      <span>${step}</span>
    </li>
  `).join("");

  // Set action button
  const addBtn = document.getElementById("detail-recipe-add-btn");
  addBtn.onclick = () => {
    quickAddRecipeToDay(recipe.id);
    closeRecipeDetailsModal();
  };

  modal.classList.remove("hidden");
};

window.closeRecipeDetailsModal = function() {
  const modal = document.getElementById("recipe-detail-modal");
  if (modal) modal.classList.add("hidden");
};

window.quickAddRecipeToDay = function(recipeId) {
  const recipe = RECIPES_DATABASE.find(r => r.id === recipeId);
  if (!recipe) return;

  const targetDay = AppState.currentDay;
  const targetSlot = recipe.mealType || "Dinner";

  AppState.mealPlan[targetDay][targetSlot] = recipe;
  if (window.renderActiveDayMeals) window.renderActiveDayMeals();
  showToast(`Added ${recipe.name} to ${targetDay} ${targetSlot}!`);
};

// ==========================================
// 8. SECTION 5: SMART GROCERY LIST
// ==========================================

function initGroceryList() {
  const listContainer = document.getElementById("grocery-items-container");
  const progressText = document.getElementById("grocery-progress-text");
  const progressBar = document.getElementById("grocery-progress-bar");
  const addItemForm = document.getElementById("grocery-add-form");
  const regenerateBtn = document.getElementById("grocery-regenerate-btn");

  function renderGroceryList() {
    if (!listContainer) return;

    const categories = ["Fresh Produce", "Proteins", "Grains & Pantry"];
    const totalItems = AppState.groceryList.length;
    const checkedItems = AppState.groceryList.filter(item => item.checked).length;
    const pct = totalItems > 0 ? Math.round((checkedItems / totalItems) * 100) : 0;

    if (progressBar) progressBar.style.width = `${pct}%`;
    if (progressText) progressText.textContent = `${checkedItems} of ${totalItems} items picked (${pct}%)`;

    listContainer.innerHTML = categories.map(cat => {
      const itemsInCat = AppState.groceryList.filter(i => i.category === cat);
      if (itemsInCat.length === 0) return '';

      return `
        <div class="mb-5 last:mb-0">
          <div class="flex items-center justify-between mb-2 pb-1 border-b border-plum-600/10 dark:border-plum-800">
            <h5 class="text-xs font-bold uppercase tracking-wider text-terracotta-600 dark:text-terracotta-400">
              ${cat}
            </h5>
            <span class="text-[11px] text-plum-400 dark:text-ivory-400 font-medium">
              ${itemsInCat.filter(i => i.checked).length}/${itemsInCat.length}
            </span>
          </div>

          <div class="space-y-1.5">
            ${itemsInCat.map(item => `
              <div class="group flex items-center justify-between gap-3 p-2 rounded-xl hover:bg-ivory-200/50 dark:hover:bg-plum-900/40 transition">
                <div class="flex items-center gap-2.5 min-w-0 flex-1">
                  <input 
                    type="checkbox" 
                    id="chk-${item.id}"
                    ${item.checked ? 'checked' : ''}
                    onchange="toggleGroceryItem('${item.id}')"
                    class="w-4 h-4 rounded text-terracotta-500 focus:ring-terracotta-400 shrink-0"
                  />
                  <label 
                    for="chk-${item.id}" 
                    class="text-xs sm:text-sm font-medium cursor-pointer transition select-none truncate ${
                      item.checked 
                        ? 'line-through text-plum-300 dark:text-ivory-400' 
                        : 'text-plum-600 dark:text-ivory-100'
                    }"
                    title="${item.name}"
                  >
                    ${item.name}
                  </label>
                </div>

                <div class="flex items-center gap-1.5 shrink-0">
                  <span class="text-[10px] sm:text-xs text-plum-500 dark:text-ivory-300 bg-ivory-200/80 dark:bg-plum-800 px-2 py-0.5 rounded-md whitespace-nowrap font-medium">
                    ${item.quantity}
                  </span>
                  <div class="flex items-center gap-0.5 sm:opacity-0 group-hover:opacity-100 transition">
                    <button 
                      onclick="editGroceryItem('${item.id}')"
                      class="text-xs p-1 text-plum-400 hover:text-plum-600 dark:text-ivory-300 transition"
                      title="Edit quantity"
                    >
                      ✏️
                    </button>
                    <button 
                      onclick="deleteGroceryItem('${item.id}')"
                      class="text-xs p-1 text-plum-400 hover:text-rose-500 transition"
                      title="Remove item"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      `;
    }).join("");

    if (window.renderPhonePreview) window.renderPhonePreview();
  }

  // Toggle item status
  window.toggleGroceryItem = function(id) {
    const item = AppState.groceryList.find(i => i.id === id);
    if (item) {
      item.checked = !item.checked;
      renderGroceryList();
    }
  };

  // Delete item
  window.deleteGroceryItem = function(id) {
    AppState.groceryList = AppState.groceryList.filter(i => i.id !== id);
    renderGroceryList();
    showToast("Item removed from grocery list.");
  };

  // Edit item quantity
  window.editGroceryItem = function(id) {
    const item = AppState.groceryList.find(i => i.id === id);
    if (!item) return;

    const newQty = prompt(`Update quantity for "${item.name}":`, item.quantity);
    if (newQty && newQty.trim() !== "") {
      item.quantity = newQty.trim();
      renderGroceryList();
      showToast(`Updated ${item.name} quantity.`);
    }
  };

  // Add Item Submit
  if (addItemForm) {
    addItemForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const nameInput = document.getElementById("grocery-item-name");
      const qtyInput = document.getElementById("grocery-item-qty");
      const catInput = document.getElementById("grocery-item-cat");

      if (!nameInput.value.trim()) return;

      const newItem = {
        id: "g-" + Date.now(),
        name: nameInput.value.trim(),
        quantity: qtyInput.value.trim() || "1 unit",
        category: catInput.value || "Fresh Produce",
        checked: false
      };

      AppState.groceryList.push(newItem);
      nameInput.value = "";
      qtyInput.value = "";
      renderGroceryList();
      showToast(`Added "${newItem.name}" to shopping list!`);
    });
  }

  // Regenerate list from weekly plan
  if (regenerateBtn) {
    regenerateBtn.addEventListener("click", () => {
      const generatedItems = [];
      const days = Object.keys(AppState.mealPlan);

      // Collect all ingredients from planned meals
      days.forEach(day => {
        ["Breakfast", "Lunch", "Dinner", "Snack"].forEach(slot => {
          const meal = AppState.mealPlan[day][slot];
          if (meal && meal.ingredients) {
            meal.ingredients.forEach((ing, idx) => {
              // Determine category heuristic
              let cat = "Fresh Produce";
              const lower = ing.toLowerCase();
              if (lower.includes("salmon") || lower.includes("chicken") || lower.includes("tofu") || lower.includes("egg") || lower.includes("yogurt")) {
                cat = "Proteins";
              } else if (lower.includes("quinoa") || lower.includes("rice") || lower.includes("sourdough") || lower.includes("oil") || lower.includes("dressing") || lower.includes("chia") || lower.includes("seeds")) {
                cat = "Grains & Pantry";
              }

              generatedItems.push({
                id: `gen-${day.slice(0,2)}-${slot.slice(0,1)}-${idx}-${Math.random().toString(36).substring(2, 6)}`,
                name: ing.split(",")[0] || ing,
                quantity: "1 batch",
                category: cat,
                checked: false
              });
            });
          }
        });
      });

      // Dedup lightly by name
      const uniqueItems = [];
      const seen = new Set();
      generatedItems.forEach(item => {
        const key = item.name.toLowerCase().trim();
        if (!seen.has(key)) {
          seen.add(key);
          uniqueItems.push(item);
        }
      });

      AppState.groceryList = uniqueItems.slice(0, 15);
      renderGroceryList();
      showToast("Smart Grocery List regenerated directly from this week's active meal plan!");
    });
  }

  window.renderGroceryList = renderGroceryList;
  renderGroceryList();
}

// ==========================================
// 9. SECTION 6: BUILD YOUR NUTRITION PROFILE
// ==========================================

function initProfileBuilder() {
  const form = document.getElementById("nutrition-profile-form");
  const dietButtons = document.querySelectorAll(".profile-diet-btn");
  const calorieTargetDisplay = document.getElementById("profile-calculated-calories");
  const proteinTargetDisplay = document.getElementById("profile-calculated-protein");

  let selectedDiet = "Balanced";

  dietButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      dietButtons.forEach(b => {
        b.classList.remove("bg-plum-600", "text-ivory-100", "dark:bg-terracotta-400", "dark:text-plum-900");
        b.classList.add("bg-ivory-200", "dark:bg-plum-900/50", "text-plum-600", "dark:text-ivory-200");
      });
      btn.classList.add("bg-plum-600", "text-ivory-100", "dark:bg-terracotta-400", "dark:text-plum-900");
      btn.classList.remove("bg-ivory-200", "dark:bg-plum-900/50", "text-plum-600", "dark:text-ivory-200");
      selectedDiet = btn.getAttribute("data-diet");
      recalcTargets();
    });
  });

  function recalcTargets() {
    const activity = document.getElementById("profile-activity")?.value || "moderate";
    const goal = document.getElementById("profile-goal")?.value || "maintain";

    let baseCals = 2000;
    if (activity === "sedentary") baseCals = 1850;
    if (activity === "moderate") baseCals = 2150;
    if (activity === "active") baseCals = 2400;
    if (activity === "athlete") baseCals = 2700;

    if (goal === "weight-loss") baseCals -= 350;
    if (goal === "muscle-gain") baseCals += 300;

    let proteinGrams = Math.round((baseCals * 0.28) / 4);
    if (selectedDiet === "High-Protein") proteinGrams = Math.round((baseCals * 0.35) / 4);

    if (calorieTargetDisplay) calorieTargetDisplay.textContent = `${baseCals.toLocaleString()} kcal`;
    if (proteinTargetDisplay) proteinTargetDisplay.textContent = `${proteinGrams}g`;

    return { baseCals, proteinGrams };
  }

  const activitySelect = document.getElementById("profile-activity");
  const goalSelect = document.getElementById("profile-goal");
  if (activitySelect) activitySelect.addEventListener("change", recalcTargets);
  if (goalSelect) goalSelect.addEventListener("change", recalcTargets);

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const targets = recalcTargets();

      // Collect allergies
      const allergyCheckboxes = document.querySelectorAll("input[name='allergies']:checked");
      const allergies = Array.from(allergyCheckboxes).map(c => c.value);

      AppState.profile.diet = selectedDiet;
      AppState.profile.allergies = allergies;
      AppState.profile.activity = activitySelect.value;
      AppState.profile.goal = goalSelect.value;
      AppState.profile.calorieTarget = targets.baseCals;
      AppState.profile.proteinTarget = targets.proteinGrams;
      AppState.profile.carbsTarget = Math.round((targets.baseCals * 0.45) / 4);
      AppState.profile.fatTarget = Math.round((targets.baseCals * 0.25) / 9);

      // Tailor meal plan if vegetarian or vegan
      if (selectedDiet === "Vegetarian" || selectedDiet === "Vegan") {
        Object.keys(AppState.mealPlan).forEach(day => {
          AppState.mealPlan[day].Lunch = RECIPES_DATABASE[1]; // Tofu Curry
          AppState.mealPlan[day].Dinner = RECIPES_DATABASE[4]; // Harissa Cauliflower
        });
      }

      // Re-render related sections
      initNutritionOverview();
      if (window.renderActiveDayMeals) window.renderActiveDayMeals();

      showToast(`Nutrition plan personalized! Daily target: ${targets.baseCals} kcal (${selectedDiet})`);
    });
  }

  recalcTargets();
}

// ==========================================
// 10. SECTION 7: MEAL PREP WORKFLOW & CHECKLIST
// ==========================================

function initMealPrepWorkflow() {
  const checklistContainer = document.getElementById("prep-checklist-container");
  const prepProgressMeter = document.getElementById("prep-progress-meter");
  const prepProgressText = document.getElementById("prep-progress-text");

  function renderPrepChecklist() {
    if (!checklistContainer) return;

    const total = AppState.prepChecklist.length;
    const completed = AppState.prepChecklist.filter(item => item.done).length;
    const pct = Math.round((completed / total) * 100);

    if (prepProgressMeter) prepProgressMeter.style.width = `${pct}%`;
    if (prepProgressText) prepProgressText.textContent = `${completed}/${total} Tasks Done (${pct}%)`;

    checklistContainer.innerHTML = AppState.prepChecklist.map(task => `
      <div class="flex items-center justify-between p-3 rounded-xl bg-ivory-50 dark:bg-plum-900/60 border border-plum-600/10 dark:border-plum-800 hover:border-terracotta-400 transition">
        <div class="flex items-center gap-3">
          <input 
            type="checkbox" 
            id="task-${task.id}"
            ${task.done ? 'checked' : ''}
            onchange="togglePrepTask('${task.id}')"
            class="w-4 h-4 rounded text-terracotta-500 focus:ring-terracotta-400"
          />
          <label 
            for="task-${task.id}" 
            class="text-sm cursor-pointer select-none font-medium ${
              task.done 
                ? 'line-through text-plum-300 dark:text-ivory-400' 
                : 'text-plum-600 dark:text-ivory-100'
            }"
          >
            ${task.task}
          </label>
        </div>
        <span class="text-[11px] font-bold ${task.done ? 'text-emerald-500' : 'text-plum-400 dark:text-ivory-400'}">
          ${task.done ? 'Ready ✓' : 'Pending'}
        </span>
      </div>
    `).join("");
  }

  window.togglePrepTask = function(id) {
    const task = AppState.prepChecklist.find(t => t.id === id);
    if (task) {
      task.done = !task.done;
      renderPrepChecklist();
      if (task.done) {
        showToast("Task marked complete! Great prep rhythm.");
      }
    }
  };

  renderPrepChecklist();
}

// ==========================================
// 11. SECTION 8: NUTRITION INSIGHTS & PROGRESS
// ==========================================

function initNutritionInsights() {
  const rangeSelector = document.getElementById("insights-range-selector");
  const chartBars = document.querySelectorAll(".insight-calorie-bar");
  const streakText = document.getElementById("insight-streak-text");
  const consistencyRate = document.getElementById("insight-consistency-rate");

  const insightSets = {
    "this-week": {
      calories: [2100, 1980, 2150, 2050, 2120, 2200, 2080],
      days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      streak: "18 Days Active",
      rate: "94% On-Track"
    },
    "last-week": {
      calories: [2050, 2100, 1950, 2200, 2180, 2250, 2140],
      days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      streak: "11 Days Active",
      rate: "91% On-Track"
    },
    "monthly-avg": {
      calories: [2080, 2050, 2120, 2100, 2140, 2210, 2090],
      days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      streak: "30-Day Average",
      rate: "93% Overall Consistency"
    }
  };

  function updateInsights(range) {
    const data = insightSets[range] || insightSets["this-week"];
    const target = AppState.profile.calorieTarget || 2150;

    if (streakText) streakText.textContent = data.streak;
    if (consistencyRate) consistencyRate.textContent = data.rate;

    chartBars.forEach((bar, index) => {
      const cal = data.calories[index] || 2100;
      const heightPct = Math.min(100, Math.round((cal / 2500) * 100));
      bar.style.height = `${heightPct}%`;
      bar.setAttribute("data-tooltip", `${data.days[index]}: ${cal} kcal`);
      
      const valLabel = bar.querySelector(".bar-val-label");
      if (valLabel) valLabel.textContent = `${cal}`;
    });
  }

  if (rangeSelector) {
    rangeSelector.addEventListener("change", (e) => {
      AppState.insightsRange = e.target.value;
      updateInsights(e.target.value);
      showToast(`Loaded insights for ${e.target.options[e.target.selectedIndex].text}`);
    });
  }

  updateInsights("this-week");
}

// ==========================================
// 12. SECTION 9: ACCOUNT ACCESS & PERSONAL WORKSPACE
// ==========================================

function initAuthAndWorkspace() {
  const authModal = document.getElementById("auth-modal");
  const authTabSignIn = document.getElementById("auth-tab-signin");
  const authTabRegister = document.getElementById("auth-tab-register");
  const formSignIn = document.getElementById("form-signin");
  const formRegister = document.getElementById("form-register");
  const passwordRecoveryModal = document.getElementById("password-recovery-modal");
  const workspaceView = document.getElementById("personal-workspace-view");
  const authPromptView = document.getElementById("auth-prompt-view");

  // Switch tabs
  if (authTabSignIn && authTabRegister) {
    authTabSignIn.addEventListener("click", () => {
      authTabSignIn.classList.add("border-plum-600", "dark:border-terracotta-400", "text-plum-600", "dark:text-terracotta-400");
      authTabSignIn.classList.remove("border-transparent", "text-plum-400");
      authTabRegister.classList.remove("border-plum-600", "dark:border-terracotta-400", "text-plum-600", "dark:text-terracotta-400");
      authTabRegister.classList.add("border-transparent", "text-plum-400");

      formSignIn.classList.remove("hidden");
      formRegister.classList.add("hidden");
    });

    authTabRegister.addEventListener("click", () => {
      authTabRegister.classList.add("border-plum-600", "dark:border-terracotta-400", "text-plum-600", "dark:text-terracotta-400");
      authTabRegister.classList.remove("border-transparent", "text-plum-400");
      authTabSignIn.classList.remove("border-plum-600", "dark:border-terracotta-400", "text-plum-600", "dark:text-terracotta-400");
      authTabSignIn.classList.add("border-transparent", "text-plum-400");

      formRegister.classList.remove("hidden");
      formSignIn.classList.add("hidden");
    });
  }

  // Password Visibility Toggle
  window.togglePasswordVisibility = function(inputId, btn) {
    const input = document.getElementById(inputId);
    if (!input) return;
    if (input.type === "password") {
      input.type = "text";
      btn.innerHTML = `<svg class="w-4 h-4 text-plum-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"></path></svg>`;
    } else {
      input.type = "password";
      btn.innerHTML = `<svg class="w-4 h-4 text-plum-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>`;
    }
  };

  // Sign In Form Submission
  if (formSignIn) {
    formSignIn.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("signin-email").value.trim();
      const pass = document.getElementById("signin-password").value;

      if (!validateEmail(email)) {
        showToast("Please enter a valid email address.", true);
        return;
      }
      if (pass.length < 6) {
        showToast("Password must be at least 6 characters.", true);
        return;
      }

      // Demo login success
      loginUser({
        name: email.split("@")[0].charAt(0).toUpperCase() + email.split("@")[0].slice(1),
        email: email,
        plan: "Nourishly Plus",
        savedRecipesCount: 6
      });
      closeAuthModal();
      showToast(`Welcome back, ${AppState.user.name}!`);
    });
  }

  // Register Form Submission
  if (formRegister) {
    formRegister.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("register-name").value.trim();
      const email = document.getElementById("register-email").value.trim();
      const pass = document.getElementById("register-password").value;

      if (!name) {
        showToast("Please enter your name.", true);
        return;
      }
      if (!validateEmail(email)) {
        showToast("Please enter a valid email address.", true);
        return;
      }
      if (pass.length < 6) {
        showToast("Password must be at least 6 characters.", true);
        return;
      }

      loginUser({
        name: name,
        email: email,
        plan: "Nourishly Personal",
        savedRecipesCount: 4
      });
      closeAuthModal();
      showToast(`Account created! Welcome to Nourishly, ${name}.`);
    });
  }

  // 1-Click Demo Login
  window.demoQuickSignIn = function(role) {
    const demoProfiles = {
      athlete: { name: "Marcus Reid", email: "marcus.prep@nourishly.demo", plan: "High-Protein Athlete" },
      wellness: { name: "Elena Vance", email: "elena.wellness@nourishly.demo", plan: "Holistic Health Pro" }
    };

    const selected = demoProfiles[role] || demoProfiles.wellness;
    loginUser({
      name: selected.name,
      email: selected.email,
      plan: selected.plan,
      savedRecipesCount: 8
    });
    closeAuthModal();
    showToast(`Signed in as ${selected.name} (Simulated Demo Session)`);
  };

  // Password Recovery Submit
  const recoveryForm = document.getElementById("recovery-form");
  if (recoveryForm) {
    recoveryForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const recEmail = document.getElementById("recovery-email").value.trim();
      if (!validateEmail(recEmail)) {
        showToast("Please enter a valid email address.", true);
        return;
      }
      closePasswordRecoveryModal();
      showToast(`Password recovery link sent to ${recEmail} (Simulated)`);
    });
  }

  // Render Workspace State
  renderWorkspaceUI();
}

function loginUser(userData) {
  AppState.user = userData;
  localStorage.setItem("nourishly_user", JSON.stringify(userData));
  renderWorkspaceUI();
  updateHeaderAuthState();
}

window.logoutUser = function() {
  AppState.user = null;
  localStorage.removeItem("nourishly_user");
  renderWorkspaceUI();
  updateHeaderAuthState();
  showToast("You have been signed out.");
};

function renderWorkspaceUI() {
  const workspaceView = document.getElementById("personal-workspace-view");
  const authPromptView = document.getElementById("auth-prompt-view");

  if (!workspaceView || !authPromptView) return;

  if (AppState.user) {
    workspaceView.classList.remove("hidden");
    authPromptView.classList.add("hidden");

    document.getElementById("workspace-user-name").textContent = AppState.user.name;
    document.getElementById("workspace-user-email").textContent = AppState.user.email;
    document.getElementById("workspace-user-plan").textContent = AppState.user.plan || "Nourishly Plan";
    document.getElementById("workspace-current-diet").textContent = AppState.profile.diet;
    document.getElementById("workspace-calorie-goal").textContent = `${AppState.profile.calorieTarget} kcal`;
  } else {
    workspaceView.classList.add("hidden");
    authPromptView.classList.remove("hidden");
  }

  if (window.renderPhonePreview) window.renderPhonePreview();
}

function updateHeaderAuthState() {
  const authHeaderContainer = document.getElementById("header-auth-container");
  const mobileDrawerAuth = document.getElementById("mobile-drawer-auth");

  if (authHeaderContainer) {
    if (AppState.user) {
      authHeaderContainer.innerHTML = `
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-full bg-plum-600 dark:bg-terracotta-400 text-ivory-100 dark:text-plum-950 font-bold flex items-center justify-center text-xs shadow-sm">
            ${AppState.user.name.charAt(0)}
          </div>
          <span class="text-xs font-bold text-plum-600 dark:text-ivory-100 whitespace-nowrap">
            ${AppState.user.name.split(" ")[0]}
          </span>
          <button 
            onclick="logoutUser()"
            class="text-xs px-3 py-1.5 rounded-full border border-plum-600/20 dark:border-ivory-200/20 text-plum-500 dark:text-ivory-300 hover:text-rose-500 dark:hover:text-rose-400 transition whitespace-nowrap"
          >
            Sign Out
          </button>
        </div>
      `;
    } else {
      authHeaderContainer.innerHTML = `
        <button 
          onclick="openAuthModal('signin')"
          class="px-4 py-2 text-xs font-bold rounded-full bg-plum-600 hover:bg-plum-700 dark:bg-terracotta-400 dark:hover:bg-terracotta-500 text-ivory-100 dark:text-plum-950 shadow-md transition-all duration-200 whitespace-nowrap"
        >
          Sign In / Demo
        </button>
      `;
    }
  }

  if (mobileDrawerAuth) {
    if (AppState.user) {
      mobileDrawerAuth.innerHTML = `
        <div class="p-3 rounded-xl bg-ivory-200/70 dark:bg-plum-900 border border-plum-600/10 dark:border-plum-800 flex items-center justify-between">
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-full bg-plum-600 dark:bg-terracotta-400 text-ivory-100 dark:text-plum-950 font-bold flex items-center justify-center text-xs shadow-sm">
              ${AppState.user.name.charAt(0)}
            </div>
            <div class="min-w-0">
              <p class="text-xs font-bold text-plum-600 dark:text-ivory-100 truncate">${AppState.user.name}</p>
              <p class="text-[10px] text-terracotta-600 dark:text-terracotta-400 font-semibold">Active Session</p>
            </div>
          </div>
          <button 
            onclick="logoutUser()"
            class="text-xs px-2.5 py-1 rounded-lg border border-rose-300 text-rose-600 dark:text-rose-400 font-bold transition"
          >
            Sign Out
          </button>
        </div>
      `;
    } else {
      mobileDrawerAuth.innerHTML = `
        <button 
          onclick="openAuthModal('signin'); document.getElementById('mobile-menu-drawer').classList.add('hidden');"
          class="w-full py-2.5 px-4 text-xs font-bold rounded-xl bg-plum-600 hover:bg-plum-700 dark:bg-terracotta-400 dark:hover:bg-terracotta-500 text-ivory-100 dark:text-plum-950 shadow-md transition flex items-center justify-center gap-2 whitespace-nowrap"
        >
          <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/></svg>
          <span class="whitespace-nowrap">Sign In / Demo</span>
        </button>
      `;
    }
  }
}

// Global Modal Controls
window.openAuthModal = function(tab = "signin") {
  const modal = document.getElementById("auth-modal");
  if (!modal) return;
  modal.classList.remove("hidden");

  if (tab === "signin") {
    document.getElementById("auth-tab-signin")?.click();
  } else {
    document.getElementById("auth-tab-register")?.click();
  }
};

window.closeAuthModal = function() {
  const modal = document.getElementById("auth-modal");
  if (modal) modal.classList.add("hidden");
};

window.openPasswordRecoveryModal = function() {
  closeAuthModal();
  const modal = document.getElementById("password-recovery-modal");
  if (modal) modal.classList.remove("hidden");
};

window.closePasswordRecoveryModal = function() {
  const modal = document.getElementById("password-recovery-modal");
  if (modal) modal.classList.add("hidden");
};

// Legal Modals
window.openLegalModal = function(type) {
  const modal = document.getElementById("legal-modal");
  const title = document.getElementById("legal-modal-title");
  const content = document.getElementById("legal-modal-content");
  if (!modal) return;

  if (type === "privacy") {
    title.textContent = "Nourishly Privacy Policy";
    content.innerHTML = `
      <p class="mb-3">Last updated: October 2026</p>
      <p class="mb-3">At Nourishly, we treat your nutritional preferences and personal wellness data with the utmost discretion and care. We collect only the information necessary to provide tailored meal plans, smart grocery lists, and personalized macro breakdowns.</p>
      <p class="mb-3">All health data stored in this client demonstration resides locally in your browser session. We do not sell or monetize personal dietary logs to third-party advertisers.</p>
      <p>For questions regarding your privacy, contact privacy@nourishly.health.</p>
    `;
  } else {
    title.textContent = "Nourishly Terms of Service";
    content.innerHTML = `
      <p class="mb-3">Last updated: October 2026</p>
      <p class="mb-3">1. Nutrition Planning & Advisory: Nourishly provides computational lifestyle recommendations and recipe organization. The nutritional estimations are not intended as medical advice or clinical diagnostics. Always consult a licensed clinical nutritionist or physician for specific medical conditions.</p>
      <p class="mb-3">2. User Conduct: Users agree to use the service for personal meal-prep planning and healthy culinary habits.</p>
      <p>3. Intellectual Property: All culinary curation, branding, and imagery are proprietary to Nourishly Inc.</p>
    `;
  }

  modal.classList.remove("hidden");
};

window.closeLegalModal = function() {
  const modal = document.getElementById("legal-modal");
  if (modal) modal.classList.add("hidden");
};

// Filter shortcut from footer
window.filterRecipesAndScroll = function(category) {
  const recipesSection = document.getElementById("recipes");
  if (recipesSection) {
    recipesSection.scrollIntoView({ behavior: "smooth" });
  }
  const btn = document.querySelector(`.recipe-filter-btn[data-category="${category}"]`);
  if (btn) btn.click();
};

// ==========================================
// 13. UTILITIES & TOAST NOTIFICATION
// ==========================================

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showToast(message, isError = false) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `animate-toast px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 text-xs font-semibold backdrop-blur-md border ${
    isError
      ? 'bg-rose-50 text-rose-800 border-rose-200 dark:bg-rose-950 dark:text-rose-100 dark:border-rose-800'
      : 'bg-ivory-100/95 dark:bg-plum-900/95 text-plum-600 dark:text-ivory-100 border-plum-600/10 dark:border-terracotta-400/30'
  }`;

  toast.innerHTML = `
    <span class="w-2 h-2 rounded-full ${isError ? 'bg-rose-500' : 'bg-terracotta-400'}"></span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translate(-50%, -20px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// Back to Top Button
function initBackToTop() {
  const btn = document.getElementById("back-to-top-btn");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      btn.classList.remove("opacity-0", "pointer-events-none");
      btn.classList.add("opacity-100");
    } else {
      btn.classList.add("opacity-0", "pointer-events-none");
      btn.classList.remove("opacity-100");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// ==========================================
// 14. SECTION 9: MOBILE COMPANION APP PREVIEW
// ==========================================

function initMobileAppPreview() {
  const screen = document.getElementById("phone-screen-content");
  const tabs = document.querySelectorAll(".phone-tab-btn");
  if (!screen) return;

  let activeTab = "today";
  const slots = ["Breakfast", "Lunch", "Dinner", "Snack"];

  function renderToday() {
    const meals = AppState.mealPlan[AppState.currentDay] || {};
    const target = AppState.profile.calorieTarget || 2150;
    let kcal = 0;
    slots.forEach(s => { if (meals[s]) kcal += meals[s].calories; });
    const pct = Math.min(100, Math.round((kcal / target) * 100));

    return `
      <div class="rounded-2xl bg-plum-600 dark:bg-plum-800 text-ivory-100 p-4 mb-3">
        <p class="text-[10px] uppercase tracking-wider font-bold text-terracotta-200">${AppState.currentDay} · Planned</p>
        <p class="text-2xl font-black mt-0.5">${kcal.toLocaleString()} <span class="text-[11px] font-semibold opacity-75">/ ${target.toLocaleString()} kcal</span></p>
        <div class="h-1.5 rounded-full bg-white/15 mt-2 overflow-hidden">
          <div class="h-full rounded-full bg-terracotta-400 transition-all duration-500" style="width: ${pct}%;"></div>
        </div>
      </div>
      <div class="space-y-2">
        ${slots.map(slot => {
          const meal = meals[slot];
          if (!meal) {
            return `
              <div class="p-2.5 rounded-xl border border-dashed border-plum-600/20 dark:border-ivory-100/15 text-[11px] font-semibold text-plum-400 dark:text-ivory-400">
                ${slot} · Not planned yet
              </div>`;
          }
          return `
            <div class="flex items-center gap-2.5 p-2 rounded-xl bg-white dark:bg-plum-900 border border-plum-600/10 dark:border-plum-800">
              <img src="${meal.image}" alt="" class="w-10 h-10 rounded-lg object-cover flex-shrink-0" loading="lazy" onerror="this.src='assets/images/recipe_salmon.jpg'" />
              <div class="min-w-0 flex-1">
                <p class="text-[9px] uppercase font-bold tracking-wider text-terracotta-600 dark:text-terracotta-400">${slot}</p>
                <p class="text-[11px] font-bold truncate text-plum-600 dark:text-ivory-100">${meal.name}</p>
              </div>
              <span class="text-[10px] font-bold text-plum-400 dark:text-ivory-300 whitespace-nowrap">${meal.calories} kcal</span>
            </div>`;
        }).join("")}
      </div>`;
  }

  function renderGrocery() {
    const total = AppState.groceryList.length;
    const remaining = AppState.groceryList.filter(i => !i.checked);
    const pct = total ? Math.round(((total - remaining.length) / total) * 100) : 0;
    const shown = remaining.slice(0, 6);

    return `
      <div class="rounded-2xl bg-plum-600 dark:bg-plum-800 text-ivory-100 p-4 mb-3">
        <p class="text-[10px] uppercase tracking-wider font-bold text-terracotta-200">Grocery Mode</p>
        <p class="text-2xl font-black mt-0.5">${remaining.length} <span class="text-[11px] font-semibold opacity-75">items left</span></p>
        <div class="h-1.5 rounded-full bg-white/15 mt-2 overflow-hidden">
          <div class="h-full rounded-full bg-terracotta-400 transition-all duration-500" style="width: ${pct}%;"></div>
        </div>
      </div>
      ${shown.length === 0 ? `
        <div class="text-center py-8">
          <p class="text-2xl" aria-hidden="true">🧺</p>
          <p class="text-xs font-bold text-plum-600 dark:text-ivory-100 mt-2">All picked — nice work!</p>
        </div>
      ` : `
        <ul class="space-y-1.5">
          ${shown.map(item => `
            <li>
              <button type="button" data-id="${escapeHtml(item.id)}" class="phone-grocery-item w-full flex items-center gap-2.5 p-2 rounded-xl bg-white dark:bg-plum-900 border border-plum-600/10 dark:border-plum-800 text-left hover:border-terracotta-400 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-400">
                <span class="w-4 h-4 rounded-full border-2 border-terracotta-400 flex-shrink-0" aria-hidden="true"></span>
                <span class="min-w-0 flex-1">
                  <span class="block text-[11px] font-bold truncate text-plum-600 dark:text-ivory-100">${escapeHtml(item.name)}</span>
                  <span class="block text-[10px] text-plum-400 dark:text-ivory-400 truncate">${escapeHtml(item.quantity)}</span>
                </span>
                <span class="sr-only">Mark as picked</span>
              </button>
            </li>
          `).join("")}
        </ul>
        ${remaining.length > shown.length ? `<p class="text-[10px] text-center text-plum-400 dark:text-ivory-400 mt-2">+${remaining.length - shown.length} more on your full list</p>` : ""}
      `}`;
  }

  function renderWaterTab() {
    const ml = AppState.waterLoggedMl;
    const target = AppState.waterTargetMl;
    const pct = Math.min(100, Math.round((ml / target) * 100));

    return `
      <div class="flex flex-col items-center pt-3">
        <div class="relative w-28 h-40 rounded-t-lg rounded-b-[2rem] border-4 border-plum-600/15 dark:border-ivory-100/15 overflow-hidden bg-white dark:bg-plum-900" role="img" aria-label="Water glass ${pct}% full">
          <div class="absolute bottom-0 left-0 right-0 bg-sky-400/80 transition-all duration-500" style="height: ${pct}%;"></div>
        </div>
        <p class="text-2xl font-black text-plum-600 dark:text-ivory-100 mt-4">${(ml / 1000).toFixed(2)} L</p>
        <p class="text-[11px] font-semibold text-plum-400 dark:text-ivory-400">${pct}% of ${(target / 1000).toFixed(1)} L goal</p>
        <button type="button" id="phone-water-add" class="mt-4 px-5 py-2 rounded-full bg-plum-600 text-ivory-100 dark:bg-terracotta-400 dark:text-plum-950 text-xs font-bold shadow-md hover:bg-plum-700 dark:hover:bg-terracotta-500 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-400">
          + 250 ml
        </button>
      </div>`;
  }

  function render() {
    // Greeting (user-provided name -> textContent only)
    const greeting = document.getElementById("phone-greeting");
    if (greeting) {
      greeting.textContent = AppState.user ? `Hi, ${AppState.user.name.split(" ")[0]}` : "Good morning";
    }

    const floatGrocery = document.getElementById("phone-float-grocery");
    if (floatGrocery) {
      const left = AppState.groceryList.filter(i => !i.checked).length;
      floatGrocery.textContent = `${left} item${left === 1 ? "" : "s"} left to pick`;
    }

    if (activeTab === "grocery") screen.innerHTML = renderGrocery();
    else if (activeTab === "water") screen.innerHTML = renderWaterTab();
    else screen.innerHTML = renderToday();

    screen.querySelectorAll(".phone-grocery-item").forEach(btn => {
      btn.addEventListener("click", () => {
        const item = AppState.groceryList.find(i => i.id === btn.dataset.id);
        if (!item) return;
        window.toggleGroceryItem(item.id); // re-renders the full list, which re-renders this preview
        showToast(`Picked "${item.name}" — synced to your grocery list.`);
      });
    });

    const waterBtn = document.getElementById("phone-water-add");
    if (waterBtn) {
      waterBtn.addEventListener("click", () => {
        AppState.waterLoggedMl = Math.min(AppState.waterLoggedMl + 250, 4000);
        if (window.syncWaterFromState) window.syncWaterFromState();
        render();
        showToast("+250 ml logged from the mobile preview.");
      });
    }
  }

  tabs.forEach(btn => {
    btn.addEventListener("click", () => {
      activeTab = btn.dataset.phoneTab;
      tabs.forEach(t => {
        const isActive = t === btn;
        t.setAttribute("aria-selected", String(isActive));
        t.classList.toggle("phone-tab-active", isActive);
      });
      screen.setAttribute("aria-labelledby", btn.id);
      render();
    });
  });

  window.renderPhonePreview = render;
  render();
}

function initAppWaitlist() {
  const STORAGE_KEY = "nourishly_waitlist";
  const form = document.getElementById("app-waitlist-form");
  const emailInput = document.getElementById("waitlist-email");
  const platformSelect = document.getElementById("waitlist-platform");
  const errorEl = document.getElementById("waitlist-error");
  const successEl = document.getElementById("app-waitlist-success");
  const successEmail = document.getElementById("waitlist-success-email");
  const successPlatform = document.getElementById("waitlist-success-platform");
  const resetBtn = document.getElementById("waitlist-reset-btn");
  if (!form || !emailInput) return;

  function clearError() {
    errorEl.textContent = "";
    errorEl.classList.add("hidden");
    emailInput.removeAttribute("aria-invalid");
  }

  function showSuccess(entry) {
    form.classList.add("hidden");
    successEl.classList.remove("hidden");
    successEmail.textContent = entry.email;
    successPlatform.textContent = entry.platform;
  }

  function showForm() {
    successEl.classList.add("hidden");
    form.classList.remove("hidden");
  }

  let saved = null;
  try {
    saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
  } catch (err) {
    saved = null;
  }
  if (saved && saved.email) showSuccess(saved);

  emailInput.addEventListener("input", clearError);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    if (!validateEmail(email)) {
      errorEl.textContent = email ? "That email doesn't look right — please check it." : "Please enter your email address.";
      errorEl.classList.remove("hidden");
      emailInput.setAttribute("aria-invalid", "true");
      emailInput.focus();
      return;
    }

    clearError();
    const entry = { email, platform: platformSelect.value, joinedAt: new Date().toISOString() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entry));
    showSuccess(entry);
    showToast(`You're on the ${entry.platform} beta waitlist (demo — saved in this browser only).`);
  });

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      localStorage.removeItem(STORAGE_KEY);
      emailInput.value = "";
      showForm();
      emailInput.focus();
    });
  }

  document.querySelectorAll(".store-badge-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      showToast(`Nourishly for ${btn.dataset.store} isn't released yet — join the beta waitlist to hear first.`);
      if (!form.classList.contains("hidden")) emailInput.focus();
    });
  });
}

// ==========================================
// 15. SECTION 10: FREQUENTLY ASKED QUESTIONS
// ==========================================

const FAQ_ITEMS = [
  {
    id: "faq-plan",
    q: "How does Nourishly build my weekly meal plan?",
    a: "Pick a day in the Weekly Meal Planner and add or replace breakfast, lunch, dinner and snacks from the recipe library. You can also set your preferences in Build Your Nutrition Profile and press Personalize My Plan for a sample plan. Daily calories and protein update as soon as you swap a meal."
  },
  {
    id: "faq-diet",
    q: "Can I follow a vegetarian or vegan diet?",
    a: "Yes. Choose Plant-Rich Vegetarian or 100% Plant-Based in your profile and the sample plan switches lunches and dinners to plant-based dishes. Breakfasts and snacks may still include eggs or dairy, so review those slots and replace them if you eat fully vegan."
  },
  {
    id: "faq-grocery",
    q: "How is the grocery list created?",
    a: "Press Sync with Active Meal Plan and Nourishly collects the ingredients from every planned meal, removes duplicates and groups them by aisle. You can then add, edit, remove and check off items. In this demo, a synced list shows up to 15 unique ingredients."
  },
  {
    id: "faq-medical",
    q: "Are the calorie and macro targets medical advice?",
    a: "No. Targets are general estimates based on your activity level and goal. They are not a diagnosis or a clinical nutrition plan. If you have a medical condition, are pregnant, or are managing an eating disorder, please talk to a doctor or registered dietitian."
  },
  {
    id: "faq-data",
    q: "Where is my data stored?",
    a: "This is a demo with no server. Your theme, demo sign-in and beta-waitlist email are saved in your browser's local storage. Meal plans, grocery lists and checklists reset when you reload the page. Local storage is not secure, so please don't enter a real password."
  },
  {
    id: "faq-app",
    q: "Is there a Nourishly mobile app?",
    a: "The mobile companion is in private beta and isn't in the app stores yet. The phone preview above mirrors your planner, grocery list and water tracker live. Join the waitlist to be notified — in this demo the waitlist is stored only in your browser and no emails are sent."
  },
  {
    id: "faq-time",
    q: "How much time does weekly meal prep take?",
    a: "The sample Sunday routine is built around a focused session of roughly 45 minutes: grains, proteins and roasted vegetables cook at the same time while you wash greens and mix dressings. Your time will vary with batch size and kitchen setup."
  }
];

function initFaq() {
  const list = document.getElementById("faq-list");
  const search = document.getElementById("faq-search");
  const count = document.getElementById("faq-count");
  if (!list) return;

  let openId = FAQ_ITEMS[0].id;

  function applyOpenState() {
    list.querySelectorAll(".faq-item").forEach(el => {
      const isOpen = el.dataset.faq === openId;
      el.classList.toggle("faq-open", isOpen);
      el.querySelector(".faq-toggle").setAttribute("aria-expanded", String(isOpen));
      el.querySelector(".faq-panel").classList.toggle("open", isOpen);
    });
  }

  function render() {
    const query = (search ? search.value : "").toLowerCase().trim();
    const visible = FAQ_ITEMS.filter(item =>
      !query || item.q.toLowerCase().includes(query) || item.a.toLowerCase().includes(query)
    );

    if (count) {
      count.textContent = query
        ? `${visible.length} of ${FAQ_ITEMS.length} questions match`
        : `${FAQ_ITEMS.length} questions`;
    }

    if (visible.length === 0) {
      list.innerHTML = `
        <div class="rounded-2xl border border-dashed border-plum-600/20 dark:border-plum-700 p-10 text-center">
          <p id="faq-empty-msg" class="text-sm font-semibold text-plum-500 dark:text-ivory-300"></p>
          <button type="button" id="faq-clear-btn" class="mt-4 px-4 py-2 text-xs font-bold rounded-full bg-terracotta-400 text-plum-950 hover:bg-terracotta-500 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-plum-600">Clear search</button>
        </div>`;
      document.getElementById("faq-empty-msg").textContent = `No answers found for "${search.value.trim()}".`;
      document.getElementById("faq-clear-btn").addEventListener("click", () => {
        search.value = "";
        render();
        search.focus();
      });
      return;
    }

    list.innerHTML = visible.map(item => `
      <div class="faq-item rounded-2xl border border-plum-600/10 dark:border-plum-800 bg-white/95 dark:bg-plum-900/70 shadow-sm transition-colors" data-faq="${item.id}">
        <h3>
          <button
            type="button"
            id="${item.id}-btn"
            class="faq-toggle w-full flex items-center justify-between gap-4 px-5 py-4 text-left text-sm sm:text-base font-bold text-plum-600 dark:text-ivory-100 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-400"
            aria-expanded="false"
            aria-controls="${item.id}-panel"
          >
            <span>${item.q}</span>
            <span class="faq-chevron flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-ivory-200 dark:bg-plum-800 text-plum-600 dark:text-terracotta-300" aria-hidden="true">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
            </span>
          </button>
        </h3>
        <div id="${item.id}-panel" class="faq-panel" role="region" aria-labelledby="${item.id}-btn">
          <div>
            <p class="px-5 pb-5 text-sm text-plum-500 dark:text-ivory-300 leading-relaxed">${item.a}</p>
          </div>
        </div>
      </div>
    `).join("");

    list.querySelectorAll(".faq-toggle").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.closest(".faq-item").dataset.faq;
        openId = openId === id ? null : id;
        applyOpenState();
      });
    });

    applyOpenState();
  }

  if (search) search.addEventListener("input", render);
  render();
}
