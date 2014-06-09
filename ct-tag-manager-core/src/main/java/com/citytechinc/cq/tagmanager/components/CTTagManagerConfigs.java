package com.citytechinc.cq.tagmanager.components;

import com.citytechinc.cq.library.components.AbstractComponent;
import com.citytechinc.cq.library.content.request.ComponentRequest;

import javax.jcr.Node;
import java.util.List;

/**
 * Backing bean for tag manager configuration page.
 */
public class CTTagManagerConfigs extends AbstractComponent {

    private List<CTTagManagerTag> tags;

    public CTTagManagerConfigs(final ComponentRequest request) {
        super(request);

        final Node currentNode = request.getCurrentNode();
        this.tags = CTTagManagerUtil.extractTags(currentNode);

    }

    public List<CTTagManagerTag> getTags() {

        return tags;

    }

    public int getNumberOfTags() {

        return tags.size();

    }

}
