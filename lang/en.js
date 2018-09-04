/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2017 JiHong Lee.
 * MIT license.
 */
(function (global, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = global.document ?
            factory(global, true) :
            function (w) {
                if (!w.document) {
                    throw new Error('SUNEDITOR requires a window with a document');
                }
                return factory(w);
            };
    } else {
        factory(global);
    }
}(typeof window !== 'undefined' ? window : this, function (window, noGlobal) {
    'use strict';
    
    lang = {
        toolbar: {
            font: 'Font',
            formats: 'Formats',
            fontSize: 'Size',
            bold: 'Bold',
            underline: 'Underline',
            italic: 'Italic',
            strike: 'Strike',
            subscript: 'Subscript',
            superscript: 'Superscript',
            removeFormat: 'Remove Format',
            fontColor: 'Font Color',
            hiliteColor: 'Hilite Color',
            indent: 'Indent',
            outdent: 'Outdent',
            align: 'Align',
            alignLeft: 'Align left',
            alignRight: 'Align right',
            alignCenter: 'Align center',
            justifyFull: 'Justify full',
            list: 'list',
            orderList: 'Ordered list',
            unorderList: 'Unordered list',
            horizontalRule: 'horizontal line',
            table: 'Table',
            link: 'Link',
            image: 'Image',
            video: 'Video',
            fullScreen: 'Full screen',
            showBlocks: 'Show blocks',
            codeView: 'Code view',
            undo: 'Undo',
            redo: 'Redo',
            preview: 'Preview',
            print: 'print',
            tag_p: 'Paragraph',
            tag_div: 'Normal (DIV)',
            tag_h: 'Header'
        },
        dialogBox: {
            linkBox: {
                title: 'Insert Link',
                url: 'URL to link',
                text: 'Text to display',
                newWindowCheck: 'Open in new window'
            },
            imageBox: {
                title: 'Insert image',
                file: 'Select from files',
                url: 'Image URL',
                caption: 'Insert image description',
                altText: 'Alternative text'
            },
            videoBox: {
                title: 'Insert Video',
                url: 'Media embed URL, YouTube'
            },
            resize100: 'resize 100%',
            resize75: 'resize 75%',
            resize50: 'resize 50%',
            resize25: 'resize 25%',
            remove: 'remove',
            submitButton: 'Submit',
            revertButton: 'Revert',
            proportion: 'constrain proportions',
            width: 'Width',
            height: 'Height',
            basic: 'Basic',
            left: 'Left',
            right: 'Right',
            center: 'Center'
        },
        editLink: {
            edit: 'Edit',
            remove: 'Remove'
        }
    };

    if (typeof noGlobal === typeof undefined) {
        if (typeof window.SUNEDITOR === 'undefined') {
            window.SUNEDITOR = {};
            SUNEDITOR.plugins = {};
        }

        window.SUNEDITOR.lang = lang;
    }

    return lang;
}));
