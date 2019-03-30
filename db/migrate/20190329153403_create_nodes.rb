class CreateNodes < ActiveRecord::Migration[5.1]
  def change
    create_table :nodes, id: :uuid do |t|
      t.references :canvas, foreign_key: true, type: :uuid, null: false
      t.string :title
      t.text :content
      t.timestamps
    end
  end
end
