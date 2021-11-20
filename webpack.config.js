const path = require('path');

const clientConfig = {
	target: 'web',
	mode: 'production',
	entry: './src/index.js',
	output: {
		filename: 'web.js',
		path: path.resolve(__dirname, 'dist'),
		library: {
			name: 'zeal-ui',
			type: 'umd',
		},
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env', '@babel/react'],
					plugins: [
						'transform-class-properties',
						'transform-object-rest-spread',
						'babel-plugin-styled-components',
					],
				},
			},
			{
				test: /\.css$/i,
				loader: 'css-loader',
				options: {
					modules: true,
				},
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx', '...'],
	},
	externals: {
		react: 'react',
		'react-dom': 'react-dom',
		'styled-components': {
			commonjs: 'styled-components',
			commonjs2: 'styled-components',
			amd: 'styled-components',
		},
	},
};

const serverConfig = {
	target: 'node',
	mode: 'production',
	entry: './src/index.js',
	output: {
		filename: 'node.js',
		path: path.resolve(__dirname, 'dist'),
		library: {
			name: 'zeal-ui',
			type: 'umd',
		},
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env', '@babel/react'],
					plugins: [
						'transform-class-properties',
						'transform-object-rest-spread',
						'babel-plugin-styled-components',
					],
				},
			},
			{
				test: /\.css$/i,
				loader: 'css-loader',
				options: {
					modules: true,
				},
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx', '...'],
	},
	externals: {
		react: 'react',
		'react-dom': 'react-dom',
		'styled-components': {
			commonjs: 'styled-components',
			commonjs2: 'styled-components',
			amd: 'styled-components',
		},
	},
};

module.exports = [clientConfig, serverConfig];
