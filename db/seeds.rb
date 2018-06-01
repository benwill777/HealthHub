Recipe.destroy_all
Ingredient.destroy_all

bennett = User.create!(
    name: "Bennett")
    
    james = User.create!(
        name: "James")

        

    chicken = Recipe.create!(
        name: "lemonade fried chicken",
        cooking_directions: "fry it up",
        ingredients: "2 tablespoons grated lemon zest
        1/2 cup fresh lemon juice
        3 tablespoons packed light brown sugar
        1/3 cup buttermilk
        12 skin-on chicken drumsticks (3 1/2 to 4 1/4 pounds)
        Kosher salt and freshly ground black pepper
        2 cups panko
        1 tablespoon chopped fresh thyme
        Pinch of cayenne pepper
        1/4 cup mayonnaise
        Olive-oil cooking spray")

        fried_cheese = Recipe.create!(
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

            healthy_rice = Recipe.create!(
                name: "Healthy Cauliflower Rice",
                cooking_directions: "steam",
                ingredients: "1 large head cauliflower, separated into 1-inch florets
                3 tablespoons olive oil
                1 medium onion, finely diced
                Kosher salt
                2 tablespoons fresh parsley leaves, finely chopped
                Juice of 1/2 lemon")
                
        p "db seeded"
                
        
