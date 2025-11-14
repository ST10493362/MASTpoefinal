# MASTpoefinal
youtube link:https://youtu.be/6MPXBQxShBg?si=dEASP-exBkjVUfaS

Design and theme
Background: #1A1A1A
Card: #2A2A2A
Accent Blue: #0096FF
Text: White #FFFFFF
Serif font everywhere (fontFamily: 'serif') for that classy, Roman vibe.

Functional Updates

1. Average Price by Course on Home screen
Uses a mix of loops: for to start totals, while to sum prices, for...in to calculate averages.
Encapsulated in a handy calculateAverages function.

2. Add / Remove Menu Items
Now on its own screen (AddItemScreen.tsx)
Chef can add new items with name, description, category & price
Remove button lets the chef delete items easily

3. Menu Items Storage
Stored in menuItems state at app level
Add/Remove updates this one array, so everything stays in sync

4. Guest Menu Filters 
Filter by All, Starters, Mains, Desserts, Drinks
Uses FlatList so scrolling works perfectly

5. Smooth Scrolling Everywhere
HomeScreen & AddItemScreen wrapped in ScrollView
MenuScreen uses FlatList as main scroller
No more weird scroll glitches!

6. TypeScript & Clean Code
calculateAverages is a named TypeScript function
Global COURSES array shared across screens
Loops & helper functions well-commented

7.Accessibility & UX
High-contrast buttons for readability
Form validation alerts for incorrect input

Files Changed 

App.tsx (root) — refactored to include a global COURSES array and app-level menu state. All menu items now live in one place!

screens/HomeScreen.tsx — title updated to "Christoffel Cooks", added our awesome logo, shows Average Price by Course using TypeScript loops (for, while, for...in), scrolling fixed with ScrollView, styled in dark theme.

screens/MenuScreen.tsx — improved filter buttons (All / Starters / Mains / Desserts / Drinks), scrolling fixed with FlatList, dark theme applied.

screens/AddItemScreen.tsx — chef can now add AND remove menu items from the global array. Scrolling fixed, form validation added.

screens/LoginScreen.tsx — chef login still works with demo credentials, updated dark theme styling.

assets/home.png — new logo for the Home screen (place it at ./assets/home.png).



    




