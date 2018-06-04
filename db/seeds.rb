User.destroy_all

bennett = User.create!(
    name: "Bennett")
    
james = User.create!(
    name: "James")

bennett.recipes.create!(
    name: "lemonade fried chicken",
    cooking_directions: "fry it up",
    ingredients: "things")

bennett.recipes.create!(
    name: "fried cheese sticks",
    cooking_directions: "cook it",
    ingredients: "8 dry manicotti shells
    1 cup ricotta
    1/4 cup grated Parmesan
    1 clove garlic, grated
    1/2 teaspoon Italian seasoning
    1/4 teaspoon crushed red pepper flakes
    5 large eggs
    Kosher salt and freshly ground black pepper
    8 mozzarella cheese sticks
    3/4 cup all-purpose flour
    1 cup plain breadcrumbs
    Canola oil, for frying")
 
        
p "db seeded"
                
        
