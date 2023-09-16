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

<!-- Step 9: Givin access to view Pdf -->

From console home page duoble click on the blue bucket name you just created:  this will tak you into the bucket

next click on permissions tab next to properties

from there we are going to scroll down to 

          ACCESS CONTROL LIST(ACL) 

click edit tab to the right of the window

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

<!-- Step 11: Getting access key and screy access key -->

In the main nav bar where search is located go all the way to the right and click on last nav element

a dropdown menu should appear click on 
* Security credentials

scroll to Access Key section and click Create access Key

may or may not get message ..

click i understand ...

 aceept and create key

copy both the access key and secret key into a file for later use...

<!-- Step 12: Place bucket name, access key & secret key into program -->

at the top of generatePdf.js insert your key in the correct field

const Access_KEY = 'YOUR_ACCESS_KEY';
const Secret_Key = 'YOUR_SECRET_KEY'
const Bucket_Name = 'your-bucket-name';


 <!-- if you messed up on step: 3 and did not 
 use Region: US East (N.Virginia) us-east-1 

 then go to line 100 and replace:  
 region: 'us-east-1' with the one you selelected

'us-east-1' can be found in console url -->


