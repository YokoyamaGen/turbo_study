class CreateTest < ActiveRecord::Migration[7.0]
  def change
    create_table :tests do |t|
      t.float :sample_float
      t.decimal :sample_decimal, precision: 20, scale: 10

      t.timestamps
    end
  end
end
