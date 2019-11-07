export type Optional<T> = { [P in keyof T]?: T[P] };

export type Repository = {
  type: string;
  url: string;
  directory?: string;
};

export enum PackageCategory {
  Components = 'components',
  Hooks = 'hooks',
  Utilities = 'utilities',
  Hidden = 'hidden', // no docs
}

export type PackageParams = {
  name: string;
  description: string;
  template?: PackageCategory;
  scope?: string;
  keywords?: string[];
};

export type PackageJson = {
  name: string;
  license: string;
  homepage: string;
  bugs: string;
  keywords: string[];
  repository: Repository;
  workspaces: string[];
  devDependencies: {
    'react': string;
    'react-dom': string;
    '@emotion/core': string;
  };
};

export type GlobalConfig = {
  workspaceRoot: string;
  workspacePackagePath: string;
  workspaceLicense: string;
  workspaceNamespace: string;
  workspaceHomepage: string;
  workspaceBugs: string;
  workspaceKeywords: string[];
  workspaceRepository: Repository;
  workspaceScopes: string[];
  workspaceReactVersion: string;
  workspaceReactDOMVersion: string;
  workspaceEmotionCoreVersion: string;
};

export type PackageConfig = {
  packageName: string;
  packageCategory: string;
  packageNameRegistry: string;
  packageDescription?: string;
  packageHomepage: string;
  packageKeywords: string[];
  packageWorkspaceScope: string;
  packageDirectory: string;
  packageFilePath: string;

  packageRepository: Repository;
  packageRepositoryBlobUrl: string;

  packageDocsFile: string;
  packageDocsDirectory: string;
  packageDocsPath: string;
};

export type FileOutput = {
  file: string;
  directory: string;
  path: string;
  data: string;
};
