var fs = require('fs');
var path = require('path');

// Get Methods
var methodsPath = path.resolve(__dirname, '../src/methods');
var methodsList = fs.readdirSync(methodsPath);

// Get Files
const hasDcoumenationRE = new RegExp('// doc\\.');

var documentList = methodsList
.map((method) => ({scope: method, file: getFile(method)}))
.filter(hasDocumentation);

function getFile (method) {
  return fs.readFileSync(
    path.resolve(methodsPath, method, 'index.js'),
    {encoding: 'utf8'}
  );
}

function hasDocumentation (doc) {
  return doc.file.match(hasDcoumenationRE);
}

// Parse file
var documentationGlobalMatchRE = new RegExp('// doc\\..*', 'g');
var documentationLineMatchRE = new RegExp('^// doc\\.([^:]+): (.+)$');
var methodMatchRE = new RegExp('^([^ ]+) (rav.[^(]+)\\((.*)\\)$');
var objectMatchRE = new RegExp('^([^ ]+) (\\w+) { (.*) }$');
var paramsMatchRE = new RegExp('^(\\w+)(\\??): (.*)$');

var methodScopes = documentList.map(function (doc) {
  var scope = doc.scope;
  var file = doc.file;

  var data = file.match(documentationGlobalMatchRE)
  .reduce(function (contents, comment) {
    var match = comment.match(documentationLineMatchRE);
    if ((match[1]) === 'method') contents.methods.push(match[2]);
    else contents[match[1]] = match[2];
    return contents;
  }, {methods: []});

  data.methods = data.methods.map(function (method) {
    var matches = method.match(methodMatchRE);
    var data = {
      name: matches[1],
      link: matches[1],
      reference: matches[2],
      params: matches[3].split(', ')
    };
    data.params = data.params.map(function (param) {
      var matches = param.match(paramsMatchRE);

      return {
        name: matches[1],
        required: !matches[2],
        type: matches[3]
      };
    });
    return data;
  });

  return {
    scope: scope,
    data: data
  };
});

// template docs
var templates = methodScopes.map(function (method) {
  var scope = method.scope;
  var data = method.data;

  var md =
`# ${scope}

${data.methods.map(method => (
`## [${method.name}](https://www.ravelry.com/api#${scope}_${method.link})

\`${method.reference}(${method.params.map(({name}) => name).join(', ')})\`

**Parameters:**
${method.params.map(
  param => (`- ${param.name}${param.required ? ' (required)' : ''}: \`${param.type}\``)
).join('\n')}
`
)).join('\n')}
`;
  return {
    scope: scope,
    data: md
  };
});

// write files
templates.forEach(function (template) {
  fs.writeFileSync(
    path.resolve(methodsPath, template.scope, 'readme.md'),
    template.data
  );
});
