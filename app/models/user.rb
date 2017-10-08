class User < ApplicationRecord
  scope :search_by, -> data do
    sql = []
    query = data.as_json.select do |key, value|
      sql << "#{key} LIKE '%#{value}%'" if value.present?
    end
    where(sql.join(" AND "))
  end
end
