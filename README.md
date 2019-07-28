# GuardianCare

The home health aid industry is one of the fastest growing sectors. As the population
ages, more and more families seek professional nursing care for their elderly loved ones. In many cases, these older patients have some form of dementia or alzheimer's disease.
Very often the family members of these patients don’t call or visit everyday because of work, living far away etc. This is doubly true for family members of patients with a memory loss disease such as dementia or alzheimers.
Our application will enable a family member to create a secure profile for their loved one. Once they create this profile, they will be able to connect the nursing staff or home health aide to this same profile with a unique login. The nurse or nursing staff will have the ability to edit/update the patient’s vital signs, eating habits, activities of the day, anything else of note. The family members will be able to login into the app and view these updates in real time, anytime and anywhere.

This application can potentially solve a few problems. Folks who are unable to speak to their elderly family member on a daily or even weekly basis will be able to feel more connected and informed. Besides sharing information, this can also mitigate calls to the nursing facility or staff, making their jobs a little easier.
In addition, many home health aides or nurses are required by their facility or agency to report all activities and any updates after every single shift. This is typically accomplished through an automated phone system which reads throughs all the possible activities/duties of the day, and has the caregiver has to click a button (1 or 2) depending on if that activity was accomplished that day, or not. This process typically takes over 5 minutes. Sometimes nurses don’t go through the entire prompt (especially for the more difficult patients) , which creates further problems for the agency or facility. This application could allow nurses an easily accessible place to quickly and concisely sum up the day per regulation.




Heroku Link: [http://guardiancare.herokuapp.com/]


## Version 03

Build upon version02.

Leverages passport library to implement authentication. Basic signup/login/logout functionality.

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

* Clone repository: `[https://github.com/ambliach/GuardianCare]`

* Folder: `GuardianCare`, File: GuardianCare

* Install npm packages using yarn: `yarn install`

* Run app: `yarn start`
