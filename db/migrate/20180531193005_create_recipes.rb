class CreateRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :cooking_directions
      t.string :ingredients
      t.integer :recipe_api_id
      t.references :user, foreign_key: true
      t.timestamps
    end
  end
end
