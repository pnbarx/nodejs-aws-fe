### Links to the AWS-deployed App

#### Auto-deployed:

CloudFront distribution: https://d3n4lfqwtd8o39.cloudfront.net/

S3 origin: http://game-of-bricks-store.s3-website-eu-west-1.amazonaws.com/
(you should get a 403 error)

#### Manually deployed:

CloudFront distribution: https://dchn9iexcn1z7.cloudfront.net/

S3 origin: http://task-2-manual-deploy.s3-website-eu-west-1.amazonaws.com/
(you should get a 403 error)


### Available Scripts

`npm run start`
Runs the app in the development mode.

`npm run test`
Launches the test runner in the interactive watch mode.

`npm run build`
Builds the app for production to the `build` folder.

### AWS-related Scripts

`npm run client:deploy`
Deploy to S3

`npm run client:build:deploy`
Build and deploy to S3

`npm run cloudfront:setup`
Set up the deployment infrastructure (CloudFormation Stack)

`npm run cloudfront:domainInfo`
Get CloudFront Domain Info

`npm run cloudfront:invalidateCache`
Invalidate CloudFront Cache

`npm run cloudfront:build:deploy`
Build and deploy to S3 with further CloudFront cache invalidation

`npm run cloudfront:update:build:deploy`
Update infrastructure, build and deploy to S3 with further CloudFront cache invalidation

---

You can run all these scripts with `":nc"` suffix to disable deployment confirmation, e.g. `npm run cloudfront:update:build:deploy:nc`
