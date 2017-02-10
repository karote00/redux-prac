// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      'vendor.js': /^(?!app)/, // Files that are not in `app` dir.
      'app.js': [
      	/^app/,
      	/^(app\/assets\/js)/
      ]
    }
  },
  stylesheets: {joinTo: 'app.css'}
};

exports.plugins = {
  babel: {
  	presets: ['es2015', 'es2016', 'react'],
  	ignore: [
      /^(bower_components|vendor)/,
      'app/legacyES5Code/**/*'
    ],
    pattern: /\.(es6|jsx|js)$/ // js and jsx are defaults.
  }
};

exports.paths = {
	watched: [
		'app'
	]
};

exports.conventions = {
	assets: ['app/assets']
};