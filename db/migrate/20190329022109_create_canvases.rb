class CreateCanvases < ActiveRecord::Migration[5.1]
  def change
    create_table :canvases, id: :uuid do |t|
      t.references :user, foreign_key: true, type: :uuid, null: false
      t.string :title, null: false
      t.timestamps
    end
  end
end
