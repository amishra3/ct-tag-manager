
# CT Tag Manager
Generic tag management Cloud Service Configuration for AEM.

## Setup

### Requirements
The generic tag manager requires that that the following libraries are available on your AEM instance:

* [CQ Library](https://github.com/Citytechinc/cq-library)
* [Client Librarian](https://github.com/Citytechinc/client-librarian)

### Modifying body.jsp
To prepare your project for CT Tag Manager usage, your global page body.jsp must include the following line just above
the closing &lt;body&gt; tag:

    <cq:include path="cloudservices" resourceType="cq/cloudserviceconfigs/components/servicecomponents"/>
