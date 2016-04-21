# module Jekyll
#   class SnippetConverter < Converter
#     priority :low

#     def matches(ext)
#       ext =~ /^\.md$/i
#     end

#     def output_ext(ext)
#       ".html"
#     end

#     def convert(content)
#       '<meta charset="utf-8" />' +
#       '<title>Snippets | 小胡子哥的 snippet 分享</title>' +
#       '<meta name="description" content="代码收藏夹，github 管理" />' +
#       '<meta name="keywords" content="分享技术,分享生活,snippets,barretlee,小胡子哥" />' +
#       '<meta name="email" content="barret.china@gmail.com" />' +
#       '<meta name="author" content="http://weibo.com/173248656" />' +
#       ' ' +
#       content
#     end
#   end
# end
