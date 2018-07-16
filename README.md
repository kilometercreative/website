# Kilometer Creative Website
The official website of Kilometer Creative!

A deployment setup has been created for Webstorm. All files shown by the `ls` bash command will be uploaded unless properly escaped by `.s3ignore`.

#### Set Up Deployment
This assumes you have the AWS-CLI setup and configured appropriately. If not, check out [this tutorial](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html)
1. Download the Webstorm Plugin called "BashSupport".
2. Create a new Run Configuration of the type "Bash".
3. For script, select `.deploy/upload.sh`. The `.deploy` folder will most likely be hidden, so you may need to type it manually.
4. 