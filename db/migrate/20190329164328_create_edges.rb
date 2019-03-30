class CreateEdges < ActiveRecord::Migration[5.1]
  def change
    create_table :edges, id: :uuid do |t|
      t.references :source, foreign_key: { to_table: :nodes }, type: :uuid, null: false
      t.references :target, foreign_key: { to_table: :nodes }, type: :uuid, null: false
      t.text :content
      t.timestamps
    end
  end
end
