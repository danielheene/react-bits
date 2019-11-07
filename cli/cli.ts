/* eslint-disable @typescript-eslint/no-var-requires */

import { Config } from './config';

const execa = require('execa');
const mkdirp = require('mkdirp');
const write = require('write');
const Listr = require('listr');

const conf = new Config();
require('yargs')
  .command(
    'create <name>',
    'create a new package with given name',
    args => {
      args
        .positional('name', {
          describe: 'desired package camelCased name',
          type: 'string',
          required: 'true',
        })
        .option('d', {
          alias: 'description',
          describe: 'add a package description',
          type: 'string',
        })
        .option('t', {
          alias: 'template',
          describe: 'add a package template',
          type: 'string',
        });
    },
    argv => {
      conf.setPackage({
        name: argv.name,
        description: argv.description,
        template: argv.template,
      });

      const tasks = new Listr([
        {
          title: 'package: creating package directory',
          task: async () => await mkdirp(conf.packageDirectory),
        },
        {
          title: 'package: creating documentation directory',
          task: async () => await mkdirp(conf.packageDocsDirectory),
        },
        {
          title: 'package: generating files',
          task: async () =>
            await new Listr(
              conf.resolveFileOutputs().map(item => ({
                title: `generating ${item.file}`,
                task: async () => {
                  await mkdirp(item.directory);
                  await write(item.path, item.data);
                },
              }))
            ),
        },
        {
          title: 'package: formatting files',
          task: async () =>
            await execa.command('yarn format', {
              execPath: conf.workspaceRoot,
            }),
        },
        {
          title: 'package: installing new package to homepage',
          task: async () =>
            await execa.command(
              `lerna add ${conf.packageNameRegistry}`,
              '--scope=website'
            ),
        },
      ]);

      tasks.run().catch(err => {
        console.error(err);
      });
    }
  )
  .demandCommand()
  .help().argv;
