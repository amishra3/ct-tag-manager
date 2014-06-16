
# CT Tag Manager
Generic tag management Cloud Service Configuration for CQ.

## Setup

### Requirements
The generic tag manager requires that that the [CQ Library](https://github.com/Citytechinc/cq-library) is installed on your instance.

### Modifying body.jsp
To prepare your project for CT Tag Manager usage, your global page body.jsp must include the following line just above
the closing &lt;body&gt; tag:

    <cq:include path="cloudservices" resourceType="cq/cloudserviceconfigs/components/servicecomponents"/>
    
### Creating a Cloud Service Configuration (CSC)
Now that the global page component has the cloud services include, all of your pages can receive cloud service configurations.

#### Install via Maven
Clone the latest release and install via Maven onto your CQ instance with the following command run from the top directory of this project:

    mvn clean install -Plocal

#### Adding a New Configuration
After Maven finishes installing the project, a tag configuration can be added by navigating to the CT Tag Manager cloud service configuration page (locally: [http://localhost:4502/etc/cloudservices/ct-tag-manager](http://localhost:4502/etc/cloudservices/ct-tag-manager)). Here, you can add a new configuration by clicking the "+" icon next to Available Configurations, which will open a dialog that asks you to give your configuration a title. Once you close that dialog, you will be sent to the configuration for the tag you just created.

Click Edit on the edit bar to open the author dialog for your new configuration. Each rule you add has 3 properties:

* **Name** - Short, descriptive name for this rule.
* **Path Regex** - Regular expression to match the node path of pages this rule should apply to. This regex is compared to the page path server side, so you don't need to account for any kind of mapping that may change paths externally.
* **Code Snippet** - HTML to append to page with this rule, including script tags or CSS or any other HTML you wish to insert.

#### Testing Paths
Once you have added some rules, click OK on the dialog close it and save your changes. You will now see the rules you have configured listed out on the configuration page. You may enter paths into the Test Path input to see what rules will match when you navigate to a particular path in your page tree.

#### Adding CSC to Pages
Navigate to the top-most page in your page tree you want your configuration to apply to. Open the Page Properties for that page and navigate to the Cloud Services tab. Add the CT Tag Manager service and select your configuration from the dropdown. Click OK to close and save your changes to Page Properties.

All pages at that point and below in the tree will inherit the CT Tag Manager CSC. When you inspect the source of your pages, you will see the tag manager snippets inserted into the cloud service div near the closing body tag.
