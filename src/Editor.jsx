
import React, { useState } from 'react';
import { Box, Typography, Button, IconButton, Tooltip } from '@mui/material';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Image from '@tiptap/extension-image';
import HorizontalRule from '@tiptap/extension-horizontal-rule';
import CodeBlock from '@tiptap/extension-code-block';
import Link from '@tiptap/extension-link';
import Dropcursor from '@tiptap/extension-dropcursor';
import { marked } from 'marked';
import Toolbar from './Toolbar';
import { DarkMode, LightMode } from '@mui/icons-material';

export default function Editor({ darkMode, setDarkMode }) {
  const [showHTML, setShowHTML] = useState(false);
  const [showJSON, setShowJSON] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({ codeBlock: false }),
      CodeBlock,
      Underline,
      Image,
      HorizontalRule,
      Link,
      Dropcursor,
      marked,
    ],
    content: '<p>Rakesh Tiptap Text Block Editor</p>',
  });

  return (
    <Box sx={{ p: 2, maxWidth: 1000, mx: 'auto' }}>
      {/* Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h4" component="div">
          📝 Tiptap Block Editor
        </Typography>
        <Tooltip title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
          <IconButton onClick={() => setDarkMode((prev) => !prev)}>
            {darkMode ? <LightMode /> : <DarkMode />}
          </IconButton>
        </Tooltip>
      </Box>

      <Toolbar editor={editor} />

      <Box
        sx={{
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 2,
          p: 2,
          minHeight: '300px',
          mt: 2,
          bgcolor: 'background.paper',
        }}
      >
        <EditorContent editor={editor} />
      </Box>

      <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
        <Button onClick={() => setShowHTML(!showHTML)} variant="outlined">
          Toggle HTML
        </Button>
        <Button onClick={() => setShowJSON(!showJSON)} variant="outlined">
          Toggle JSON
        </Button>
      </Box>

      {(showHTML || showJSON) && (
        <Box
          sx={{
            bgcolor: 'background.default',
            borderRadius: 1,
            p: 2,
            mt: 2,
            whiteSpace: 'pre-wrap',
            fontFamily: 'monospace',
          }}
        >
          {showHTML && <div>{editor?.getHTML()}</div>}
          {showJSON && <pre>{JSON.stringify(editor?.getJSON(), null, 2)}</pre>}
        </Box>
      )}
    </Box>
  );
}


