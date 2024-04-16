# @astrum-ui/core

A collection of React UI components, providing versatile and customizable solutions for front-end development.

## Installation

To access the complete suite of components:

```
npm install --save @astrum-ui/core
```

or install [components](#alternatively-install-individual-components-separately) seperately

## Usage

```jsx
import { Modal } from @astrum-ui/core
import { useState } from 'react'

export default function HelloModal() {
 const [show, setShow] = useState(false)

 return (
  <>
	 <Modal show={show} setShow={setShow} >
          <h2>Hello world - heading</h2>
	  <div>Hello world - content</div>
	 </Modal>

	 <button type="button" onClick={() => setShow(true)} >
		Show Modal
	 </button>
  </>
 )
}

```

#### More examples

- Modal
  - [Sign-in form modal](https://stackblitz.com/edit/vitejs-vite-qdmdsg?file=src%2Fcomponents%2Fmodal%2FSignInModal.tsx)
- Paginate
  - [Blog cards](https://stackblitz.com/edit/vitejs-vite-qdmdsg?file=src%2Fpages%2FBlogs.tsx)

##### Alternatively, install individual components separately:

- [Modal](https://www.npmjs.com/package/@astrum-ui/modal)
- [Paginate](https://www.npmjs.com/package/@astrum-ui/paginate)

Explore more components soon to be unveiled!
