Amazon S3 Bucket Setup Guide

<!-- Step 1: Sign up/in to the AWS Management Console -->

https://aws.amazon.com/console/

* I used root user sing up

Sign in with your AWS account credentials.

<!-- Step 2: Navigate to Amazon S3 -->

Once logged in, you'll be in the AWS Management Console.

In search bar type s3 and click on s3 - scalable storage in cloud

<!-- Step 3: Create a New Bucket -->

In the Amazon S3 dashboard, click the "Create bucket" button.

You'll need to provide the following information:

Bucket name: Choose a unique name for your bucket.
        (no spaces, no CAPS, or _)

* I choose:     butter-day-spa

Region: Select the AWS region where you want your bucket to be located. 

* use Region: US East (N.Virginia) us-east-1 

<!-- Step 4: Object Ownership (Optional) -->

In the Object Ownership  section we want to click on:  

ACLs ENABLED followed by BUCKET OWNER PREFERRED


<!-- Step 5: Block Public Access settings in bucket-->

In the Block Public Access settings section:

unclick block all public access then:

click the bottom two options:

* Block public access to buckets and objects granted through new public bucket or access point policies

* Block public and cross-account access to buckets and objects through any public bucket or access point policies


* then click : 

I acknowledge that the current settings might result in this bucket and the objects within becoming public

<!-- Step 6: Bucket Versioning -->

for this step either way is fine but if you would like versioning click enable


<!-- Step 7: Tags (optional) -->

Add tag if you want 

<!-- Step 8: Default encryption -->

encryption type is going to be the default:

* Server-side encryption with Amazon S3 managed keys (SSE-S3)

then bucket key: is set to ENABlE

click create bucket

This will redirect you back to console

save Bucket Name to a file for LATER USE

<!-- Step 9: Givin access to view Pdf -->

From console home page double click on the blue bucket name you just created:  this will tak you into the bucket

next click on permissions tab next to properties

from there we are going to scroll down to 

          Bucket Policy 

click edit button , clear contents in the json and paste this:

{
	"Version": "2012-10-17",
	"Statement": [
		{
			"Sid": "AllowLambdaAccess",
			"Effect": "Allow",
			"Principal": {
				"Service": "lambda.amazonaws.com"
			},
			"Action": [
				"s3:GetObject",
				"s3:PutObject"
			],
			"Resource": "arn:aws:s3:::butter-day-spa1/*"
		}
	]
}

then click save changes button

Next we are going to scroll down to 

          ACCESS CONTROL LIST(ACL) 

click edit button to the right of the window

scroll to bottom of the list

* ( S3 log delivery group )

and click on list and read

then save changes at the bottom of the page

<!-- Step 10: Givin access to view Pdf (extended) -->

after saving changes scroll to the bottom of page
      Cross-origin resource sharing (CORS)

and click edit tab on left side of window


next copy paste the code below 
then click save changes at the bottom of the page: 

[
    {
        "AllowedHeaders": [
            "*"
        ],
        "AllowedMethods": [
            "GET",
            "PUT"
        ],
        "AllowedOrigins": [
            "*"
        ],
        "ExposeHeaders": []
    }
]

click save changes

<!-- Step 11: Getting access key and secret access key -->

In the main nav bar where search is located go all the way to the right and click on last nav element

a dropdown menu should appear click on 
* Security credentials

scroll to Access Key section and click Create access Key

may or may not get message ..

click i understand ...

 aceept and create key

copy both the access key and secret key into a file for LATER USE...


 <!-- if you messed up on step: 3 and did not 
 use Region: US East (N.Virginia) us-east-1 

 then go to line 100 and replace:  
 region: 'us-east-1' with the one you selelected

'us-east-1' can be found in console url -->


<!-----------------PERMISSIONS-------------------------->

1) sign into aws amazon account

2) In search bar type IAM,, next click 

             IAM
Manage access to AWS resources

3) Inside the IAM Dashboard look to left column under
        Access Mananegment
        click on users and select user used in code above

4) in users under permission tab you are going to click 
                add permissons then click (add permissons)

5) click on add permissons directly 
    Next type in and check off 

        amazonS3fullaccess
        amazonsesfullaccess
        awslambda_fullaccess

    then click next and on the follwing page 
            click add permissions

