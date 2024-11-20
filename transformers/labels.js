/**
 * 
 * This transformer adds badges to documentation
 *
 * See: https://github.com/syntax-tree/mdast-util-to-hast
 * 
**/
import { visitParents } from 'unist-util-visit-parents';

export default function attacher() {
    return transformer;
}

const BADGES = [
    '(omni-js)',
    '(omni-cpp)',
    '(omni-java)'
];
const BADGES_INFO = [
    {
        name: 'JS',
        href: ''
    },
    {
        name: 'C++',
        href: ''
    },
    {
        name: 'Java',
        href: ''
    }
];
const DEPRECATED = '(deprecated)';
const EXPERIMENTAL = '(experimental)';
const INCOMPLETE = '(in-progress)';
const CAREFUL_USE = '(careful)';

function transformer(tree) {
    visitParents(tree, 'emphasis', visitor);
}

function visitor(node) {
    if (node.children.length === 1 && (node.children[0]).type === 'text') {
        const tag = node.children[0].value.toLowerCase();
        if (BADGES.includes(tag)) {
            // Get info
            const i = BADGES.indexOf(tag);
            const info = BADGES_INFO[i];
            const name = info.name;
            const href = info.href;
            updateNode(
                node,
                name,
                'Supported target language',
                href,
                ['badge-chip--lang']
            );
        } else if (tag === DEPRECATED) {
            updateNode(
                node,
                'Deprecated',
                'Deprecated feature (may be removed in the feature)',
                "/",
                ['badge-chip--deprecated']
            );
        } else if (tag === EXPERIMENTAL) {
            updateNode(
                node,
                'Experimental',
                'Experimental feature (may change in the feature)',
                "/",
                ['badge-chip--experimental']
            );
        } else if (tag === INCOMPLETE) {
            updateNode(
                node,
                'In-Progress',
                'Incomplete feature (still being implemented)',
                "/",
                ['badge-chip--experimental']
            );
        } else if (tag === CAREFUL_USE) {
            updateNode(
                node,
                'Careful',
                'Careful use advised!',
                "/",
                ['badge-chip--careful']
            );
        }
    }
}

// Update nodes!
const updateNode = (node, name, description, href, classNames = []) => {
    // Change tag name to "md-assist-chip"
    node.type = 'emphasis'; //'element';
    node.tagName = 'md-assist-chip';
    // ^^ For some reason, this doesn't work! ^^
    // It only renames the element's tag to "div" (this is caused by setting the type to 'element')

    // Update node data
    node.data = {
        hProperties: {
            label: name,
            title: description,
            href,
            className: ['badge-chip', ...classNames],
            "data-role": "presentation",
            tabindex: "-1"
        }
    };
    node.children[0].value = `(${name})`; // tmp
};
