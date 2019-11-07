/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const fs = require('fs');
const findYarnWorkspaceRoot = require('find-yarn-workspace-root');
const changeCase = require('change-case');
const Mustache = require('mustache');

import {
  GlobalConfig,
  Optional,
  PackageConfig,
  PackageJson,
  PackageParams,
  PackageCategory,
  Repository,
  FileOutput,
} from './types';

const docsDirectory = '/docs';
const defaultWorkspaceScope = 'packages';

/**
 * Config - global config handler for cli
 * loads values from workspace root package for resolving package specific data
 *
 *   - generates a variable store with many package and workspace related data
 *   - generates docs, initial javascript source contents from variables
 */
export class Config {
  /** workspace variables */
  workspaceRoot: string;
  workspacePackagePath: string;
  private _workspacePackageContents: PackageJson;

  /** package specific variables */
  private _packageName?: string;
  private _packageDescription?: string;
  private _packageCategory: PackageCategory;
  private _packageWorkspaceScope: string;
  private _packageKeywords: string[];

  /** cached template file contents */
  private readonly _packageTemplate: string;
  private readonly _readmeTemplate: string;
  private readonly _docsTemplate: string;
  private readonly _indexTemplate: string;
  private readonly _componentTemplate: string;
  private readonly _cssTemplate: string;

  constructor({
    name,
    description,
    template = PackageCategory.Components,
    scope = defaultWorkspaceScope,
    keywords = [],
  }: Optional<PackageParams> = {}) {
    this._packageName = name;
    this._packageDescription = description;
    this._packageCategory = template;
    this._packageWorkspaceScope = scope;
    this._packageKeywords = keywords;

    this.workspaceRoot = findYarnWorkspaceRoot();
    this.workspacePackagePath = path.join(this.workspaceRoot, './package.json');
    this._workspacePackageContents = require(this.workspacePackagePath);

    this._packageTemplate = fs.readFileSync(
      path.join(__dirname, '/templates/package.mustache'),
      {
        encoding: 'utf-8',
      }
    );

    this._readmeTemplate = fs.readFileSync(
      path.join(__dirname, '/templates/readme.mustache'),
      {
        encoding: 'utf-8',
      }
    );

    this._docsTemplate = fs.readFileSync(
      path.join(__dirname, '/templates/docs.mustache'),
      {
        encoding: 'utf-8',
      }
    );

    this._indexTemplate = fs.readFileSync(
      path.join(__dirname, '/templates/index.mustache'),
      {
        encoding: 'utf-8',
      }
    );

    this._componentTemplate = fs.readFileSync(
      path.join(__dirname, '/templates/component.mustache'),
      {
        encoding: 'utf-8',
      }
    );

    this._cssTemplate = fs.readFileSync(
      path.join(__dirname, '/templates/css.mustache'),
      {
        encoding: 'utf-8',
      }
    );
  }

  /** get license from root package */
  get workspaceLicense(): string {
    return this._workspacePackageContents.license;
  }

  /** create namespace name via root package name */
  get workspaceNamespace(): string {
    return `@${this._workspacePackageContents.name}`;
  }

  /** get homepage from root package */
  get workspaceHomepage(): string {
    return this._workspacePackageContents.homepage;
  }

  /** get bugs url from root package */
  get workspaceBugs(): string {
    return this._workspacePackageContents.bugs;
  }

  /** get keywords from root package */
  get workspaceKeywords(): string[] {
    return this._workspacePackageContents.keywords;
  }

  /** get repository data from root package */
  get workspaceRepository(): Repository {
    return this._workspacePackageContents.repository;
  }

  /** get react version from root package */
  get workspaceReactVersion(): string {
    return this._workspacePackageContents.devDependencies['react'];
  }

  /** get react-dom version from root-package */
  get workspaceReactDOMVersion(): string {
    return this._workspacePackageContents.devDependencies['react-dom'];
  }

  /** get react-dom version from root-package */
  get workspaceEmotionCoreVersion(): string {
    return this._workspacePackageContents.devDependencies['@emotion/core'];
  }

  /** filter for wildcard scopes and get their name */
  get workspaceScopes(): string[] {
    return this._workspacePackageContents.workspaces
      .filter(scope => scope.includes('*'))
      .map(scope => scope.replace(/[/|*]/g, ''));
  }

