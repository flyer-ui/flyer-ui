var md = require('markdown-it')();

md.use(require('markdown-it-container'), 'demo', {

  validate: function(params) {
    return params.trim().match(/^demo\s+(.*)$/);
  },

  render: function (tokens, idx) {

    var m = tokens[idx].info.trim().match(/^demo\s+(.*)$/);

    if (tokens[idx].nesting === 1) {
      // opening tag
      return '<details><summary>' + md.utils.escapeHtml(m[1]) + '</summary>\n';

    } else {
      // closing tag
      return '</details>\n';
    }
  }
});
console.log(md.render('::: demo click me\n*content*\n:::\n'))
// console.log(md.render('::: demo click me  ```html <h1></h1>```'));