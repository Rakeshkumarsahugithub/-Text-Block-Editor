
// import {
//   ToggleButtonGroup,
//   ToggleButton,
//   IconButton,
//   Tooltip,
//   Divider,
// } from '@mui/material';
// import {
//   FormatBold,
//   FormatItalic,
//   FormatUnderlined,
//   FormatListBulleted,
//   FormatListNumbered,
//   Code,
//   FormatQuote,
//   HorizontalRule,
//   Undo,
//   Redo,
//   Image as ImageIcon,
// } from '@mui/icons-material';

// export default function Toolbar({ editor }) {
//   if (!editor) return null;

//   const isActive = (type, options = {}) => editor.isActive(type, options);

//   return (
//     <div
//       style={{
//         padding: '8px',
//         display: 'flex',
//         flexWrap: 'wrap',
//         gap: '8px',
//         borderBottom: '1px solid #ccc',
//         backgroundColor: 'var(--toolbar-bg)',
//       }}
//     >
//       <ToggleButtonGroup exclusive size="small">
//         {[1, 2, 3].map((level) => (
//           <ToggleButton
//             key={level}
//             value={`h${level}`}
//             selected={isActive('heading', { level })}
//             onClick={() =>
//               editor.chain().focus().toggleHeading({ level }).run()
//             }
//           >
//             H{level}
//           </ToggleButton>
//         ))}
//       </ToggleButtonGroup>

//       <Divider orientation="vertical" flexItem />

//       <Tooltip title="Bold">
//         <IconButton
//           onClick={() => editor.chain().focus().toggleBold().run()}
//           color={isActive('bold') ? 'primary' : 'default'}
//         >
//           <FormatBold />
//         </IconButton>
//       </Tooltip>

//       <Tooltip title="Italic">
//         <IconButton
//           onClick={() => editor.chain().focus().toggleItalic().run()}
//           color={isActive('italic') ? 'primary' : 'default'}
//         >
//           <FormatItalic />
//         </IconButton>
//       </Tooltip>

//       <Tooltip title="Underline">
//         <IconButton
//           onClick={() => editor.chain().focus().toggleUnderline().run()}
//           color={isActive('underline') ? 'primary' : 'default'}
//         >
//           <FormatUnderlined />
//         </IconButton>
//       </Tooltip>

//       <Tooltip title="Bullet List">
//         <IconButton
//           onClick={() => editor.chain().focus().toggleBulletList().run()}
//           color={isActive('bulletList') ? 'primary' : 'default'}
//         >
//           <FormatListBulleted />
//         </IconButton>
//       </Tooltip>

//       <Tooltip title="Ordered List">
//         <IconButton
//           onClick={() => editor.chain().focus().toggleOrderedList().run()}
//           color={isActive('orderedList') ? 'primary' : 'default'}
//         >
//           <FormatListNumbered />
//         </IconButton>
//       </Tooltip>

//       <Tooltip title="Code Block">
//         <IconButton
//           onClick={() => editor.chain().focus().toggleCodeBlock().run()}
//           color={isActive('codeBlock') ? 'primary' : 'default'}
//         >
//           <Code />
//         </IconButton>
//       </Tooltip>

//       <Tooltip title="Blockquote">
//         <IconButton
//           onClick={() => editor.chain().focus().toggleBlockquote().run()}
//           color={isActive('blockquote') ? 'primary' : 'default'}
//         >
//           <FormatQuote />
//         </IconButton>
//       </Tooltip>

//       <Tooltip title="Horizontal Rule">
//         <IconButton
//           onClick={() => editor.chain().focus().setHorizontalRule().run()}
//         >
//           <HorizontalRule />
//         </IconButton>
//       </Tooltip>

//       <Tooltip title="Undo">
//         <IconButton onClick={() => editor.chain().focus().undo().run()}>
//           <Undo />
//         </IconButton>
//       </Tooltip>

//       <Tooltip title="Redo">
//         <IconButton onClick={() => editor.chain().focus().redo().run()}>
//           <Redo />
//         </IconButton>
//       </Tooltip>

