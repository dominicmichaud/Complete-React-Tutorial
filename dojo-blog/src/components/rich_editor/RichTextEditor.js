import React, { useRef } from 'react';
import JoditEditor from "jodit-react";
import PropTypes from 'prop-types';

const RichTextEditor = ({ handleRTEChange, currentContent, isInvalid }) => {
    const editor = useRef(null);

    const config = {
        readonly: false,
        buttons: ['bold', 'italic', 'underline', 'ul', 'left', 'paragraph', 'cut', 'copy', 'paste', 'selectall', 'hr', 'link', 'undo', 'redo', 'fullsize'],
        toolbarAdaptive: false,
        allowTabNavigation: false,
        askBeforePasteHTML: false,
        processPasteHTML: false,
        defaultActionOnPaste: 'insert_only_text'
    };

    const handleBlur = (newContent) => {
        if (newContent.indexOf('<p>') === -1) {
            handleRTEChange('');
        } else {
            handleRTEChange(newContent)
        }
    }

    return (
        <div className={`${isInvalid ? 'editor-error' : ''} jodit-editor-wrapper`}>
            <JoditEditor
                ref={editor}
                value={currentContent}
                config={config}
                onBlur={handleBlur} // preferred to use only this option to update the content for performance reasons
                onChange={newContent => { }}
                name="postContent"
            />
        </div>
    );
}

RichTextEditor.propTypes = {
    currentContent: PropTypes.string,
    handleRTEChange: PropTypes.func.isRequired,
    isInvalid: PropTypes.bool.isRequired,
};

export default RichTextEditor;