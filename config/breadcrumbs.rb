# Root crumb
crumb :root do
  link 'HOME', root_path
end

# memos#index
crumb :memos do |memo,folder|
  if memo.present?
    link memo.folder.name, folder_memos_path(id: memo.folder.id)
    parent :root
  else
    link folder.name, folder_memos_path(id: folder.id)
    parent :root
  end
end

# memos#edit
crumb :edit_memos do |memo, folder|
  link memo.name, folder_memo_path(id: memo.id, folder_id: memo.folder_id)
  parent :memos, memo, folder
end

# memos#show
crumb :show_memos do |memo, folder|
  # binding.pry
  link memo.name, folder_memo_path(id: memo.id, folder_id: memo.folder_id)
  parent :memos, memo, folder
end

# crumb :projects do
#   link "Projects", projects_path
# end

# crumb :project do |project|
#   link project.name, project_path(project)
#   parent :projects
# end

# crumb :project_issues do |project|
#   link "Issues", project_issues_path(project)
#   parent :project, project
# end

# crumb :issue do |issue|
#   link issue.title, issue_path(issue)
#   parent :project_issues, issue.project
# end

# If you want to split your breadcrumbs configuration over multiple files, you
# can create a folder named `config/breadcrumbs` and put your configuration
# files there. All *.rb files (e.g. `frontend.rb` or `products.rb`) in that
# folder are loaded and reloaded automatically when you change them, just like
# this file (`config/breadcrumbs.rb`).
