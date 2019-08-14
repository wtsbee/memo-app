json.array! @memos_2 do |memo|
  json.id memo.id
  json.name memo.name
  json.content  memo.content
  json.folder_id memo.folder_id
end