//       <Tooltip title="Insert Image">
//         <IconButton component="label">
//           <ImageIcon />
//           <input
//             type="file"
//             accept="image/*"
//             hidden
//             onChange={(e) => {
//               const file = e.target.files?.[0];
//               if (!file) return;
//               const reader = new FileReader();
//               reader.onload = () => {
//                 editor.chain().focus().setImage({ src: reader.result }).run();
//               };
//               reader.readAsDataURL(file);
//             }}
//           />
//         </IconButton>
//       </Tooltip>
//     </div>
//   );
// }
// import React from 'react';

// export default function Toolbar({ editor }) {
//   if (!editor) return null;

//   return (
//     <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
//       <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>H1</button>
//       <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>H2</button>
//       <button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>H3</button>
//       <button onClick={() => editor.chain().focus().toggleBold().run()}>Bold</button>
//       <button onClick={() => editor.chain().focus().toggleItalic().run()}>Italic</button>
//       <button onClick={() => editor.chain().focus().toggleUnderline().run()}>Underline</button>
//       <button onClick={() => editor.chain().focus().toggleCodeBlock().run()}>Code</button>
//       <button onClick={() => editor.chain().focus().toggleBulletList().run()}>Bullet</button>
//       <button onClick={() => editor.chain().focus().toggleOrderedList().run()}>Number</button>
//       <button onClick={() => editor.chain().focus().toggleBlockquote().run()}>Quote</button>
//       <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>HR</button>
//       <button onClick={() => editor.chain().focus().undo().run()}>Undo</button>
//       <button onClick={() => editor.chain().focus().redo().run()}>Redo</button>
//       <button onClick={() => {
//         const url = prompt('Enter URL');
//         if (url) {
//           editor.chain().focus().setLink({ href: url }).run();
//         }
//       }}>Link</button>
//       <input
//         type="file"
//         accept="image/*"
//         onChange={(e) => {
//           const file = e.target.files[0];
//           if (!file) return;
//           const reader = new FileReader();
//           reader.onload = () => {
//             editor.chain().focus().setImage({ src: reader.result }).run();
//           };
//           reader.readAsDataURL(file);
//         }}
//       />
//     </div>
//   );
// }

import React from 'react';
import {
  Box,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
  IconButton,
} from '@mui/material';
import { Image as ImageIcon, DarkMode, LightMode, Link as LinkIcon } from '@mui/icons-material';

export default function Toolbar({ editor, darkMode, setDarkMode }) {
  if (!editor) return null;

  const addImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      editor.chain().focus().setImage({ src: reader.result }).run();
    };
    reader.readAsDataURL(file);
  };

  const setLink = () => {
    const url = prompt('Enter URL');
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid',
        borderColor: 'divider',
        pb: 1,
        gap: 2,
      }}
    >
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, alignItems: 'center' }}>
        <ToggleButtonGroup exclusive size="small">
          {[1, 2, 3].map((level) => (
            <ToggleButton
              key={level}
              value={`h${level}`}
              onClick={() =>
                editor.chain().focus().toggleHeading({ level }).run()
              }
            >
              H{level}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>

        <Button onClick={() => editor.chain().focus().toggleBold().run()}>Bold</Button>
        <Button onClick={() => editor.chain().focus().toggleItalic().run()}>Italic</Button>
        <Button onClick={() => editor.chain().focus().toggleUnderline().run()}>
          Underline
        </Button>
        <Button onClick={() => editor.chain().focus().toggleBulletList().run()}>
          Bullet
        </Button>
        <Button onClick={() => editor.chain().focus().toggleOrderedList().run()}>
          Number
        </Button>
        <Button onClick={() => editor.chain().focus().toggleCodeBlock().run()}>
          Code
        </Button>
        <Button onClick={() => editor.chain().focus().toggleBlockquote().run()}>
          Quote
        </Button>
        <Button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
          HR
        </Button>
        <Button onClick={() => editor.chain().focus().undo().run()}>Undo</Button>
        <Button onClick={() => editor.chain().focus().redo().run()}>Redo</Button>

        <Tooltip title="Add Link">
          <IconButton onClick={setLink}>
            <LinkIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Upload Image">
          <IconButton component="label">
            <input type="file" hidden accept="image/*" onChange={addImage} />
            <ImageIcon />
          </IconButton>
        </Tooltip>
      </Box>

    
    </Box>
  );
}




