# Kilometer Creative Website
The official website of Kilometer Creative!

A deployment setup has been created for Webstorm. All files shown by the `ls` bash command will be uploaded unless properly escaped by `.s3ignore`.

Remember to ignore any files you don't want to upload, because you must navigate to the console to delete them.

#### Set Up Deployment
This assumes you have the AWS-CLI setup and configured appropriately. If not, check out [this tutorial](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html).
1. Download the Webstorm Plugin called "BashSupport".
2. Create a new Run Configuration of the type "Bash".
3. For script, select `.deploy/upload.sh`. The `.deploy` folder will most likely be hidden, so you may need to type it manually.
4. Set program arguments to the `bucket/folder` you wish to upload to. Right now, that would be `kilometercreative.com/v2`.
5. Set working directory to the top level folder of the project.
6. *Optional*. If you have multiple aws profiles on your machine, you can set an environment variable named `profile` with the name of your profile to run the s3 upload command. That profile must have proper permissions in AWS.
7. Hit Apply, then Okay, and you're good to go!
