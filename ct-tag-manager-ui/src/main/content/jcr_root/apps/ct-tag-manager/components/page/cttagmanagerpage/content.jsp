<%@ taglib prefix="ct" uri="http://www.citytechinc.com/taglibs/cq-library" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="cq" uri="http://www.day.com/taglibs/cq/1.0" %>

<%@include file="/libs/foundation/global.jsp" %>

<ct:defineObjects />

<ct:component className="com.citytechinc.cq.tagmanager.components.CTTagManagerConfigs" name="tm"  />

<cq:includeClientLib categories="cttagmanager.configs"/>

<div>
    <h3>Rules (<span class="italic">${tm.numberOfTags} tag<c:if test="${tm.numberOfTags != 1}">s</c:if></span>)</h3>

    <div>
        <div>Enter a path here to test what tags will render on that page.</div>
        <label id="pathTesterLabel" for="pathTesterPath">Test Path</label>
        <input id="pathTesterPath" type="text" />
        <span id="pathTesterNumApplicable"></span>
    </div>

    <c:forEach items="${tm.tags}" var="tag">

        <div class="tm-tag" data-regex="${tag.pathRegex}">
            <h4 class="tm-tag-name">${tag.name}</h4>
            <ul>
                <li>
                    <span class="tm-tag-key">Path Regex</span>
                    <span class="regex">${tag.escapedPathRegex}</span>
                </li>
                <li>
                    <span class="tm-tag-key">Code Snippet</span>
                    <pre class="prettyprint lang-html">${tag.escapedSnippet}</pre>
                </li>
            </ul>
        </div>

    </c:forEach>

</div>
