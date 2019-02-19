var md = require('markdown-it')();

md.use(require('markdown-it-container'), 'demo', {

  validate: function(params) {
    return params.trim().match(/^demo\s+(.*)$/);
  },

  render: function (tokens, idx) {
    console.log(`${idx}-------`)
    console.log(JSON.stringify(tokens))
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
console.log(md.render(`:::demo click
  *here be dragons*\n
  :::\ndsd`
))
// console.log(md.render(':::demo click me\n*content*\n:::\n'));