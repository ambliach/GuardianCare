https://guardiancare.herokuapp.com/


https://guardiancare.herokuapp.com/

This website/future app is set up to make communication easier for the parent/guardian of an elderly or disable person/persons under the care of a nurse, caregiver, or in a nursing home. It can be used by a caregiver coming to the patients home, in the hospital, in a nursing home, ect. It is intended to help communicate easier with a loved one whom is resposible for the patient. Communication between a nurse and parent/guardian will be easier because of all the information given will be direct through the website or app.
It will cover all vitals, pictures, activites, and any personal text of communication between the both patient's caregiver and active parent/guardian.


Leverages passport library to implement authentication. Basic signup/login/logout functionality.

 ### Setup Cloudinary

 Signup up for cloudinary account at https://cloudinary.com

 Setup environment variables in a .env file. The contents should be:

 ```
# Cloudinary Environment Variables
CLOUDINARY_NAME="cloudinary_name"
CLOUDINARY_API_KEY="cloudinary_api_key"
CLOUDINARY_API_SECRET="cloudinary_api_secret"
REACT_APP_UPLOAD_PRESET="react_upload_preset"
REACT_APP_UPLOAD_CLOUDNAME="cloudinary_name"
```
Note that cloudinary's upload preset variable must be set to allow for `unsigned` uploads.
This is done by going to the cloudinary settings menu (available on the cloudinary dashboard).
From there, select the `Upload` tab and scroll down to the `Upload Presets` section. Select
the "enable unsigned upload" option. This creates a preset name which should be copied in the
REACT_APP_UPLOAD_PRESET variable above.

 ### Installation instructions:

 * Clone repository:

 * Change directory:

 * Install npm packages using yarn: `yarn install`

 * Run app: `yarn start`
