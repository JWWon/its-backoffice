import { convertFromRaw, convertToRaw, EditorState } from 'draft-js';

const EDITOR = 'editor/EDITOR';

export const saveState = (type: string, editorState: EditorState) => {
  if (typeof localStorage === 'undefined') {
    return null;
  }
  localStorage.setItem(
    EDITOR,
    JSON.stringify({ [type]: convertToRaw(editorState.getCurrentContent()) })
  );
  return true;
};

export const loadState = (type: string) => {
  if (typeof localStorage === 'undefined') {
    return null;
  }

  const editor = localStorage.getItem(EDITOR);
  if (!editor) {
    return null;
  }

  try {
    const editorState = JSON.parse(editor)[type];
    return convertFromRaw(editorState);
  } catch (e) {
    return null;
  }
};

export const deleteState = (type: string) => {
  if (typeof localStorage === 'undefined') {
    return null;
  }

  localStorage.setItem(EDITOR, JSON.stringify({ [type]: null }));
  return true;
};
