class CreateTrips < ActiveRecord::Migration[5.0]
  def change
    create_table :trips do |t|
      t.string :start
      t.string :end
      t.string :departure
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
