package com.citytechinc.cq.tagmanager.components.cttagmanager;

import org.apache.commons.lang.StringEscapeUtils;

import javax.jcr.Node;
import javax.jcr.RepositoryException;

/**
 * Container class for a tag manager tag.
 */
public class CTTagManagerTag {

    private static final String PROP_TAG_NAME = "name";
    private static final String PROP_TAG_PATH_REGEX = "pathRegex";
    private static final String PROP_TAG_SNIPPET = "snippet";

    private String name;
    private String pathRegex;
    private String snippet;

    public CTTagManagerTag(final Node node) throws RepositoryException {

        name = node.getProperty(PROP_TAG_NAME).getString();
        pathRegex = node.getProperty(PROP_TAG_PATH_REGEX).getString();
        snippet = node.getProperty(PROP_TAG_SNIPPET).getString();

    }

    public String getName() {

        return name;

    }

    public String getPathRegex() {

        return pathRegex;

    }

    public String getEscapedPathRegex() {

        return StringEscapeUtils.escapeHtml(pathRegex);

    }

    public String getSnippet() {

        return snippet;

    }

    public String getEscapedSnippet() {

        return StringEscapeUtils.escapeHtml(snippet);

    }

}
