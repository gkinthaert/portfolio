import * as cdk from 'aws-cdk-lib';
import * as amplify from '@aws-cdk/aws-amplify-alpha';
import * as codebuild from 'aws-cdk-lib/aws-codebuild';
// import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class PortfolioInfrastructureStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Amplify Application
    const amplifyApp = new amplify.App(this, 'PortfolioApplication', {
      appName: 'Portfolio',
      // connect to GitHub repository
      sourceCodeProvider: new amplify.GitHubSourceCodeProvider({
        owner: 'gkinthaert',
        repository: 'portfolio',
        oauthToken: cdk.SecretValue.secretsManager('github-token'),
      }),

      // Build specification for the Amplify application
      buildSpec: codebuild.BuildSpec.fromObjectToYaml({
        version: '1.0',
        frontend: {
          phases: {
            preBuild: {
              commands: [
                'echo "starting the build"',
                'cd portfolio',
                'npm install',
              ],
            },
            build: {
              commands: [
                'echo "building the application"',
                'npm run build-and -export',
                'echo "build completed"',
              ],
            },
          },
          artifacts: {
            baseDirectory: 'portfolio/out',
            files: ['**/*'],
          },
          cache: {
            paths: [
              'node_modules/**/*',
              '.next/cache/**/*',
            ],
          },
        },
      }),
    });

    const mainBranch = amplifyApp.addBranch('main', {
      autoBuild: true,
    });
  }
}