  /**
   * determine camelCased oder PascalCased packageName on template type
   *   --> PascalCased for ReactComponents
   *   --> camelCased for utilities and normal stuff
   */
  get packageName(): string {
    if (this._packageCategory === PackageCategory.Components)
      return changeCase.pascalCase(this._packageName);

    return changeCase.camelCase(this._packageName);
  }

  /**
   * determine the package name for package registry with scope prefix
   * --> @react-bits/use-custom-hook
   */
  get packageNameRegistry(): string {
    return this._packageName
      ? `${this.workspaceNamespace}/${this.packageNameParam}`
      : '';
  }

  /** determine the package description */
  get packageDescription(): string {
    return this._packageDescription || '';
  }

  /** determine the package homepage via root homepage */
  get packageHomepage(): string {
    return `${this.workspaceHomepage}docs/${this.packageCategory}/${this.packageNameParam}/`;
  }

  /** determine keywords for package */
  get packageKeywords(): string[] {
    return this._packageKeywords;
  }

  /** determine the package monorepo workspace */
  get packageWorkspaceScope(): string {
    return this._packageWorkspaceScope;
  }

  /** determine the package repository directory */
  get packageRepository(): Repository {
    return Object.assign({}, this.workspaceRepository, {
      directory: `${this._packageWorkspaceScope}/${this.packageNameParam}`,
    });
  }

  /** determine package directory name */
  get packageNameParam(): string {
    return changeCase.paramCase(this._packageName);
  }

  /** determine the url to the package repository */
  get packageRepositoryBlobUrl(): string {
    return `${this.packageRepository.url.replace(
      /\.[^/.]+$/,
      ''
    )}/blob/master/${this.packageRepository.directory}`;
  }

  /** determine the package directory */
  get packageDirectory(): string {
    return this._packageName
      ? path.join(
          this.workspaceRoot,
          this.packageWorkspaceScope,
          this.packageNameParam
        )
      : '';
  }

  /** determine docs filename */
  get packageDocsFile(): string {
    return `${changeCase.paramCase(this._packageName)}.mdx`;
  }

  /** determine docs directory */
  get packageDocsDirectory(): string {
    return path.join(this.workspaceRoot, docsDirectory, this.packageCategory);
  }

  /** determine absolute path for docs */
  get packageDocsPath(): string {
    return path.join(this.packageDocsDirectory, this.packageDocsFile);
  }

  /** determine absolute path  for package */
  get packageFilePath(): string {
    return path.join(this.packageDirectory, './package.json');
  }

  /** determine the package template */
  get packageCategory(): string {
    return this._packageCategory as string;
  }

  /** returns object with global configurations */
  private get _globalConfig(): GlobalConfig {
    return {
      workspaceRoot: this.workspaceRoot,
      workspacePackagePath: this.workspacePackagePath,
      workspaceLicense: this.workspaceLicense,
      workspaceNamespace: this.workspaceNamespace,
      workspaceHomepage: this.workspaceHomepage,
      workspaceBugs: this.workspaceBugs,
      workspaceKeywords: this.workspaceKeywords,
      workspaceRepository: this.workspaceRepository,
      workspaceScopes: this.workspaceScopes,
      workspaceReactVersion: this.workspaceReactVersion,
      workspaceReactDOMVersion: this.workspaceReactDOMVersion,
      workspaceEmotionCoreVersion: this.workspaceEmotionCoreVersion,
    };
  }

  /** returns object with package specific configurations */
  private get _packageConfig(): PackageConfig | {} {
    if (!this._packageName) return {};

    return {
      packageName: this.packageName,
      packageNameRegistry: this.packageNameRegistry,
      packageDescription: this.packageDescription,
      packageHomepage: this.packageHomepage,
      packageKeywords: this.packageKeywords,
      packageWorkspaceScope: this.packageWorkspaceScope,
      packageRepository: this.packageRepository,
      packageRepositoryBlobUrl: this.packageRepositoryBlobUrl,
      packageDirectory: this.packageDirectory,
      packageFilePath: this.packageFilePath,
      packageDocsFile: this.packageDocsFile,
      packageDocsDirectory: this.packageDocsDirectory,
      packageDocsPath: this.packageDocsPath,
      packageCategory: this.packageCategory,
    };
  }

