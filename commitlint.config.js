const Configuration = {
	//	extends: ['@commitlint/config-conventional'],
	//	extends: ['cz'],
	extends: ['gitmoji'],
	rules: {
		'type-empty': [2, 'never'],
		'type-enum': [
			2,
			'always',
			[
				'feature',
				'fix',
				'docs',
				'style',
				'refactor',
				'test',
				'chore',
				'revert',
				'cli',
				'perf',
				'build',
				'init',
				'config',
				'mock',
				'code',
				'design',
				'assets',
				'license',
				'rename',
				'typos',
				'globe',
				'script',
				'dependencies',
				'secrets',
				'security',
				'deploy',
				'prune',
				'wip',
				'merge',
				'perf',
			],
		],
		'scope-empty': [0, 'never', 'none'],
		'body-max-line-length': [2, 'always', 100],
		'footer-max-line-length': [2, 'always', 100],
		'subject-full-stop': [0, 'never'],
		'subject-empty': [0, 'never'],
		'subject-case': [0, 'never'],
	},
};

export default Configuration;
