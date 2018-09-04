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

    const hiliteColor = {
        name: 'hiliteColor',
        add: function (_this, targetElement) {
            /** set submenu */
            let listDiv = eval(this.setSubmenu());
    
            /** add event listeners */
            listDiv.getElementsByTagName('UL')[0].addEventListener('click', this.colorPick.bind(_this));
    
            /** append html */
            targetElement.parentNode.appendChild(listDiv);
    
            /** empty memory */
            listDiv = null;
        },
    
        setSubmenu: function () {
            const listDiv = document.createElement('DIV');
            listDiv.className = 'layer_editor layer_color';
            listDiv.style.display = 'none';
    
            const colorList = ['#1e9af9', '#00b8c6', '#6cce02', '#ff9702', '#ff0000', '#ff00dd', '#6600ff', '#cce9ff', '#fcfd4c', '#ffffff', '#dfdede', '#8c8c8c', '#000000', '#222222'];
    
            let list = '<div class="inner_layer">' +
                '   <div class="pallet_bgcolor pallet_text">' +
                '       <ul class="list_color list_bgcolor">';
            for (let i = 0, len = colorList.length; i < len; i++) {
                const color = colorList[i];
                list += '<li>' +
                    '   <button type="button" class="' + (/ffffff/.test(color) ? ' color_white' : '') + '" data-value="' + color + '" style="background-color:' + color + ';">' + color + '' +
                    '       <span class="bg_check"></span>' +
                    '       <span class="bg_btnframe"></span>' +
                    '   </button>' +
                    '</li>';
            }
            list += '   </ul>' +
                '   </div>' +
                '</div>';
    
            listDiv.innerHTML = list;
    
            return listDiv;
        },
    
        colorPick: function (e) {
            e.preventDefault();
            e.stopPropagation();
    
            if (!/^BUTTON$/i.test(e.target.tagName)) {
                return false;
            }
    
            this.focus();
    
            const newNode = document.createElement('SPAN'); newNode.style.backgroundColor = e.target.getAttribute('data-value');
            this.wrapRangeToTag(newNode, ['background-color']);
            this.submenuOff();
        }
    };

    if (typeof noGlobal === typeof undefined) {
        window.SUNEDITOR.plugins.hiliteColor = hiliteColor;
    }

    return hiliteColor;
}));
