package com.citytechinc.cq.tagmanager.components;

import com.citytechinc.cq.library.components.AbstractComponent;
import com.citytechinc.cq.library.content.node.ComponentNode;
import com.citytechinc.cq.library.content.request.ComponentRequest;
import com.day.cq.wcm.webservicesupport.Configuration;
import com.day.cq.wcm.webservicesupport.ConfigurationConstants;
import com.day.cq.wcm.webservicesupport.ConfigurationManager;

import javax.jcr.Node;
import java.util.ArrayList;
import java.util.List;

/**
 * Component class for rendering tags into the final page JSP.
 */
public class CTTagManagerRenderer extends AbstractComponent {

    private static final String[] DEFAULT_CLOUD_SERVICE_CONFIG = new String[]{};

    private static final String SERVICE_NAME = "cttagmanager";

    private List<CTTagManagerTag> tags;

    public CTTagManagerRenderer(final ComponentRequest request) {
        super(request);

        // init tags array
        tags = new ArrayList<CTTagManagerTag>();

        // get configuration service needed to get specific configuration
        final ComponentNode currPageNode = currentPage.getComponentNode().get();
        final String[] services = currPageNode.getInherited(ConfigurationConstants.PN_CONFIGURATIONS, DEFAULT_CLOUD_SERVICE_CONFIG);
        final ConfigurationManager configurationManager = getService(ConfigurationManager.class);
        if (configurationManager != null) {

            // get specific configuration
            final Configuration configuration = configurationManager.getConfiguration(SERVICE_NAME, services);

            if (configuration != null) {

                // get current page's path
                final String currPath = request.getCurrentPage().getPath();

                // extract tags array, filter tags based on page path, add appropriate tags to list to return
                final Node configNode = configuration.getResource().adaptTo(Node.class);
                final List<CTTagManagerTag> unfilteredTags = CTTagManagerUtil.extractTags(configNode);
                for (final CTTagManagerTag tag : unfilteredTags) {

                    // pull out regex path matcher and test it against this page path
                    if (currPath.matches(tag.getPathRegex())) {

                        tags.add(tag);

                    }

                }

            }

        }

    }

    public List<CTTagManagerTag> getTags() {

        return tags;

    }
}
