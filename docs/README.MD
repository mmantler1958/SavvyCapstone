**Definition**  

For my full stack capstone project at Savvy Coders, I would like to create a web application that will assist a person with complying to their medication regimen.
It will have the ability for the medication user (MU) to configure their own regimen or by their friend or family member.  This allows flexibility of implementation based on the 
historical compliance record of the MU.  For example, an older person may require a friend or family member to administer the application for the MU..

**Audience**
1. A medication user that has issues remembering to take their medications on time or at all. In this case the medication user will configure the regimen themselves.
2. Family members or friends of a medication user are also targeted. Based on the severity of the person's compliance with their medication(s), family members or friends can configure and miantain the configuration for them.  For eaxmple, an older person may require a friend or family member to administer the configuration.

**High level story**

Do you know anyone that has issues complying with their medication, either themselves or for a friend/family member? I have a solution that is free to use. Would you like to know more?

**Outline of the Application**
1. Home Page:
A home page will provide a brief description of the application and its applicability.  It will also have a disclaimer of liabilty.

2. Medications:
A medication page will list all the medications a person takes.  It will store the medication name including its strength and dosage form.

3. Take Your Medications Page:
A page that the medication user uses to mark medications as taken or not.

5. Schedule:
A scheduling page will list each medication along with the number of doses and when its supposed to be taken (Morning, Afternoon, Evening).

4. Contacts:
A contacts page will allow entry of contact information (name/phone/email,contact type) for all parties associated with the configuration.  Each contact will be marked as the MU (medication user) or helper (the medication buddy that watches for compliance). 

5. Optional:
If time permits, a page will be added that will summarize any drug interactions amongst the current medications.

**User Flow**
1. Their are three types of roles; View Only (VO), Medication User (MU) and Administrator (ADM).
     Administrator:  The administator will maintain the mediciations list and schedule.
     View Only:  The view only role will alow view only of any and all data in the application.
     Medication User:  This rolw is for the person taking the medication to mark their medication as taken or not.

![image](https://user-images.githubusercontent.com/38501742/131371984-537d2139-34bf-47c1-adf2-7ba923f506a6.png)

![image](https://user-images.githubusercontent.com/38501742/131372095-f396b65b-6a9a-4f3f-8943-20f7ec71d92e.png)

![image](https://user-images.githubusercontent.com/38501742/131372168-e9009452-8b85-43d2-8212-039be19deedf.png)
 
 **Wire Frame**
 
 
**SWOT Analysis**

**Strengths**
100% freeware.
Does the basic functions of a tracking application.
Simple to use interface.
Allows exposure of your compliance to a friend or family member so they can assist with you medication regimen.

**Weaknesses**
Some notification mechanisms may not be available that are free to use.
A full HIPPA analysis was not performed.


**Opportunities**
Integration with IOT such as smart watches so that a person can be notifed in real time easily...vibration, beeps etc.
QR Code generator to a manufacturer of medical wearables such as necklaces and bracelets that have a QR code on them for emergency responders can scan and know what medications the person is on.
Addition of a person's medical conditions.
Addition of a person's allergies.
Addition of the adresss of a person's pharmacy information.
Addtion of a person's doctor information.
Addition of the ability to provide a medication price comparision summary against other providers using GoodRX API's. 

**Threats**
Unable to get notifications to work or find free API's
Feature set may not be as good as a paid application.
Ability to complete project in time alloted.

**Color pallet**
The color palette is blue, white, black. Hex values yet to be documented

**Site navigation and Nav elements**  

Header:
  The header will contain links to each of the pages outlined above. The header will be responsive to desktop and mobile.
Footer:
   The footer will conian the application name and copyright. The footer will be responsive to desktop and mobile.
The header and footer will appear on each page.

**Third party APIs**

The free API’s are from https://rxnav.nlm.nih.gov/index.html.

