class Addcolumntobenches < ActiveRecord::Migration
  def change
    add_column :benches, :description, :text
  end
end
