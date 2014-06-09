package com.citytechinc.cq.tagmanager.components;

import com.day.cq.commons.jcr.JcrConstants;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.jcr.Node;
import javax.jcr.NodeIterator;
import javax.jcr.RepositoryException;
import java.util.ArrayList;
import java.util.List;

public final class CTTagManagerUtil {

    private static final String PROP_TAGS_PATH = "tags";

    private static final Logger LOGGER = LoggerFactory.getLogger(CTTagManagerUtil.class);

    private CTTagManagerUtil() {
    }

    protected static List<CTTagManagerTag> extractTags(final Node node) {

        final List<CTTagManagerTag> tags = new ArrayList<CTTagManagerTag>();
        
        try {

            // get tags node, relative to given node
            final boolean atJCRContentNode = StringUtils.endsWith(node.getPath(), JcrConstants.JCR_CONTENT);
            final String propRelPath = atJCRContentNode ? PROP_TAGS_PATH : JcrConstants.JCR_CONTENT + '/' + PROP_TAGS_PATH;
            final Node rulesNode = node.getNode(propRelPath);

            // loop through tags to build out list
            final NodeIterator nodeIterator = rulesNode.getNodes();
            while (nodeIterator.hasNext()) {

                // attempt to add node to list of tags
                final Node tagNode = nodeIterator.nextNode();
                try {

                    // add tag to list
                    final CTTagManagerTag tag = new CTTagManagerTag(tagNode);
                    tags.add(tag);

                } catch (RepositoryException e) {

                    // error attempting to retrieve or build tags node
                    LOGGER.error("Failed to read tag node at " + tagNode.getPath() + ". This tag will not be utilized.", e);

                }

            }

        } catch (RepositoryException e) {

            // error accessing tags node
            LOGGER.error("Error while attempting to find tags node.", e);

        }

        return tags;

    }

}
