<%@ taglib prefix="ct" uri="http://www.citytechinc.com/taglibs/cq-library" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<%@include file="/libs/foundation/global.jsp" %>

<ct:defineObjects />

<ct:component className="com.citytechinc.cq.tagmanager.components.CTTagManagerRenderer" name="tm" />

<!-- Begin Tag Manager Snippets -->
<c:forEach items="${tm.tags}" var="tag">

    <!-- ${tag.name} -->
    ${tag.snippet}

</c:forEach>
<!-- End Tag Manager Snippets -->