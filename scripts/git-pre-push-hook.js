/* eslint-disable @typescript-eslint/no-var-requires */
const chalk = require('chalk');
const { resolve } = require('path');
const shell = require('shelljs');

const tasks = [
  { name: 'ESLint', task: 'npx vue-cli-service lint' },
  { name: 'Tests', task: 'npx vue-cli-service test:unit' },
  { name: 'Build', task: 'npx vue-cli-service build' },
];

const { info, error } = console;
const blankLine = () => info();

/**
 * @param {string} task
 * @param {string} name
 * @returns {void}
 */
const execTask = (task, name) => {
  info(`Running ${name}`);

  const { code } = shell.exec(task);

  if (code !== 0) {
    blankLine();
    error(chalk.red(`❌ ${name} failed`));
    shell.exec(1);
  }

  info(`✅ ${name} succeeded`);
  blankLine();
};

// #region MAIN
blankLine();
info(chalk.blue('>> pre-push hook'));

/* const rootPath = resolve(__dirname, '..');

// #region Prevent pushing to master
  info('Checking for current branch');

  // Can not use 'git branch --show-current' as it prints to stdout
  const gitHeadContent = readFileSync(resolve(rootPath, '.git/HEAD'));
  const branch = gitHeadContent
    .toString()
    .trim()
    .replace('ref: refs/heads/', '');

  if (branch === 'master') {
    blankLine();
    error(chalk.red('You are not allowed to push directly into master!'));
    info('Please use Pull Requests to update master branch.');
    blankLine();

    shell.exit(1);
  }

  info('✅ Branch is not master');
  blankLine();
  // #endregion */

// Only run tasks when last commit is none wip
const wipCommitRE = /^(revert: )?wip/;

info('Last commit message');
const msgOfLastCommit = shell
  .exec('git log -1  --pretty=%s')
  .toString()
  .trim();
blankLine();

if (!wipCommitRE.test(msgOfLastCommit)) {
  tasks.forEach(({ task, name }) => execTask(task, name));
} else {
  // We got work in progress commit
  const warnMsg = 'Warning! You are pushing a work in progress commit!\n'
      + 'Neither ESLint, Tests nor Build are executed and therefore\n'
      + 'the current codebase may be corrupted.';

  console.warn(chalk.keyword('orange')(warnMsg));
  blankLine();
}
// #endregion