  /** merges global config and package config and exposes all resolved variables */
  private get _config(): GlobalConfig & Optional<PackageConfig> {
    return Object.assign({}, this._globalConfig, this._packageConfig);
  }

  /** returns object with combined configurations */
  public getConfig({
    name,
    description,
    template,
    scope,
    keywords,
  }: Optional<PackageParams> = {}): GlobalConfig & Optional<PackageConfig> {
    this._packageName = name || this._packageName;
    this._packageDescription = description || this._packageDescription;
    this._packageCategory = template || this._packageCategory;
    this._packageWorkspaceScope = scope || this._packageWorkspaceScope;
    this._packageKeywords = keywords || this._packageKeywords;

    return this._config;
  }

  /** set a new package name */
  public setPackage({
    name,
    description,
    template = PackageCategory.Components,
    scope = defaultWorkspaceScope,
    keywords = [],
  }: PackageParams): void {
    this._packageName = name;
    this._packageDescription = description;
    this._packageCategory = template;
    this._packageWorkspaceScope = scope;
    this._packageKeywords = keywords;
  }

  /** generates package file content from variables */
  private _renderPackageFile(): FileOutput[] {
    return [
      {
        file: 'package.json',
        directory: this.packageDirectory,
        path: this.packageFilePath,
        data: Mustache.render(
          this._packageTemplate,
          Object.assign({}, this._config, {
            isComponent: this.packageCategory === PackageCategory.Components,
            isHidden: this.packageCategory === PackageCategory.Hidden,
          })
        ),
      },
    ];
  }

  /** generates readme file content from variables */
  private _renderPackageReadme(): FileOutput[] {
    return [
      {
        file: 'README.md',
        directory: this.packageDirectory,
        path: path.join(this.packageDirectory, 'README.md'),
        data: Mustache.render(
          this._readmeTemplate,
          Object.assign({}, this._config, {
            isHidden: this.packageCategory === PackageCategory.Hidden,
          })
        ),
      },
    ];
  }

  /** generates docs file content from variables */
  private _renderPackageDocs(): FileOutput[] {
    return this.packageCategory !== PackageCategory.Hidden
      ? [
          {
            file: this.packageDocsFile,
            directory: this.packageDocsDirectory,
            path: this.packageDocsPath,
            data: Mustache.render(
              this._docsTemplate,
              Object.assign({}, this._config, {
                isComponent:
                  this.packageCategory === PackageCategory.Components,
              })
            ),
          },
        ]
      : [];
  }

  /** generates javascript sources from variables */
  private _renderPackageSources(): FileOutput[] {
    const files = [
      {
        file: 'index.ts',
        directory: path.join(this.packageDirectory, 'src'),
        path: path.join(this.packageDirectory, 'src', 'index.ts'),
        data: Mustache.render(
          this._indexTemplate,
          Object.assign({}, this._config, {
            isComponent: this.packageCategory === PackageCategory.Components,
          })
        ),
      },
    ];

    if (this.packageCategory === PackageCategory.Components) {
      files.push({
        file: `${this.packageName}.tsx`,
        directory: path.join(this.packageDirectory, 'src'),
        path: path.join(
          this.packageDirectory,
          'src',
          `${this.packageName}.tsx`
        ),
        data: Mustache.render(
          this._componentTemplate,
          Object.assign({}, this._config, {
            packageNameParam: changeCase.paramCase(this._packageName),
          })
        ),
      });

      files.push({
        file: `${this.packageName}.css`,
        directory: path.join(this.packageDirectory, 'src'),
        path: path.join(
          this.packageDirectory,
          'src',
          `${this.packageName}.css`
        ),
        data: Mustache.render(
          this._cssTemplate,
          Object.assign({}, this._config, {
            packageNameParam: changeCase.paramCase(this._packageName),
          })
        ),
      });
    }

    return files;
  }

  /** merge generated file data */
  public resolveFileOutputs(): FileOutput[] {
    return [
      ...this._renderPackageFile(),
      ...this._renderPackageReadme(),
      ...this._renderPackageDocs(),
      ...this._renderPackageSources(),
    ];
  }
}