6) once back at the user page click on add permissons again
        this time click inline policy

    next to the visual button click on json 

    delete json file and past this inside 

     {
	     "Version": "2012-10-17",
	        "Statement": [
		        {
			      "Effect": "Allow",
			     "Action": [
				        "execute-api:Invoke",
				        "execute-api:ManageConnections"
			     ],
			        "Resource": "*"
		        }
	     ]
     }
    Then scroll to the bottom of the page and click next
        on the next page click save changes



<!-----------------AMAZON IAM EXTENDED-------------------------->

1) n the search bar type IAM and click on
                IAM
2)  From the Dashboard in the menu to the left look for 
         Access management and click on Roles

3)  next click on create roles

4)  Select - AWS SERVICE 

    in the next section under the USE CASE Menu Select

5)   LAMBDA and click next
    
6) Under permissons we will be adding 

        amazonS3fullaccess
        amazonsesfullaccess
        awslambda_fullaccess

    then click next 
7) on this page set custom role name 
    i used (ButterDaySpa-Roles)
    then click Create role



<!-----------------AMAZON SES-------------------------->

1) in the search bar type SES and click on
        Amazon Simple Email Service
    Email Sending and Receiving Service

2) from the ses home page click on create identity 
        On this page select email
        type in a valid email
        and click create identity

3) this will send an email to you email which you have to verify
    once you verify refresh amazon ses page

4) you will see a send test email icon now that your email 
                is vefied click it


5) to send test email 
        email format : formatted

        from adress: should have your email aldready inside

        scenario: custom

        custom recipient: same exactly email you have above
    
    then the Subject, Body and Config are all optional
            whendone click send email
        email should appear in yout email inbox to insure 
        ses is working


<!-----------------AMAZON LAMBDA-------------------------->

1) in the search bar type Lambda and click on
                Lambda
2)  From the Dashboard click on create funciton

3)  once on the create function page select AUTHOR FROM SCRATH

4)  Next type in your uniue function name 
        i used (SpaFunction)

5)  under Runtime select - Node.js 18x
    and under ARCHITECTURE select - x86_64
    
6)  under Execution Roles click use an exising role and select role you 
            previously created

7) then click create funciton


8)  this will lead you to your lambda on this screen click on add trigger

9) from there select API GATEWay

10) under Intent select create a new API

11) api type - HTTP API
12) Security- Open

13) Next click on additonal settings 
        Here you can change your API and Stage name if you like 
    Then select the Cross-orogin resource sharing

    and click add

14) scroll down in the code tab you should see Code source
    delete everything inside the function and paste this inside 

    export const handler = async (event) => {
  // TODO implement
  const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*", // Allow cross-origin requests
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            Access_Key: process.env.Access_Key,
            Bucket_Name: process.env.Bucket_Name,
            My_Email: process.env.My_Email,
            Secret_Key: process.env.Secret_Key,
            
        }),
    };
  return response;
};

15) next click into the configuration tab 

16) once in this tab in the menu on the left hand side 
    look for and select Enviroment variables tab

17) click add enviormental variables 4 times and insert each key with corresponding value 
   key          value  
Access_Key	AKIAS7LQRQLC32PRMTEH  (INSERT YOUR OWN)
Bucket_Name	spatestbucket  (INSERT YOUR OWN)
My_Email	ospharaoh@gmail.com  (INSERT YOUR OWN)
Secret_Key	E83xOFXJA0JEmiRroVOEcNseqk9IwC+WAUha0J1n  (INSERT YOUR OWN)

and click save 

<!-----------------API GATEWAY-------------------------->

1) in the search bar type API and click on
                API GATEWAY
2)  From the Dashboard click on the API you created in the lambda function

3)  in the API GATEWAY dashboard in the menu under Develop click on integrations

4) choose an existing integrations and select the function you created
     then click attach integration

5) next under Develop click on CORS 
        on the CORS page click configure

6)  under Access-Control-Allow-Origin
 add a  *

under Access-Control-Allow-Headers
add a  *

under Access-Control-Allow-Methods
add a  *

under Access-Control-Expose-Headers
No Expose Headers are allowed

and click save 

